import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import PageWrapper from "@/components/wrapper/page-wrapper";
import GoogleAnalytics from "@/components/analytics/google-analytics";
import UmamiAnalytics from "@/components/analytics/umami-analytics";
import "./globals.css";
import { AuthProvider } from "@/components/common/auth-provider";
import { Toaster } from "sonner";
import {pageConfig} from "@/lib/pageconfig";


const baseUrl = process.env.BASE_URL || "http://localhost:3000/";
const seo = pageConfig.seo

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export async function generateMetadata(): Promise<Metadata> {

  return {
    metadataBase: new URL(baseUrl),
    title: `${seo.title}`,
    description: `${seo.description}`,
    alternates: {
      canonical: "./",
    },
    openGraph: {
      description: `${seo.description}`,
      images:[`${seo.ogImage}`],
      type: "website",
      url: baseUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: `${seo.title}`,
      description: `${seo.description}`,
      siteId: "",
      creator: `${seo.creator}`,
      creatorId: "",
      images: [`${seo.ogImage}`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` antialiased`}
      >
                <AuthProvider>

        {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        > */}
          <PageWrapper>
            {children}
            <Toaster richColors/>

            {process.env.ANALYTICS_ID && (
              <GoogleAnalytics id={process.env.ANALYTICS_ID} />
            )}
            {process.env.UMAMI_ID && (
              <UmamiAnalytics id={process.env.UMAMI_ID} />
            )}

          </PageWrapper>
        {/* </ThemeProvider> */}
        </AuthProvider>
        
      </body>
    </html>
  );
}
