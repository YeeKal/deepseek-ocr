import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { getMessages } from "@/i18n/get-messages";
import { Locale } from "@/i18n/config";
import { Icon } from '@/components/wrapper/lucide-icon';
export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const m = await getMessages(locale, "waitlist");

  return {
    title: m.waitlist.seo.title,
    description: m.waitlist.seo.description,
  };
}


// --- The Page Component (Light Theme Version) ---
export default async function WaitlistPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const m = await getMessages(locale, "waitlist");
  setRequestLocale(locale);
  const iframeUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfyLCIjaTalloXCsEI9jO9OdgzNKy7sjRUBtR1iuVJBBfnjDA/viewform?embedded=true"
  return (
    // Main background set to a soft gray
    <main className="bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6 py-16 sm:py-24 lg:px-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge styled for light theme */}
          <p className="inline-flex items-center justify-center px-4 py-1 mb-4 text-sm font-semibold tracking-wider text-indigo-700 bg-indigo-100 rounded-full">
            {m.waitlist.badge}
          </p>
          {/* Main heading with dark text for contrast */}
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {m.waitlist.title}
          </h1>
          {/* Description text with a softer gray */}
          <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-600">
            {m.waitlist.description}
          </p>
        </div>

        {/* Main two-column layout for features and form */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">

          {/* Left Column: Features */}
          <div className="flex flex-col gap-y-10">
            {m.waitlist.features.map((feature: any, index: number) => {
              return (
                <div key={index} className="flex gap-x-5">
                  <div className="flex-shrink-0">
                    {/* Icon container with a clean white background */}
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white border border-gray-200 shadow-sm">
                      <Icon name={feature.icon} className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    {/* Feature title */}
                    <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                    {/* Feature description */}
                    <p className="mt-1 text-base text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Form */}
          <div className="relative">
            {/* Form container with white background and prominent shadow for depth */}
            <div className="sticky top-20 p-8 bg-white border border-gray-200 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
                {m.waitlist.formTitle}
              </h2>
              <div className="w-full overflow-hidden rounded-lg">
                <iframe
                  src={iframeUrl}
                  width="100%"
                  height="520"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Waitlist Signup Form"
                  className="rounded-lg"
                >
                  {m.waitlist.loadingLabel}
                </iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <div className="text-center mt-20">
          <Link href="/" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200 font-medium">
            &larr; {m.waitlist.backLabel}
          </Link>
        </div>
      </div>
    </main>
  );
}