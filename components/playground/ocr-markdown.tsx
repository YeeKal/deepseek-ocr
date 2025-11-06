import { useState, useEffect } from 'react';
import { parseMarkdownWithMath } from '@/lib/markdown';


function preprocessLaTeXDelimiters(markdown: string): string {
  const pattern = /<\|ref\|>.*?<\|\/ref\|><\|det\|\>\[\[\d+,\s*\d+,\s*\d+,\s*\d+\]\]<\|\/det\|>/g;

  return markdown
    .replace(pattern, '')
    // Use [\s\S] instead of . to match newlines without 's' flag
    .replace(/\\\[[\s\S]*?\\\]/g, (_, match) => {
      // Extract content between \[ and \]
      const content = match.slice(2, -2).trim();
      return `$$${content}$$`;
    })
    .replace(/\\\([\s\S]*?\\\)/g, (_, match) => {
      // Extract content between \( and \)
      const content = match.slice(2, -2).trim();
      return `$${content}$`;
    })
    .trim();
}

export default function OcrMDResult({ content }: { content: string }) {
  const [html, setHtml] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const pureContent = preprocessLaTeXDelimiters(content);
  console.log('Preprocessed Markdown Content:', pureContent);

  useEffect(() => {
    if (!pureContent) {
      setHtml('');
      setLoading(false);
      return;
    }

    setLoading(true);
    parseMarkdownWithMath(pureContent)
      .then((result) => {
  console.log('Preprocessed html Content:', result.html);

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

    <article className="prose prose-sm max-w-none dark:prose-invert bg-muted/30 rounded-lg p-6 max-h-[600px] overflow-y-auto" dangerouslySetInnerHTML={{ __html: html }}>
              </article>

  );
}