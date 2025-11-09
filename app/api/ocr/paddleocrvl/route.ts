// pages/api/parse-document.ts
import { type NextRequest, NextResponse } from "next/server"

import {BAIDU_AI_STUDIO_API_URL, MaxUploadImageSize} from '@/lib/constants';
import {verifyTurnstileToken} from '@/lib/ocr/turnstile';

import { URL } from 'url';
import { Buffer } from 'buffer';

// 从环境变量中获取配置，更安全、更灵活
const API_TOKEN = process.env.BAIDU_AI_STUDIO_API_TOKEN;
const API_URL = BAIDU_AI_STUDIO_API_URL;
const MAX_FILE_SIZE_BYTES = MaxUploadImageSize * 1024 * 1024; // 5 MB

export interface PageResult {
  pageNumber: number;
  processedMarkdown: string;
  layoutImageUrl?: string | null;
}

export type ApiInput = {
  fileUrl?: string;        // Public URL of the file to be processed
  fileBase64?: string;     // Base64 encoded string of the file
  fileType: 'pdf' | 'image'; // Type of the file: 'pdf' or 'image'
};

/**
 * Uses fetch to download file content from a URL and check its size.
 * @param url The public URL of the file.
 * @returns An object containing the file Buffer and filename.
 */
async function getFileContentFromUrlUsingFetch(url: string): Promise<{ fileBuffer: Buffer, filename: string }> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30_000); // 30-second timeout

    try {
        console.log(`Downloading file from URL using fetch: ${url}`);
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`Failed to download file. Server responded with status: ${response.status}`);
        }

        const arrayBuffer = await response.arrayBuffer();

        // Core validation: ensure file size does not exceed 5MB
        if (arrayBuffer.byteLength > MAX_FILE_SIZE_BYTES) {
            throw new Error(`Downloaded file size (${(arrayBuffer.byteLength / 1024 / 1024).toFixed(2)} MB) exceeds the 5 MB limit.`);
        }

        const fileBuffer = Buffer.from(arrayBuffer);
        const path = new URL(url).pathname;
        const filename = path.split('/').pop() || 'unknown_from_url';

        console.log(`Successfully downloaded file: ${filename} (${(fileBuffer.length / 1024).toFixed(2)} KB)`);
        return { fileBuffer, filename };
    } catch (error) {
        clearTimeout(timeoutId);
        if (error instanceof Error) {
            if (error.name === 'AbortError') {
                throw new Error(`Could not download file from URL: ${url}. The request timed out after 30 seconds.`);
            }
            throw new Error(`Could not download file from URL: ${url}. Reason: ${error.message}`);
        }
        throw new Error(`An unknown error occurred while downloading file from URL: ${url}`);
    }
}

/**
 * Creates a Buffer from a Base64 string and checks its size.
 * @param base64String The Base64 encoded string of the file.
 * @returns The file's Buffer.
 */
function getFileContentFromBase64(base64String: string): { fileBuffer: Buffer } {

    const fileBuffer = Buffer.from(base64String, 'base64');

    // Core validation: ensure file size does not exceed 5MB
    if (fileBuffer.length > MAX_FILE_SIZE_BYTES) {
        throw new Error(`Provided Base64 file size (${(fileBuffer.length / 1024 / 1024).toFixed(2)} MB) exceeds the 5 MB limit.`);
    }

    console.log(`Successfully processed Base64 input (${(fileBuffer.length / 1024).toFixed(2)} KB)`);
    return { fileBuffer };
   
}

/**
 * Determines the file type code based on user input.
 * @returns 0 for PDF, 1 for Image.
 */
function getFileType(fileTypeInput: 'pdf' | 'image'): number {
    return fileTypeInput === 'pdf' ? 0 : 1;
}

/**
 * Replaces local image paths in Markdown with absolute URLs.
 */
