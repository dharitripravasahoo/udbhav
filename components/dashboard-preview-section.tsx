import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function DashboardPreviewSection() {
  return (
    <section className="relative bg-[#003200] py-20 lg:py-28 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#4ade80]/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-[#4ade80]/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-[#4ade80]">
            Dashboard Preview
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#FFFFFF] text-balance lg:text-4xl">
            Your Farm, at a Glance
          </h2>
          <p className="mx-auto max-w-2xl text-[#FFFFFF]/65 text-pretty">
            Monitor crop health, view disease alerts, track yield predictions,
            and get smart recommendations all in one place.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-[#4ade80]/15 shadow-2xl">
            <Image
              src="/images/dashboard-preview.jpg"
              alt="UDBHAV farmer dashboard showing crop health analytics"
              width={1200}
              height={700}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-xl bg-[#FFFFFF] p-4 shadow-xl lg:block">
            <p className="text-2xl font-bold text-[#16a34a]">98%</p>
            <p className="text-xs text-[#003200]/60">Disease Accuracy</p>
          </div>
          <div className="absolute -right-4 -top-4 hidden rounded-xl bg-[#FFFFFF] p-4 shadow-xl lg:block">
            <p className="text-2xl font-bold text-[#16a34a]">Real-Time</p>
            <p className="text-xs text-[#003200]/60">Weather Updates</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="rounded-full bg-[#4ade80] text-[#003200] hover:bg-[#22c55e] font-semibold px-8"
          >
            Try Dashboard Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
