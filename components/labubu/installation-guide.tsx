"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Smartphone, Tablet, Monitor } from "lucide-react"

export default function InstallationGuide() {
    const [selectedDevice, setSelectedDevice] = useState("phone")

    const getVideoSrc = (device: string) => {
        switch (device) {
            case "phone":
                return "https://cdn.kontextflux.io/labubu-generator/video/wallpaper-installation-iphone.webm"
            case "desktop":
                return "https://cdn.kontextflux.io/labubu-generator/video/labubu-generator-hero-video.webm"
            default:
                return "https://cdn.kontextflux.io/labubu-generator/video/labubu-generator-hero-video.webm"
        }
    }

  const getStepsForDevice = (device: string) => {
    switch (device) {
      case "phone":
        return [
          {
            number: 1,
            title: "Step 1: Download Labubu Live Wallpaper",
            description: "Download your chosen Labubu live wallpaper from our gallery",
            details:
              "Download your chosen wallpaper. Phones typically save files to the Downloads folder or Gallery app.",
          },
          {
            number: 2,
            title: "Step 2: Open Settings App",
            description: "Navigate to Settings > Wallpaper & Style (iOS) or Display > Wallpaper (Android)",
            details:
              "On iPhone, go to Settings > Wallpaper. On Android phones, look for Display settings then Wallpaper option.",
          },
          {
            number: 3,
            title: "Step 3: Select New Wallpaper",
            description: 'Tap "Add New Wallpaper" or "Choose from Photos"',
            details:
              "Browse to your downloaded Labubu wallpaper file and select it. You'll see a preview on your screen.",
          },
          {
            number: 4,
            title: "Step 4: Set as Live Wallpaper",
            description: "Choose 'Set as Lock Screen', 'Home Screen', or 'Both'",
            details: "Your new Labubu live wallpaper is now active on your phone!",
          },
        ]
      case "desktop":
        return [
          {
            number: 1,
            title: "Step 1: Download Labubu Live Wallpaper",
            description: "Download your chosen Labubu live wallpaper from our gallery",
            details: "Save the wallpaper file to your Desktop or Pictures folder for easy access.",
          },
          {
            number: 2,
            title: "Step 2: Access Desktop Settings",
            description: "Right-click on desktop and select 'Personalize' (Windows) or 'System Preferences' (Mac)",
            details:
              "On Windows: Right-click desktop > Personalize > Background. On Mac: System Preferences > Desktop & Screen Saver.",
          },
          {
            number: 3,
            title: "Step 3: Browse for Image",
            description: "Click 'Browse' or '+' to add your downloaded wallpaper",
            details: "Navigate to where you saved the Labubu wallpaper and select it. Preview will appear immediately.",
          },
          {
            number: 4,
            title: "Step 4: Apply Wallpaper",
            description: "Set the wallpaper fit options and apply changes",
            details: "Choose 'Fill', 'Fit', or 'Stretch' options and click Apply. Your Labubu wallpaper is now set!",
          },
        ]
      default: // tablet
        return [
          {
            number: 1,
            title: "Step 1: Download Labubu Live Wallpaper",
            description: "Download your chosen Labubu live wallpaper from our gallery",
            details:
              "Download your chosen wallpaper. Tablets often save files to a Downloads folder or the Pictures directory.",
          },
          {
            number: 2,
            title: "Step 2: Access Display Settings",
            description: "Open Settings and navigate to Display or Wallpaper settings",
            details:
              "On iPads, go to Settings > Wallpaper. On Android tablets, look for Display or Wallpaper in Settings.",
          },
          {
            number: 3,
            title: "Step 3: Choose Custom Image",
            description: 'Select "Choose a New Wallpaper" or "Add from Gallery"',
            details: "Browse to where you saved the wallpaper file and select it. The tablet will show you a preview.",
          },
          {
            number: 4,
            title: "Step 4: Enjoy Your Labubu Live Wallpaper",
            description: "Your new Labubu live wallpaper is ready to use!",
            details: "",
          },
        ]
    }
  }

  const getDeviceTitle = (device: string) => {
    switch (device) {
      case "phone":
        return "Phone Installation"
      case "desktop":
        return "Desktop Installation"
      default:
        return "Tablet Installation"
    }
  }

  const steps = getStepsForDevice(selectedDevice)

  return (
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Labubu Live Wallpaper Installation Guide</h2>
          <p className="text-lg text-gray-600">Simple steps to get your Labubu live wallpaper up and running</p>
        </div>

        {/* Device Selection */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-lg p-1 shadow-sm border">
            <Button
              variant={selectedDevice === "phone" ? "default" : "ghost"}
              onClick={() => setSelectedDevice("phone")}
              className={`flex items-center gap-2 px-6 py-3 ${
                selectedDevice === "phone"
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Phone
            </Button>
            <Button
              variant={selectedDevice === "tablet" ? "default" : "ghost"}
              onClick={() => setSelectedDevice("tablet")}
              className={`flex items-center gap-2 px-6 py-3 ${
                selectedDevice === "tablet"
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Tablet className="w-4 h-4" />
              Tablet
            </Button>
            <Button
              variant={selectedDevice === "desktop" ? "default" : "ghost"}
              onClick={() => setSelectedDevice("desktop")}
              className={`flex items-center gap-2 px-6 py-3 ${
                selectedDevice === "desktop"
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Monitor className="w-4 h-4" />
              Desktop
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Steps Section */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700 mb-2">{step.description}</p>
                  {step.details && <p className="text-gray-600 text-sm">{step.details}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className="bg-pink-200 rounded-3xl  min-h-[360px] flex flex-col gap-4 items-center justify-center overflow-hidden p-8">
            <h3 className="text-xl font-semibold text-gray-900 text-center">
                  {getDeviceTitle(selectedDevice)}
                </h3>
            <video
              className="w-full max-w-xs rounded-lg shadow-lg"
              controls
              autoPlay
              loop muted
              src={getVideoSrc(selectedDevice)}
            >
              {`Sorry, your browser doesn't support embedded videos.`}
            </video>
          </div>
        </div>
      </div>
  )
}
