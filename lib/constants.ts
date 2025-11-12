export const DOMAIN_NAME = "deepseekocr.io";
export const LOGO_URL =   "https://cdn.deepseekocr.io/visual-logo/logo-gradient.svg"
export const BRAND_NAME = "Deepseek Ocr"
export const SUPPORT_EMAIL = "yee@deepseekocr.io"

export const GPU_API_URL = process.env.GPU_API_BASE_URL || 'https://fcebf0e7d6a5.ngrok-free.app';
export const BAIDU_AI_STUDIO_API_URL = `https://85q8t7p8g4t3r5r2.aistudio-app.com/layout-parsing`
//  twcr onup vszt skue

export const DEFAULT_CREDITS = 20
export const MONTH_IN_MILLISECONDS = 30 * 24 * 60 * 60 * 1000;
export const  itemsPerPage = 28
export const MaxUploadImageSize = 5 ; // 5 MB
export const Megapixels = 1_000_000;
export const RUNPOD_MAX_EXECUTION_TIME = 3* 60; // 15 minutes in seconds
export const PLAYGROUND_SECTION_ID = "toolplayground"
export const HOW_TO_USE_SECTION_ID = "how-to-use"


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
    ogImage: "https://cdn.deepseekocr.io/visual-logo/og-image.webp",
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
