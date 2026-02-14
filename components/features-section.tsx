import {
  ScanLine,
  BarChart3,
  Sprout,
  CloudSun,
  Languages,
  LayoutDashboard,
} from "lucide-react"

const features = [
  {
    icon: ScanLine,
    title: "Plant Disease Detection",
    description:
      "Upload an image of your plant or leaf and our AI will instantly identify diseases and provide treatment recommendations.",
  },
  {
    icon: BarChart3,
    title: "Yield Prediction",
    description:
      "Leverage AI/ML models to accurately predict crop yields based on soil, weather, and historical data.",
  },
  {
    icon: Sprout,
    title: "Smart Recommendations",
    description:
      "Get personalized fertilizer and pesticide suggestions tailored to your specific crop and soil conditions.",
  },
  {
    icon: CloudSun,
    title: "Weather-Based Alerts",
    description:
      "Receive real-time weather alerts and advisories to protect your crops from adverse conditions.",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description:
      "Use the platform in Hindi, Tamil, Telugu, Kannada, Marathi, Bengali, and many more regional languages.",
  },
  {
    icon: LayoutDashboard,
    title: "Farmer Dashboard",
    description:
      "Track all your farm analytics, crop health history, and predictions in one powerful, easy-to-use dashboard.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="relative bg-[#003200] py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 h-32 w-32 rounded-full bg-[#4ade80]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#4ade80]/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-2 inline-block rounded-full bg-[#4ade80]/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-[#4ade80]">
            What We Offer
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#FFFFFF] text-balance lg:text-4xl">
            Powerful Features for Modern Farming
          </h2>
          <p className="mx-auto max-w-2xl text-[#FFFFFF]/65 text-pretty">
            Our AI-powered platform provides everything farmers need to make
            data-driven decisions and maximize their agricultural output.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl bg-[#FFFFFF] p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#16a34a]/10 transition-colors group-hover:bg-[#003200]">
                <feature.icon className="h-7 w-7 text-[#16a34a] transition-colors group-hover:text-[#4ade80]" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#003200]">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#003200]/65">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
