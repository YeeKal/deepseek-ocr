import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Mail,
  Users,
  Building,
  Link as LinkIcon,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react"; // Example icons
import { ContactPageContent } from "./contact-page-content";
import { BRAND_NAME, SUPPORT_EMAIL } from "@/lib/constants";
import Link from "next/link";

export const metadata = {
  title: `Contact ${BRAND_NAME} | Support, Inquiries & Feedback`,
  description:
    `Contact ${BRAND_NAME} for support, questions, or feedback on our AI chat and visual artifact generation platform. We're here to help you!`,
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white  md:text-5xl">
          Get in Touch with <span className="text-primary">{BRAND_NAME}</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {` We're here to help! Whether you have a question, a brilliant idea, or
         need support, reach out to us.`}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Column 1: Contact Info & Direct Email */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Mail className="mr-2 h-6 w-6 text-primary" /> General Inquiries &
              Support
            </CardTitle>
            <CardDescription>
              For questions, feature requests, technical support, or feedback.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Please email us directly. We aim to respond within 24-48 business
              hours.
            </p>
            <div>
              <p
                className="text-lg font-semibold text-primary hover:underline flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" /> {SUPPORT_EMAIL}
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Before reaching out, you might find your answer on our{" "}
              <Link
                href="/#faq"
                className="font-medium text-primary hover:underline"
                prefetch={false}
              >
                FAQ Page
              </Link>
              .
            </p>
          </CardContent>
        </Card>

        {/* Column 2: Contact Form */}
        <ContactPageContent />
      </div>
    </div>
  );
}
