import { Camera, Cpu, FileText, LineChart } from "lucide-react"

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Capture Image",
    description:
      "Take a photo of the plant or leaf using your smartphone camera.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Analysis",
    description:
      "Our AI engine analyzes the image to detect diseases with high accuracy.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Get Suggestions",
    description:
      "Receive instant treatment recommendations and actionable steps.",
  },
  {
    icon: LineChart,
    step: "04",
    title: "Track Analytics",
    description:
      "Monitor your crop health trends and yield predictions over time.",
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#f0fdf4] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-2 inline-block rounded-full bg-[#003200]/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-[#003200]/60">
            Simple Process
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#003200] text-balance lg:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-[#003200]/65 text-pretty">
            Get started in just four easy steps. No technical knowledge needed.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-0.5 w-full translate-x-1/2 bg-[#4ade80]/25 lg:block" />
              )}
              <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#FFFFFF] shadow-lg ring-4 ring-[#4ade80]/20">
                <item.icon className="h-10 w-10 text-[#16a34a]" />
                <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#16a34a] text-xs font-bold text-[#FFFFFF]">
                  {item.step}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#003200]">
                {item.title}
              </h3>
              <p className="text-sm text-[#003200]/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
