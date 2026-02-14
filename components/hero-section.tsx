import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <Image
        src="/images/hero-farmer.jpg"
        alt="Indian farmer working in a lush green field"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#003200]/75 via-[#003200]/65 to-[#003200]/80" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 text-center lg:px-8">
        <span className="mb-4 inline-block rounded-full border border-[#4ade80]/40 bg-[#4ade80]/15 px-5 py-2 text-sm font-medium text-[#FFFFFF] backdrop-blur-sm">
          AI-Powered Smart Agriculture
        </span>
        <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-[#FFFFFF] text-balance md:text-5xl lg:text-7xl">
          Grow the Future with{" "}
          <span className="text-[#4ade80]">Smart Agriculture</span>
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-[#FFFFFF]/85 text-pretty md:text-xl">
          AI-powered plant disease detection, yield prediction, and smart
          farming insights to help every farmer thrive.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/login">
            <Button
              size="lg"
              className="rounded-full bg-[#4ade80] text-[#003200] hover:bg-[#22c55e] font-semibold px-8 py-6 text-base"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="#features">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-[#FFFFFF]/40 bg-transparent text-[#FFFFFF] hover:bg-[#FFFFFF]/10 hover:text-[#FFFFFF] px-8 py-6 text-base"
            >
              <Play className="mr-2 h-5 w-5" />
              Explore Features
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 md:gap-16">
          {[
            { number: "98%", label: "Detection Accuracy" },
            { number: "35%", label: "Yield Increase" },
            { number: "12+", label: "Languages" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-[#4ade80] md:text-4xl">
                {stat.number}
              </p>
              <p className="mt-1 text-sm text-[#FFFFFF]/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
