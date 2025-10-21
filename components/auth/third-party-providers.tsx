"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { LogoGithub, LogoGoogle } from "@/components/common/icons"
import {callbackLink} from "@/lib/constants"
interface ThirdPartyProvidersProps {
  setError?: (error: string) => void
}

export function ThirdPartyProviders({ setError = () => { } }: ThirdPartyProvidersProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null)

  const handleProviderLogin = async (provider: "google" | "github") => {
    setIsLoading(true)
    setLoadingProvider(provider)
    
    try {
      await signIn(provider, {
        callbackUrl: callbackLink,
      })
      
    } catch (error) {
      console.error(`${provider} login error:`, error)
      setError(`An error occurred during ${provider} login. Please try again later.`)
    } finally {
      setIsLoading(false)
      setLoadingProvider(null)
    }
  }

  return (
    <>
      <div className="space-y-2">
        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={() => handleProviderLogin("google")}
          disabled={isLoading}
        >
          <div className="flex items-center justify-between w-full">
            <span className="flex-1"></span>
            <span className="flex items-center justify-center gap-2">
              <LogoGoogle size={20} />
              <span>
                {loadingProvider === "google" 
                  ? "Loading..." 
                  : "Login with Google"}
              </span>
            </span>
            <span className="flex-1 text-right"></span>
          </div>
        </Button>
        
        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={() => handleProviderLogin("github")}
          disabled={isLoading}
        >
          <div className="flex items-center justify-between w-full">
            <span className="flex-1"></span>
            <span className="flex items-center justify-center gap-2">
              <LogoGithub size={20} />
              <span>
                {loadingProvider === "github" 
                  ? "Loading..." 
                  : "Login with GitHub"}
              </span>
            </span>
            <span className="flex-1 text-right"></span>
          </div>
        </Button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">
            OR
          </span>
        </div>
      </div>
    </>
  )
}