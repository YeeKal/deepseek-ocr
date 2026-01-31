"use client";

import { useEffect, useRef, useState } from "react";
import { GOOGLE_ADSENSE_ID, ADSENSE_CONFIG } from "@/lib/constants";

interface AdsenseUnitProps {
  slot: string;
  style?: React.CSSProperties;
  layout?: string;
  format?: "auto" | "vertical" | "horizontal" | "rectangle" | "fluid";
  responsive?: boolean;
  className?: string;
  /**
   * 是否使用自适应广告
   * - true: 自适应，根据容器自动选择最佳尺寸
   * - false: 固定尺寸，使用 style 中指定的宽高
   */
  autoSize?: boolean;
}

/**
 * Google AdSense 广告单元组件
 * 
 * 特性：
 * - 自适应广告：根据容器自动调整最佳尺寸
 * - 延迟加载：避免影响首屏性能
 * - 支持多种广告格式：vertical, horizontal, rectangle, fluid
 * 
 * 使用示例:
 * <AdsenseUnit 
 *   slot="1234567890" 
 *   format="vertical"
 *   style={{ width: "160px", height: "600px" }}
 * />
 */
export function AdsenseUnit({
  slot,
  style,
  layout,
  format = "auto",
  responsive = true,
  className = "",
  autoSize = true,
}: AdsenseUnitProps) {
  const adRef = useRef<HTMLModElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 确保只在客户端执行
    if (typeof window === "undefined") return;
    
    // 如果未配置 AdSense ID，不加载广告
    if (!GOOGLE_ADSENSE_ID) {
      console.warn("Google AdSense ID not configured in constants.ts");
      return;
    }

    // 延迟加载广告，避免影响首屏
    const timer = setTimeout(() => {
      const adsbygoogle = (window as any).adsbygoogle;
      if (!adsbygoogle) {
        console.warn("Google AdSense script not loaded yet");
        return;
      }

      try {
        adsbygoogle.push({});
        setIsLoaded(true);
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }, ADSENSE_CONFIG.LOAD_DELAY);

    return () => clearTimeout(timer);
  }, []);

  // 如果未配置 AdSense ID，渲染占位符（用于开发环境）
  if (!GOOGLE_ADSENSE_ID || !ADSENSE_CONFIG.ENABLED) {
    return (
      <div 
        className={`bg-muted/30 border-2 border-dashed border-muted-foreground/20 flex items-center justify-center text-muted-foreground/50 text-xs ${className}`}
        style={style}
      >
        Ad Placeholder
      </div>
    );
  }

  return (
    <ins
      ref={adRef}
      className={`adsbygoogle ${className}`}
      style={{
        display: "block",
        ...style,
      }}
      data-ad-client={GOOGLE_ADSENSE_ID}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
      data-ad-layout={layout}
    />
  );
}

/**
 * 断点到 Tailwind 类名的映射
 */
const breakpointClasses: Record<string, string> = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl",
};

/**
 * 摩天大楼广告 - 两侧悬浮竖放广告
 * 
 * 尺寸：自适应垂直广告
 * - 桌面端显示：160x600 或 300x600（根据可用空间自动选择）
 * - 格式：vertical（优先选择垂直尺寸）
 * - 显示断点：通过 ADSENSE_CONFIG.SKYSCRAPER_BREAKPOINT 配置 (默认 xl: 1280px)
 */
export function AdsenseSkyscraper({
  slot,
  position = "left",
}: {
  slot: string;
  position?: "left" | "right";
}) {
  if (!slot) return null;

  // 使用配置的断点，默认为 xl
  const breakpoint = breakpointClasses[ADSENSE_CONFIG.SKYSCRAPER_BREAKPOINT] || "xl";
  const visibilityClass = `hidden ${breakpoint}:block`;

  return (
    <div
      className={`${visibilityClass} fixed top-1/2 -translate-y-1/2 z-40 ${
        position === "left" ? "left-4" : "right-4"
      }`}
      style={{ width: "160px", height: "600px" }}
    >
      <AdsenseUnit
        slot={slot}
        format="vertical"
        responsive={true}
        style={{ width: "100%", height: "100%" }}
        className="w-full h-full"
      />
    </div>
  );
}

/**
 * 横幅广告 - 页头/页脚广告
 * 
 * 尺寸：自适应水平广告
 * - 桌面端：728x90 或 970x90
 * - 移动端：320x50 或 320x100
 * - 格式：horizontal（优先选择水平尺寸）
 */
export function AdsenseBanner({
  slot,
  className = "",
  minHeight = 90,
}: {
  slot: string;
  className?: string;
  minHeight?: number;
}) {
  if (!slot) return null;

  return (
    <div style={{ minHeight: `${minHeight}px` }} className={className}>
      <AdsenseUnit
        slot={slot}
        format="horizontal"
        responsive={true}
        style={{ width: "100%", minHeight: `${minHeight}px` }}
        className="w-full"
      />
    </div>
  );
}

/**
 * 矩形广告 - 内容区广告
 * 
 * 尺寸：自适应矩形广告
 * - 尺寸选项：300x250, 336x280, 或根据容器自适应
 * - 格式：rectangle（优先选择矩形尺寸）
 * - 适合：内容区域内嵌
 */
export function AdsenseRectangle({
  slot,
  className = "",
  maxWidth = 336,
}: {
  slot: string;
  className?: string;
  maxWidth?: number;
}) {
  if (!slot) return null;

  return (
    <div 
      style={{ maxWidth: `${maxWidth}px`, margin: "0 auto" }} 
      className={className}
    >
      <AdsenseUnit
        slot={slot}
        format="rectangle"
        responsive={true}
        style={{ width: "100%", minHeight: "250px" }}
        className="w-full"
      />
    </div>
  );
}

/**
 * 信息流广告 - 自动适应内容流
 */
export function AdsenseInFeed({
  slot,
  className = "",
}: {
  slot: string;
  className?: string;
}) {
  return (
    <AdsenseUnit
      slot={slot}
      style={{
        display: "block",
      }}
      format="fluid"
      layout="in-article"
      responsive={true}
      className={className}
    />
  );
}

/**
 * 文章内嵌广告
 */
export function AdsenseInArticle({
  slot,
  className = "",
}: {
  slot: string;
  className?: string;
}) {
  return (
    <AdsenseUnit
      slot={slot}
      style={{
        display: "block",
        textAlign: "center",
      }}
      format="fluid"
      layout="in-article"
      responsive={true}
      className={className}
    />
  );
}
