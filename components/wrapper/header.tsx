"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { StickyNote, ChevronDownIcon, Box, Blocks } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import ThemeToggle from "../common/ThemeToggle";
import { PageContent, LOGO_URL, BRAND_NAME } from "@/lib/constants";
import Image from "next/image";
import { allThemeMiniConfig, textToIcon } from "@/lib/ai-tools/config-utils";
import AccountWrapper from "./account";
import { useSession } from "next-auth/react";

export function Header() {
  const headerData = PageContent.header;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {data:session } = useSession();

  const navText = [
    {
      label: "Playground",
      href: "/#playground",
      icon: <Box className="mr-2 h-4 w-4"></Box>,
    },
    {
      label: "Join Waitlist",
      href: "/waitlist",
      icon: <Blocks className="mr-2 h-4 w-4"></Blocks>,
    },
  ];


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background py-4 ">
      <div className="container px-4 sm:px-6 flex items-center justify-between mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src={LOGO_URL}
            alt={`${BRAND_NAME} logo`}
            width={48}
            height={48}
          />

          <Link
            href="/"
            className="font-bold text-xl bg-gradient-to-r from-[#5182ED]  to-[#D56575]
                bg-clip-text
                text-transparent"
          >
            {BRAND_NAME}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">

          {/* {dropDownMenus} */}

          {navText.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center hover:text-primary hover:bg-accent hover:rounded-md px-2 py-1 transition-all duration-200 ease-in-out"
              prefetch={false}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
          {/* {!session  && 
            <div className="flex items-center gap-4">
              <Link href="/login" className="hidden md:inline-flex">
                <Button variant="ghost">Login</Button>
              </Link>
            </div>
          } */}
        </nav>

        <div className="flex items-center gap-2">
          {/* <ThemeToggle /> */}

          {/* Mobile Menu Button - Hidden on large screens */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            className="md:hidden"
          >
            <span className="sr-only">Menu</span>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </Button>
        </div>
        {         session?.user && <AccountWrapper user={session.user} />

        }
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg z-50">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {/* {dropDownMenus} */}

            {navText.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-center hover:text-primary hover:bg-accent hover:rounded-md px-2 py-1 transition-all duration-200 ease-in-out"
                prefetch={false}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}

          {/* <div className="flex flex-col items-center  gap-4">
            <Link href="/login" className="">
              <Button variant="ghost">Login</Button>
            </Link>
          </div> */}
          </nav>
        </div>
      )}
    </header>
  );
}
