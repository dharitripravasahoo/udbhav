"use client"

import { Leaf, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")

  return (
    <footer id="contact" className="bg-[#001a00] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Leaf className="h-7 w-7 text-[#4ade80]" />
              <span className="text-xl font-bold text-[#FFFFFF]">UDBHAV</span>
            </div>
            <p className="mb-6 text-sm text-[#FFFFFF]/55 leading-relaxed">
              AI-powered smart agriculture platform helping farmers detect plant
              diseases, predict yields, and make data-driven decisions.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact@udbhav.in"
                className="flex items-center gap-2 text-sm text-[#FFFFFF]/55 hover:text-[#4ade80] transition-colors"
              >
                <Mail className="h-4 w-4" />
                contact@udbhav.in
              </a>
              <a
                href="tel:+911800123456"
                className="flex items-center gap-2 text-sm text-[#FFFFFF]/55 hover:text-[#4ade80] transition-colors"
              >
                <Phone className="h-4 w-4" />
                1800-123-456 (Toll Free)
              </a>
              <span className="flex items-center gap-2 text-sm text-[#FFFFFF]/55">
                <MapPin className="h-4 w-4 shrink-0" />
                Hyderabad, Telangana, India
              </span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[#FFFFFF]">Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                "Home",
                "About",
                "Features",
                "How It Works",
                "Pricing",
                "FAQ",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-sm text-[#FFFFFF]/55 transition-colors hover:text-[#4ade80]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[#FFFFFF]">Resources</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                "Blog",
                "Help Center",
                "API Documentation",
                "Community Forum",
                "Privacy Policy",
                "Terms of Service",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[#FFFFFF]/55 transition-colors hover:text-[#4ade80]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[#FFFFFF]">Newsletter</h3>
            <p className="mb-4 text-sm text-[#FFFFFF]/55">
              Get the latest farming tips, product updates, and agricultural
              insights delivered to your inbox.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="rounded-full border border-[#FFFFFF]/15 bg-[#FFFFFF]/5 px-5 py-2.5 text-sm text-[#FFFFFF] placeholder:text-[#FFFFFF]/35 focus:border-[#4ade80]/40 focus:outline-none"
              />
              <Button className="rounded-full bg-[#4ade80] text-[#003200] hover:bg-[#22c55e] font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#FFFFFF]/10 pt-8 text-center">
          <p className="text-sm text-[#FFFFFF]/40">
            &copy; {new Date().getFullYear()} UDBHAV. All rights reserved. Made
            with care for Indian farmers.
          </p>
        </div>
      </div>
    </footer>
  )
}
