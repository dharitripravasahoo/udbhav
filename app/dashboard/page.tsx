"use client"

import Link from "next/link"
import {
  ScanLine,
  Leaf,
  CloudSun,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Activity,
  Calendar,
} from "lucide-react"

const quickStats = [
  {
    label: "Total Scans",
    value: "0",
    icon: ScanLine,
    color: "#4ade80",
    bgColor: "#4ade80",
  },
  {
    label: "Healthy Crops",
    value: "--",
    icon: ShieldCheck,
    color: "#22c55e",
    bgColor: "#22c55e",
  },
  {
    label: "Diseases Found",
    value: "--",
    icon: Activity,
    color: "#fb923c",
    bgColor: "#fb923c",
  },
  {
    label: "This Month",
    value: "0",
    icon: Calendar,
    color: "#38bdf8",
    bgColor: "#38bdf8",
  },
]

const recentScans = [
  {
    crop: "Rice (Paddy)",
    result: "Healthy",
    confidence: "96%",
    date: "Start scanning to see results",
    status: "healthy",
  },
]

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#FFFFFF]">
          Welcome to <span className="text-[#4ade80]">UDBHAV</span>
        </h1>
        <p className="mt-2 text-[#FFFFFF]/60">
          Your AI-powered crop health assistant. Scan your crops to get started.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {quickStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-[#FFFFFF]/10 bg-[#003200]/60 p-5 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#FFFFFF]/60">{stat.label}</span>
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${stat.bgColor}20` }}
              >
                <stat.icon className="h-4 w-4" style={{ color: stat.color }} />
              </div>
            </div>
            <p className="mt-3 text-2xl font-bold text-[#FFFFFF]">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main CTA - Scan Crop */}
      <Link
        href="/dashboard/scan"
        className="group mb-8 flex items-center gap-6 overflow-hidden rounded-2xl border border-[#4ade80]/30 bg-gradient-to-r from-[#003200] to-[#004d00] p-6 transition-all hover:border-[#4ade80]/60 hover:shadow-xl hover:shadow-[#4ade80]/10 lg:p-8"
      >
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#4ade80]/20 transition-transform group-hover:scale-110 lg:h-20 lg:w-20">
          <ScanLine className="h-8 w-8 text-[#4ade80] lg:h-10 lg:w-10" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-[#FFFFFF] lg:text-2xl">
            Scan Your Crop
          </h2>
          <p className="mt-1 text-sm text-[#FFFFFF]/60 lg:text-base">
            Take a photo or upload an image of your crop leaf to detect diseases
            instantly with AI.
          </p>
        </div>
        <ArrowRight className="h-6 w-6 shrink-0 text-[#4ade80] transition-transform group-hover:translate-x-2" />
      </Link>

      {/* Two columns - Features + Recent */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Quick Features */}
        <div className="rounded-2xl border border-[#FFFFFF]/10 bg-[#003200]/40 p-6">
          <h3 className="mb-4 text-lg font-semibold text-[#FFFFFF]">
            Quick Actions
          </h3>
          <div className="flex flex-col gap-3">
            {[
              {
                icon: Leaf,
                label: "Disease Detection",
                desc: "AI-powered crop analysis",
                color: "#4ade80",
              },
              {
                icon: TrendingUp,
                label: "Yield Prediction",
                desc: "Estimate your harvest",
                color: "#22c55e",
              },
              {
                icon: CloudSun,
                label: "Weather Alerts",
                desc: "Real-time local weather",
                color: "#38bdf8",
              },
            ].map((item) => (
              <Link
                href="/dashboard/scan"
                key={item.label}
                className="flex items-center gap-4 rounded-xl border border-[#FFFFFF]/5 bg-[#FFFFFF]/5 p-4 transition-colors hover:bg-[#FFFFFF]/10"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <item.icon className="h-5 w-5" style={{ color: item.color }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#FFFFFF]">{item.label}</p>
                  <p className="text-xs text-[#FFFFFF]/50">{item.desc}</p>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 text-[#FFFFFF]/30" />
              </Link>
            ))}
          </div>
        </div>

        {/* Recent scans */}
        <div className="rounded-2xl border border-[#FFFFFF]/10 bg-[#003200]/40 p-6">
          <h3 className="mb-4 text-lg font-semibold text-[#FFFFFF]">
            Recent Scans
          </h3>
          {recentScans.length > 0 ? (
            <div className="flex flex-col gap-3">
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#FFFFFF]/15 py-12 text-center">
                <ScanLine className="mb-3 h-10 w-10 text-[#FFFFFF]/20" />
                <p className="text-sm font-medium text-[#FFFFFF]/50">
                  No scans yet
                </p>
                <p className="mt-1 text-xs text-[#FFFFFF]/30">
                  Scan your first crop to see results here
                </p>
                <Link
                  href="/dashboard/scan"
                  className="mt-4 rounded-full bg-[#4ade80]/20 px-5 py-2 text-sm font-medium text-[#4ade80] transition-colors hover:bg-[#4ade80]/30"
                >
                  Start Scanning
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
