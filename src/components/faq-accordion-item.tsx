"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqAccordionItemProps = {
  question: string;
  answer: string;
};

export function FaqAccordionItem({ question, answer }: FaqAccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div
      className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-200 ease-out data-[state=open]:border-gold/35 data-[state=open]:bg-white/[0.06]"
      data-state={isOpen ? "open" : "closed"}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="flex w-full items-center justify-between gap-4 text-left text-base font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{question}</span>
        <ChevronDown
          aria-hidden="true"
          className="h-5 w-5 shrink-0 text-gold transition duration-300 ease-out group-data-[state=open]:rotate-180"
        />
      </button>
      <div
        id={contentId}
        className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-300 ease-out group-data-[state=open]:grid-rows-[1fr] group-data-[state=open]:opacity-100"
      >
        <div className="overflow-hidden">
          <p className="pt-4 text-sm leading-7 text-slate-400">{answer}</p>
        </div>
      </div>
    </div>
  );
}
