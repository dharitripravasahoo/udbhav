import Image from "next/image"
import { Target, Eye, Heart } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#FFFFFF] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[#4ade80]/10" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/about-farming.jpg"
                alt="Farmers using modern technology in the field"
                width={600}
                height={450}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-[#003200] p-6 text-[#FFFFFF] shadow-xl lg:block">
              <p className="text-3xl font-bold">5+</p>
              <p className="text-sm text-[#FFFFFF]/80">Years of Impact</p>
            </div>
          </div>

          <div>
            <span className="mb-2 inline-block rounded-full bg-[#003200]/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-[#003200]/60">
              About UDBHAV
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#003200] text-balance lg:text-4xl">
              Empowering Farmers with{" "}
              <span className="text-[#16a34a]">AI-Driven Agriculture</span>
            </h2>
            <p className="mb-8 text-[#003200]/70 leading-relaxed">
              UDBHAV is on a mission to transform agriculture by putting the
              power of artificial intelligence directly into the hands of
              farmers. We believe every farmer, regardless of their farm size or
              technical expertise, deserves access to cutting-edge tools that can
              help them grow healthier crops and increase their yield.
            </p>

            <div className="flex flex-col gap-6">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  desc: "Helping farmers increase productivity using AI and smart technology.",
                },
                {
                  icon: Eye,
                  title: "Our Vision",
                  desc: "A future where every farmer has access to precision agriculture tools.",
                },
                {
                  icon: Heart,
                  title: "Our Values",
                  desc: "Sustainability, accessibility, and empowering rural communities.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#16a34a]/10">
                    <item.icon className="h-6 w-6 text-[#16a34a]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#003200]">{item.title}</h3>
                    <p className="text-sm text-[#003200]/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
