import { formulaOcrConfig } from "@/lib/config/config-formula-ocr"
import { receiptOcrConfig } from "@/lib/config/config-receipt-ocr"

import type { ToolConfig } from "@/lib/config/tool-types"

const toolConfigs: ToolConfig[] = [formulaOcrConfig]

export const toolMetaConfigs = toolConfigs.map(config => config.meta);

export const getToolConfigBySlug = (slug: string): ToolConfig | undefined => {
  return toolConfigs.find(config => config.meta.slug === slug);
};

