"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { Star } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "../ui/button";
const avatars = [
  {
    imageUrl:
      "https://notion-avatar.app/api/svg/eyJmYWNlIjoxMywibm9zZSI6MiwibW91dGgiOjAsImV5ZXMiOjQsImV5ZWJyb3dzIjoxLCJnbGFzc2VzIjo2LCJoYWlyIjozNSwiYWNjZXNzb3JpZXMiOjAsImRldGFpbHMiOjAsImJlYXJkIjowLCJmbGlwIjowLCJjb2xvciI6InJnYmEoMjU1LCAwLCAwLCAwKSIsInNoYXBlIjoibm9uZSJ9",
    profileUrl: "#",
  },
  {
    imageUrl: "https://notion-avatar.app/api/svg/eyJmYWNlIjoxNSwibm9zZSI6NywibW91dGgiOjUsImV5ZXMiOjEwLCJleWVicm93cyI6MCwiZ2xhc3NlcyI6NCwiaGFpciI6NDksImFjY2Vzc29yaWVzIjowLCJkZXRhaWxzIjowLCJiZWFyZCI6MCwiZmxpcCI6MCwiY29sb3IiOiJyZ2JhKDI1NSwgMCwgMCwgMCkiLCJzaGFwZSI6Im5vbmUifQ==",
    profileUrl: "#",
  },
  {
    imageUrl: "https://notion-avatar.app/api/svg/eyJmYWNlIjowLCJub3NlIjo1LCJtb3V0aCI6NCwiZXllcyI6MTIsImV5ZWJyb3dzIjoxMywiZ2xhc3NlcyI6NCwiaGFpciI6MjIsImFjY2Vzc29yaWVzIjowLCJkZXRhaWxzIjowLCJiZWFyZCI6MCwiZmxpcCI6MCwiY29sb3IiOiJyZ2JhKDI1NSwgMCwgMCwgMCkiLCJzaGFwZSI6Im5vbmUifQ==",
    profileUrl: "#",
  },
  {
    imageUrl: "https://notion-avatar.app/api/svg/eyJmYWNlIjoxNCwibm9zZSI6NCwibW91dGgiOjE3LCJleWVzIjoxMSwiZXllYnJvd3MiOjAsImdsYXNzZXMiOjEsImhhaXIiOjIzLCJhY2Nlc3NvcmllcyI6MCwiZGV0YWlscyI6MCwiYmVhcmQiOjAsImZsaXAiOjAsImNvbG9yIjoicmdiYSgyNTUsIDAsIDAsIDApIiwic2hhcGUiOiJub25lIn0=",
    profileUrl: "#",
  },
  {
    imageUrl: "https://notion-avatar.app/api/svg/eyJmYWNlIjo0LCJub3NlIjoyLCJtb3V0aCI6MywiZXllcyI6OCwiZXllYnJvd3MiOjQsImdsYXNzZXMiOjEsImhhaXIiOjU1LCJhY2Nlc3NvcmllcyI6MCwiZGV0YWlscyI6MCwiYmVhcmQiOjAsImZsaXAiOjAsImNvbG9yIjoicmdiYSgyNTUsIDAsIDAsIDApIiwic2hhcGUiOiJub25lIn0=",
    profileUrl: "#",
  },
  {
    imageUrl: "https://notion-avatar.app/api/svg/eyJmYWNlIjoxNSwibm9zZSI6OCwibW91dGgiOjExLCJleWVzIjo5LCJleWVicm93cyI6MTAsImdsYXNzZXMiOjMsImhhaXIiOjQzLCJhY2Nlc3NvcmllcyI6MCwiZGV0YWlscyI6MCwiYmVhcmQiOjAsImZsaXAiOjAsImNvbG9yIjoicmdiYSgyNTUsIDAsIDAsIDApIiwic2hhcGUiOiJub25lIn0=",
    profileUrl: "#",
  },
];

export default function Hero() {
  return (
    <section className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 text-center">
          <Link href="/image-models/hunyuan-image-3-0">
            <span className="text-xs bg-yellow-400 text-yellow-900 font-semibold px-2 py-0.5 rounded-full inline-block ml-2">
              Hunyuan Image 3.0 available now!
            </span>
          </Link>
          <motion.h1
            className=" text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient">{`Transform Images with `}</span>
            <span
              className="bg-gradient-to-r from-[#5182ED]  to-[#D56575]
                    bg-clip-text
                    text-transparent"
            >{`Flux Kontext`}</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {`Use FLUX.1 Kontext to generate and edit images with simple text prompts. Fast, precise, and photorealistic results.`}
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/image-editor" >
              <Button variant="default" size="lg" className="text-xl p-4">{`Get started`}</Button>
            </Link>
            <Link href="/login" >
              <Button variant="outline" size="lg" className="text-xl p-4">{`Login`}</Button>
            </Link>
          </motion.div>

          {/* avatar circles */}
          <div className="flex items-center justify-center gap-2 p-4">
            <AvatarCircles numPeople={99} avatarUrls={avatars} />
            <div className="flex flex-col items-center space-y-3">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-lg font-medium">
                from 99+ excellent creators
              </p>
            </div>
          </div>
        </div>
        <motion.div
          className=" mt-16 lg:mt-0 rounded-2xl shadow-xl  bg-gradient-to-br from-pink-200 via-purple-200 to-teal-200 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Image
            src="https://cdn.kontextflux.io/general-source/hero-compress-1000-1000.webp"
            alt="Flowers & Saints design concept"
            width={800}
            height={600}
            priority
            className="w-[480px] "
          />
        </motion.div>
      </div>
    </section>
  );
}
