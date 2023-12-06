"use client";

import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NextPage } from "next";
import { ForwardedRef, forwardRef, useEffect, useRef } from "react";
import { initFireCursorTrail } from "~/app/_utility/functions";
import Antd from "../../../assets/logos/antd.png";
import FramerMotion from "../../../assets/logos/framerMotion.png";
import Mantine from "../../../assets/logos/mantine.png";
import MaterialUI from "../../../assets/logos/materialui.png";
import NextJS from "../../../assets/logos/nextjs.webp";
import NodeJs from "../../../assets/logos/nodejs.png";
import Prisma from "../../../assets/logos/prisma.png";
import ReactJS from "../../../assets/logos/react.png";
import ReactQuery from "../../../assets/logos/reactQuery.png";
import Redux from "../../../assets/logos/redux.png";
import Shadcn from "../../../assets/logos/shadcn.png";
import SocketIo from "../../../assets/logos/socketIo.png";
import Tailwind from "../../../assets/logos/tailwind.webp";
import Trpc from "../../../assets/logos/trpc.png";
import Webrtc from "../../../assets/logos/webrtc.png";
import Zustand from "../../../assets/logos/zustand.png";
import Axios from "../../../assets/logos/axios.png";
import TextHeader from "../textHeaders/textHeaders";
import classes from "./skills.module.css";
import { TextPlugin } from "gsap/TextPlugin";
import { Tooltip } from "@mantine/core";

type ImageContainersProps = {
  imageUrl: string;
  id: string;
};

type SkillSet = {
  name: string;
  imageUrl: string;
};

type ImageContainersCombinedProps = ImageContainersProps &
  React.HTMLProps<HTMLDivElement>;

