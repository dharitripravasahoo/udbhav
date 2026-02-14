import { Languages } from "lucide-react"

const languages = [
  { name: "English", native: "English", flag: "EN" },
  { name: "Hindi", native: "हिन्दी", flag: "HI" },
  { name: "Tamil", native: "தமிழ்", flag: "TA" },
  { name: "Telugu", native: "తెలుగు", flag: "TE" },
  { name: "Kannada", native: "ಕನ್ನಡ", flag: "KN" },
  { name: "Malayalam", native: "മലയാളം", flag: "ML" },
  { name: "Marathi", native: "मराठी", flag: "MR" },
  { name: "Bengali", native: "বাংলা", flag: "BN" },
  { name: "Gujarati", native: "ગુજરાતી", flag: "GU" },
  { name: "Punjabi", native: "ਪੰਜਾਬੀ", flag: "PA" },
  { name: "Odia", native: "ଓଡ଼ିଆ", flag: "OR" },
  { name: "Assamese", native: "অসমীয়া", flag: "AS" },
]

export default function MultilingualSection() {
  return (
    <section className="bg-[#FFFFFF] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#16a34a]/10 p-3">
            <Languages className="h-8 w-8 text-[#16a34a]" />
          </div>
          <h2 className="mb-4 text-3xl font-bold text-[#003200] text-balance lg:text-4xl">
            Available in 12+ Indian Languages
          </h2>
          <p className="mx-auto max-w-2xl text-[#003200]/65 text-pretty">
            We believe language should never be a barrier to accessing
            technology. UDBHAV speaks the language of every farmer.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {languages.map((lang) => (
            <div
              key={lang.flag}
              className="group flex flex-col items-center rounded-2xl border border-[#16a34a]/10 bg-[#FFFFFF] p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-[#16a34a]/30 hover:shadow-md"
            >
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#16a34a]/10 text-sm font-bold text-[#003200] transition-colors group-hover:bg-[#16a34a] group-hover:text-[#FFFFFF]">
                {lang.flag}
              </span>
              <p className="text-sm font-semibold text-[#003200]">
                {lang.name}
              </p>
              <p className="text-xs text-[#003200]/50">{lang.native}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
