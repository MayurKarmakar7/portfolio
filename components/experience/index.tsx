import { forwardRef } from "react";
import HeaderText from "../header-text";
import "./styles.module.css";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

type ExperienceDescriptionProps = {
  header: string;
  responsibilites: string[];
  footer: string;
  name: string;
};

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  const experienceDescription: ExperienceDescriptionProps[] = [
    {
      header:
        "A web application that transforms text and files into quizzes using OpenAI's GPT services.",
      responsibilites: [
        "Built a full-stack web application using Next.js, React, and Drizzle ORM to generate quizzes from user inputs and uploaded documents (PDF, DOCX).",
        "Developed user-friendly and responsive UI components using Mantine and Tailwind CSS to capture and manage diverse user inputs.",
        "Designed API flows to send content to a GPT-based question generation service and render structured quiz outputs in the UI.",
        "Implemented secure backend endpoints for managing user content, request payloads, and database transactions using Drizzle ORM.",
        "Integrated Clerk for authentication and protected route handling, supporting personalized quiz experiences.",
        "Focused on seamless user experience by optimizing content parsing, API integration, and result rendering across devices.",
      ],
      name: "Content2Quiz",
      footer: "",
    },
    {
      header:
        "A self-contained educational technology platform for online proctoring and exam management, offering a personalized, flexible, scalable, inclusive, and non-intrusive solution that initiates the proctoring process.",
      responsibilites: [
        "Implemented a comprehensive set of proctoring features including live video and screen recording, AI-powered face and object detection, audio monitoring, and real-time violation alerts to ensure exam integrity.",
        "Developed a scalable exam management platform with configurable quiz settings, Canvas-integrated assignment handling, dynamic scheduling, real-time countdown timers, automatic submission logic, and post-exam review functionality for instructors and students.",
        "Developed a modular user management system with role-based access control (RBAC), enabling customized experiences for students, instructors, proctors, and admins—complete with dashboard views, progress insights, and profile configuration.",
        "Integrated interactive exam features including live support chat, real-time messaging between students and proctors, video conferencing via OpenVidu, a help system for technical/general support, and instant violation reporting with alerts.",
        "Implemented real-time communication with Socket.IO, video/audio streaming using WebRTC, AI services for automated monitoring, and Paypal integration for payment processing.",
      ],
      name: "Bsecure Pro",
      footer: "",
    },
    {
      header:
        "An Educational Technology Platform focused on Online Proctoring and Exam Management. Implement features that provide secure online examination solutions with AI-powered proctoring capabilities and seamlessly integrate with any application such as an LMS or test engine to execute secure online examinations with AI-powered proctoring capabilities.",
      responsibilites: [
        "Revamped legacy UI",
        "Implemented a comprehensive set of proctoring features including live video and screen recording, AI-powered face and object detection, audio monitoring, and real-time violation alerts to ensure exam integrity.",
        "Developed an exam management platform with configurable quiz settings, Canvas-integrated assignment handling, dynamic scheduling, real-time countdown timers, automatic submission logic, and post-exam review functionality for instructors and students.",
        "Integrated interactive exam features including live support chat, real-time messaging between students and proctors, video conferencing via OpenVidu, a help system for technical/general support, and instant violation reporting with alerts.",
        "Implemented real-time communication with Socket.IO, video/audio streaming using WebRTC, AI services for automated monitoring.",
        "Managed time-based exam windows",
      ],
      name: "Examd - Canvas",
      footer: "",
    },
    {
      header:
        "A chronic disease management solution that is compliant with HIPAA, and enables health care organizations to reduce costs, and successfully assume risk in value-based contracts.",
      responsibilites: [
        "Resolved a critical issue in the diagnosis module that caused inaccurate date rendering, ensuring trustworthy clinical insights for patients and care teams.",
        "Enhanced the data preprocessing pipeline to accurately format and filter patient diagnosis records, enabling clear and effective visual representation in analytical dashboards.",
        "Designed and implemented a responsive analytics screen that presents key trends in patient vitals, supporting clinicians in making informed healthcare decisions.",
        "Identified and fixed platform-specific crashes across Android and iOS, improving app stability and critical patient monitoring workflows.",
      ],
      name: "CarelogiQ",
      footer: "",
    },
  ];

  const formatDescription = (
    header: string,
    responsibilites: string[],
    footer: string,
    index: number,
    name: string
  ) => {
    return (
      <div
        className="flex h-auto w-auto flex-col rounded-2xl border border-zinc-100 p-6 pt-2 hover:rounded-xl hover:bg-zinc-800 dark:border-zinc-700/40"
        key={index}
      >
        <span className="relative z-10 mt-6 text-base font-semibold tracking-wide text-zinc-800 dark:text-zinc-100">
          {name}
        </span>
        <p className="relative z-10 mt-2 text-sm tracking-wide text-zinc-600 dark:text-zinc-400">
          {header}
        </p>
        <span className="relative z-10 mt-6 text-base tracking-wide text-zinc-800 dark:text-zinc-100/80">
          Key Responsibilities
        </span>
        <ScrollArea className="h-36 relative z-10 ml-4 mt-2">
          <ul className="h-full list-outside list-disc text-sm tracking-wide text-zinc-600 dark:text-zinc-400">
            {responsibilites.map((item: string, index: number) => (
              <li className="ml-4 list-item break-before-all" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <ScrollBar orientation="vertical" className="ml-2"/>
        </ScrollArea>
        {footer && (
          <p className="relative z-10 mt-6 text-sm tracking-wide text-zinc-600 dark:text-zinc-400">
            {footer}
          </p>
        )}
      </div>
    );
  };

  const experiences = experienceDescription;

  return (
    <div
      className="flex h-full w-full flex-col items-start justify-center gap-8"
      ref={ref}
      id="experience"
    >
      <div className="flex h-full w-full flex-row items-center justify-start gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 512 388.14"
          className="h-10 w-10 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
        >
          <path d="m360 .02 21.53 1.12c10.07.51 17.88 9.18 17.35 19.23l-1.03 19.95c9.64 3.42 18.64 8.11 26.85 13.82l15.59-14.05c7.49-6.75 19.12-6.16 25.88 1.34l14.43 16c6.76 7.49 6.15 19.13-1.33 25.88l-16.73 15.11c4.1 8.45 7.18 17.49 9.1 26.93l22.97 1.19c10.07.51 17.88 9.16 17.36 19.24l-1.11 21.52c-.51 10.07-9.18 17.88-19.24 17.36l-23.2-1.2a113.69 113.69 0 0 1-11.88 25.56l15.37 17.05c6.75 7.48 6.15 19.13-1.34 25.88l-16 14.44c-7.49 6.75-19.13 6.13-25.88-1.34l-14.53-16.1c-8.53 4.66-17.71 8.26-27.34 10.63v-56.17c20.01-8.72 34.46-28.18 35.66-51.46 1.69-32.79-23.52-60.74-56.31-62.43-19.74-1.01-37.73 7.72-49.29 21.99h-66.17c3.42-10.11 8.2-19.55 14.12-28.14l-10.52-11.66c-6.75-7.48-6.15-19.13 1.33-25.88l16.02-14.44c7.47-6.74 19.12-6.14 25.87 1.34l11.38 12.6c9.64-4.74 20.03-8.15 30.91-10.02l.93-17.92C341.28 7.32 349.93-.49 360 .02zM188.23 257.05h-25.91c-.83 0-1.47.66-1.47 1.49v54.6c0 .83.64 1.49 1.47 1.49h25.88c.83 0 1.48-.66 1.48-1.49v-54.6c0-.82-.62-1.49-1.45-1.49zM19.91 141.15h93.21v-25.76c0-7.76 6.34-14.1 14.09-14.1h96.13c7.75 0 14.09 6.34 14.09 14.1v25.76h93.21c10.9 0 19.91 9.02 19.91 19.91v48.1c-22.51 15.43-45.73 28.58-69.67 39.31-24.07 10.78-48.89 19.14-74.57 24.91v-19.23c0-8.88-7.15-16.04-16.03-16.04h-30.04c-8.88 0-16.03 7.16-16.03 16.04v18.79C119.22 267.21 95 259 71.52 248.47 46.93 237.46 23.1 223.85 0 207.87v-46.81c0-10.91 9.01-19.91 19.91-19.91zm330.64 96.54v130.54a19.7 19.7 0 0 1-5.87 14.04c-3.63 3.61-8.6 5.87-14.04 5.87H19.91c-5.5 0-10.46-2.26-14.03-5.87C2.25 378.64 0 373.68 0 368.23V236.49c19.65 12.6 39.88 23.62 60.68 32.94 26.85 12.05 54.69 21.26 83.55 27.42v20.68c0 8.88 7.16 16.04 16.04 16.04h30.04c8.87 0 16.03-7.16 16.03-16.04v-20.3c29.41-6.16 58.01-15.52 85.42-27.82 20.14-9.02 39.73-19.63 58.79-31.72zm-212.56-117.2c-.95 0-1.79.85-1.79 1.8v18.31h78.13v-18.31c0-.96-.85-1.8-1.79-1.8h-74.55z" />
        </svg>
        <HeaderText id="experienceHeader">Experiences</HeaderText>
      </div>
      <div className="grid h-auto gap-8 md:w-full lg:grid-cols-2">
        {experiences.map((item: ExperienceDescriptionProps, index: number) => {
          return formatDescription(
            item.header,
            item.responsibilites,
            item.footer,
            index,
            item.name
          );
        })}
      </div>
    </div>
  );
});

export default Experience;
