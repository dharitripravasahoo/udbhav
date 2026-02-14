import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Madhya Pradesh",
    image: "/images/farmer-1.jpg",
    quote:
      "UDBHAV helped me identify a fungal infection in my wheat crop early. The treatment suggestions saved my entire harvest this season.",
    rating: 5,
    yield: "40% yield increase",
  },
  {
    name: "Lakshmi Devi",
    location: "Andhra Pradesh",
    image: "/images/farmer-2.jpg",
    quote:
      "The multilingual support in Telugu made it so easy for me to use. The weather alerts have been incredibly accurate and helpful.",
    rating: 5,
    yield: "30% cost reduction",
  },
  {
    name: "Arjun Singh",
    location: "Punjab",
    image: "/images/farmer-3.jpg",
    quote:
      "The yield prediction feature helped me plan my resources better. I now know exactly how much to invest in each season.",
    rating: 5,
    yield: "35% yield increase",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#FFFFFF] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-[#003200]/50">
            Farmer Stories
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#003200] text-balance lg:text-4xl">
            Trusted by Thousands of Farmers
          </h2>
          <p className="mx-auto max-w-2xl text-[#003200]/65 text-pretty">
            Hear from real farmers who have transformed their farming practices
            with UDBHAV.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-[#003200]/10 bg-[#FFFFFF] p-8 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="mb-6 text-[#003200]/70 leading-relaxed italic">
                {'"'}
                {t.quote}
                {'"'}
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#003200]">{t.name}</p>
                  <p className="text-xs text-[#003200]/50">{t.location}</p>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-[#003200]/5 px-3 py-2 text-center">
                <p className="text-sm font-semibold text-[#003200]">
                  {t.yield}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
