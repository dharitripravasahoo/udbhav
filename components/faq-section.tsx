"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the plant disease detection work?",
    answer:
      "Simply take a photo of the affected plant or leaf using your smartphone. Our AI model, trained on millions of plant images, analyzes the photo and identifies the disease within seconds. You will receive the disease name, severity level, and recommended treatments.",
  },
  {
    question: "Is UDBHAV usable for all types of crops?",
    answer:
      "Yes! UDBHAV supports a wide variety of crops including rice, wheat, cotton, sugarcane, maize, pulses, vegetables, and fruit crops. We are constantly adding support for more regional crop varieties.",
  },
  {
    question: "Does UDBHAV work offline?",
    answer:
      "Basic features like saved reports and previous scan results are available offline. For AI-powered disease detection and yield predictions, an internet connection is required. Our Yearly plan includes enhanced offline mode with pre-downloaded disease databases.",
  },
  {
    question: "Which languages are supported?",
    answer:
      "UDBHAV supports Hindi, English, Tamil, Telugu, Kannada, Malayalam, Marathi, Bengali, Gujarati, Punjabi, Odia, and Assamese. We are continuously adding more regional languages to make the platform accessible to every farmer in India.",
  },
  {
    question: "How accurate are the yield predictions?",
    answer:
      "Our yield prediction model achieves an average accuracy of 92-98% depending on the crop and region. The model considers factors like soil type, weather patterns, historical data, and current crop health to generate predictions.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. You can cancel your subscription at any time from your account settings. If you cancel, you will continue to have access until the end of your current billing period. No hidden fees or penalties.",
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="bg-[#f0fdf4] py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-2 inline-block rounded-full bg-[#003200]/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-[#003200]/60">
            FAQ
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#003200] text-balance lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-[#003200]/65 text-pretty">
            Everything you need to know about UDBHAV. Can{"'"}t find what you
            need? Contact us.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-[#003200]/10 rounded-xl mb-3 bg-[#FFFFFF] px-5 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-[#003200] hover:text-[#16a34a] hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#003200]/65 leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
