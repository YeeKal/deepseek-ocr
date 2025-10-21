"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { User } from "next-auth"
import { formatTier } from "@/lib/utils"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { AlertCircle, Coins, CreditCard, X } from "lucide-react"
import { toast } from "sonner"
import Link from "next/link"

interface UserSubscription {
  credits: number;
  subscriptionTier: string;
  subscriptionExpires: Date | null;
  subscriptionStatus: string;
  subscriptionId: string | null;
}

interface SubscriptionDetailsProps {
  user: User
}

export function SubscriptionDetails({ user: initialUser }: SubscriptionDetailsProps) {
  const { update } = useSession()
  const [isCancelling, setIsCancelling] = useState(false)
  const [cancelError, setCancelError] = useState<string | null>(null)
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [subscription, setSubscription] = useState<UserSubscription | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  // Fetch subscription data
  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/user/subscription')
        
        if (!response.ok) {
          throw new Error(`Failed to fetch subscription: ${response.statusText}`)
        }
        
        const data = await response.json()
        setSubscription(data)
      } catch (error) {
        console.error('Error fetching subscription:', error)
        setError(error instanceof Error ? error.message : 'Failed to load subscription details')
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchSubscription()
  }, [])

  const handleCancelSubscription = async () => {
    setIsCancelling(true)
    setCancelError(null)
    
    try {
      toast.loading('Cancelling subscription...', { id: 'cancel-toast' })
      const response = await fetch('/api/creem/subscription/cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subscriptionId: subscription?.subscriptionId
        })
      })
      
      if (!response.ok) {
        throw new Error(`Failed to cancel: ${response.statusText}`)
      }
      
      // Update session to reflect changes
      await update()
      
      // Refresh subscription data
      const subscriptionResponse = await fetch('/api/user/subscription')
      if (subscriptionResponse.ok) {
        const data = await subscriptionResponse.json()
        setSubscription(data)
      }
      
      // Show success toast
      toast.success('Subscription cancelled successfully', { id: 'cancel-toast' })
      
      // Close popover
      setIsPopoverOpen(false)
    } catch (error) {
      console.error('Error cancelling subscription:', error)
      setCancelError(error instanceof Error ? error.message : 'Failed to cancel subscription')
      toast.error('Failed to cancel subscription', { id: 'cancel-toast' })
    } finally {
      setIsCancelling(false)
    }
  }

  // Format the expiration date
  const formatExpirationDate = (date: Date | string | null | undefined) => {
    if (!date) return 'N/A'
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Determine subscription status display
  const getStatusDisplay = () => {
    if (!subscription) return <Badge variant="outline">Loading...</Badge>
    
    if (subscription.subscriptionTier === "FREE") {
      return <Badge variant="outline">Free Plan</Badge>
    }
    
    if (subscription.subscriptionStatus === "CANCELED") {
      return <Badge variant="destructive">Canceled</Badge>
    }
    
    if (subscription.subscriptionStatus === "ACTIVE") {
      return <Badge variant="default">Active</Badge>
    }
    
    if (subscription.subscriptionStatus === "EXPIRED") {
      return <Badge variant="destructive">Expired</Badge>
    }
    
    return <Badge variant="outline">Unknown</Badge>
  }

  // Show error state
  if (error && !isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Subscription Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-destructive">
            <AlertCircle className="h-5 w-5" />
            <p>Failed to load subscription details. Please try again later.</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Retry
          </Button>
        </CardFooter>
      </Card>
    )
  }

  // Show loading state
  if (isLoading || !subscription) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Subscription Details</CardTitle>
          <CardDescription>Loading your subscription information...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="h-8 w-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Subscription Details</CardTitle>
          <CardDescription>Your current subscription information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Current Plan</h3>
              <div className="flex items-center gap-2">
                <Badge variant={subscription.subscriptionTier === "FREE" ? "outline" : "default"}>
                  {formatTier(subscription.subscriptionTier)}
                </Badge>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Credit Balance</h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Coins className="h-4 w-4 mr-2 text-amber-500" />
                  <span className="font-medium">{subscription.credits || 0}</span>
                </div>
              </div>
            </div>
            
            {subscription.subscriptionTier !== "FREE" && (
              <>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">{subscription.subscriptionStatus=="CANCELED" ? "Termination Date" : "Next Billing Cycle"}</h3>
                  <div>
                    {subscription.subscriptionExpires ? (
                      <span className="text-muted-foreground">{formatExpirationDate(subscription.subscriptionExpires)}</span>
                    ) : (
                      <span className="text-muted-foreground">Not available</span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Subscription Status</h3>
                  <div>{getStatusDisplay()}</div>
                </div>
              </>
            )}
            {subscription.subscriptionTier == "FREE" && (
              <>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Next Reset Cycle</h3>
                  <div>
                    {subscription.subscriptionExpires ? (
                      <span className="text-muted-foreground">{formatExpirationDate(subscription.subscriptionExpires)}</span>
                    ) : (
                      <span className="text-muted-foreground">Not available</span>
                    )}
                  </div>
                </div>
                
                
              </>
            )}
          </div>
          
          
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          {subscription.subscriptionTier === "FREE" ? (
            <Button asChild>
              <Link href="/pricing">
                <CreditCard className="h-4 w-4 mr-2" />
                Upgrade
              </Link>
            </Button>
          ) : subscription.subscriptionStatus !== "CANCELED" ? (
            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Manage Subscription
                </Button>
              </PopoverTrigger>
              
              <PopoverContent className="w-80 p-0" align="center">
                <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">Cancel Subscription</h4>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-6 w-6 p-0" 
                      onClick={() => setIsPopoverOpen(false)}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {`Are you sure you want to cancel your subscription? You will lose access to premium features after current subscription period ends(${formatExpirationDate(subscription.subscriptionExpires)}).`}
                  </p>
                  
                  {isCancelling && (
                    <div className="flex items-center justify-center py-4">
                      <div className="h-6 w-6 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
                      <span className="ml-2 text-sm">Processing cancellation...</span>
                    </div>
                  )}
                  
                  {cancelError && !isCancelling && (
                    <div className="bg-destructive/10 text-destructive rounded-md p-3 text-sm flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Cancellation failed</p>
                        <p className="text-xs mt-1">{cancelError}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-end space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setIsPopoverOpen(false)}
                      disabled={isCancelling}
                    >
                      Keep
                    </Button>
                    <Button 
                      variant="destructive"
                      size="sm"
                      onClick={handleCancelSubscription}
                      disabled={isCancelling}
                    >
                      {isCancelling ? (
                        <>
                          <div className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin mr-2"></div>
                          Cancelling...
                        </>
                      ) : (
                        'Cancel'
                      )}
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <Button asChild>
              <Link href="/pricing">
                <CreditCard className="h-4 w-4 mr-2" />
                Reactivate Subscription
              </Link>
            </Button>
          )}
          
          <Button variant="ghost" asChild>
            <Link href="/account">
              Back to Account
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
