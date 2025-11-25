'use client';
import { useState, useEffect } from 'react';
import { useTranslations, useMessages } from 'next-intl';
import {
  BRAND_NAME,
  DOMAIN_NAME,
  LOGO_URL,
} from "@/lib/constants";
import Image from "next/image";

const FriendsLinks = [
  { text: 'Runpod', href: 'https://runpod.io?ref=5kdp9mps' },
 
];

export default function Footer() {
  const t = useTranslations('common.footer');
  const messages = useMessages();
  const footerData = (messages as any).common?.footer?.sections;
  const [currentYear, setCurrentYear] = useState<number>(2025);
  const sections = t.raw('sections') as any[];

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 border-t py-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
        <div className="max-w-2xl">
          <Image
            src={LOGO_URL}
            alt={BRAND_NAME}
            width={48}
            height={48}
          />
          <p className="text-xl font-bold">{DOMAIN_NAME}</p>
          <p className="text-muted-foreground">
            {t('tagline')}
          </p>
        </div>

        {sections.map((section,index) => (
          <div key={index}>
            <p className="font-medium text-muted-foreground uppercase">{section.title}</p>
            <div className="mt-4 grid grid-cols-1 space-y-2 text-sm">
              {section.links.map((link: any, index: number) => (
                <a
                  key={index}
                  href={link.href}
                  className="transition hover:opacity-75 hover:text-teal-600"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* friends */}
        <div >
            <p className="font-medium text-muted-foreground uppercase">{t(`friendslinklabel`)}</p>
            <div className="mt-4 grid grid-cols-1 space-y-2 text-sm">
              {FriendsLinks.map((link: any, index: number) => (
                <a
                  key={index}
                  href={link.href}
                  className="transition hover:opacity-75 hover:text-teal-600"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>

      </div>

      <div className="flex flex-col items-center pt-8">
        <p className="mt-4 text-xs">
          &copy; {currentYear} {BRAND_NAME}. {t('copyright')}
        </p>
      </div>
    </footer>
  );
}
