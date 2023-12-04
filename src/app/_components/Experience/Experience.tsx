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
  const dividerRef = useRef<HTMLDivElement | null>(null);
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
    const ctx = gsap.context(() => {
      gsap.from("#header", {
        duration: 0.3,
        text: "",
        scrollTrigger: {
          trigger: dividerRef.current,
          start: "-=70",
          end: "+=20",
          scrub: 1,
        },
      });
      gsap.from("#BSecure", {
        ease: Power3.easeIn,
        scrollTrigger: {
          trigger: dividerRef.current,
          start: "-=70",
          end: "+=20",
          scrub: 1,
        },
        scale: 0,
      });
      gsap.from("#CarelogiQ", {
        ease: Power3.easeIn,
        scrollTrigger: {
          trigger: dividerRef.current,
          start: "-=70",
          end: "+=20",
          scrub: 1,
        },
        scale: 0,
      });
    }, dividerRef);
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
      <div
        id={name}
        className="h-3/5 w-full rounded-2xl border-[1px] border-solid border-white border-opacity-10 bg-gradient-to-b from-black/40 to-black/20 py-4 text-center shadow-[0_0_20px_10px_rgba(0,0,0,0.75)] backdrop-blur-lg"
      >
        <div className="flex h-full flex-col items-center gap-6 px-3 md:w-full md:flex-row md:justify-center">
          <img
            src={imageUrl}
            alt="!IMG"
            className="mx-auto my-auto h-32 w-auto"
          />
          <div
            className="flex h-3/5 w-full flex-col items-start gap-2"
            key={index}
          >
            <p className="break-before-all text-left text-base">{header}</p>
            <div className="flex h-full flex-col items-start gap-1">
              <p className="text-base font-semibold">Key Responsibilities</p>
              <ul className="list-outside list-disc">
                {responsibilites.map((item: string) => (
                  <li className="ml-4 list-item break-before-all text-start">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {footer && (
              <p className="break-before-all text-left text-base">{footer}</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const experiences = experienceDescription;

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-8"
      ref={(el) => (dividerRef.current = el)}
    >
      <TextHeaders>Experiences</TextHeaders>
      <div className="flex h-full flex-col items-center gap-8 px-4 pt-8">
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
};

export default Experience;
