import {
  Activity,
  Github,
  Globe2,
  GraduationCap,
  MessageSquareText,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { forwardRef, type ElementType } from "react";
import HeaderText from "../header-text";
import { TooltipWrapper } from "../tooltip-wrapper";

type Tech = {
  name: string;
  imageUrl?: string;
};

type ProjectDetails = {
  header: string;
  contributions: string[];
  techs: Tech[];
  logo?: string;
  icon?: ElementType;
  name: string;
  link: string | null;
  liveLink: string | null;
  projectType: string;
};

type ProjectContainerProps = {
  description: string;
  icon?: ElementType;
  imageUrl?: string;
  repoLink: string | null;
  name: string;
  techs: Tech[];
  contributions: string[];
  liveLink: string | null;
  projectType: string;
};

const projectDetails: ProjectDetails[] = [
  {
    name: "CowinHistory",
    projectType: "Public project",
    header:
      "A vaccine-slot history and trend application that used past availability data to help users understand booking patterns.",
    contributions: [
      "Historical vaccination-slot analysis",
      "Availability trend estimation",
      "Telegram alert delivery",
      "React and Django REST workflow",
    ],
    techs: [
      { name: "React", imageUrl: "/logos/react.png" },
      { name: "Redux", imageUrl: "/logos/redux.png" },
      { name: "React Router", imageUrl: "/logos/reactRouter.png" },
      { name: "Python", imageUrl: "/logos/python.png" },
      { name: "Django REST", imageUrl: "/logos/djangoRF.png" },
      { name: "MySQL", imageUrl: "/logos/mySQL.png" },
      { name: "TensorFlow", imageUrl: "/logos/tensorFlow.png" },
      { name: "Keras", imageUrl: "/logos/keras.png" },
      { name: "Pandas", imageUrl: "/logos/pandas.png" },
      { name: "Matplotlib", imageUrl: "/logos/matPlot.png" },
      { name: "NumPy", imageUrl: "/logos/numpy.png" },
      { name: "Scikit-learn", imageUrl: "/logos/scikit.png" },
    ],
    logo: "/logos/cowinHistory.jpg",
    link: "https://github.com/MayurKarmakar/cowin-history.git",
    liveLink: null,
  },
  {
    name: "Collegepapers",
    projectType: "Public project",
    header:
      "A centralized course resource platform for notes, previous year question papers, college details, and syllabus access.",
    contributions: [
      "Course-specific resource library",
      "Student-first download flow",
      "Centralized academic material",
      "React and Django REST stack",
    ],
    techs: [
      { name: "React", imageUrl: "/logos/react.png" },
      { name: "Redux", imageUrl: "/logos/redux.png" },
      { name: "React Router", imageUrl: "/logos/reactRouter.png" },
      { name: "Python", imageUrl: "/logos/python.png" },
      { name: "Django REST", imageUrl: "/logos/djangoRF.png" },
      { name: "MySQL", imageUrl: "/logos/mySQL.png" },
    ],
    logo: "/logos/collegePapers.png",
    link: "https://github.com/MayurKarmakar/collegepapers.git",
    liveLink: null,
  },
  {
    name: "Chatbot",
    projectType: "Public project",
    header:
      "An AI-powered conversational app for interacting with OpenAI GPT through a configurable web chat experience.",
    contributions: [
      "Model-selection workflow",
      "Temperature controls",
      "API-key configuration",
      "Prompt and response layout",
    ],
    techs: [
      { name: "React", imageUrl: "/logos/react.png" },
      { name: "OpenAI" },
      { name: "Chat UI" },
    ],
    logo: "/logos/chatbot.png",
    link: "https://github.com/MayurKarmakar/Chatbot.git",
    liveLink:
      "https://6642007403039c07f38a7718--resonant-arithmetic-596875.netlify.app/",
  },
];

const fallbackIcons: Record<string, ElementType> = {
  CowinHistory: Activity,
  Collegepapers: GraduationCap,
  Chatbot: MessageSquareText,
};

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

const Projects = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  (props, ref) => {
    return (
      <section
        className="section-block flex w-full flex-col gap-8"
        id="projects"
        ref={ref}
        {...props}
      >
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className="section-kicker">Builds</p>
            <HeaderText>Projects</HeaderText>
          </div>
          <p className="section-copy max-w-3xl lg:justify-self-end">
            Personal and public builds that show experimentation beyond company
            work: public-data products, student resource workflows, and
            configurable AI chat interfaces.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {projectDetails.map((project: ProjectDetails) => {
            return (
              <ProjectContainer
                description={project.header}
                imageUrl={project.logo}
                icon={project.icon || fallbackIcons[project.name]}
                repoLink={project.link}
                name={project.name}
                techs={project.techs}
                contributions={project.contributions}
                key={project.name}
                liveLink={project.liveLink}
                projectType={project.projectType}
              />
            );
          })}
        </div>
      </section>
    );
  }
);
Projects.displayName = "Projects";

function ProjectContainer({
  imageUrl,
  description,
  name,
  repoLink,
  liveLink,
  techs,
  contributions,
  icon,
  projectType,
}: ProjectContainerProps) {
  const visibleTech = techs.slice(0, 6);
  const hiddenTechCount = techs.length - visibleTech.length;
  const Icon = icon;

  return (
    <article className="surface-card group flex min-h-[28rem] flex-col p-5 transition duration-300 hover:-translate-y-1 hover:border-teal-500/40">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-200 bg-white p-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          {imageUrl ? (
            <span className="relative block h-10 w-10 overflow-hidden rounded-lg">
              <Image
                alt={`${name} logo`}
                fill
                sizes="40px"
                className="bg-transparent object-cover"
                src={imageUrl}
              />
            </span>
          ) : Icon ? (
            <Icon className="h-6 w-6 text-teal-700 dark:text-teal-300" />
          ) : null}
        </div>
        <span className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-bold text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          {projectType}
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-black text-zinc-950 dark:text-zinc-50">
        {name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>

      <ul className="mt-5 grid gap-2">
        {contributions.map((contribution) => (
          <li
            className="rounded-lg bg-zinc-100 px-3 py-2 text-xs font-bold text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300"
            key={contribution}
          >
            {contribution}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {visibleTech.map((tech) => (
          <TooltipWrapper value={tech.name} key={tech.name}>
            <span className="flex h-9 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-2.5 text-xs font-black text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
              {tech.imageUrl ? (
                <Image
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-full object-cover"
                  src={tech.imageUrl}
                />
              ) : (
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500/10 text-[0.6rem] text-teal-700 dark:text-teal-300">
                  {getInitials(tech.name)}
                </span>
              )}
              {tech.name}
            </span>
          </TooltipWrapper>
        ))}
        {hiddenTechCount > 0 && (
          <span className="flex h-9 items-center justify-center rounded-full border border-zinc-200 px-3 text-xs font-black text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            +{hiddenTechCount}
          </span>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800">
        {repoLink && (
          <Link
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-4 text-sm font-extrabold text-white transition hover:bg-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500/60 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-teal-200"
            href={repoLink}
            target="_blank"
          >
            <Github className="h-4 w-4" />
            Code
          </Link>
        )}
        {liveLink && (
          <Link
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-zinc-200 px-4 text-sm font-extrabold text-zinc-700 transition hover:border-teal-500 hover:text-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500/60 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-teal-400 dark:hover:text-teal-300"
            href={liveLink}
            target="_blank"
          >
            <Globe2 className="h-4 w-4" />
            Live
          </Link>
        )}
      </div>
    </article>
  );
}

export default Projects;
