import React from "react";
import { ArrowUp } from "lucide-react";

// Screenshot used for reference: /mnt/data/Screenshot 2025-11-21 at 8.49.52 AM.png

export default function HeroInput() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-white text-4xl sm:text-5xl font-semibold">What can I
            <span className="text-[#A51C30]"> help</span> with?</h1>
        </div>

        <div className="flex flex-col gap-6">
          {/* input row */}
          <div className="relative">
            <input
              aria-label="main input"
              placeholder="Deepseek OCR paper"
              className="w-full h-16 rounded-3xl bg-zinc-800 placeholder-zinc-400 text-zinc-100 pl-6 pr-20 text-lg focus:outline-none focus:ring-2 focus:ring-zinc-700"
            />

            {/* circular send button on the right */}
            <button
              aria-label="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-zinc-700 flex items-center justify-center shadow-sm"
            >
              <ArrowUp size={18} />
            </button>
          </div>

          {/* pills / suggestions row */}
          <div className="flex gap-4 items-center justify-start flex-wrap">
            {[
              "Research with Papr",
              "Explain what Papr is",
              "How do black holes work?",
            ].map((p) => (
              <button
                key={p}
                className="px-4 py-2 rounded-full border border-zinc-700 text-zinc-200 text-sm hover:bg-zinc-900"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