const Skills: NextPage = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  const skillsDetail: SkillSet[] = [
    { name: "react", imageUrl: ReactJS.src },
    { name: "next", imageUrl: NextJS.src },
    { name: "mantine", imageUrl: Mantine.src },
    { name: "framemotion", imageUrl: FramerMotion.src },
    { name: "antd", imageUrl: Antd.src },
    { name: "materialui", imageUrl: MaterialUI.src },
    { name: "node", imageUrl: NodeJs.src },
    { name: "prisma", imageUrl: Prisma.src },
    { name: "reactquery", imageUrl: ReactQuery.src },
    { name: "redux", imageUrl: Redux.src },
    { name: "shadcn", imageUrl: Shadcn.src },
    { name: "socketio", imageUrl: SocketIo.src },
    { name: "tailwind", imageUrl: Tailwind.src },
    { name: "trpc", imageUrl: Trpc.src },
    { name: "webrtc", imageUrl: Webrtc.src },
    { name: "zustand", imageUrl: Zustand.src },
  ];

  const frontEndTechs: SkillSet[] = [{ name: "react", imageUrl: ReactJS.src }];

  const backEndTechs: SkillSet[] = [
    { name: "next", imageUrl: NextJS.src },
    { name: "node", imageUrl: NodeJs.src },
  ];

  const uiComponentTechs: SkillSet[] = [
    { name: "mantine", imageUrl: Mantine.src },
    { name: "shadcn", imageUrl: Shadcn.src },
    { name: "antd", imageUrl: Antd.src },
  ];

  const dataFetchLibrary: SkillSet[] = [
    { name: "reactquery", imageUrl: ReactQuery.src },
    { name: "axios", imageUrl: Axios.src },
  ];

  useEffect(() => {
    if (cursorRef.current) {
      initFireCursorTrail(cursorRef.current);
    }
    const tl = gsap.timeline();
    const ctx = gsap.context(() => {
      tl.fromTo(
        "#skillHeader",
        {
          duration: 0.3,
          opacity: 0,
          text: "",
        },
        {
          opacity: 1,
          duration: 0.5,
          text: "Skills",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top-=270",
            end: "top-=200",
            scrub: 1,
            markers: true,
          },
        },
      )
        .to("#slogan", {
          opacity: 0,
        })
        .to("#slogan", {
          opacity: 1,
          duration: 0.3,
          ease: Power3.easeIn,
          scrollTrigger: {
            trigger: "#skillHeader",
            start: "top-=210",
            end: "top-=30",
            scrub: 1,
            markers: true,
          },
        })
        .fromTo(
          "#techcontainer",
          {
            scale: 0,
            duration: 0.2,
            scrollTrigger: {
              trigger: "#slogan",
              start: "top-=20",
              end: "top+=30",
              scrub: true,
            },
            ease: Power3.easeIn,
          },
          {
            scale: 1,
            duration: 0.1,
            scrollTrigger: {
              trigger: "#slogan",
              start: "top-=20",
              end: "top+=30",
              scrub: true,
            },
            ease: Power3.easeIn,
          },
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="flex h-full w-full flex-col items-start justify-center gap-8 pt-8"
      ref={(el) => {
        containerRef.current = el;
      }}
    >
      <TextHeader id="skillHeader">Skills</TextHeader>
      <div className="max-w-full">
        <div className="mr-auto w-full md:w-4/5">
          <p
            className="h-hull w-full break-before-all text-left text-base text-zinc-600 opacity-0 dark:text-zinc-400"
            id="slogan"
          >
            With these skill sets, I have been nailing down the creation of
            dynamic and responsive user interfaces, seamlessly integrating state
            management, and optimizing performance for an enhanced user
            experience in my React.js projects.
          </p>
        </div>
      </div>
      <div
        className="flex w-full scale-0 flex-row flex-wrap justify-start gap-4"
        id="techcontainer"
      >
        <div
          className="flex h-full w-auto flex-col items-start justify-start gap-4 p-4 hover:rounded-xl hover:bg-zinc-800"
          id="uitech"
        >
          <div className="max-w-full border-l-green-500">
            <div className="w-36">
              <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                UI Libraries
              </h2>
            </div>
          </div>
          <div className="flex w-full flex-row flex-wrap justify-start gap-4">
            {frontEndTechs.map((tech: SkillSet, index: number) => {
              return (
                <ImageContainers
                  imageUrl={tech.imageUrl}
                  id={tech.name}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div
          className="flex h-full w-auto flex-col items-start justify-start gap-4 p-4 hover:rounded-xl hover:bg-zinc-800"
          id="uicomptech"
        >
          <div className="max-w-full border-l-green-500">
            <div className="w-auto">
              <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                UI Component Libraries
              </h2>
            </div>
          </div>
          <div className="flex w-full flex-row flex-wrap justify-start gap-4">
            {uiComponentTechs.map((tech: SkillSet, index: number) => {
              return (
                <ImageContainers
                  imageUrl={tech.imageUrl}
                  id={tech.name}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div
          className="flex h-full w-auto flex-col items-start justify-start gap-4 p-4 hover:rounded-xl hover:bg-zinc-800"
          id="datafetchtech"
        >
          <div className="max-w-full border-l-green-500">
            <div className="w-auto">
              <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                Data Fetch Libraries
              </h2>
            </div>
          </div>
          <div className="flex w-full flex-row flex-wrap justify-start gap-4">
            {dataFetchLibrary.map((tech: SkillSet, index: number) => {
              return (
                <ImageContainers
                  imageUrl={tech.imageUrl}
                  id={tech.name}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div
          className="flex h-full w-auto flex-col items-start justify-start gap-4 p-4 hover:rounded-xl hover:bg-zinc-800"
          id="backendtech"
        >
          <div className="max-w-full border-l-green-500">
            <div className="w-auto">
              <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                Backend Technologies
              </h2>
            </div>
          </div>
          <div className="flex w-full flex-row flex-wrap justify-start gap-4">
            {backEndTechs.map((tech: SkillSet, index: number) => {
              return (
                <ImageContainers
                  imageUrl={tech.imageUrl}
                  id={tech.name}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageContainers = forwardRef(
  (
    { imageUrl, id, ...rest }: ImageContainersCombinedProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        className={`h-12 w-12 overflow-hidden rounded-full`}
        id={id}
        ref={ref}
      >
        <Tooltip label={id}>
          <img
            className="h-full w-full object-fill"
            src={imageUrl}
            alt="!IMG"
          />
        </Tooltip>
      </div>
    );
  },
);

export default Skills;
