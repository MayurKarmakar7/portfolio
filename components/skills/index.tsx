import {
  Blocks,
  BrainCircuit,
  CloudCog,
  Database,
  Layers3,
  Radio,
} from "lucide-react";
import Image from "next/image";
import { forwardRef, type ElementType } from "react";
import HeaderText from "../header-text";
import { TooltipWrapper } from "../tooltip-wrapper";

type SkillSet = {
  id: string;
  name: string;
  imageUrl?: string;
};

type SkillGroup = {
  title: string;
  description: string;
  icon: ElementType;
  skills: SkillSet[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Applied AI workflows",
    description:
      "Structured LLM pipelines, document extraction, RAG, and review experiences with source-level traceability.",
    icon: BrainCircuit,
    skills: [
      { id: "azure-openai", name: "Azure OpenAI" },
      { id: "gpt-41", name: "GPT-4.1" },
      { id: "content-understanding", name: "Azure Content Understanding" },
      { id: "ocr", name: "OCR" },
      { id: "azure-ai-search", name: "Azure AI Search" },
      { id: "rag", name: "RAG" },
    ],
  },
  {
    title: "Full-stack architecture",
    description:
      "Typed product surfaces, API boundaries, persistence, and deployment-ready backend services.",
    icon: Database,
    skills: [
      { id: "next", imageUrl: "/logos/nextjs.webp", name: "Next.js" },
      { id: "react", imageUrl: "/logos/react.png", name: "React" },
      { id: "fastapi", name: "FastAPI" },
      { id: "node", imageUrl: "/logos/nodejs.png", name: "Node.js" },
      { id: "postgresql", name: "PostgreSQL" },
      { id: "rest", name: "REST APIs" },
    ],
  },
  {
    title: "Frontend systems",
    description:
      "Component-driven development, state management, and performant interfaces for complex workflows.",
    icon: Layers3,
    skills: [
      { id: "redux", imageUrl: "/logos/redux.png", name: "Redux" },
      { id: "zustand", imageUrl: "/logos/zustand.png", name: "Zustand" },
      { id: "tanstack-query", imageUrl: "/logos/reactQuery.png", name: "TanStack Query" },
      { id: "tailwind", imageUrl: "/logos/tailwind.webp", name: "Tailwind CSS" },
      { id: "shadcn", imageUrl: "/logos/shadcn.png", name: "Shadcn" },
      { id: "framemotion", imageUrl: "/logos/framerMotion.png", name: "Framer Motion" },
    ],
  },
  {
    title: "Realtime and integrations",
    description:
      "Live exam monitoring, communication flows, payments, auth, and third-party collaboration tools.",
    icon: Radio,
    skills: [
      { id: "webrtc", imageUrl: "/logos/webrtc.png", name: "WebRTC" },
      { id: "socketio", imageUrl: "/logos/socketIo.png", name: "Socket.IO" },
      { id: "openvidu", name: "OpenVidu" },
      { id: "jitsi", name: "Jitsi" },
      { id: "zoom", name: "Zoom" },
      { id: "clerk", name: "Clerk" },
      { id: "stripe", name: "Stripe" },
      { id: "paypal", name: "PayPal" },
    ],
  },
  {
    title: "Cloud and delivery",
    description:
      "CI/CD, containers, Azure hosting, and database platforms for shipping full-stack AI applications.",
    icon: CloudCog,
    skills: [
      { id: "docker", name: "Docker" },
      { id: "github-actions", name: "GitHub Actions" },
      { id: "azure-app-service", name: "Azure App Service" },
      { id: "azure-static-web-apps", name: "Azure Static Web Apps" },
      { id: "vercel", name: "Vercel" },
      { id: "supabase", name: "Supabase" },
      { id: "neon", name: "Neon" },
      { id: "turso", name: "Turso" },
    ],
  },
  {
    title: "Data and ORMs",
    description:
      "Practical data modeling, persistence, and review screens that keep AI output auditable.",
    icon: Blocks,
    skills: [
      { id: "drizzle", imageUrl: "/logos/drizzle.jpg", name: "Drizzle ORM" },
      { id: "prisma", imageUrl: "/logos/prisma.png", name: "Prisma ORM" },
      { id: "trpc", imageUrl: "/logos/trpc.png", name: "tRPC" },
      { id: "python", imageUrl: "/logos/python.png", name: "Python" },
      { id: "django", imageUrl: "/logos/djangoRF.png", name: "Django REST" },
      { id: "pandas", imageUrl: "/logos/pandas.png", name: "Pandas" },
    ],
  },
];

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

const Skills = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    return (
      <section
        className="section-block flex w-full flex-col gap-8"
        id="skills"
        ref={ref}
        {...props}
      >
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className="section-kicker">Capabilities</p>
            <HeaderText id="skillHeader">Skills</HeaderText>
          </div>
          <p className="section-copy max-w-3xl lg:justify-self-end">
            I use this stack to build applied AI products end to end: document
            ingestion, OCR, RAG retrieval, review dashboards, typed APIs, and
            responsive interfaces that make AI output inspectable.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" id="techcontainer">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                className="hairline-card group flex min-h-[17rem] flex-col justify-between p-5 transition duration-300 hover:-translate-y-1 hover:border-teal-500/40"
                key={group.title}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700 transition group-hover:bg-teal-500 group-hover:text-white dark:text-teal-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs font-bold text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                      {group.skills.length} tools
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-black text-zinc-950 dark:text-zinc-50">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {group.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((tech) => (
                    <TooltipWrapper value={tech.name} key={tech.id}>
                      <span className="tech-chip">
                        {tech.imageUrl ? (
                          <Image
                            width={24}
                            height={24}
                            className="h-6 w-6 rounded-full object-cover"
                            src={tech.imageUrl}
                            alt=""
                          />
                        ) : (
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500/10 text-[0.6rem] font-black text-teal-700 dark:text-teal-300">
                            {getInitials(tech.name)}
                          </span>
                        )}
                        {tech.name}
                      </span>
                    </TooltipWrapper>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
);
Skills.displayName = "Skills";

export default Skills;
