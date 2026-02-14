import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "0",
    period: "Forever",
    description: "Basic access for all farmers",
    features: [
      "Limited image uploads",
      "Basic disease detection",
      "Community forum access",
      "General weather info",
    ],
    popular: false,
    cta: "Start Free",
  },
  {
    name: "Free Trial",
    price: "0",
    period: "14 days",
    description: "Try premium features risk-free",
    features: [
      "Full feature access",
      "Unlimited image uploads",
      "All premium AI tools",
      "Advanced recommendations",
    ],
    popular: false,
    cta: "Start 14-Day Trial",
  },
  {
    name: "Monthly",
    price: "59",
    period: "/month",
    description: "Affordable monthly access",
    features: [
      "Everything in Free Trial",
      "Daily weather alerts",
      "Market price tracking",
      "Expert consultation (1/mo)",
    ],
    popular: true,
    cta: "Choose Monthly",
  },
  {
    name: "3-Month",
    price: "169",
    period: "/quarter",
    description: "Better value for a quarter",
    features: [
      "Everything in Monthly",
      "Priority AI processing",
      "Disease heatmaps",
      "Offline mode access",
    ],
    popular: true,
    cta: "Choose 3-Month",
  },
  {
    name: "Half-Yearly",
    price: "329",
    period: "/6 months",
    description: "Maximum savings for a season",
    features: [
      "Everything in 3-Month",
      "Custom soil analysis",
      "Full harvest analytics",
      "Dedicated chat support",
    ],
    popular: false,
    cta: "Choose 6-Month",
  },
  {
    name: "Yearly",
    price: "599",
    period: "/year",
    description: "Full year of premium growth",
    features: [
      "Everything in 6-Month",
      "Advanced yield reports",
      "Multi-device support",
      "1-on-1 expert call",
    ],
    popular: false,
    cta: "Choose Yearly",
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="relative bg-[#003200] py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-20 right-0 h-64 w-64 rounded-full bg-[#4ade80]/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-2 inline-block rounded-full bg-[#4ade80]/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-[#4ade80]">
            Affordable Plans
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#FFFFFF] text-balance lg:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mx-auto max-w-2xl text-[#FFFFFF]/65 text-pretty">
            Flexible pricing designed for every farmer. Start with a free trial
            and upgrade anytime.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${plan.popular
                ? "bg-[#FFFFFF] shadow-2xl ring-2 ring-[#4ade80] lg:scale-105"
                : "bg-[#FFFFFF]/95 shadow-lg"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#16a34a] px-4 py-1.5 text-xs font-semibold text-[#FFFFFF]">
                  <Star className="h-3 w-3 fill-current" />
                  Most Popular
                </div>
              )}

              <h3 className="mb-1 text-lg font-bold text-[#003200]">
                {plan.name}
              </h3>
              <p className="mb-4 text-xs text-[#003200]/55">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-[#003200]">
                  {"₹"}
                  {plan.price}
                </span>
                <span className="text-sm text-[#003200]/55">{plan.period}</span>
              </div>

              <ul className="mb-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-[#003200]/75"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#16a34a]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full font-semibold ${plan.popular
                  ? "bg-[#16a34a] text-[#FFFFFF] hover:bg-[#15803d]"
                  : "bg-[#003200]/10 text-[#003200] hover:bg-[#003200] hover:text-[#FFFFFF]"
                  }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
