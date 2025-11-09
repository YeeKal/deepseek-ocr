import { useState, useEffect } from 'react';
import { parseMarkdownWithMath } from '@/lib/markdown';


/**
 * 把 Markdown 中的 LaTeX 标记统一成标准形式
 *   - 删除 DeepSeeLOCR 产生的 <||ref||>…<||/ref||><||det||>[[x,y,w,h]]<||/det||>
 *   - \[ … \]  →  $$ … $$
 *   - \( … \)  →  $ … $
 */
export function preprocessLaTeXDelimiters(markdown: string): string {
  // 1. 删除 DeepSeeLOCR 位置标记
  const DEEPSEELOCR_PATTERN =
    /<\|ref\|>.*?<\|\/ref\|><\|det\|\>\[\[\d+,\s*\d+,\s*\d+,\s*\d+\]\]<\|\/det\|>/g;

  // 2. 块级公式 \[ … \]
  const BLOCK_LATEX_PATTERN = /\\\[([\s\S]*?)\\\]/g;

  // 3. 行内公式 \( … \)
  const INLINE_LATEX_PATTERN = /\\\(([\s\S]*?)\\\)/g;

  return markdown
    .replace(DEEPSEELOCR_PATTERN, '')               // 删除定位信息
    .replace(BLOCK_LATEX_PATTERN, (_, content) =>   // 块级 → $$
      `$$${content.replace(/^\s+|\s+$/g, '')}$$`
    )
    .replace(INLINE_LATEX_PATTERN, (_, content) =>  // 行内 → $
      `$${content.replace(/^\s+|\s+$/g, '')}$`
    );
}


export default function OcrMDResult({ content }: { content: string }) {
  const [html, setHtml] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const pureContent = preprocessLaTeXDelimiters(content);

  useEffect(() => {
    if (!pureContent) {
      setHtml('');
      setLoading(false);
      return;
    }

    setLoading(true);
    parseMarkdownWithMath(pureContent)
      .then((result) => {
        setHtml(result.html);
      })
      .catch((err) => {
        console.error('Markdown parsing failed:', err);
        setHtml('<p>Failed to render content.</p>');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pureContent]); // 依赖 content，当 OCR 结果更新时重新渲染

  if (loading) return <div className="skeleton">Loading...</div>;

  return (

    <article className="prose prose-md max-w-none dark:prose-invert bg-muted/30 rounded-lg p-6 max-h-[600px] overflow-y-auto" dangerouslySetInnerHTML={{ __html: html }}>
              </article>

  );
}