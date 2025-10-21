"use client"
import { pageConfig } from "@/lib/pageconfig";
import { useRouter } from "next/navigation";


const content = pageConfig.waitlist;

export default function Waitlist() {
  const router = useRouter();
  return (
    <section className="w-full bg-gray-50 py-20 sm:py-24">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{content.title}</h2>
        <p className="mt-4 text-lg text-gray-600">{content.description}</p>
        <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder={content.placeholder}
            required
            className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
             onClick={() => {
                  router.push(`/waitlist`);
                }}
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-blue-700 transition-colors"
          >
            {content.buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}