"use client";
import { gsap, Power2 } from "gsap";
import { NextPage } from "next";
import { useEffect, useLayoutEffect, useRef } from "react";
import BesecureLogo from "../../../assets/images/bsecurelogo.png";
import Carelogiq from "../../../assets/images/carelogiq.png";
import TextHeaders from "../textHeaders/textHeaders";
import "./Experience.module.css";

type TechnologyIconProps = {
  imageUrl: string;
};

type ExperienceDescriptionProps = {
  header: string;
  responsibilites: string[];
  footer: string;
};

const Experience: NextPage = (): JSX.Element => {
  const dividerRef = useRef<HTMLDivElement | null>(null);
  const images: string[] = [BesecureLogo.src, Carelogiq.src];
  const textRef = useRef<HTMLParagraphElement | null>(null);
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
      footer: "",
    },
  ];
  const experienceItemsAndProps = {
    beyondExamd: {
      imageRef: useRef<HTMLElement | null>(null),
      markerRef: useRef<HTMLElement | null>(null),
      descRef: useRef<HTMLElement | null>(null),
    },
    caregem: {
      imageRef: useRef<HTMLElement | null>(null),
      markerRef: useRef<HTMLElement | null>(null),
      descRef: useRef<HTMLElement | null>(null),
    },
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(dividerRef.current, {
      height: "500px",
      duration: 1,
      ease: Power2.easeInOut,
    })
      .to(
        dividerRef.current,
        {
          opacity: 0,
          duration: 0.1,
        },
        "-=0.5",
      )
      .to(
        dividerRef.current,
        {
          height: "500px",
          opacity: 1,
          duration: 0.1,
        },
        "-=0.1",
      );

    const { beyondExamd, caregem } = experienceItemsAndProps;
    tl.to(beyondExamd.markerRef.current, {
      width: "50px",
      duration: 1,
      top: "10%",
      ease: Power2.easeInOut,
    });
    tl.to(caregem.markerRef.current, {
      width: "50px",
      duration: 1,
      top: "80%",
      ease: Power2.easeInOut,
    });
    tl.to(beyondExamd.descRef.current, {
      width: "50px",
      duration: 1,
      top: "10%",
      ease: Power2.easeInOut,
    });
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
        },
      });
      timeline.to(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
        },
        rotateY: 360,
        duration: 5,
        // y: 200,
        // repeat: -1,
      });
    });
    return () => ctx.clear();
  });

  const experience = experienceDescription[0] as ExperienceDescriptionProps;

  return (
    <div
      className="mt-24 flex h-full w-full flex-col items-center justify-center gap-16"
      ref={(el) => (dividerRef.current = el)}
    >
      <TextHeaders>Experiences</TextHeaders>
    </div>
  );
};

export default Experience;
