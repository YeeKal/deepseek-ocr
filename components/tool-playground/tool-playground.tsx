"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";
import { ImageUpload } from "@/components/tool-playground/image-upload";
import { ResultDisplay } from "@/components/tool-playground/result-display";
import { THEME_COLOR } from "@/lib/constants";
import type { OCRResult } from "@/lib/types";
import { PLAYGROUND_SECTION_ID } from "@/lib/constants";
import type { ToolConfig } from "@/lib/config/tool-types";

type PlaygroundProps = ToolConfig["playground"];

export interface ToolPlaygroundProps {
    playground: PlaygroundProps;
}

export function ToolPlayground({ playground }: ToolPlaygroundProps) {
    const t = useTranslations("common.toolPlayground.main");
    const [imageSource, setImageSource] = useState<{
        type: "url" | "base64";
        value: string;
    } | null>(null);
    const [fileType, setFileType] = useState<"image" | "pdf">("image");
    const [isProcessing, setIsProcessing] = useState(false);
    const [result, setResult] = useState<OCRResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    // --- Turnstile State ---
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
    const [turnstileLoaded, setTurnstileLoaded] = useState<boolean>(false);

    // Load Turnstile script and auto-render widget
    useEffect(() => {
        if (typeof window !== "undefined") {
            if (typeof window.turnstile !== "undefined") {
                setTurnstileLoaded(true);
                renderTurnstile();
                return;
            }

            if (
                document.querySelector(
                    'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]',
                )
            ) {
                const checkInterval = setInterval(() => {
                    if (typeof window.turnstile !== "undefined") {
                        clearInterval(checkInterval);
                        setTurnstileLoaded(true);
                        renderTurnstile();
                    }
                }, 100);

                const timeout = setTimeout(() => {
                    clearInterval(checkInterval);
                    setTurnstileLoaded(false);
                }, 5000);

                return () => {
                    clearInterval(checkInterval);
                    clearTimeout(timeout);
                };
            }

            const script = document.createElement("script");
            script.src =
                "https://challenges.cloudflare.com/turnstile/v0/api.js";
            script.async = true;
            script.defer = true;

            const timeout = setTimeout(() => {
                console.error("Turnstile script load timeout");
                setTurnstileLoaded(false);
            }, 5000);

            script.onload = () => {
                clearTimeout(timeout);
                setTurnstileLoaded(true);
                renderTurnstile();
            };

            script.onerror = () => {
                clearTimeout(timeout);
                console.error("Turnstile script failed to load");
                setTurnstileLoaded(false);
            };

            document.head.appendChild(script);

            return () => {
                clearTimeout(timeout);
                if (script.parentNode) {
                    document.head.removeChild(script);
                }
            };
        }
    }, []);

    const renderTurnstile = () => {
        if (
            typeof window === "undefined" ||
            typeof window.turnstile === "undefined"
        )
            return;

        const container = document.getElementById("turnstile-widget");
        if (!container) return;

        container.innerHTML = "";

        try {
            window.turnstile.render("#turnstile-widget", {
                sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
                size: "flexible",
                callback: (token: string) => {
                    console.log("Turnstile verified");
                    setTurnstileToken(token);
                },
                "expired-callback": () => {
                    console.log("Turnstile expired, refreshing");
                    setTurnstileToken(null);
                    renderTurnstile();
                },
                "error-callback": () => {
                    console.error("Turnstile error");
                    setTurnstileToken(null);
                },
            });
        } catch (error) {
            console.error("Error rendering Turnstile widget:", error);
        }
    };

    // Auto-detect file type when image source changes (for URL)
    useEffect(() => {
        if (imageSource?.type === "url" && imageSource.value) {
            // Detect from URL
            const url = imageSource.value.toLowerCase();
            if (url.includes(".pdf") || url.includes("%2epdf")) {
                setFileType("pdf");
            } else {
                setFileType("image");
            }
        }
    }, [imageSource]);

    // Handle file type change from ImageUpload component
    const handleFileTypeChange = (detectedType: "image" | "pdf") => {
        setFileType(detectedType);
    };

    const handleProcess = async () => {
        if (!imageSource) {
            handleError(t("errors.uploadFirst"));
            return;
        }

        if (isProcessing || !turnstileToken) {
            handleError(t("errors.verificationRequired"));
            return;
        }

        handleProcessWithToken(turnstileToken);
    };

    const handleProcessWithToken = async (token: string) => {
        setTurnstileToken(null);

        setIsProcessing(true);
        setError(null);
        setResult(null);

        try {
            const response = await fetch("/api/ocr/paddleocrvl", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fileBase64:
                        imageSource?.type === "base64"
                            ? imageSource.value
                            : undefined,
                    fileUrl:
                        imageSource?.type === "url"
                            ? imageSource.value
                            : undefined,
                    fileType: fileType,
                    turnstileToken: token,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to process file");
            }

            const data = await response.json();

            // Fetch and parse JSONL from returned URL
            console.log("before fetch");
            //
            const jsonlResponse = await fetch(data.jsonlUrl, {
                headers: {
                    Accept: "application/json, text/plain, */*",
                },
            });
            console.log("after fetch");
            if (!jsonlResponse.ok) {
                throw new Error(
                    `Failed to fetch results, status: ${jsonlResponse.status}`,
                );
            }

            const jsonlText = await jsonlResponse.text();
            console.log("after text");

            const lines = jsonlText
                .trim()
                .split("\n")
                .filter((line: string) => line.trim());

            if (lines.length === 0) {
                throw new Error("No results found in response");
            }

            const firstLine = JSON.parse(lines[0]);
            const layoutResults = firstLine?.result?.layoutParsingResults;

            if (
                !layoutResults ||
                !Array.isArray(layoutResults) ||
                layoutResults.length === 0
            ) {
                throw new Error("No layout results found");
            }

            const resultPage = layoutResults[0];
            const replaceMarkdownImagePaths = (
                text: string,
                imageMap: Record<string, string>,
            ) => {
                return text.replace(
                    /(<img\s[^>]*?\bsrc\s*=\s*["'])([^"']+)(["'][^>]*>)/gi,
                    (match, pre, srcValue, post) => {
                        const newUrl = imageMap[srcValue];
                        return newUrl ? `${pre}${newUrl}${post}` : match;
                    },
                );
            };

            const ocrResult: OCRResult = {
                text_content: replaceMarkdownImagePaths(
                    resultPage.markdown?.text || "",
                    resultPage.markdown?.images || {},
                ),
                visualization_b64: resultPage.outputImages?.layout_order_res,
                delayTime: data.delayTime,
                executionTime: data.executionTime,
            };
            setResult(ocrResult);
            setIsProcessing(false);

            // Token is consumed, refresh for next use
            setTurnstileToken(null);
            renderTurnstile();
        } catch (err) {
            setIsProcessing(false);
            // Refresh token on error so user can retry
            setTurnstileToken(null);
            renderTurnstile();
            handleError(
                err instanceof Error
                    ? err.message
                    : "An unexpected error occurred",
            );
        }
    };

    const [showErrorDialog, setShowErrorDialog] = useState(false);

    const handleError = (errorMessage: string) => {
        setError(errorMessage);
        setShowErrorDialog(true);
    };

    return (
        <>
            <section
                id={PLAYGROUND_SECTION_ID}
                className="min-h-screen px-4 py-20"
            >
                <div className="max-w-7xl mx-auto space-y-8">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            {" "}
                            {playground.title}
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            {playground.description}
                        </p>

                        <div className="flex items-center justify-center gap-2 md:gap-4 mt-4 text-sm">
                            <div className="inline-flex items-center px-2 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full shadow-lg">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span className="font-semibold">
                                    {t("features.unlimited")}
                                </span>
                            </div>
                            <div className="inline-flex items-center px-2 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                                <span className="font-semibold">
                                    {t("features.noLogin")}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                        <Card className="p-6 space-y-4">
                            <div className="space-y-4">
                                <ImageUpload
                                    onImageChange={setImageSource}
                                    onFileTypeChange={handleFileTypeChange}
                                    exampleImages={playground.exampleImages}
                                />

                                {/* File Type Selection */}
                                <div className="flex items-center gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold uppercase tracking-wider block">
                                            {t("fileType.label")}
                                        </label>
                                    </div>
                                    <div className="flex flex-1 flex-row justify-center space-x-6">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="fileType"
                                                value="image"
                                                checked={fileType === "image"}
                                                onChange={() =>
                                                    setFileType("image")
                                                }
                                                className="h-4 w-4 text-primary focus:ring-primary"
                                            />
                                            <span className="text-sm font-medium">
                                                {t("fileType.image")}
                                            </span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="fileType"
                                                value="pdf"
                                                checked={fileType === "pdf"}
                                                onChange={() =>
                                                    setFileType("pdf")
                                                }
                                                className="h-4 w-4 text-primary focus:ring-primary"
                                            />
                                            <span className="text-sm font-medium">
                                                {t("fileType.pdf")}
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <button
                                    onClick={handleProcess}
                                    disabled={
                                        !imageSource ||
                                        isProcessing ||
                                        !turnstileToken
                                    }
                                    className="w-full py-3 px-4 rounded-lg font-medium text-sm bg-primary text-primary-foreground transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    style={{
                                        backgroundColor: THEME_COLOR.PRIMARY,
                                        color: "white",
                                    }}
                                >
                                    {isProcessing
                                        ? t("buttons.processing")
                                        : !turnstileToken
                                          ? t("buttons.verifying")
                                          : t("buttons.extract")}
                                </button>

                                {/* Turnstile widget below button */}
                                <div className="flex justify-center py-2">
                                    <div id="turnstile-widget"></div>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <ResultDisplay
                                result={result}
                                error={error}
                                isProcessing={isProcessing}
                                guide={playground.guide}
                            />
                        </Card>
                    </div>
                </div>
            </section>

            {/* Error Dialog */}
            {showErrorDialog && error && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-background rounded-lg p-6 max-w-md w-full mx-4">
                        <h3 className="text-xl font-semibold text-red-500 mb-4">
                            {t("errors.title")}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-6">
                            {error}
                        </p>
                        <div className="flex gap-3 justify-end">
                            {/* <button
                onClick={() => setShowErrorDialog(false)}
                className="px-4 py-2 text-sm border border-border rounded-md hover:bg-accent"
              >
                Cancel
              </button> */}
                            <button
                                onClick={() => {
                                    setShowErrorDialog(false);
                                }}
                                className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                            >
                                {t("errors.tryAgain")}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

// Window types for Turnstile
declare global {
    interface Window {
        turnstile: any;
    }
}
