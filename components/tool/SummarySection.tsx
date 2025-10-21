// components/tool-page/PageHeaderSection.tsx
import { PageHeaderConfig } from '@/lib/types';
import { MarkdownRenderer } from '../common/MarkdownRenderer';
import Image from 'next/image';

interface SummarySectionProps {
  mdString: string;
}

export function SummarySection({ mdString }: SummarySectionProps) {
  return (
    <section className="container mx-auto px-4 py-6 space-y-10 my-8">
      <div className='flex justify-center'>
            <article className={`prose dark:prose-invert prose-md sm:prose-lg max-w-4xl `}><MarkdownRenderer content={mdString} /></article>
            </div>
    </section>
  );
}
