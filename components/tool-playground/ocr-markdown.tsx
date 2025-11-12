import { useState, useEffect } from 'react';
import { parseMarkdownWithMath } from '@/lib/markdown';


/**
 * 把 Markdown 中的 LaTeX 标记统一成标准形式
 *   - 删除 DeepSeeLOCR 产生的 <||ref||>…<||/ref||><||det||>[[x,y,w,h]]<||/det||>
 *   - \[ … \]  →  $$ … $$
 *   - \( … \)  →  $ … $
 */

export default function OcrMDResult({ content }: { content: string }) {
  const [html, setHtml] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!content) {
      setHtml('');
      setLoading(false);
      return;
    }

    setLoading(true);
    parseMarkdownWithMath(content)
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
  }, [content]); // 依赖 content，当 OCR 结果更新时重新渲染

  if (loading) return <div className="skeleton">Loading...</div>;

  return (

    <article className="prose prose-md max-w-none dark:prose-invert bg-muted/30 rounded-lg p-6 max-h-[600px] overflow-y-auto" dangerouslySetInnerHTML={{ __html: html }}>
              </article>

  );
}