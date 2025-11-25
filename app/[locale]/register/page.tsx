import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { RegisterForm } from "@/components/auth/register-form"
import { authOptions } from "@/app/api/auth/auth-config"
import { callbackLink } from "@/lib/constants";

export async function generateMetadata() {
  return {
     title: "Register | Flux Kontext",
  description:
    "Create an account to access Flux Kontext's powerful AI models and visual artifact generation tools."
  };
}

export default async function RegisterPage() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect(callbackLink)
  }

  return (

    <main className="flex-1 flex items-center justify-center p-6">
      <RegisterForm />
    </main>
  )
} 