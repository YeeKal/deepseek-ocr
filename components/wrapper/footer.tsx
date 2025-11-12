'use client';
import { useState, useEffect } from 'react';

import {
  BRAND_NAME,
  DOMAIN_NAME,
  LOGO_URL,
  PageContent
} from "@/lib/constants";
import Image from "next/image";
import { pageConfig } from "@/lib/pageconfig";

const content = pageConfig.footer;

type HelpfulLinkTypes = {
  text: string;
  href: string;
};


export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2025); // 默认值无所谓

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 border-t py-8">

      {/* brand section */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
        <div className="max-w-2xl">
          <Image
            src={LOGO_URL}
            alt={BRAND_NAME}
            width={48}
            height={48}
          />

          <p className="text-xl font-bold">{DOMAIN_NAME}</p>
          <p className="  text-muted-foreground">
            {content.tagline}
          </p>
        </div>


        {/* social & legal section */}
        {
          content.sections.map((s, index) => (

            <div key={index}>
              <p className="font-medium text-muted-foreground uppercase">{s.title}</p>

              <div className="mt-4 grid grid-cols-1 space-y-2 text-sm">
                {s.links.map((l: HelpfulLinkTypes, index) => (
                  <a
                    key={index}
                    href={l.href}
                    className=" transition hover:opacity-75 hover:text-teal-600"
                  >
                    {l.text}
                  </a>
                ))}
              </div>
            </div>

          ))

        }

      </div>



      <div className="flex flex-col items-center  pt-8">
        <p className="mt-4 text-xs  ">
          &copy; {currentYear} {BRAND_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
