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
import Antd from "../../../assets/logos/antd.png";
import FramerMotion from "../../../assets/logos/framerMotion.png";
import Mantine from "../../../assets/logos/mantine.png";
import MaterialUI from "../../../assets/logos/materialui.png";
import NextJS from "../../../assets/logos/nextjs.png";
import ReactJS from "../../../assets/logos/react.png";
import NodeJs from "../../../assets/logos/nodejs.png";
import Prisma from "../../../assets/logos/prisma.png";
import ReactQuery from "../../../assets/logos/reactQuery.png";
import Redux from "../../../assets/logos/redux.png";
import Shadcn from "../../../assets/logos/shadcn.png";
import SocketIo from "../../../assets/logos/socketIo.png";
import Tailwind from "../../../assets/logos/tailwind.webp";
import ThreeJs from "../../../assets/logos/threejs.png";
import Trpc from "../../../assets/logos/trpc.png";
import Webrtc from "../../../assets/logos/webrtc.png";
import Zustand from "../../../assets/logos/zustand.png";
import TextHeader from "../textHeaders/textHeaders";
import classes from "./skills.module.css";
import { initFireCursorTrail } from "~/app/_utility/functions";

type ImageContainersProps = {
  imageUrl: string;
};

type ImageContainersCombinedProps = ImageContainersProps &
  React.HTMLProps<HTMLDivElement>;

const Skills: NextPage = (): JSX.Element => {
  const heading = useRef<HTMLHeadingElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const skillSet: string[] = [
    ReactJS.src,
    NextJS.src,
    Mantine.src,
    FramerMotion.src,
    Antd.src,
    MaterialUI.src,
    NodeJs.src,
    Prisma.src,
    ReactQuery.src,
    Redux.src,
    Shadcn.src,
    SocketIo.src,
    Tailwind.src,
    ThreeJs.src,
    Trpc.src,
    Webrtc.src,
    Zustand.src,
  ];

  const imageRefs = skillSet.map((_) => useRef<HTMLImageElement | null>(null));

  useEffect(() => {
    if (cursorRef.current) {
      initFireCursorTrail(cursorRef.current);
    }
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      heading.current,
      {
        x: -1000,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: Power3.easeIn,
      },
    );

    imageRefs.forEach(
      (ref: MutableRefObject<HTMLImageElement | null>, index: number) => {
        if (ref.current) {
          gsap.to(ref.current, {
            // scrollTrigger: {
            //   trigger: imageRef.current,
            //   start: "top top",
            //   end: "center bottom",
            //   toggleActions: "restart pause reverse pause",
            // },
            delay: 0.2,
            duration: 1,
            stagger: 0.5,
            y: function (i, elem, boxes) {
              return index % 2 === 1 ? -80 : 80;
            },
            repeat: -1,
            yoyo: true,
          });
        }
      },
    );
  }, []);

  return (
    <div className="flex h-full flex-col items-start justify-center gap-36">
      <div ref={(el) => (cursorRef.current = el)} />
      <TextHeader>Skills</TextHeader>
      <div className="flex w-full flex-row flex-wrap justify-around gap-10">
        {skillSet.map((imageUrl: string, index: number) => (
          <ImageContainers
            imageUrl={imageUrl}
            ref={imageRefs[index]}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

const ImageContainers = forwardRef(
  (
    { imageUrl, ...rest }: ImageContainersCombinedProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        className={`h-32 w-32 overflow-hidden rounded-full ${classes.borderGlow}`}
        ref={ref}
      >
        <img className="h-full w-full object-cover" src={imageUrl} alt="!IMG" />
      </div>
    );
  },
);

export default Skills;
