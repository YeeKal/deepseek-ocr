"use client"
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { User } from "next-auth"
import { signOut } from "next-auth/react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coins, CreditCard } from "lucide-react"
import Link from "next/link"
import { formatTier } from "@/lib/utils"

interface AccountSettingsProps {
  user: User
}

export function AccountSettings({ user:initialUser }: AccountSettingsProps) {
  const { data: session, status } = useSession()
  // Use session data instead of props when available
  // This ensures we show the most up-to-date data after session updates
  const user = session?.user || initialUser

  return (
    <div className="space-y-6 py-20">
      <h2 className="text-3xl font-bold">{`Account Settings`}</h2>
      <SessionUpdater/>

      <div className="grid gap-6 md:grid-cols-2 ">
      <Card>
        <CardHeader>
          <CardTitle>Subscription & Credits</CardTitle>
          <CardDescription>Your current plan and credit balance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-sm font-medium">Current Plan</h3>
              <div className="flex items-center gap-2">
                <Badge variant={user.subscriptionTier === "FREE" ? "outline" : "default"}>
                  {formatTier(user.subscriptionTier)}
                </Badge>
              </div>
            </div>
            {user.subscriptionTier === "FREE" && (
              <Button variant="outline" asChild>
                <Link href="/pricing">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Upgrade
                </Link>
              </Button>
            )}
            
          </div>
          
          <div className="space-y-1">
            <h3 className="text-sm font-medium">Credit Balance</h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Coins className="h-4 w-4 mr-2 text-amber-500" />
                <span className="font-medium">{user.credits || 0}</span>
              </div>
              <span className="text-xs text-muted-foreground">
                Credits are used to generate images and run tools
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
        {
              user.subscriptionTier !== "FREE" && (
                <Button variant="outline" asChild>
                  <Link href="/account/subscription">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Manage Subscription
                  </Link>
                </Button>
              )
            }
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{"Account Actions"}</CardTitle>
        </CardHeader>
        <CardFooter>
          <Button
            variant="destructive"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            {"Logout"}
          </Button>
        </CardFooter>
      </Card>
      </div>
    </div>
  )
}

function SessionUpdater() {
  const { update } = useSession()
  
  // Update session when component mounts
  useEffect(() => {
    // This triggers a session refresh, pulling latest data from the database
    update()
  }, [])
  
  // This component doesn't render anything
  return null
}
