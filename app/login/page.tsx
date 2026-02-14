"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Leaf, Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      router.push("/dashboard")
    }, 1200)
  }

  return (
    <div className="relative flex min-h-screen">
      {/* Left side - Branding panel */}
      <div className="relative hidden w-1/2 overflow-hidden lg:block">
        <Image
          src="/images/login-bg.jpg"
          alt="Lush green agricultural fields"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#003200]/85 via-[#003200]/70 to-[#003200]/90" />
        <div className="relative z-10 flex h-full flex-col justify-between p-12">
          <Link href="/" className="flex items-center gap-3">
            <Leaf className="h-10 w-10 text-[#4ade80]" />
            <span className="text-3xl font-bold text-[#FFFFFF]">UDBHAV</span>
          </Link>

          <div className="max-w-md">
            <h2 className="mb-4 text-4xl font-bold leading-tight text-[#FFFFFF] text-balance">
              Smart Farming Starts{" "}
              <span className="text-[#4ade80]">Here</span>
            </h2>
            <p className="text-lg text-[#FFFFFF]/80 leading-relaxed">
              Scan your crops, detect diseases instantly, and get AI-powered
              recommendations to maximize your yield.
            </p>
            <div className="mt-8 flex gap-6">
              {[
                { value: "98%", label: "Accuracy" },
                { value: "12+", label: "Languages" },
                { value: "Instant", label: "Results" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-[#4ade80]">{stat.value}</p>
                  <p className="text-sm text-[#FFFFFF]/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-[#FFFFFF]/40">
            Empowering farmers with AI technology
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex w-full flex-col items-center justify-center bg-[#003200] px-6 py-12 lg:w-1/2">
        {/* Mobile logo */}
        <Link href="/" className="mb-8 flex items-center gap-2 lg:hidden">
          <Leaf className="h-8 w-8 text-[#4ade80]" />
          <span className="text-2xl font-bold text-[#FFFFFF]">UDBHAV</span>
        </Link>

        <div className="w-full max-w-md">
          {/* Toggle */}
          <div className="mb-8 flex rounded-full bg-[#FFFFFF]/10 p-1.5">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 rounded-full py-3 text-sm font-semibold transition-all ${
                isLogin
                  ? "bg-[#4ade80] text-[#003200] shadow-lg"
                  : "text-[#FFFFFF]/70 hover:text-[#FFFFFF]"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 rounded-full py-3 text-sm font-semibold transition-all ${
                !isLogin
                  ? "bg-[#4ade80] text-[#003200] shadow-lg"
                  : "text-[#FFFFFF]/70 hover:text-[#FFFFFF]"
              }`}
            >
              Sign Up
            </button>
          </div>

          <h1 className="mb-2 text-3xl font-bold text-[#FFFFFF]">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="mb-8 text-[#FFFFFF]/60">
            {isLogin
              ? "Sign in to access your crop dashboard"
              : "Join thousands of smart farmers today"}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {!isLogin && (
              <div className="flex flex-col gap-2">
                <Label className="text-[#FFFFFF]/80">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#FFFFFF]/40" />
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    required={!isLogin}
                    className="rounded-xl border-[#FFFFFF]/20 bg-[#FFFFFF]/10 pl-11 py-6 text-[#FFFFFF] placeholder:text-[#FFFFFF]/30 focus:border-[#4ade80] focus:ring-[#4ade80]"
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <Label className="text-[#FFFFFF]/80">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#FFFFFF]/40" />
                <Input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="rounded-xl border-[#FFFFFF]/20 bg-[#FFFFFF]/10 pl-11 py-6 text-[#FFFFFF] placeholder:text-[#FFFFFF]/30 focus:border-[#4ade80] focus:ring-[#4ade80]"
                />
              </div>
            </div>

            {!isLogin && (
              <div className="flex flex-col gap-2">
                <Label className="text-[#FFFFFF]/80">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#FFFFFF]/40" />
                  <Input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="rounded-xl border-[#FFFFFF]/20 bg-[#FFFFFF]/10 pl-11 py-6 text-[#FFFFFF] placeholder:text-[#FFFFFF]/30 focus:border-[#4ade80] focus:ring-[#4ade80]"
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Label className="text-[#FFFFFF]/80">Password</Label>
                {isLogin && (
                  <button type="button" className="text-xs text-[#4ade80] hover:underline">
                    Forgot Password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#FFFFFF]/40" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="rounded-xl border-[#FFFFFF]/20 bg-[#FFFFFF]/10 pl-11 pr-11 py-6 text-[#FFFFFF] placeholder:text-[#FFFFFF]/30 focus:border-[#4ade80] focus:ring-[#4ade80]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#FFFFFF]/40 hover:text-[#FFFFFF]/70"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="flex flex-col gap-2">
                <Label className="text-[#FFFFFF]/80">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#FFFFFF]/40" />
                  <Input
                    type="password"
                    placeholder="Confirm your password"
                    required={!isLogin}
                    className="rounded-xl border-[#FFFFFF]/20 bg-[#FFFFFF]/10 pl-11 py-6 text-[#FFFFFF] placeholder:text-[#FFFFFF]/30 focus:border-[#4ade80] focus:ring-[#4ade80]"
                  />
                </div>
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="mt-2 rounded-full bg-[#4ade80] py-6 text-base font-semibold text-[#003200] hover:bg-[#22c55e] disabled:opacity-70"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#003200] border-t-transparent" />
                  {isLogin ? "Signing in..." : "Creating account..."}
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  {isLogin ? "Sign In" : "Create Account"}
                  <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#FFFFFF]/15" />
            <span className="text-xs text-[#FFFFFF]/40">or continue with</span>
            <div className="h-px flex-1 bg-[#FFFFFF]/15" />
          </div>

          {/* Social */}
          <div className="flex gap-3">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#FFFFFF]/20 bg-[#FFFFFF]/5 py-3 text-sm text-[#FFFFFF]/80 transition-colors hover:bg-[#FFFFFF]/10">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#FFFFFF]/20 bg-[#FFFFFF]/5 py-3 text-sm text-[#FFFFFF]/80 transition-colors hover:bg-[#FFFFFF]/10">
              <Phone className="h-4 w-4" />
              Phone OTP
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-[#FFFFFF]/50">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-semibold text-[#4ade80] hover:underline"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
