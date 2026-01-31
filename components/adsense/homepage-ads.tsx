"use client";

import { AdsenseSkyscraper, AdsenseBanner, AdsenseRectangle } from "./adsense-unit";
import { ADSENSE_SLOTS } from "@/lib/constants";

/**
 * 首页广告位组件
 * 
 * 所有广告位配置在 lib/constants.ts 中的 ADSENSE_SLOTS 对象中定义
 * 请在 Google AdSense 后台创建广告单元后，将 slot ID 填入 constants.ts
 * 
 * 广告位规划：
 * 1. 两侧摩天大楼 (160x600/300x600) - 自适应垂直广告
 * 2. 顶部横幅 (728x90/970x90) - 自适应水平广告  
 * 3. 底部横幅 (728x90/970x90) - 自适应水平广告
 * 4. 内容区矩形 (300x250/336x280) - 自适应矩形广告
 */

/**
 * 首页两侧摩天大楼悬浮广告
 * 
 * 特性：
 * - 仅在桌面端 (xl breakpoint: 1280px+) 显示
 * - 固定在视口两侧，垂直居中
 * - 使用自适应垂直广告 (格式: vertical)
 * - 尺寸：160x600 或 300x600 (自动选择最佳)
 * - 响应式：会尝试填充可用空间
 */
export function HomepageSkyscrapers() {
  // 如果没有配置广告位 ID，不显示
  if (!ADSENSE_SLOTS.HOMEPAGE_SKYSCRAPER_LEFT && !ADSENSE_SLOTS.HOMEPAGE_SKYSCRAPER_RIGHT) {
    return null;
  }

  return (
    <>
      {/* 左侧摩天大楼 */}
      {ADSENSE_SLOTS.HOMEPAGE_SKYSCRAPER_LEFT && (
        <AdsenseSkyscraper
          slot={ADSENSE_SLOTS.HOMEPAGE_SKYSCRAPER_LEFT}
          position="left"
        />
      )}
      
      {/* 右侧摩天大楼 */}
      {ADSENSE_SLOTS.HOMEPAGE_SKYSCRAPER_RIGHT && (
        <AdsenseSkyscraper
          slot={ADSENSE_SLOTS.HOMEPAGE_SKYSCRAPER_RIGHT}
          position="right"
        />
      )}
    </>
  );
}

/**
 * 首页顶部横幅广告
 * 
 * 位置：Hero 区域下方
 * 格式：horizontal (自适应水平广告)
 * 尺寸：728x90 (桌面) / 320x50 (移动)
 */
export function HomepageTopBanner() {
  if (!ADSENSE_SLOTS.HOMEPAGE_BANNER_TOP) return null;

  return (
    <div className="w-full bg-muted/50 py-4">
      <AdsenseBanner
        slot={ADSENSE_SLOTS.HOMEPAGE_BANNER_TOP}
        className="max-w-[970px] mx-auto"
        minHeight={90}
      />
    </div>
  );
}

/**
 * 首页底部横幅广告
 * 
 * 位置：Footer 上方
 * 格式：horizontal (自适应水平广告)
 * 尺寸：728x90 (桌面) / 320x50 (移动)
 */
export function HomepageBottomBanner() {
  if (!ADSENSE_SLOTS.HOMEPAGE_BANNER_BOTTOM) return null;

  return (
    <div className="w-full bg-muted/50 py-4 mt-8">
      <AdsenseBanner
        slot={ADSENSE_SLOTS.HOMEPAGE_BANNER_BOTTOM}
        className="max-w-[970px] mx-auto"
        minHeight={90}
      />
    </div>
  );
}

/**
 * Playground 区域广告
 * 
 * 位置：Demo 和 Usage 之间
 * 格式：rectangle (自适应矩形广告)
 * 尺寸：300x250 或 336x280
 */
export function PlaygroundInlineAd() {
  if (!ADSENSE_SLOTS.HOMEPAGE_PLAYGROUND_INLINE) return null;

  return (
    <div className="w-full py-8 px-4">
      <AdsenseRectangle
        slot={ADSENSE_SLOTS.HOMEPAGE_PLAYGROUND_INLINE}
        maxWidth={728}
      />
    </div>
  );
}

/**
 * Tools 区域广告
 * 
 * 位置：ToolsSection 上方
 * 格式：rectangle (自适应矩形广告)
 * 尺寸：300x250 或 336x280
 */
export function ToolsInlineAd() {
  if (!ADSENSE_SLOTS.HOMEPAGE_TOOLS_INLINE) return null;

  return (
    <div className="w-full py-8 px-4">
      <AdsenseRectangle
        slot={ADSENSE_SLOTS.HOMEPAGE_TOOLS_INLINE}
        maxWidth={336}
      />
    </div>
  );
}

/**
 * 工具页广告组件
 * 
 * @param position - 广告位置: top (顶部), bottom (底部), inline (中部)
 */
export function ToolPageAds({ position }: { position: "top" | "bottom" | "inline" }) {
  const slotMap = {
    top: ADSENSE_SLOTS.TOOL_BANNER_TOP,
    bottom: ADSENSE_SLOTS.TOOL_BANNER_BOTTOM,
    inline: ADSENSE_SLOTS.TOOL_INLINE,
  };

  const slot = slotMap[position];
  if (!slot) return null;

  // 顶部和底部使用横幅，中部使用矩形
  const isBanner = position === "top" || position === "bottom";

  return (
    <div className={`w-full ${position === "inline" ? "py-6" : "py-4"} px-4`}>
      {isBanner ? (
        <AdsenseBanner slot={slot} className="max-w-[728px] mx-auto" />
      ) : (
        <AdsenseRectangle slot={slot} maxWidth={336} />
      )}
    </div>
  );
}
