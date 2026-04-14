"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Will this work with my specific car?",
    answer:
      "V-DRIVE connects via the standard OBD-II port found in every car sold in the US since 1996. CAN signal decoding depth varies by make and model — we're starting with broad coverage across popular Turo vehicles (Tesla, BMW, Hyundai/Kia EVs, and more). If your vehicle has a CAN bus, V-DRIVE can read it. We'll publish a full compatibility list before the Kickstarter launches.",
  },
  {
    question: "How is this different from OBD-II scanners I already own?",
    answer:
      "Standard OBD-II scanners read about 15 generic diagnostic signals — basically, check-engine-light data. V-DRIVE decodes 500+ manufacturer-specific CAN signals: individual battery cell voltages, thermal data, motor temperatures, regen braking patterns, and more. It's the difference between knowing \"something is wrong\" and knowing exactly what, where, and how fast it's degrading.",
  },
  {
    question: "Does it work with EVs?",
    answer:
      "Absolutely — V-DRIVE was designed EV-first. Battery cell-level health, thermal management data, charging behavior, and regen braking patterns are all part of the signal set. This is the data EV owners and Turo hosts have never been able to access without dealer-level tools.",
  },
  {
    question: "How is the data stored / who owns it?",
    answer:
      "Your data is yours. V-DRIVE streams data to Veynqor's SIGNAL cloud platform, where it's stored securely and accessible only to you. We never sell or share your vehicle data with third parties. You can export or delete your data at any time.",
  },
  {
    question: "How much will it cost?",
    answer:
      "We'll announce final pricing when the Kickstarter campaign goes live. Early-bird backers will get a significant discount on both the V-DRIVE hardware and the first year of SIGNAL cloud service. Sign up above to get notified — early-bird slots are limited.",
  },
  {
    question: "When will Kickstarter backers receive their device?",
    answer:
      "We'll share a detailed production and fulfillment timeline when the campaign launches. V-DRIVE hardware is already in advanced prototyping. Backers will receive regular engineering updates throughout the production process.",
  },
];

export default function KickstarterFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="rounded-xl border border-white/5 bg-surface overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between text-left p-6 hover:bg-white/[0.02] transition-colors"
            >
              <span className="text-white font-medium pr-4">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-6 pb-6">
                <p className="text-sm text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
