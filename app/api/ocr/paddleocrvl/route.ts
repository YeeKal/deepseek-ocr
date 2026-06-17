// pages/api/parse-document.ts
import { type NextRequest, NextResponse } from "next/server";

import { JOB_URL, MaxUploadImageSize } from "@/lib/constants";
import { verifyTurnstileToken } from "@/lib/ocr/turnstile";

import { URL } from "url";
import { Buffer } from "buffer";

// 从环境变量中获取配置，更安全、更灵活
const API_TOKEN = process.env.BAIDU_AI_STUDIO_API_TOKEN;
// const API_URL = BAIDU_AI_STUDIO_API_URL;
const MAX_FILE_SIZE_BYTES = MaxUploadImageSize * 1024 * 1024; // 5 MB
const PP_MODEL = "PaddleOCR-VL-1.6";

export interface PageResult {
    pageNumber: number;
    processedMarkdown: string;
    layoutImageUrl?: string | null;
}

export type ApiInput = {
    fileUrl?: string; // Public URL of the file to be processed
    fileBase64?: string; // Base64 encoded string of the file
    fileType: "pdf" | "image"; // Type of the file: 'pdf' or 'image'
};

/**
 * Uses fetch to download file content from a URL and check its size.
 * @param url The public URL of the file.
 * @returns An object containing the file Buffer and filename.
 */
async function getFileContentFromUrlUsingFetch(
    url: string,
): Promise<{ fileBuffer: Buffer; filename: string }> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30_000); // 30-second timeout

    try {
        console.log(`Downloading file from URL using fetch: ${url}`);
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(
                `Failed to download file. Server responded with status: ${response.status}`,
            );
        }

        const arrayBuffer = await response.arrayBuffer();

        // Core validation: ensure file size does not exceed 5MB
        if (arrayBuffer.byteLength > MAX_FILE_SIZE_BYTES) {
            throw new Error(
                `Downloaded file size (${(arrayBuffer.byteLength / 1024 / 1024).toFixed(2)} MB) exceeds the 5 MB limit.`,
            );
        }

        const fileBuffer = Buffer.from(arrayBuffer);
        const path = new URL(url).pathname;
        const filename = path.split("/").pop() || "unknown_from_url";

        console.log(
            `Successfully downloaded file: ${filename} (${(fileBuffer.length / 1024).toFixed(2)} KB)`,
        );
        return { fileBuffer, filename };
    } catch (error) {
        clearTimeout(timeoutId);
        if (error instanceof Error) {
            if (error.name === "AbortError") {
                throw new Error(
                    `Could not download file from URL: ${url}. The request timed out after 30 seconds.`,
                );
            }
            throw new Error(
                `Could not download file from URL: ${url}. Reason: ${error.message}`,
            );
        }
        throw new Error(
            `An unknown error occurred while downloading file from URL: ${url}`,
        );
    }
}

/**
 * Creates a Buffer from a Base64 string and checks its size.
 * @param base64String The Base64 encoded string of the file.
 * @returns The file's Buffer.
 */
function getFileContentFromBase64(base64String: string): {
    fileBuffer: Buffer;
} {
    const fileBuffer = Buffer.from(base64String, "base64");

    // Core validation: ensure file size does not exceed 5MB
    if (fileBuffer.length > MAX_FILE_SIZE_BYTES) {
        throw new Error(
            `Provided Base64 file size (${(fileBuffer.length / 1024 / 1024).toFixed(2)} MB) exceeds the 5 MB limit.`,
        );
    }

    console.log(
        `Successfully processed Base64 input (${(fileBuffer.length / 1024).toFixed(2)} KB)`,
    );
    return { fileBuffer };
}

/**
 * Determines the file type code based on user input.
 * @returns 0 for PDF, 1 for Image.
 */
function getFileType(fileTypeInput: "pdf" | "image"): number {
    return fileTypeInput === "pdf" ? 0 : 1;
}

/**
 * Replaces local image paths in Markdown with absolute URLs.
 */
function replaceMarkdownImagePaths(
    markdownText: string,
    imageMap: Record<string, string>,
): string {
    return markdownText.replace(
        /(<img\s[^>]*?\bsrc\s*=\s*["'])([^"']+)(["'][^>]*>)/gi,
        (match, pre, srcValue, post) => {
            const newUrl = imageMap[srcValue];
            return newUrl ? `${pre}${newUrl}${post}` : match;
        },
    );
}

