import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";
import Image from "next/image";
import { Coins, UserCircle2 } from "lucide-react";
import { User } from "next-auth";
import { useRouter } from "next/navigation"
import { Badge } from "../ui/badge";
import {formatTier} from "@/lib/utils";


export default function AccountWrapper({ user }: { user: User }) {
    const router = useRouter();
    console.log("AccountWrapper user: ", user);

  // Callback for upgrade (redirect to pricing)
  const handleUpgrade = () => {
    router.push("/pricing");
  };
  return (
    <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-teal-200 p-0">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt="User Avatar"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  ) : ( 
                    <UserCircle2 className="h-7 w-7 text-[#D56575]" />
                  )}
                  <span className="sr-only">Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <div className="px-2 py-2 text-sm flex  items-center gap-2">
                <Coins className="h-4 w-4 text-pink-500" />                
                <span className="font-semibold">{user.credits}</span>
                <Badge variant={user.subscriptionTier === "FREE" ? "outline" : "default"}>
                  {formatTier(user.subscriptionTier)}
                </Badge>

                </div>
                <DropdownMenuItem onClick={handleUpgrade}>
                  Upgrade
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/account")}>
                  Account
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
  );
}