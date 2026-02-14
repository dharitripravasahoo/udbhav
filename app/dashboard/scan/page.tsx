"use client"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"
import {
  Camera,
  Upload,
  X,
  ScanLine,
  AlertTriangle,
  CheckCircle2,
  Leaf,
  Droplets,
  Bug,
  ShieldCheck,
  RotateCcw,
  Download,
  ArrowLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

interface DiseaseResult {
  name: string
  confidence: number
  severity: "Low" | "Medium" | "High" | "None"
  affectedArea: number
  description: string
  symptoms: string[]
  treatments: string[]
  preventions: string[]
  isHealthy: boolean
}

const mockDiseases: DiseaseResult[] = [
  {
    name: "Leaf Blight",
    confidence: 94,
    severity: "High",
    affectedArea: 35,
    description:
      "Leaf blight is a common fungal disease that causes brown, water-soaked lesions on leaves. It spreads rapidly in warm, humid conditions and can significantly reduce crop yield if untreated.",
    symptoms: [
      "Brown oval-shaped lesions on leaves",
      "Yellow halos around affected areas",
      "Wilting and drying of leaf tips",
      "Premature leaf drop",
    ],
    treatments: [
      "Apply Mancozeb 75% WP at 2g/L water",
      "Spray Copper Oxychloride at 3g/L",
      "Use Tricyclazole 75% WP for severe cases",
      "Remove and destroy heavily infected leaves",
    ],
    preventions: [
      "Use resistant crop varieties",
      "Maintain proper plant spacing for airflow",
      "Avoid overhead irrigation",
      "Rotate crops every season",
    ],
    isHealthy: false,
  },
  {
    name: "Powdery Mildew",
    confidence: 89,
    severity: "Medium",
    affectedArea: 22,
    description:
      "Powdery mildew appears as white powdery spots on leaf surfaces. It thrives in warm, dry climates with cool nights and reduces photosynthesis, leading to stunted growth.",
    symptoms: [
      "White or gray powdery coating on leaves",
      "Curling and distortion of young leaves",
      "Yellowing of lower leaves",
      "Reduced flowering and fruit set",
    ],
    treatments: [
      "Apply Sulphur 80% WP at 3g/L water",
      "Spray Karathane (Dinocap) at 1ml/L",
      "Use neem oil spray (5ml/L) as organic option",
      "Apply baking soda solution (1 tbsp/gallon)",
    ],
    preventions: [
      "Ensure adequate sunlight exposure",
      "Avoid excess nitrogen fertilization",
      "Improve air circulation between plants",
      "Water at the base, not on foliage",
    ],
    isHealthy: false,
  },
  {
    name: "Bacterial Leaf Spot",
    confidence: 91,
    severity: "Medium",
    affectedArea: 18,
    description:
      "Bacterial leaf spot causes dark, water-soaked spots on leaves that may merge and cause large areas of dead tissue. It spreads through water splash and contaminated tools.",
    symptoms: [
      "Dark brown water-soaked spots on leaves",
      "Spots may have yellow borders",
      "Lesions may coalesce forming large patches",
      "Defoliation in severe cases",
    ],
    treatments: [
      "Apply Streptocycline at 0.5g/L water",
      "Spray Copper Hydroxide at 2g/L",
      "Use Bordeaux mixture (1%) as preventive",
      "Remove infected plant debris immediately",
    ],
    preventions: [
      "Use certified disease-free seeds",
      "Sanitize pruning tools between plants",
      "Avoid working with wet plants",
      "Practice crop rotation with non-hosts",
    ],
    isHealthy: false,
  },
  {
    name: "Rust Disease",
    confidence: 87,
    severity: "High",
    affectedArea: 40,
    description:
      "Rust disease is characterized by orange-brown pustules on the undersides of leaves. It can spread rapidly through wind-borne spores and cause significant yield loss.",
    symptoms: [
      "Orange-brown raised pustules on leaf undersides",
      "Yellow spots on upper leaf surface",
      "Premature leaf fall",
      "Weakened stems and reduced vigor",
    ],
    treatments: [
      "Apply Propiconazole 25% EC at 1ml/L",
      "Spray Hexaconazole at 2ml/L water",
      "Use Triadimefon 25% WP at 1g/L",
      "Destroy infected crop residues after harvest",
    ],
    preventions: [
      "Plant rust-resistant varieties",
      "Maintain proper field sanitation",
      "Avoid dense planting patterns",
      "Apply preventive fungicide sprays during monsoon",
    ],
    isHealthy: false,
  },
  {
    name: "Healthy Plant",
    confidence: 97,
    severity: "None",
    affectedArea: 0,
    description:
      "Your crop appears healthy with no signs of disease, pest damage, or nutritional deficiency. The leaves show good color, structure, and vitality.",
    symptoms: [],
    treatments: [],
    preventions: [
      "Continue regular watering schedule",
      "Apply balanced NPK fertilizer as needed",
      "Monitor regularly for early signs of stress",
      "Maintain soil health with organic matter",
    ],
    isHealthy: true,
  },
]

type Stage = "upload" | "processing" | "results"

export default function ScanPage() {
  const [stage, setStage] = useState<Stage>("upload")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [result, setResult] = useState<DiseaseResult | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const cameraInputRef = useRef<HTMLInputElement>(null)

  const handleImageSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setSelectedImage(reader.result as string)
        }
        reader.readAsDataURL(file)
      }
    },
    []
  )

  const handleAnalyze = useCallback(() => {
    setStage("processing")
    setProgress(0)

    const steps = [
      { target: 15, delay: 300 },
      { target: 30, delay: 600 },
      { target: 50, delay: 400 },
      { target: 65, delay: 500 },
      { target: 80, delay: 400 },
      { target: 92, delay: 500 },
      { target: 100, delay: 300 },
    ]

    let totalDelay = 0
    steps.forEach((step) => {
      totalDelay += step.delay
      setTimeout(() => {
        setProgress(step.target)
      }, totalDelay)
    })

    setTimeout(() => {
      const randomDisease =
        mockDiseases[Math.floor(Math.random() * mockDiseases.length)]
      setResult(randomDisease)
      setStage("results")
    }, totalDelay + 500)
  }, [])

  const handleReset = useCallback(() => {
    setStage("upload")
    setSelectedImage(null)
    setProgress(0)
    setResult(null)
  }, [])

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return { bg: "bg-red-500/20", text: "text-red-400", bar: "bg-red-500" }
      case "Medium":
        return {
          bg: "bg-amber-500/20",
          text: "text-amber-400",
          bar: "bg-amber-500",
        }
      case "Low":
        return {
          bg: "bg-yellow-500/20",
          text: "text-yellow-400",
          bar: "bg-yellow-500",
        }
      default:
        return {
          bg: "bg-[#4ade80]/20",
          text: "text-[#4ade80]",
          bar: "bg-[#4ade80]",
        }
    }
  }

  return (
    <div className="mx-auto max-w-4xl">
      {/* Header */}
      <div className="mb-6 flex items-center gap-4">
        <Link
          href="/dashboard"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFFFFF]/10 text-[#FFFFFF]/60 transition-colors hover:bg-[#FFFFFF]/20 hover:text-[#FFFFFF]"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-[#FFFFFF]">Scan Your Crop</h1>
          <p className="text-sm text-[#FFFFFF]/50">
            Upload or capture a photo to detect diseases
          </p>
        </div>
      </div>

      {/* Upload Stage */}
      {stage === "upload" && (
        <div className="flex flex-col gap-6">
          {/* Image preview or upload area */}
          {selectedImage ? (
            <div className="relative overflow-hidden rounded-2xl border border-[#FFFFFF]/15 bg-[#003200]/40">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={selectedImage}
                  alt="Selected crop image"
                  fill
                  className="object-contain"
                />
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-[#FFFFFF] backdrop-blur-sm transition-colors hover:bg-black/70"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div
                onClick={() => fileInputRef.current?.click()}
                className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#FFFFFF]/20 bg-[#003200]/30 px-6 py-16 transition-all hover:border-[#4ade80]/50 hover:bg-[#003200]/50"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4ade80]/15 transition-transform group-hover:scale-110">
                  <Upload className="h-8 w-8 text-[#4ade80]" />
                </div>
                <p className="text-lg font-semibold text-[#FFFFFF]">
                  Upload Crop Image
                </p>
                <p className="mt-1 text-sm text-[#FFFFFF]/50">
                  Drag and drop or click to browse
                </p>
                <p className="mt-2 text-xs text-[#FFFFFF]/30">
                  Supports JPG, PNG, WEBP up to 10MB
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-[#FFFFFF]/10" />
                <span className="text-xs font-medium text-[#FFFFFF]/30">OR</span>
                <div className="h-px flex-1 bg-[#FFFFFF]/10" />
              </div>

              <button
                onClick={() => cameraInputRef.current?.click()}
                className="group flex items-center justify-center gap-3 rounded-2xl border border-[#4ade80]/30 bg-[#4ade80]/10 px-6 py-5 transition-all hover:border-[#4ade80]/60 hover:bg-[#4ade80]/20"
              >
                <Camera className="h-6 w-6 text-[#4ade80]" />
                <span className="text-base font-semibold text-[#4ade80]">
                  Open Camera
                </span>
              </button>
            </div>
          )}

          {/* Hidden file inputs */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageSelect}
          />
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={handleImageSelect}
          />

          {/* Tips */}
          <div className="rounded-2xl border border-[#FFFFFF]/10 bg-[#003200]/30 p-5">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#FFFFFF]">
              <Leaf className="h-4 w-4 text-[#4ade80]" />
              Tips for Best Results
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                "Photograph a single leaf clearly",
                "Ensure good natural lighting",
                "Focus on the affected area",
                "Include both healthy and affected parts",
              ].map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-2 text-sm text-[#FFFFFF]/60"
                >
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#4ade80]" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Analyze Button */}
          {selectedImage && (
            <Button
              onClick={handleAnalyze}
              className="rounded-full bg-[#4ade80] py-6 text-base font-semibold text-[#003200] hover:bg-[#22c55e]"
            >
              <ScanLine className="mr-2 h-5 w-5" />
              Analyze Crop
            </Button>
          )}
        </div>
      )}

      {/* Processing Stage */}
      {stage === "processing" && (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-[#FFFFFF]/10 bg-[#003200]/40 px-6 py-16">
          {/* Scanning animation */}
          <div className="relative mb-8">
            <div className="h-32 w-32 rounded-full border-4 border-[#4ade80]/20">
              <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#4ade80]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <ScanLine className="h-12 w-12 text-[#4ade80] animate-pulse" />
            </div>
          </div>

          <h2 className="mb-2 text-xl font-bold text-[#FFFFFF]">
            Analyzing Your Crop...
          </h2>
          <p className="mb-8 text-sm text-[#FFFFFF]/50">
            {progress < 30
              ? "Preprocessing image..."
              : progress < 60
              ? "Detecting disease patterns..."
              : progress < 90
              ? "Generating recommendations..."
              : "Finalizing report..."}
          </p>

          <div className="w-full max-w-sm">
            <Progress value={progress} className="h-3 bg-[#FFFFFF]/10" />
            <p className="mt-2 text-right text-sm font-semibold text-[#4ade80]">
              {progress}%
            </p>
          </div>
        </div>
      )}

      {/* Results Stage */}
      {stage === "results" && result && (
        <div className="flex flex-col gap-6">
          {/* Result header */}
          <div
            className={`flex items-center gap-4 rounded-2xl border p-6 ${
              result.isHealthy
                ? "border-[#4ade80]/30 bg-[#4ade80]/10"
                : "border-amber-500/30 bg-amber-500/10"
            }`}
          >
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                result.isHealthy ? "bg-[#4ade80]/20" : "bg-amber-500/20"
              }`}
            >
              {result.isHealthy ? (
                <ShieldCheck className="h-7 w-7 text-[#4ade80]" />
              ) : (
                <AlertTriangle className="h-7 w-7 text-amber-400" />
              )}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-[#FFFFFF]">{result.name}</h2>
              <p className="text-sm text-[#FFFFFF]/60">
                {result.isHealthy
                  ? "No disease detected"
                  : `Confidence: ${result.confidence}%`}
              </p>
            </div>
            {!result.isHealthy && (
              <div
                className={`rounded-full px-4 py-1.5 text-xs font-bold ${
                  getSeverityColor(result.severity).bg
                } ${getSeverityColor(result.severity).text}`}
              >
                {result.severity} Severity
              </div>
            )}
          </div>

          {/* Image + Quick stats */}
          <div className="grid gap-6 lg:grid-cols-2">
            {selectedImage && (
              <div className="relative overflow-hidden rounded-2xl border border-[#FFFFFF]/15">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={selectedImage}
                    alt="Scanned crop"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}
            <div className="flex flex-col gap-4">
              {/* Confidence */}
              <div className="rounded-2xl border border-[#FFFFFF]/10 bg-[#003200]/40 p-5">
                <p className="mb-2 text-xs font-medium text-[#FFFFFF]/50 uppercase tracking-wider">
                  AI Confidence
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-[#4ade80]">
                    {result.confidence}%
                  </span>
                </div>
                <Progress
                  value={result.confidence}
                  className="mt-3 h-2 bg-[#FFFFFF]/10"
                />
              </div>

              {/* Affected Area */}
              {!result.isHealthy && (
                <div className="rounded-2xl border border-[#FFFFFF]/10 bg-[#003200]/40 p-5">
                  <p className="mb-2 text-xs font-medium text-[#FFFFFF]/50 uppercase tracking-wider">
                    Affected Area
                  </p>
                  <div className="flex items-end gap-2">
                    <span
                      className={`text-3xl font-bold ${
                        getSeverityColor(result.severity).text
                      }`}
                    >
                      {result.affectedArea}%
                    </span>
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#FFFFFF]/10">
                    <div
                      className={`h-full rounded-full transition-all ${
                        getSeverityColor(result.severity).bar
                      }`}
                      style={{ width: `${result.affectedArea}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="rounded-2xl border border-[#FFFFFF]/10 bg-[#003200]/40 p-5">
                <p className="text-sm leading-relaxed text-[#FFFFFF]/70">
                  {result.description}
                </p>
              </div>
            </div>
          </div>

          {/* Symptoms */}
          {result.symptoms.length > 0 && (
            <div className="rounded-2xl border border-[#FFFFFF]/10 bg-[#003200]/40 p-6">
              <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-[#FFFFFF]">
                <Bug className="h-5 w-5 text-amber-400" />
                Symptoms Identified
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {result.symptoms.map((symptom) => (
                  <div
                    key={symptom}
                    className="flex items-start gap-2 rounded-xl bg-[#FFFFFF]/5 p-3"
                  >
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <span className="text-sm text-[#FFFFFF]/70">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Treatments */}
          {result.treatments.length > 0 && (
            <div className="rounded-2xl border border-[#4ade80]/20 bg-[#4ade80]/5 p-6">
              <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-[#FFFFFF]">
                <Droplets className="h-5 w-5 text-[#4ade80]" />
                Recommended Treatment
              </h3>
              <div className="flex flex-col gap-3">
                {result.treatments.map((treatment, i) => (
                  <div
                    key={treatment}
                    className="flex items-start gap-3 rounded-xl bg-[#FFFFFF]/5 p-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4ade80]/20 text-xs font-bold text-[#4ade80]">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[#FFFFFF]/80">{treatment}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prevention */}
          <div className="rounded-2xl border border-[#FFFFFF]/10 bg-[#003200]/40 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-[#FFFFFF]">
              <ShieldCheck className="h-5 w-5 text-[#22c55e]" />
              {result.isHealthy ? "Keep Your Crop Healthy" : "Prevention Tips"}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {result.preventions.map((prevention) => (
                <div
                  key={prevention}
                  className="flex items-start gap-2 rounded-xl bg-[#FFFFFF]/5 p-3"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#22c55e]" />
                  <span className="text-sm text-[#FFFFFF]/70">{prevention}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={handleReset}
              className="flex-1 rounded-full bg-[#4ade80] py-6 text-base font-semibold text-[#003200] hover:bg-[#22c55e]"
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Scan Another Crop
            </Button>
            <Button
              variant="outline"
              className="flex-1 rounded-full border-[#FFFFFF]/20 bg-transparent py-6 text-base text-[#FFFFFF] hover:bg-[#FFFFFF]/10 hover:text-[#FFFFFF]"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Report
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
