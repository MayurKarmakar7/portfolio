import {
  ArrowUpRight,
  BrainCircuit,
  Download,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { forwardRef, JSX } from "react";

const focusAreas = [
  "Applied AI document workflows",
  "React, Next.js and FastAPI",
  "RAG, OCR and source traceability",
];

const signalRows = [
  {
    label: "AuditPulse",
    value: "CGMP intelligence, GPT-4.1 scoring",
  },
  {
    label: "Batch-record review",
    value: "Azure OCR, missing fields, data integrity",
  },
  {
    label: "GxP RAG answers",
    value: "AI Search retrieval with source traceability",
  },
];

const Introduction = forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, ref): JSX.Element => {
  return (
    <section
      className="section-block grid w-full items-center gap-10 pt-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.72fr)] lg:pt-14"
      ref={ref}
      {...props}
    >
      <div className="max-w-4xl">
        <div className="reveal-up inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-teal-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-teal-300">
          <Sparkles className="h-3.5 w-3.5" />
          4+ years building full-stack applied AI products
        </div>

        <h1 className="reveal-up delay-100 mt-6 max-w-4xl text-[clamp(2.5rem,6.4vw,5.1rem)] font-black leading-[0.95] tracking-normal text-zinc-950 dark:text-zinc-50">
          Full-stack applied AI engineer.
        </h1>

        <p className="reveal-up delay-200 mt-7 max-w-3xl text-base leading-8 text-zinc-600 dark:text-zinc-400 sm:text-lg">
          I am Mayur Karmakar, building production web apps and document
          intelligence workflows with React, Next.js, FastAPI, PostgreSQL, and
          Azure AI, where accuracy, traceability, and usable review matter.
        </p>

        <div className="reveal-up delay-300 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500/60 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-teal-200"
            href="/docs/mayur_karmakar_resume.pdf"
            download
            target="_blank"
          >
            <Download className="h-4 w-4" />
            Download CV
          </Link>
          <Link
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white/70 px-5 text-sm font-extrabold text-zinc-900 transition hover:-translate-y-0.5 hover:border-teal-500 hover:text-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500/60 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-100 dark:hover:border-teal-400 dark:hover:text-teal-300"
            href="#contactme"
          >
            <Mail className="h-4 w-4" />
            Start a conversation
          </Link>
        </div>

        <div className="reveal-up delay-400 mt-8 hidden flex-wrap items-center gap-3 sm:flex">
          <Link
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white/70 text-zinc-600 transition hover:border-teal-500 hover:text-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500/60 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-400 dark:hover:border-teal-400 dark:hover:text-teal-300"
            aria-label="Follow on LinkedIn"
            href="https://www.linkedin.com/in/mayur-karmakar-9b47b1169"
            id="linkedIn"
            target="_blank"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white/70 text-zinc-600 transition hover:border-teal-500 hover:text-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500/60 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-400 dark:hover:border-teal-400 dark:hover:text-teal-300"
            aria-label="Follow on GitHub"
            href="https://github.com/MayurKarmakar"
            id="github"
            target="_blank"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white/70 px-4 text-sm font-bold text-zinc-600 transition hover:border-teal-500 hover:text-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500/60 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-400 dark:hover:border-teal-400 dark:hover:text-teal-300"
            aria-label="Open Twitter profile"
            href="https://twitter.com/mayurkarmakar"
            target="_blank"
          >
            X
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <aside className="reveal-up delay-300 signal-panel">
        <div className="flex items-center justify-between gap-4 border-b border-zinc-200 p-4 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-xl">
              <Image
                src="/images/mayurLogo.jpg"
                alt="Mayur Karmakar"
                fill
                sizes="56px"
                className="object-cover"
              />
            </span>
            <div>
              <p className="text-sm font-black text-zinc-950 dark:text-zinc-50">
                Mayur Karmakar
              </p>
              <p className="mt-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                Full-stack applied AI engineer
              </p>
            </div>
          </div>
          <div className="rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-xs font-extrabold text-teal-700 dark:text-teal-300">
            Available
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-zinc-200 dark:border-zinc-800">
          <div className="p-4">
            <p className="text-2xl font-black text-zinc-950 dark:text-zinc-50">
              4+
            </p>
            <p className="mt-1 text-xs font-bold text-zinc-500 dark:text-zinc-400">
              Years
            </p>
          </div>
          <div className="border-x border-zinc-200 p-4 dark:border-zinc-800">
            <p className="text-2xl font-black text-zinc-950 dark:text-zinc-50">
              18+
            </p>
            <p className="mt-1 text-xs font-bold text-zinc-500 dark:text-zinc-400">
              AI and web tools
            </p>
          </div>
          <div className="p-4">
            <p className="text-2xl font-black text-zinc-950 dark:text-zinc-50">
              4
            </p>
            <p className="mt-1 text-xs font-bold text-zinc-500 dark:text-zinc-400">
              Domains
            </p>
          </div>
        </div>

        <div className="p-4">
          <div className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
            <BrainCircuit className="h-3.5 w-3.5 text-teal-600 dark:text-teal-300" />
            Product signal
          </div>
          <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
            {signalRows.map((row) => (
              <div className="signal-row" key={row.label}>
                <span className="signal-dot" aria-hidden="true" />
                <div>
                  <p className="text-sm font-black text-zinc-950 dark:text-zinc-50">
                    {row.label}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    {row.value}
                  </p>
                </div>
                <ShieldCheck className="mt-1 h-4 w-4 text-teal-600 dark:text-teal-300" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-t border-zinc-200 p-4 dark:border-zinc-800">
          {focusAreas.map((item) => (
            <span
              className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-bold text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </aside>
    </section>
  );
});
Introduction.displayName = "Introduction";

export default Introduction;
