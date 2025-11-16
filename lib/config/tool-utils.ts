import { formulaOcrConfig } from "@/lib/config/config-formula-ocr"
import { aiOcrConfig } from "@/lib/config/config-ai-ocr"
import { ocrScannerConfig } from "@/lib/config/config-ocr-scanner"
import { pdfOcrConfig } from "@/lib/config/config-pdf-ocr"
import { receiptOcrConfig } from "@/lib/config/config-receipt-ocr"
import { invoiceOcrConfig } from "@/lib/config/config-invoice-ocr"
import { handwritingOcrConfig } from "@/lib/config/config-handwriting-ocr"
import { imageOcrConfig } from "@/lib/config/config-image-ocr"
import { passportOcrConfig } from "@/lib/config/config-passport-ocr"

import type { ToolConfig } from "@/lib/config/tool-types"

const toolConfigs: ToolConfig[] = [
  formulaOcrConfig,
  aiOcrConfig,
  ocrScannerConfig,
  pdfOcrConfig,
  receiptOcrConfig,
  invoiceOcrConfig,
  handwritingOcrConfig,
  imageOcrConfig,
  passportOcrConfig,
]

export const toolMetaConfigs = toolConfigs.map(config => config.meta);

export const getToolConfigBySlug = (slug: string): ToolConfig | undefined => {
  return toolConfigs.find(config => config.meta.slug === slug);
};

