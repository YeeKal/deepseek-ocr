import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function SubscriptionSkeleton() {
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
              <Skeleton className="h-6 w-24" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Credit Balance</h3>
              <Skeleton className="h-6 w-16" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Next Billing Cycle</h3>
              <Skeleton className="h-6 w-32" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Subscription Status</h3>
              <Skeleton className="h-6 w-20" />
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <h3 className="text-sm font-medium mb-2">Plan Benefits</h3>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Skeleton className="h-10 w-40 mr-2" />
          <Skeleton className="h-10 w-32" />
        </CardFooter>
      </Card>
    </div>
  )
}