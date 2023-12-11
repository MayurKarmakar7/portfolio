"use client";

import { Tooltip } from "@mantine/core";
import { ForwardedRef, forwardRef } from "react";
import Antd from "../../../assets/logos/antd.png";
import Axios from "../../../assets/logos/axios.png";
import Drizzle from "../../../assets/logos/drizzle.jpg";
import FramerMotion from "../../../assets/logos/framerMotion.png";
import Mantine from "../../../assets/logos/mantine.png";
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
import TextHeader from "../textHeaders/textHeaders";

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

const Skills = forwardRef<HTMLDivElement, {}>((props, ref): JSX.Element => {
  const others: SkillSet[] = [
    { name: "framemotion", imageUrl: FramerMotion.src },
    { name: "socketio", imageUrl: SocketIo.src },
    { name: "trpc", imageUrl: Trpc.src },
    { name: "webrtc", imageUrl: Webrtc.src },
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

  const ormLibraries: SkillSet[] = [
    { name: "prisma", imageUrl: Prisma.src },
    { name: "Drizzle", imageUrl: Drizzle.src },
  ];

  const stateManagement: SkillSet[] = [
    { name: "zustand", imageUrl: Zustand.src },
    { name: "redux", imageUrl: Redux.src },
  ];

  const cssFramwork: SkillSet[] = [
    { name: "tailwind", imageUrl: Tailwind.src },
  ];

  return (
    <div
      className="flex h-full w-full flex-col items-start justify-center gap-8 pt-2"
      id="skills"
      ref={ref}
    >
      <div className="flex h-full w-full flex-row items-center justify-start gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xlinkActuate="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          viewBox="0 0 290 290"
          xmlSpace="preserve"
          className="h-10 w-10 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
        >
          <path d="M285.857,52.128l-42.557,42.557c-3.887,3.887-10.184,3.887-14.072,0l-33.914-33.914c-3.887-3.887-3.887-10.186,0-14.071  l42.557-42.556c-26.965-9.211-58.012-3.066-79.518,18.441c-22.459,22.457-28.162,55.313-17.129,83.063l-45.361,45.359  c-25.279-9.078-54.639-3.505-74.889,16.747c-27.967,27.966-27.965,73.308,0,101.271c27.961,27.964,73.303,27.966,101.27,0  c20.252-20.253,25.826-49.614,16.748-74.893l45.359-45.359c27.75,11.032,60.607,5.33,83.065-17.127  C288.922,110.141,295.068,79.095,285.857,52.128z M99.793,246.573L61.291,256.89l-28.182-28.181l10.318-38.501l38.5-10.318  l28.184,28.182L99.793,246.573z" />
        </svg>
        <TextHeader id="skillHeader">Skills</TextHeader>
      </div>
      <div className="max-w-full">
        <div className="mr-auto w-full md:w-4/5">
          <p
            className="h-hull w-full break-before-all text-left text-base text-zinc-600 dark:text-zinc-400"
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
        className="grid h-auto w-full grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        id="techcontainer"
      >
        <div
          className="flex h-full w-full flex-col items-start justify-start gap-4 rounded-2xl border border-zinc-100 p-6 hover:rounded-xl hover:bg-zinc-800 dark:border-zinc-700/40 md:w-auto"
          id="uitech"
        >
          <div className="max-w-full border-l-green-500">
            <div className="w-36">
              <h2 className="text-base font-semibold tracking-wider text-zinc-800 dark:text-zinc-100">
                UI Libraries
              </h2>
            </div>
          </div>
          <div className="flex w-full max-w-full flex-row flex-wrap gap-4">
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
          className="flex h-full w-full flex-col items-start justify-start gap-4 rounded-2xl border border-zinc-100 p-6 hover:rounded-xl hover:bg-zinc-800 dark:border-zinc-700/40 md:w-auto"
          id="uicomptech"
        >
          <div className="max-w-full border-l-green-500">
            <div className="w-auto">
              <h2 className="text-base font-semibold tracking-wider text-zinc-800 dark:text-zinc-100">
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
          className="flex h-full w-full flex-col items-start justify-start gap-4 rounded-2xl border border-zinc-100 p-6 hover:rounded-xl hover:bg-zinc-800 dark:border-zinc-700/40 md:w-auto"
          id="datafetchtech"
        >
          <div className="max-w-full border-l-green-500">
            <div className="w-auto">
              <h2 className="text-base font-semibold tracking-wider text-zinc-800 dark:text-zinc-100">
                Data Fetch Libraries
              </h2>
            </div>
          </div>
          <div className="flex w-full flex-row flex-wrap justify-start gap-4 md:w-auto">
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
          className="flex h-full w-full flex-col items-start justify-start gap-4 rounded-2xl border border-zinc-100 p-6 hover:rounded-xl hover:bg-zinc-800 dark:border-zinc-700/40 md:w-auto"
          id="backendtech"
        >
          <div className="max-w-full border-l-green-500">
            <div className="w-auto">
              <h2 className="text-base font-semibold tracking-wider text-zinc-800 dark:text-zinc-100">
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
        <div
          className="flex h-full w-full flex-col items-start justify-start gap-4 rounded-2xl border border-zinc-100 p-6 hover:rounded-xl hover:bg-zinc-800 dark:border-zinc-700/40 md:w-auto"
          id="backendtech"
        >
          <div className="max-w-full border-l-green-500">
            <div className="w-auto">
              <h2 className="text-base font-semibold tracking-wider text-zinc-800 dark:text-zinc-100">
                ORM Libraries
              </h2>
            </div>
          </div>
          <div className="flex w-full flex-row flex-wrap justify-start gap-4">
            {ormLibraries.map((tech: SkillSet, index: number) => {
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
          className="flex h-full w-full flex-col items-start justify-start gap-4 rounded-2xl border border-zinc-100 p-6 hover:rounded-xl hover:bg-zinc-800 dark:border-zinc-700/40 md:w-auto"
          id="backendtech"
        >
          <div className="max-w-full border-l-green-500">
            <div className="w-auto">
              <h2 className="text-base font-semibold tracking-wider text-zinc-800 dark:text-zinc-100">
                State Management Libraries
              </h2>
            </div>
          </div>
          <div className="flex w-full flex-row flex-wrap justify-start gap-4">
            {stateManagement.map((tech: SkillSet, index: number) => {
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
          className="flex h-full w-full flex-col items-start justify-start gap-4 rounded-2xl border border-zinc-100 p-6 hover:rounded-xl hover:bg-zinc-800 dark:border-zinc-700/40 md:w-auto"
          id="backendtech"
        >
          <div className="max-w-full border-l-green-500">
            <div className="w-auto">
              <h2 className="text-base font-semibold tracking-wider text-zinc-800 dark:text-zinc-100">
                CSS Frameworks
              </h2>
            </div>
          </div>
          <div className="flex w-full flex-row flex-wrap justify-start gap-4">
            {cssFramwork.map((tech: SkillSet, index: number) => {
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
          className="flex h-full w-full flex-col items-start justify-start gap-4 rounded-2xl border border-zinc-100 p-6 hover:rounded-xl hover:bg-zinc-800 dark:border-zinc-700/40 md:w-auto"
          id="backendtech"
        >
          <div className="max-w-full border-l-green-500">
            <div className="w-auto">
              <h2 className="text-base font-semibold tracking-wider text-zinc-800 dark:text-zinc-100">
                Others
              </h2>
            </div>
          </div>
          <div className="flex w-full flex-row flex-wrap justify-start gap-4">
            {others.map((tech: SkillSet, index: number) => {
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
});

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
            className="h-full w-full object-cover"
            src={imageUrl}
            alt="!IMG"
          />
        </Tooltip>
      </div>
    );
  },
);

export default Skills;
