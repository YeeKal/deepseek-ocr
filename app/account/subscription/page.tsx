import { Suspense } from "react"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/auth-config"
import { redirect } from "next/navigation"
import { SubscriptionDetails } from "@/components/account/subscription-details"
import { SubscriptionSkeleton } from "@/components/account/subscription-skeleton"

export const metadata = {
  title: "Subscription Management",
  description: "Manage your subscription and credits"
}

export default async function SubscriptionPage() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect("/login")
  }

  return (
    <main className="container max-w-2xl mx-auto p-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Subscription Management</h1>
          <p className="text-muted-foreground">View and manage your subscription details</p>
        </div>
        
        <Suspense fallback={<SubscriptionSkeleton />}>
          <SubscriptionDetails user={session.user} />
        </Suspense>
      </div>
    </main>
  )
}