function replaceMarkdownImagePaths(
    markdownText: string,
    imageMap: Record<string, string>
): string {
    return markdownText.replace(
        /(<img\s[^>]*?\bsrc\s*=\s*["'])([^"']+)(["'][^>]*>)/gi,
        (match, pre, srcValue, post) => {
            const newUrl = imageMap[srcValue];
            return newUrl ? `${pre}${newUrl}${post}` : match;
        }
    );
}


export async function POST(request: NextRequest) {
    const start = performance.now();

    if (!API_TOKEN || !API_URL) {
        console.error("Server configuration error: API_TOKEN or API_URL is missing.");
        return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    try {
        // 1. Parse the request body
        const body = await request.json() as ApiInput & { turnstileToken?: string };
        const { fileUrl, fileBase64, fileType, turnstileToken } = body;

        // 2. Verify Turnstile token
        if (!turnstileToken) {
            return NextResponse.json(
                { error: "Security verification required" },
                { status: 400 }
            )
        }

        const isValidToken = await verifyTurnstileToken(turnstileToken)
        if (!isValidToken) {
            return NextResponse.json(
                { error: "Invalid security verification" },
                { status: 400 }
            )
        }

        // 3. Strict input validation
        if (!fileUrl && !fileBase64) {
            return NextResponse.json({ error: "Input error: Either 'fileUrl' or 'fileBase64' must be provided." }, { status: 400 });
        }
        if (fileType !== 'pdf' && fileType !== 'image') {
            return NextResponse.json({ error: "Input error: 'fileType' must be either 'pdf' or 'image'." }, { status: 400 });
        }

        // 4. Process input source to get the file buffer
        let fileBuffer: Buffer;
        if (fileUrl) {
            const result = await getFileContentFromUrlUsingFetch(fileUrl);
            fileBuffer = result.fileBuffer;
        } else {
            // fileBase64 is guaranteed to exist here by the validation above
            const result = getFileContentFromBase64(fileBase64!);
            fileBuffer = result.fileBuffer;
        }

        // 5. Prepare and send request to the external API
        const payload = {
            file: fileBuffer.toString('base64'),
            fileType: getFileType(fileType),
            useDocOrientationClassify: false,
            useDocUnwarping: false,
            useChartRecognition: false,
        };

        const end_loadfile = performance.now();

        console.info(`Load file:${end_loadfile - start} ms\nSending request to external Layout Parsing API...`);
        const apiResponse = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `token ${API_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
            signal: AbortSignal.timeout(120_000), // 120-second timeout
        });

        if (!apiResponse.ok) {
            const errorBody = await apiResponse.text();
            throw new Error(`External API request failed with status ${apiResponse.status}: ${errorBody}`);
        }

        const responseData = await apiResponse.json();
        console.info(`API request successful.`);

        // 5. Process and return the final results
        const layoutResults = responseData?.result?.layoutParsingResults;
        if (!layoutResults || !Array.isArray(layoutResults) || layoutResults.length === 0) {
            return NextResponse.json({ data: { message: 'No layout results found.', results: [] } });
        }
        
        const end_final = performance.now();

        const outputData: PageResult[] = layoutResults.map((resultPage: any, i: number) => ({
            pageNumber: i + 1,
            processedMarkdown: replaceMarkdownImagePaths(resultPage.markdown?.text || '', resultPage.markdown?.images || {}),
            layoutImageUrl: resultPage.outputImages?.layout_order_res,
            delayTime: end_loadfile - start,
            executionTime: end_final - start
        }));


        console.info(`Successfully processed and returning ${outputData.length} results.`);
        console.info(`Total cost:${end_final - start} ms\n`)
        return NextResponse.json(outputData.length > 0? outputData[0] : {
            pageNumber: 0,
            processedMarkdown: '',
            layoutImageUrl: null,
            delayTime: end_loadfile - start,
            executionTime: end_final - start
        });

    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unexpected server error occurred.';
        console.error("[API_ERROR]:", errorMessage);
        // Return a 500 Internal Server Error response
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}