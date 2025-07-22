import Image from "next/image";
import Link from "next/link";
import { forwardRef, JSX } from "react";

const Introduction = forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, ref): JSX.Element => {
  return (
    <div
      className="m-auto flex h-full w-full flex-col items-start pt-2"
      ref={ref}
      {...props}
    >
      <div
        className="flex h-full w-full flex-col items-start justify-start"
        id="introContainer"
      >
        <Image
          src="/images/mayurLogo.jpg"
          alt="..."
          width={64}
          height={64}
          className="hidden place-items-center rounded-full border-none object-cover align-middle shadow-lg md:block"
        />
        <div className="mt-9 flex h-full max-w-full flex-col items-center gap-6">
          <div className="mr-auto w-full lg:w-4/5">
            <h1
              className="text-3xl font-bold leading-10 text-zinc-800 dark:text-zinc-100 sm:text-5xl md:leading-normal"
              id="tagline"
            >
              Full-Stack Developer | React & Next.js Focused | Web Development
              Enthusiast
            </h1>
          </div>
          <div className="max-w-full">
            <div className="mr-auto w-full md:w-4/5">
              <p
                className="h-hull w-full break-before-all text-left text-base text-zinc-600 dark:text-zinc-400"
                style={{
                  lineHeight: "2rem",
                }}
              >
                I am Mayur Karmakar, a Full-Stack Developer with 4 years of
                hands-on experience building high-performance web applications.
                I specialize in modern frontend and backend technologies,
                including ReactJS, NextJS, and TypeScript. My versatile skill
                set also includes Redux, Zustand, WebRTC APIs, tRPC, and UI
                libraries such as Ant Design, Material-UI, and Mantine. I&apos;ve
                collaborated with diverse teams of developers, designers, and
                educators to deliver solutions that consistently exceed client
                expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-auto mt-6 flex h-full flex-row items-center justify-center gap-6">
        <Link
          className="-m-1 p-1"
          aria-label="Follow on LinkedIn"
          href="https://www.linkedin.com/in/mayur-karmakar-9b47b1169"
          id="linkedIn"
          target="_blank"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 fill-zinc-500 transition hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300"
          >
            <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
          </svg>
        </Link>
        <Link
          className="group -m-1 p-1"
          aria-label="Follow on GitHub"
          href="https://github.com/MayurKarmakar7"
          id="github"
          target="_blank"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 fill-zinc-500 transition hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
            ></path>
          </svg>
        </Link>
        <Link
          className="group -m-1 p-1"
          aria-label="Follow on Twitter"
          href="https://twitter.com/mayurkarmakar"
          target="_blank"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
          >
            <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path>
          </svg>
        </Link>
        <Link
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
          href="/docs/mayur_karmakar_resume.pdf"
          download
          target="_blank"
        >
          Download CV
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
          >
            <path
              d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
});
Introduction.displayName = "Introduction";

export default Introduction;
