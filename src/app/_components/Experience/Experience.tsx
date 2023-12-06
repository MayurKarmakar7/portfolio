"use client";
import gsap, { Power3 } from "gsap";
import { NextPage } from "next";
import { useEffect, useRef } from "react";
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

const Experience: NextPage = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement | null>(null);
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

  useEffect(() => {
    const tl = gsap.timeline();
    const ctx = gsap.context(() => {
      tl.fromTo(
        "#experienceHeader",
        {
          duration: 0.3,
          opacity: 0,
          text: "",
        },
        {
          opacity: 1,
          duration: 0.5,
          text: "Experiences",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top-=270",
            end: "top-=200",
            scrub: 1,
            markers: true,
          },
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const formatDescription = (
    header: string,
    responsibilites: string[],
    footer: string,
    index: number,
    imageUrl: string,
    name: string,
  ) => {
    return (
      <div className="flex h-full w-auto flex-col items-center gap-4 rounded-xl border border-[#52796f] p-4 hover:bg-zinc-800 hover:shadow-lg" key={index}>
        <div className="flex w-auto flex-row justify-start gap-4">
          <img src={imageUrl} alt="!IMG" className="my-auto h-32 w-32" />
          <div className="flex h-full flex-col items-start gap-2">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              {name}
            </h2>
            <p className="h-hull w-full break-before-all text-left text-base text-zinc-600 dark:text-zinc-400">
              {header}
            </p>
          </div>
        </div>
        <div className="flex h-full flex-col items-start gap-1">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            Key Responsibilities
          </h2>
          <ul className="ml-4 list-outside list-disc">
            {responsibilites.map((item: string) => (
              <li className="ml-4 list-item break-before-all text-start text-zinc-600 dark:text-zinc-400">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {footer && (
          <p className="h-hull w-full break-before-all text-left text-base text-zinc-600 dark:text-zinc-400">
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
      ref={(el) => (containerRef.current = el)}
    >
      <TextHeaders id="experienceHeader">Experiences</TextHeaders>
      <div className="flex h-full flex-col items-start gap-8 p-4 md:w-full md:flex-row md:justify-start">
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
      {/* <div className="flex h-full flex-col items-center gap-8 px-4 pt-8">
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
      </div> */}
    </div>
  );
};

export default Experience;
