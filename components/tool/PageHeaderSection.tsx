// components/tool-page/PageHeaderSection.tsx
import { PageHeaderConfig } from '@/lib/types';
import { MarkdownRenderer } from '../common/MarkdownRenderer';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
 
interface PageHeaderSectionProps {
  pageHeader: PageHeaderConfig;
}

export function PageHeaderSection({ pageHeader }: PageHeaderSectionProps) {
  return (
    <section className="container mx-auto px-4 py-6 space-y-10 my-8">
      {
        pageHeader.videoSrc &&

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-2">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  leading-tight">
              {pageHeader.pageTitle}
            </h1>

            <article className={`prose dark:prose-invert prose-md sm:prose-lg max-w-4xl `}><MarkdownRenderer content={pageHeader.pageTagline} /></article>
            {pageHeader.buttons &&
              <div className="flex justify-center gap-8">
                {
                  pageHeader.buttons.map((button, index) => (
                    <Link key={index} href={button.link} prefetch={false} target='_blank'><Button>{button.label}</Button></Link>
                  ))
                }
              </div>

            }
          </div>

          <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-teal-200 rounded-3xl p-8 lg:p-12 min-h-[360px] flex items-center justify-center overflow-hidden">
            <video
              className="w-full max-w-xs rounded-lg shadow-lg"
              controls
              autoPlay
              loop muted
              src={pageHeader.videoSrc}
              poster={pageHeader.videoPoster}
            >
              {`Sorry, your browser doesn't support embedded videos.`}
            </video>
          </div>
        </div>
      }
      {
        !pageHeader.videoSrc && pageHeader.videoPoster &&
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-2">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  leading-tight">
              {pageHeader.pageTitle}
            </h1>

            <article className={`prose dark:prose-invert prose-md sm:prose-lg max-w-4xl `}><MarkdownRenderer content={pageHeader.pageTagline} /></article>
            {pageHeader.buttons &&
              <div className="flex justify-center gap-8">
                {
                  pageHeader.buttons.map((button, index) => (
                    <Link key={index} href={button.link} prefetch={false} target='_blank'><Button>{button.label}</Button></Link>
                  ))
                }
              </div>

            }
          </div>

          <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-teal-200 rounded-3xl p-8 lg:p-12 min-h-[360px] flex items-center justify-center overflow-hidden">
            <div className="relative w-96 aspect-square overflow-hidden">
              <Image
                src={pageHeader.videoPoster}
                alt={"hero image"}
                fill
                priority
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              // crossOrigin="anonymous"
              />


            </div>
          </div>
        </div>
      }
      {
        !pageHeader.videoSrc && !pageHeader.videoPoster &&
        <div className="space-y-2 w-full text-center flex flex-col items-center ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {pageHeader.pageTitle}
          </h1>
          <article className={`prose dark:prose-invert prose-md sm:prose-lg max-w-4xl `}><MarkdownRenderer content={pageHeader.pageTagline} /></article>
          {pageHeader.buttons &&
              <div className="flex justify-center gap-8">
                {
                  pageHeader.buttons.map((button, index) => (
                    <Link key={index} href={button.link} prefetch={false} target='_blank'><Button>{button.label}</Button></Link>
                  ))
                }
              </div>

            }
        </div>
      }
      {
        pageHeader.heroImage &&
        <div >
          <Image
            src={pageHeader.heroImage.src}
            alt={pageHeader.heroImage.alt}
            width={1200}
            height={400}
            priority
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      }



    </section>
  );
}
