"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFFFF] shadow-lg"
          : "bg-[#FFFFFF]/95 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <Leaf className="h-8 w-8 text-[#003200]" />
          <span className="text-2xl font-bold tracking-tight text-[#003200]">
            UDBHAV
          </span>
        </a>

        <div className="hidden items-center lg:flex">
          <div className="flex items-center gap-1 rounded-full bg-[#003200]/5 p-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[#003200]/75 transition-all duration-200 hover:bg-[#003200] hover:text-[#FFFFFF]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <Link href="/login">
            <Button className="ml-2 rounded-full border border-[#003200]/20 bg-transparent text-[#003200] hover:bg-[#003200]/5 px-5">
              Login
            </Button>
          </Link>
          <Link href="/login">
            <Button className="ml-2 rounded-full bg-[#003200] text-[#FFFFFF] hover:bg-[#004d00] px-6">
              Get Started
            </Button>
          </Link>
        </div>

        <button
          className="lg:hidden text-[#003200]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#003200]/10 bg-[#FFFFFF] px-4 pb-4 lg:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#003200]/80 transition-colors hover:bg-[#003200]/5 hover:text-[#003200]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <Link href="/login" className="flex-1">
              <Button className="w-full rounded-full border border-[#003200]/20 bg-transparent text-[#003200] hover:bg-[#003200]/5">
                Login
              </Button>
            </Link>
            <Link href="/login" className="flex-1">
              <Button className="w-full rounded-full bg-[#003200] text-[#FFFFFF] hover:bg-[#004d00]">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
