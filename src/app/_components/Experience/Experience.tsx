"use client";
import { forwardRef } from "react";
import BesecureLogo from "../../../assets/images/bsecurelogo.png";
import Carelogiq from "../../../assets/images/carelogiq.png";
import TextHeaders from "../textHeaders/textHeaders";
import "./Experience.module.css";

type ExperienceDescriptionProps = {
  header: string;
  responsibilites: string[];
  footer: string;
  imageUrl: string;
  name: string;
};

const Experience = forwardRef<HTMLDivElement>((props, ref): JSX.Element => {
  const experienceDescription: ExperienceDescriptionProps[] = [
    {
      header:
        "As a Tech Lead and senior React Developer at Beyond Exam (an Edtech SAAS), I have grown from an individual contributor on small systems to a technical lead on this project.",
      responsibilites: [
        "Revamped UI for Beyond Exam",
        "Integrated WebRTC for live video conferences",
        "Built a robust chat system",
        "Enhanced UI for robustness and user experience",
        "Implemented features to detect and safeguard online assessments from cheating",
        "Managed time-based exam windows",
      ],
      imageUrl: BesecureLogo.src,
      name: "BSecure",
      footer:
        "In my 2years at Beyond Exam, I was a team member where I leveraged my communication skills to communicate, gather, and convey my thoughts to and from the offshore team members and drove the concept of this featureful Web-based Edtech software to release.",
    },
    {
      header:
        "I, as a senior React Developer of the Frontend team involved in leading, coordinating, and contributing to the project alongside other team members. Additionally, I applied my knowledge in React Native to maintain and develop the Android and IOS apps for this project.",
      responsibilites: [
        "Debugged code that displayed incorrect diagnosis dates for the patient",
        "Improved and updated code to preprocess patient diagnosis data for data visualization",
        "Implemented a screen to display analytical information related to a patient's vital signs",
        "Fixed app crashes on Android and iOS devices",
        "Added page scrolling for form fields on Ant Design (antd) when validation errors occur",
      ],
      name: "CarelogiQ",
      imageUrl: Carelogiq.src,
      footer: "",
    },
  ];

  const formatDescription = (
    header: string,
    responsibilites: string[],
    footer: string,
    index: number,
    imageUrl: string,
    name: string,
  ) => {
    return (
      <div
        className="flex h-auto w-auto flex-col rounded-2xl border border-zinc-100 p-6 hover:rounded-xl hover:bg-zinc-800 dark:border-zinc-700/40 pt-2"
        key={index}
      >
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-transparent bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <img
            alt=""
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
            className="h-8 w-8"
            src={imageUrl}
          />
        </div>
        <span className="relative z-10 mt-6 text-base font-semibold tracking-wide text-zinc-800 dark:text-zinc-100">
          {name}
        </span>
        <p className="relative z-10 mt-2 text-sm tracking-wide text-zinc-600 dark:text-zinc-400">
          {header}
        </p>
        {/* <div className="flex w-auto flex-row justify-start gap-4">
          <img src={imageUrl} alt="!IMG" className="h-32 w-32" />
          <div className="flex h-full flex-col items-start gap-2">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              {name}
            </h2>
            <p className="h-hull w-full break-before-all text-left text-base text-zinc-600 dark:text-zinc-400">
              {header}
            </p>
          </div>
        </div> */}
        <span className="relative z-10 mt-6 text-base font-semibold tracking-wide text-zinc-800 dark:text-zinc-100">
          Key Responsibilities
        </span>
        <ul className="relative z-10 ml-4 mt-2 list-outside list-disc text-sm tracking-wide text-zinc-600 dark:text-zinc-400">
          {responsibilites.map((item: string, index: number) => (
            <li className="ml-4 list-item break-before-all" key={index}>
              {item}
            </li>
          ))}
        </ul>
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
        <TextHeaders id="experienceHeader">Experiences</TextHeaders>
      </div>
      <div className="flex h-auto flex-col gap-8 md:w-full lg:flex-row md:justify-start">
        {experiences.map((item: ExperienceDescriptionProps, index: number) => {
          return formatDescription(
            item.header,
            item.responsibilites,
            item.footer,
            index,
            item.imageUrl,
            item.name,
          );
        })}
      </div>
    </div>
  );
});

export default Experience;
