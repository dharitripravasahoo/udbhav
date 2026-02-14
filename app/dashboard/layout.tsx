"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Leaf,
  LayoutDashboard,
  ScanLine,
  History,
  CloudSun,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from "lucide-react"

const sidebarLinks = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Scan Crop", href: "/dashboard/scan", icon: ScanLine },
  { label: "Scan History", href: "/dashboard/scan", icon: History },
  { label: "Weather", href: "/dashboard/scan", icon: CloudSun },
  { label: "Analytics", href: "/dashboard/scan", icon: BarChart3 },
  { label: "Settings", href: "/dashboard/scan", icon: Settings },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-[#001a00]">
      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 flex h-full w-72 flex-col bg-[#003200] transition-transform duration-300 lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between border-b border-[#FFFFFF]/10 px-6 py-5">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-7 w-7 text-[#4ade80]" />
            <span className="text-xl font-bold text-[#FFFFFF]">UDBHAV</span>
          </Link>
          <button
            className="text-[#FFFFFF]/60 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <div className="flex flex-col gap-1.5">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#4ade80] text-[#003200] shadow-lg shadow-[#4ade80]/20"
                      : "text-[#FFFFFF]/70 hover:bg-[#FFFFFF]/10 hover:text-[#FFFFFF]"
                  }`}
                >
                  <link.icon className="h-5 w-5" />
                  {link.label}
                  {isActive && <ChevronRight className="ml-auto h-4 w-4" />}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Logout */}
        <div className="border-t border-[#FFFFFF]/10 px-4 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#FFFFFF]/60 transition-colors hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex items-center gap-4 border-b border-[#FFFFFF]/10 bg-[#001a00]/90 px-4 py-4 backdrop-blur-md lg:px-8">
          <button
            className="text-[#FFFFFF]/70 lg:hidden"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex-1" />
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4ade80]/20 text-sm font-bold text-[#4ade80]">
              U
            </div>
            <span className="hidden text-sm font-medium text-[#FFFFFF]/80 sm:block">
              Farmer
            </span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
