import { ForwardedRef, forwardRef } from "react";

import HeaderText from "../header-text";
import { TooltipWrapper } from "../tooltip-wrapper";
import Image from "next/image";

type ImageContainersProps = {
  imageUrl: string;
  id: string;
  name: string;
};

type SkillSet = {
  id: string;
  name: string;
  imageUrl: string;
};

type ImageContainersCombinedProps = ImageContainersProps &
  React.HTMLProps<HTMLDivElement>;

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  const others: SkillSet[] = [
    { id: "framemotion", imageUrl: "/logos/framerMotion.png", name: "Framer Motion" },
    { id: "socketio", imageUrl: "/logos/socketIo.png", name: "Socket.IO" },
    { id: "trpc", imageUrl: "/logos/trpc.png", name: "tRPC" },
    { id: "webrtc", imageUrl: "/logos/webrtc.png", name: "WebRTC" },
  ];

  const frontEndTechs: SkillSet[] = [
    { id: "react", imageUrl: "/logos/react.png", name: "React" },
  ];

  const backEndTechs: SkillSet[] = [
    { id: "next", imageUrl: "/logos/nextjs.webp", name: "Next.js" },
    { id: "node", imageUrl: "/logos/nodejs.png", name: "Node.js" },
  ];

  const uiComponentTechs: SkillSet[] = [
    { id: "mantine", imageUrl: "/logos/mantine.png", name: "Mantine" },
    { id: "shadcn", imageUrl: "/logos/shadcn.png", name: "ShadCN" },
    { id: "antd", imageUrl: "/logos/antd.png", name: "Ant Design" },
  ];

  const dataFetchLibrary: SkillSet[] = [
    { id: "reactquery", imageUrl: "/logos/reactQuery.png", name: "React Query" },
    { id: "axios", imageUrl: "/logos/axios.png", name: "Axios" },
  ];

  const ormLibraries: SkillSet[] = [
    { id: "prisma", imageUrl: "/logos/prisma.png", name: "Prisma" },
    { id: "drizzle", imageUrl: "/logos/drizzle.jpg", name: "Drizzle" },
  ];

  const stateManagement: SkillSet[] = [
    { id: "zustand", imageUrl: "/logos/zustand.png", name: "Zustand" },
    { id: "redux", imageUrl: "/logos/redux.png", name: "Redux" },
  ];

  const cssFramwork: SkillSet[] = [
    { id: "tailwind", imageUrl: "/logos/tailwind.webp", name: "Tailwind CSS" },
  ];

  return (
    <div
      className="flex flex-col flex-grow w-full gap-8 pt-2"
      id="skills"
      ref={ref}
    >
      <div className="flex h-full w-full items-center justify-start gap-4">
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
        <HeaderText id="skillHeader">Skills</HeaderText>
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
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-3"
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
            {frontEndTechs.map((tech: SkillSet) => {
              return (
                <ImageContainers
                  imageUrl={tech.imageUrl}
                  id={tech.id}
                  name={tech.name}
                  key={tech.id}
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
                  id={tech.id}
                  name={tech.name}
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
                  id={tech.id}
                  name={tech.name}
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
                  id={tech.id}
                  name={tech.name}
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
                  id={tech.id}
                  name={tech.name}
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
                  id={tech.id}
                  name={tech.name}
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
                  id={tech.id}
                  name={tech.name}
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
                  id={tech.id}
                  name={tech.name}
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
    { imageUrl, name, id, ...rest }: ImageContainersCombinedProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        className={`h-12 w-12 overflow-hidden rounded-full`}
        id={id}
        ref={ref}
      >
        <TooltipWrapper value={name}>
          <Image
            width={48}
            height={48}
            className="w-full h-full object-cover border-2 rounded-full p-0.5 border-zinc-200 dark:border-zinc-700/40"
            src={imageUrl}
            alt="!IMG"
          />
        </TooltipWrapper>
      </div>
    );
  }
);

export default Skills;