export async function POST(request: NextRequest) {
    const start = performance.now();

    if (!API_TOKEN) {
        console.error("Server configuration error: API_TOKEN  is missing.");
        return NextResponse.json(
            { error: "Server configuration error." },
            { status: 500 },
        );
    }

    try {
        // 1. Parse the request body
        const body = (await request.json()) as ApiInput & {
            turnstileToken?: string;
        };
        const { fileUrl, fileBase64, fileType, turnstileToken } = body;

        // 2. Verify Turnstile token
        if (!turnstileToken) {
            return NextResponse.json(
                { error: "Security verification required" },
                { status: 400 },
            );
        }

        const isValidToken = await verifyTurnstileToken(turnstileToken);
        if (!isValidToken) {
            return NextResponse.json(
                { error: "Invalid security verification" },
                { status: 400 },
            );
        }

        // 3. Strict input validation
        if (!fileUrl && !fileBase64) {
            return NextResponse.json(
                {
                    error: "Input error: Either 'fileUrl' or 'fileBase64' must be provided.",
                },
                { status: 400 },
            );
        }
        if (fileType !== "pdf" && fileType !== "image") {
            return NextResponse.json(
                {
                    error: "Input error: 'fileType' must be either 'pdf' or 'image'.",
                },
                { status: 400 },
            );
        }

        // 4. Submit job based on input type
        let jobResponse: Response;
        const end_loadfile = performance.now();

        if (fileUrl) {
            // URL Mode: send fileUrl directly in JSON
            const jobPayload = {
                fileUrl: fileUrl,
                model: PP_MODEL,
                optionalPayload: {
                    useDocOrientationClassify: false,
                    useDocUnwarping: false,
                    useChartRecognition: false,
                },
            };

            jobResponse = await fetch(JOB_URL, {
                method: "POST",
                headers: {
                    Authorization: `bearer ${API_TOKEN}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(jobPayload),
                signal: AbortSignal.timeout(30_000),
            });
        } else {
            // Base64 Mode: send as multipart form-data
            const { fileBuffer } = getFileContentFromBase64(fileBase64!);

            const formData = new FormData();

            const file = new File(
                [new Uint8Array(fileBuffer)],
                `upload.${fileType === "pdf" ? "pdf" : "jpg"}`,
                { type: fileType === "pdf" ? "application/pdf" : "image/jpeg" },
            );

            formData.append("file", file);
            formData.append("model", PP_MODEL);
            formData.append(
                "optionalPayload",
                JSON.stringify({
                    useDocOrientationClassify: false,
                    useDocUnwarping: false,
                    useChartRecognition: false,
                }),
            );

            jobResponse = await fetch(JOB_URL, {
                method: "POST",
                headers: {
                    Authorization: `bearer ${API_TOKEN}`,
                },
                body: formData,
                signal: AbortSignal.timeout(30_000),
            });
        }

        if (!jobResponse.ok) {
            const errorBody = await jobResponse.text();
            throw new Error(
                `Job submission failed with status ${jobResponse.status}: ${errorBody}`,
            );
        }

        const jobData = await jobResponse.json();
        const jobId = jobData?.data?.jobId;
        if (!jobId) {
            throw new Error("No jobId returned from API");
        }
        console.info(`Job submitted successfully. jobId: ${jobId}`);

        // 5. Poll for job completion
        let jsonlUrl = "";
        const pollTimeout = 120_000; // 2 minutes
        const pollInterval = 5_000; // 5 seconds
        const startPoll = performance.now();

        while (performance.now() - startPoll < pollTimeout) {
            const statusResponse = await fetch(`${JOB_URL}/${jobId}`, {
                headers: {
                    Authorization: `bearer ${API_TOKEN}`,
                },
            });

            if (!statusResponse.ok) {
                throw new Error(
                    `Job status check failed with status ${statusResponse.status}`,
                );
            }

            const statusData = await statusResponse.json();
            const state = statusData?.data?.state;

            if (state === "done") {
                jsonlUrl = statusData.data.resultUrl?.jsonUrl;
                console.info(`Job completed successfully`);
                console.info(`jsonlUrl: ${jsonlUrl}`);
                break;
            } else if (state === "failed") {
                const errorMsg = statusData.data?.errorMsg || "Unknown error";
                throw new Error(`Job failed: ${errorMsg}`);
            }
            await new Promise((resolve) => setTimeout(resolve, pollInterval));
        }

        if (!jsonlUrl) {
            throw new Error("Job did not complete within timeout");
        }

        const end_final = performance.now();

        console.info(`Job completed, returning jsonlUrl to frontend`);
        console.info(`Total cost: ${end_final - start} ms\n`);

        return NextResponse.json({
            jsonlUrl,
            delayTime: end_loadfile - start,
            executionTime: end_final - start,
        });
    } catch (error: any) {
        const errorMessage =
            error instanceof Error
                ? error.message
                : "An unexpected server error occurred.";
        console.error("[API_ERROR]:", errorMessage);
        console.error("jsonlUrl fetch error:", {
            message: error.message,
            cause: error.cause, // Node.js 底层网络错误
            code: error.cause?.code, // 比如 ECONNREFUSED / CERT_ERROR
        });
        // Return a 500 Internal Server Error response
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
