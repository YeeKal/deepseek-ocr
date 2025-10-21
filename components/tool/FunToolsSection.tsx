'use client'
import type React from "react";

import { ToolMiniConfig, ThemeMiniConfig } from "@/lib/types";
import WatermarkRemoverPage from "@/components/fun-tools/sora2-watermark-remover"



export default function FunToolsSection({ themeMiniConfig, initialToolMini }: { themeMiniConfig: ThemeMiniConfig; initialToolMini: ToolMiniConfig }) {
  const toolId = initialToolMini.id;

  const renderLayout = () => {
    // you can switch on selectedTool or initialToolMini.id depending on desired behavior
    switch (initialToolMini.id) {
      case "sora-2-watermark-remover":
        return (
          <WatermarkRemoverPage/>
        )



      default:
        // fallback generic layout that lists params and allows selection
        return (
          <></>
        );
    }
  }
  return (
    <>
      {renderLayout()}
    </>
  );
}
