"use client";

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NextPage } from "next";
import {
  ForwardedRef,
  forwardRef,
  MutableRefObject,
  useEffect,
  useRef,
} from "react";
import { initFireCursorTrail } from "~/app/_utility/functions";
import Antd from "../../../assets/logos/antd.png";
import FramerMotion from "../../../assets/logos/framerMotion.png";
import Mantine from "../../../assets/logos/mantine.png";
import MaterialUI from "../../../assets/logos/materialui.png";
import NextJS from "../../../assets/logos/nextjs.png";
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
import TextHeader from "../textHeaders/textHeaders";
import classes from "./skills.module.css";

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
  gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    if (cursorRef.current) {
      initFireCursorTrail(cursorRef.current);
    }

    const ctx = gsap.context(() => {
      gsap.from("#header", {
        duration: 0.3,
        text: "",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "-=70",
          end: "+=20",
          scrub: 1,
        },
      });

      gsap.from("#materialui", {
        scale: 0,
        y: -100,
        duration: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "+=10",
          end: "+=20",
          scrub: 1,
        },
      });
      gsap.from("#node", {
        scale: 0,
        x: 100,
        duration: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "+=10",
          end: "+=20",
          scrub: 1,
        },
      });
      gsap.from("#shadcn", {
        scale: 0,
        y: 100,
        duration: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "+=10",
          end: "+=20",
          scrub: 1,
        },
      });
      gsap.from("#redux", {
        scale: 0,
        x: -100,
        duration: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "+=10",
          end: "+=20",
          scrub: 1,
        },
      });
      gsap.from("#react", {
        scale: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "+=10",
          end: "+=20",
          scrub: 1,
        },
      });
      gsap.from("#next", {
        scale: 0,
        y: -100,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "+=10",
          end: "+=20",
          scrub: 1,
        },
      });
      gsap.from("#mantine", {
        scale: 0,
        y: -100,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "+=10",
          end: "+=20",
          scrub: 1,
        },
      });
      gsap.from("#framemotion", {
        scale: 0,
        y: -100,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "+=10",
          end: "+=20",
          scrub: 1,
        },
      });
      gsap.from("#prisma", {
        scale: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "+=10",
          end: "+=20",
          scrub: 1,
        },
      });
      gsap.from("#socketio", {
        scale: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "+=10",
          end: "+=20",
          scrub: 1,
        },
      });
      gsap.from("#zustand", {
        scale: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "+=10",
          end: "+=20",
          scrub: 1,
        },
      });
      gsap.from("#tailwind", {
        scale: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "+=10",
          end: "+=20",
          scrub: 1,
        },
      });
      gsap.from("#trpc", {
        scale: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "+=10",
          end: "+=20",
          scrub: 1,
        },
      });
      gsap.from("#webrtc", {
        scale: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "+=10",
          end: "+=20",
          scrub: 1,
        },
      });
      gsap.from("#antd", {
        scale: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "+=10",
          end: "+=20",
          scrub: 1,
        },
      });
      gsap.from("#reactquery", {
        scale: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "+=10",
          end: "+=20",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="my-24 flex h-full w-screen flex-col items-center justify-center gap-32"
      ref={(el) => {
        containerRef.current = el;
      }}
    >
      <TextHeader>Skills</TextHeader>
      <div className="grid grid-cols-4 gap-12">
        {skillsDetail.map((item: SkillSet, index: number) => (
          <ImageContainers
            imageUrl={item.imageUrl}
            key={index}
            id={item.name}
          />
        ))}
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
        className={`h-24 w-24 overflow-hidden rounded-full ${classes.borderGlow}`}
        id={id}
        ref={ref}
      >
        <img className="h-full w-full object-cover" src={imageUrl} alt="!IMG" />
      </div>
    );
  },
);

export default Skills;
