import { Globe } from "lucide-react";
import Link from "next/link";
import { forwardRef } from "react";
import HeaderText from "../header-text";

type ProjectDetails = {
  header: string;
  contributions: string[];
  techImages: string[];
  logo: string;
  name: string;
  link: string;
  liveLink: string | null;
};

type ProjectContainerProps = {
  description: string;
  imageUrl: string;
  repoLink: string;
  name: string;
  techImageUrls: string[];
  liveLink: string | null;
};

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const projectDetails: ProjectDetails[] = [
    {
      name: "CowinHistory",
      header:
        "Cowinhistory.com empowers users by providing a retrospective view of vaccine slot availability, facilitating informed predictions and timely bookings based on past events.",
      contributions: [
        "Provides historical data on vaccine slot availability",
        "Shows past events and predicts future slot availability dates and vaccine quantity",
        "Aids individuals in staying informed about past slot events",
        "Assists users in making timely vaccine bookings based on historical patterns",
      ],
      techImages: [
        "/logos/react.png",
        "/logos/redux.png",
        "/logos/reactRouter.png",
        "/logos/python.png",
        "/logos/djangoRF.png",
        "/logos/mySQL.png",
        "/logos/tensorFlow.png",
        "/logos/keras.png",
        "/logos/pandas.png",
        "/logos/matPlot.png",
        "/logos/numpy.png",
        "/logos/scikit.png",
      ],
      logo: "/logos/cowinHistory.jpg",
      link: "https://github.com/MayurKarmakar7/cowinhistory.git",
      liveLink: null,
    },
    {
      name: "Collegepapers",
      header:
        "Web Application designed to cater to a specific course semester by offering course notes, learning materials, and previous year's question papers in a centralized platform.",
      contributions: [
        "Offers course-specific resources, learning materials, and previous year question papers",
        "Provides essential information about the college and various courses",
        "Presents Utkal University's proposed course syllabus",
        "Functions as a centralized platform for students to access and download study materials as needed",
      ],
      techImages: [
        "/logos/react.png",
        "/logos/redux.png",
        "/logos/reactRouter.png",
        "/logos/python.png",
        "/logos/djangoRF.png",
        "/logos/mySQL.png",
      ],
      logo: "/logos/collegePapers.png",
      link: "https://github.com/MayurKarmakar7/collegepapers.git",
      liveLink: null,
    },
    {
      name: "Chatbot",
      header:
        "ChatBot is an application designed for conversational interactions powered by OpenAI's GPT models. This application provides users with a chat interface to engage in conversations with AI models provided by OpenAI using a simple web interface.",
      contributions: [],
      techImages: [],
      logo: "/logos/chatbot.png",
      link: "https://github.com/MayurKarmakar/Chatbot.git",
      liveLink:
        "https://6642007403039c07f38a7718--resonant-arithmetic-596875.netlify.app/",
    },
  ];

  return (
    <div
      className="flex h-full w-full flex-col items-start justify-center gap-8 pt-2"
      id="projects"
      ref={ref}
    >
      <div className="flex h-full w-full flex-row items-center justify-start gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          viewBox="0 0 122.88 100.53"
          fillRule="evenodd"
          clipRule="evenodd"
          className="h-10 w-10 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
        >
          <g>
            <path d="M56.9,50.27h9.08c1.33,0,2.55,0.54,3.42,1.42c0.88,0.88,1.42,2.09,1.42,3.42v19.14c0,1.33-0.54,2.54-1.42,3.42 c-0.88,0.88-2.09,1.42-3.42,1.42H56.9c-1.33,0-2.54-0.54-3.42-1.42c-0.88-0.88-1.42-2.09-1.42-3.42V55.12 c0-1.33,0.54-2.55,1.42-3.42C54.36,50.82,55.57,50.27,56.9,50.27L56.9,50.27z M6.97,13.96h31.5V4.94c0-1.36,0.55-2.59,1.45-3.49 C40.81,0.55,42.05,0,43.41,0h36.06c1.36,0,2.59,0.55,3.49,1.45c0.89,0.89,1.45,2.13,1.45,3.49v9.03h31.5 c1.92,0,3.66,0.78,4.93,2.05c1.26,1.26,2.05,3.01,2.05,4.93v72.62c0,1.92-0.78,3.66-2.05,4.93c-1.26,1.26-3.01,2.05-4.93,2.05H6.97 c-1.92,0-3.66-0.78-4.93-2.05C0.78,97.22,0,95.48,0,93.56V20.94c0-1.92,0.78-3.66,2.05-4.93C3.31,14.75,5.05,13.96,6.97,13.96 L6.97,13.96z M79.47,4.33H43.41c-0.17,0-0.32,0.07-0.43,0.18c-0.11,0.11-0.18,0.26-0.18,0.43v8.93h37.28V4.94 c0-0.17-0.07-0.32-0.18-0.43C79.79,4.39,79.64,4.33,79.47,4.33L79.47,4.33z M4.32,55.63c15.93,4.58,27.71,6.55,43.65,7.29v4.33 c-15.93-0.73-27.71-2.65-43.65-7.14v33.44c0,0.73,0.3,1.39,0.78,1.87c0.48,0.48,1.14,0.78,1.87,0.78h108.93 c0.73,0,1.39-0.3,1.87-0.78c0.48-0.48,0.78-1.14,0.78-1.87V60.12c-15.91,4.48-26.98,6.4-42.88,7.13v-4.33 c15.91-0.75,26.98-2.72,42.88-7.29V20.94c0-0.73-0.3-1.39-0.78-1.87c-0.48-0.48-1.14-0.78-1.87-0.78H6.97 c-0.73,0-1.39,0.3-1.87,0.78c-0.48,0.48-0.78,1.14-0.78,1.87V55.63L4.32,55.63z M65.98,54.6H56.9c-0.14,0-0.27,0.06-0.36,0.15 c-0.09,0.09-0.15,0.22-0.15,0.36v19.14c0,0.14,0.06,0.27,0.15,0.36c0.09,0.1,0.22,0.15,0.36,0.15h9.08c0.14,0,0.27-0.06,0.36-0.15 c0.09-0.09,0.15-0.22,0.15-0.36V55.12c0-0.14-0.06-0.27-0.15-0.36C66.25,54.66,66.12,54.6,65.98,54.6L65.98,54.6z" />
          </g>
        </svg>
        <HeaderText>Projects</HeaderText>
      </div>
      <div className="flex h-full flex-col items-start gap-4 md:w-full md:flex-row md:justify-start">
        {projectDetails.map((project: ProjectDetails, index: number) => {
          return (
            <ProjectContainer
              description={project.header}
              imageUrl={project.logo}
              repoLink={project.link}
              name={project.name}
              techImageUrls={project.techImages}
              key={index}
              liveLink={project.liveLink}
            />
          );
        })}
      </div>
    </div>
  );
});

function ProjectContainer({
  imageUrl,
  description,
  name,
  repoLink,
  techImageUrls,
  liveLink,
}: ProjectContainerProps) {
  return (
    <div className="flex h-full max-w-full flex-col rounded-2xl border border-zinc-100 p-6 hover:rounded-xl hover:bg-zinc-800 dark:border-zinc-700/40">
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <img
          alt=""
          loading="lazy"
          width="32"
          height="32"
          decoding="async"
          data-nimg="1"
          className="h-8 w-8 rounded-2xl bg-transparent object-cover"
          src={imageUrl}
        />
      </div>
      <h2 className="mt-6 text-base font-semibold tracking-wider text-zinc-800 dark:text-zinc-100">
        {name}
      </h2>
      <p className="flex-1 mt-2 text-sm leading-6 tracking-wider text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <div className="flex w-full justify-start gap-5 items-end">
        <Link href={repoLink} target="_blank">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="mt-6 h-6 w-6 cursor-pointer fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
            ></path>
          </svg>
        </Link>
        {liveLink && (
          <Link href={liveLink} target="_blank">
            <Globe height={"1.5rem"} width={"1.5rem"} color="#a1a1aa" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Projects;
