import {
  Activity,
  BrainCircuit,
  BriefcaseBusiness,
  CircleCheck,
  ClipboardCheck,
  FileText,
  HeartPulse,
  Radio,
} from "lucide-react";
import { forwardRef, type ElementType } from "react";
import HeaderText from "../header-text";

type ExperienceDescriptionProps = {
  header: string;
  responsibilities: string[];
  name: string;
  domain: string;
  period: string;
  signal: string;
  icon: ElementType;
};

const experiences: ExperienceDescriptionProps[] = [
  {
    header:
      "A CGMP regulatory intelligence platform for turning FDA warning-letter signals into searchable inspection insight.",
    responsibilities: [
      "Designed and built AuditPulse with Next.js, FastAPI, PostgreSQL, Playwright, and GPT-4.1 through Azure OpenAI.",
      "Developed an FDA warning-letter pipeline for scraping, preparation, structured LLM classification, severity scoring, persistence, and retries.",
      "Delivered regulatory dashboards with multidimensional filters, heatmaps, severity benchmarking, and time-series trend analysis.",
      "Added review flows that connected model classifications back to warning-letter source context for faster quality inspection.",
      "Packaged the application for repeatable delivery with Docker, GitHub Actions, and Azure OpenAI configuration.",
    ],
    name: "AuditPulse",
    domain: "Applied AI regulatory intelligence",
    period: "zipp.ai ~ Oct 2025 - May 2026",
    signal: "FDA warning letters",
    icon: BrainCircuit,
  },
  {
    header:
      "An AI-assisted batch-record review workflow for extracting production parameters and making GxP quality findings traceable.",
    responsibilities: [
      "Built Azure Content Understanding OCR flows for parsing batch-record PDFs and extracting structured process parameters.",
      "Implemented missing-field checks, data-integrity scoring, and deviation surfacing for reviewer follow-up.",
      "Connected findings to PDF source evidence with bounding boxes so quality reviewers could inspect the original record quickly.",
      "Delivered audit trails and operational workflows that made review activity easier to trace across document versions.",
    ],
    name: "Batch Record Review",
    domain: "GxP document intelligence",
    period: "zipp.ai ~ Oct 2025 - May 2026",
    signal: "OCR and traceability",
    icon: ClipboardCheck,
  },
  {
    header:
      "An AI-powered quiz generator for transforming text and uploaded files into structured question banks.",
    responsibilities: [
      "Developed a Next.js, React, Drizzle ORM, and Tailwind application for quiz creation, review, and exam workflows.",
      "Built OpenAI GPT flows that converted typed text and uploaded files into structured question banks.",
      "Implemented RBAC, protected flows, exam scheduling, and automatic submission behavior.",
      "Integrated PayPal and Stripe payments while keeping the content-generation UI responsive across devices.",
    ],
    name: "Content2Quiz",
    domain: "AI learning workflow",
    period: "Bsecure - 2023 to 2025",
    signal: "Question banks",
    icon: FileText,
  },
  {
    header:
      "A self-contained educational technology platform for online proctoring and exam management.",
    responsibilities: [
      "Developed and deployed proctoring workflows using Next.js, React, Drizzle ORM, and Tailwind CSS.",
      "Implemented live video and audio monitoring with WebRTC and OpenVidu, including screen recording and real-time violation alerts.",
      "Built AI-based face and object detection flows to support exam integrity checks.",
      "Integrated role-aware dashboards, live support chat, real-time messaging, and payment handling for proctoring operations.",
    ],
    name: "Bsecure Pro",
    domain: "Online proctoring",
    period: "Bsecure - 2023 to 2025",
    signal: "Realtime integrity",
    icon: Radio,
  },
  {
    header:
      "An online proctoring and exam management platform that integrates with LMS and test engines.",
    responsibilities: [
      "Revamped legacy exam and monitoring surfaces into clearer workflows for students, instructors, and proctors.",
      "Implemented Canvas LMS assignment handling, configurable scheduling, countdown timers, auto-submission, and post-exam review.",
      "Built real-time student-proctor communication using WebRTC, Socket.IO, and video/audio streaming.",
      "Managed time-based exam windows, violation reporting, and LMS-compatible proctoring behavior.",
    ],
    name: "Examd - Canvas",
    domain: "LMS integration",
    period: "Bsecure / Wisteli - 2021 to 2025",
    signal: "Canvas workflows",
    icon: BriefcaseBusiness,
  },
  {
    header:
      "A HIPAA-compliant chronic disease management solution for value-based care teams.",
    responsibilities: [
      "Contributed to React and React Native healthcare workflows for chronic disease management.",
      "Improved diagnosis preprocessing and clinical data visualization for care-team dashboards.",
      "Designed responsive analytics views for patient vitals and healthcare trend interpretation.",
      "Resolved platform-specific issues across Android and iOS that affected patient monitoring flows.",
    ],
    name: "CarelogiQ",
    domain: "Healthcare analytics",
    period: "Wisteli - 2021 to 2023",
    signal: "Clinical dashboards & Mobile App",
    icon: HeartPulse,
  },
];

const Experience = forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, ref) => {
  return (
    <section
      className="section-block flex w-full flex-col gap-8"
      ref={ref}
      id="experience"
      {...props}
    >
      <div className="grid gap-5 lg:grid-cols-[0.72fr_1fr] lg:items-end">
        <div>
          <p className="section-kicker">Selected work</p>
          <HeaderText id="experienceHeader">Experience</HeaderText>
        </div>
        <p className="section-copy max-w-3xl lg:justify-self-end">
          My work now spans applied AI, regulatory intelligence, EdTech
          proctoring, and healthcare analytics: full-stack systems where the
          interface has to make model output, realtime events, and protected
          data easy to inspect.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {experiences.map((item) => {
          const Icon = item.icon;

          return (
            <article
              className="surface-card group flex min-h-[30rem] flex-col p-5 transition duration-300 hover:-translate-y-1 hover:border-teal-500/40 md:p-6"
              key={item.name}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition group-hover:bg-teal-500 group-hover:text-white dark:bg-zinc-900 dark:text-zinc-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-teal-700 dark:text-teal-300">
                      {item.domain}
                    </p>
                    <h3 className="mt-1 text-2xl font-black text-zinc-950 dark:text-zinc-50">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs font-bold text-zinc-500 dark:text-zinc-400">
                      {item.period}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-zinc-200 px-3 py-1 text-xs font-bold text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                  {item.signal}
                </span>
              </div>

              <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">
                {item.header}
              </p>

              <div className="mt-6 border-t border-zinc-200 pt-5 dark:border-zinc-800">
                <div className="mb-4 flex items-center gap-2 text-sm font-black text-zinc-950 dark:text-zinc-50">
                  <Activity className="h-4 w-4 text-teal-600 dark:text-teal-300" />
                  Delivered
                </div>
                <ul className="space-y-3">
                  {item.responsibilities.map((responsibility) => (
                    <li
                      className="grid grid-cols-[auto_1fr] gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400"
                      key={responsibility}
                    >
                      <CircleCheck className="mt-1 h-4 w-4 text-teal-600 dark:text-teal-300" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
});
Experience.displayName = "Experience";

export default Experience;
