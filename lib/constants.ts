export const DOMAIN_NAME = "deepseekocr.io";
export const LOGO_URL =   "https://cdn.deepseekocr.io/visual-logo/logo-gradient.svg"
export const BRAND_NAME = "Deepseek Ocr"
export const SUPPORT_EMAIL = "yee@deepseekocr.io"

export const GPU_API_URL = process.env.GPU_API_BASE_URL || 'https://fcebf0e7d6a5.ngrok-free.app';
export const BAIDU_AI_STUDIO_API_URL = `https://85q8t7p8g4t3r5r2.aistudio-app.com/layout-parsing`
export const BAIDU_AI_STUDIO_API_URL_PaddleOCR_VL_1_5 = "https://3af92ayfm0u1n3ka.aistudio-app.com/layout-parsing"
//  twcr onup vszt skue

export const DEFAULT_CREDITS = 20
export const MONTH_IN_MILLISECONDS = 30 * 24 * 60 * 60 * 1000;
export const  itemsPerPage = 28
export const MaxUploadImageSize = 5 ; // 5 MB
export const Megapixels = 1_000_000;
export const RUNPOD_MAX_EXECUTION_TIME = 3* 60; // 15 minutes in seconds
export const PLAYGROUND_SECTION_ID = "toolplayground"
export const HOW_TO_USE_SECTION_ID = "how-to-use"
export const DEFAULT_TOOL_COVER_IMAGE = "https://cdn.deepseekocr.io/tools/ai-ocr/ai-ocr-cover.webp"


export const SEO_DEFAULT =  {
    title: "Free DeepSeek-OCR: High-Accuracy Text & Table Extraction | DeepSeekOCR.io",
    description: "Experience DeepSeek-OCR, convert scanned notes, reports, and charts into editable text with incredible accuracy. Free to use, no sign-up required",
    keywords: [
      "deepseekocr",
      "deepseek ocr",
      "contexts optical compression",
      "efficient ocr",
      "document parsing",
      "vision language model",
      "long-context compression",
      "ocr api",
      "deepseek ocr paper"
    ],
    ogImage: "https://cdn.deepseekocr.io/tools/ai-ocr/ai-ocr-og.webp",
    creator: "@yeekal"
  }

export const THEME_COLOR = {
  PRIMARY: "#4f46e5",
  PRIMARY_HOVER: "#4338ca",
  PRIMARY_LIGHT: "#e0e7ff",
  PRIMARY_DARK: "#312e81",
}

export const callbackLink = "/account"
export const DefaultCustomSign = "flux-kontext"

// ==========================================
// Google AdSense 广告配置
// ==========================================

// AdSense 发布者 ID (从环境变量读取)
export const GOOGLE_ADSENSE_ID = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID || "";

/**
 * 广告位 Slot ID 配置
 * 
 * 广告类型说明：
 * - 自适应广告 (auto): 根据容器自动调整尺寸，推荐用于内容区
 * - 固定尺寸广告: 指定特定尺寸，用于特定位置
 * 
 * 常用广告尺寸：
 * - 摩天大楼 (Skyscraper): 160x600, 300x600 - 垂直放置
 * - 横幅 (Banner): 728x90, 970x90, 320x50(移动端) - 水平放置  
 * - 矩形 (Rectangle): 300x250, 336x280 - 内容区内嵌
 * - 大型移动横幅: 320x100
 * 
 * 注意：请先在 Google AdSense 后台创建对应的广告单元，
 * 然后将生成的 data-ad-slot 值填入下方配置
 */
export const ADSENSE_SLOTS = {
  // --- 首页广告位 ---
  
  // 桌面端两侧摩天大楼悬浮广告
  // 尺寸：160x600 或 300x600 (垂直自适应)
  // 位置：首页左右两侧固定悬浮
  HOMEPAGE_SKYSCRAPER_LEFT: "9565358500",      // 左侧摩天大楼
  HOMEPAGE_SKYSCRAPER_RIGHT: "6100356833",     // 右侧摩天大楼
  
  // 顶部横幅广告
  // 尺寸：728x90 (桌面) / 320x50 (移动) - 水平自适应
  // 位置：Hero 区域下方
  HOMEPAGE_BANNER_TOP: "",
  
  // 底部横幅广告
  // 尺寸：728x90 (桌面) / 320x50 (移动) - 水平自适应
  // 位置：页面底部
  HOMEPAGE_BANNER_BOTTOM: "9373786818",
  
  // Playground 区域广告
  // 尺寸：自适应矩形 (300x250 / 336x280)
  // 位置：DemoSection 和 UsageSection 之间
  HOMEPAGE_PLAYGROUND_INLINE: "",
  
  // Tools 区域广告
  // 尺寸：自适应矩形
  // 位置：ToolsSection 上方
  HOMEPAGE_TOOLS_INLINE: "",
  
  // --- 工具页广告位 ---
  
  // 工具页顶部横幅
  TOOL_BANNER_TOP: "",
  
  // 工具页中部广告
  TOOL_INLINE: "",
  
  // 工具页底部横幅
  TOOL_BANNER_BOTTOM: "",
} as const;

// 广告显示控制
export const ADSENSE_CONFIG = {
  // 是否启用广告
  ENABLED: process.env.NODE_ENV === "production",
  
  // 摩天大楼显示断点 (xl: 1280px)
  SKYSCRAPER_BREAKPOINT: "xl",
  
  // 广告加载延迟 (毫秒)，避免影响首屏加载
  LOAD_DELAY: 1000,
} as const;

export const PageContent = {
  seo: {
    name: "Schedule 1",
    title: `Schedule 1(Schedule I) Game: Build Your Drug Empire in ${new Date().getFullYear()}`,
    description:
      "Become the ultimate kingpin in Schedule 1! Manufacture, distribute, and dominate the underworld of Hyland Point. Experience a unique blend of simulation, strategy, and action. Available in Early Access on Steam!",
    keywords:
      "Schedule 1, Schedule I game, drug dealing simulator, open-world, simulation game, strategy game, indie game, early access, Hyland Point, multiplayer, co-op, crime, underworld, empire building, TVGS",
    themeColor: "#4f46e5",
  },
  wiki: {
    seoTitle:
      "Schedule 1 Game Wiki: Items, Drugs, Production, and Empire Guide | Become the Kingpin",
    seoDesc:
      "Explore the Schedule 1 game wiki for detailed information on drug production processes, locations, characters, and tips to build your criminal empire in Hyland Point.",
  },
  // Header content
  header: {
    logo: "Flux Kontext",
    navItems: [
      { label: "Wiki", href: "/wiki" },
      { label: "Download", href: "/download" },
      { label: "Update", href: "/update" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
};
