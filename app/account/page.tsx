import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/auth-config"
import { AccountSettings } from "@/components/account/account-settings"
import MoreTools from "@/components/tool/MoreTools"
import {Logo} from "@/components/wrapper/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

/*
not use redirect in this.
show a real page for better seo
 */

export default async function AccountPage() {
  const session = await getServerSession(authOptions)

  return (
      <main className="container max-w-7xl mx-auto p-6">
        {session ? (
        <div className="px-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#5182ED]  to-[#D56575]
                    bg-clip-text
                    text-transparent ">{"> Hello, "}{session.user.name}</h1>
          <p className="text-muted-foreground">{session.user.email}</p>
        </div>

        ) : (
        <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8 text-center">
            <div className="space-y-4">
              <Logo className="mx-auto" /> {/* Replace with your logo */}
              <h2 className="mt-6 text-3xl font-bold tracking-tight bg-gradient-to-r from-[#5182ED] to-[#D56575] bg-clip-text text-transparent">
                Join the Creative Community
              </h2>
              <p className="text-muted-foreground">
                Sign in to unlock your creative potential and access all AI tools
              </p>
            </div>
            
            <div className="flex flex-col space-y-4">
              <Button asChild variant="default" className="w-full">
                <Link href="/login">
                  Sign In
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/register">
                  Create Account
                </Link>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              By continuing, you agree to our <Link href="/terms" className="text-primary hover:underline">Terms</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      )}
        
        <MoreTools title="Start Creation with a tool"/>
        {session && <AccountSettings user={session.user} /> }
      </main>
  )
}