"use client";
import gsap, { Power3 } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { NextPage } from "next";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import MayurLogo from "../../../assets/images/mayurLogo.jpg";
import { Linkedin, Github, StickyNote } from "lucide-react";
// import SplitText from "gsap/src/SplitText";

const Introduction: NextPage = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const textOneRef = useRef<HTMLParagraphElement | null>(null);
  gsap.registerPlugin(TextPlugin);
  const textTl = gsap.timeline({ repeat: -1 });
  textTl.timeScale(2);

  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (1 + max - min) + min);
  };

  const rangeToPercent = (number: number, min: number, max: number) => {
    return (number - min) / (max - min);
  };

  useEffect(() => {
    const tl = gsap.timeline();
    let desctl: gsap.core.Timeline | null = null;
    const ele = textOneRef.current;
    if (ele) {
      const splitTxt = new SplitType(ele, { types: "words" });
      desctl = gsap.timeline();
      if (splitTxt.words) {
        try {
          const numWords = splitTxt.words.length;
          if (ele) {
            gsap.set(ele, {
              transformPerspective: 600,
              perspective: 300,
              transformStyle: "preserve-3d",
              autoAlpha: 1,
            });
          }

          if (numWords > 0) {
            for (let i = 0; i < numWords; i++) {
              /* eslint-disable */
              desctl.from(
                splitTxt.words[i] as any,
                {
                  z: randomNumber(-500, 300),
                  opacity: 0,
                  rotationY: randomNumber(-40, 40),
                  duration: 1.5,
                },
                Math.random() * 1.5,
              );
              /* eslint-disable */
            }
          }
          desctl.from(
            ele,
            {
              rotationY: 180,
              transformOrigin: "50% 75% 200",
              ease: Power2.easeOut,
              duration: desctl.duration(),
            },
            0,
          );
          /* eslint-disable */
          for (let i = 0; i < numWords; i++) {
            var z = randomNumber(-50, 50);
            desctl.to(
              splitTxt.words[i] as any,
              { z: z, opacity: rangeToPercent(z, -50, 50), duration: 0.5 },
              "pulse",
            );
            /* eslint-disable */
          }

          desctl.to(
            ele,
            { rotationX: -35, rotationY: 0, duration: 0.5 },
            "pulse2",
          );

          desctl.to(
            splitTxt.words,
            { z: 0, opacity: 1, duration: 0.5 },
            "reset",
          );
          desctl.to(
            ele,
            { rotationY: 0, rotationX: 0, duration: 0.5 },
            "reset",
          );

          desctl.add("explode", "+=90");
          /* eslint-disable */
          for (let i = 0; i < numWords; i++) {
            desctl.to(
              splitTxt.words[i] as any,
              {
                z: randomNumber(100, 500),
                duration: 0.6,
                opacity: 0,
                rotation: randomNumber(360, 720),
                rotationX: randomNumber(-360, 360),
                rotationY: randomNumber(-360, 360),
              },
              "explode+=" + Math.random() * 0.2,
            );
          }
          /* eslint-disable */
        } catch (err) {
          console.log("err gsap", err);
        }
      }
    }
    const ctx = gsap.context(() => {
      tl.to(imageRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
      })
        .to(imageRef.current, {
          scale: 1,
          duration: 0.5,
          opacity: 1.5,
        })
        .to(imageRef.current, {
          marginRight: "auto",
          duration: 0.6,
          height: 95,
          width: 95,
        })
        .to("#tagline", {
          opacity: 0,
        })
        .to("#tagline", {
          opacity: 1,
          duration: 0.4,
          ease: Power3.easeIn,
        });
      if (desctl) {
        tl.add(desctl);
      }
      tl.fromTo(
        "#linkedin",
        {
          scale: 0,
          y: -100,
          duration: 0.3,
        },
        {
          scale: 1,
          y: 0,
          duration: 0.3,
        },
      );
      tl.fromTo(
        "#github",
        {
          scale: 0,
          y: -100,
          duration: 0.3,
        },
        {
          scale: 1,
          y: 0,
          duration: 0.3,
        },
      );
      tl.fromTo(
        "#resume",
        {
          scale: 0,
          y: -100,
          duration: 0.3,
        },
        {
          scale: 1,
          y: 0,
          duration: 0.3,
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="m-auto mt-16 flex h-full w-full overflow-hidden">
      <div
        className="flex h-full w-full flex-col items-center gap-8 md:flex-row md:justify-around"
        ref={(el) => {
          containerRef.current = el;
        }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-5">
          <img
            src={MayurLogo.src}
            ref={(el) => {
              imageRef.current = el;
            }}
            alt="..."
            className={`h-44 w-44 place-items-center rounded-full border-none object-cover align-middle opacity-0 shadow-lg`}
          />
          <div className="max-w-full">
            <div className="mr-auto w-full md:w-4/5">
              <h1
                className="break-after-all text-3xl font-bold tracking-tight text-zinc-800 opacity-0 dark:text-zinc-100 sm:text-5xl"
                id="tagline"
              >
                ReactJS Developer, Senior Front-end Engineer, Web Development
                Enthusiast
              </h1>
            </div>
          </div>
          <div className="max-w-full">
            <div className="mr-auto w-full md:w-4/5">
              <p
                className="h-hull w-full break-before-all text-left text-base text-zinc-600 opacity-0 dark:text-zinc-400"
                style={{
                  WebkitTransform: "translate3d(0, 0, 0)",
                  // lineHeight: 36,
                  margin: "50px auto",
                }}
                id="text"
                ref={(el) => {
                  textOneRef.current = el;
                }}
              >
                I am Mayur Karmakar, a Senior Frontend Developer at Beyond Exam,
                an Edtech SAAS company that focuses on equitable learning. I
                have two years of hands-on experience working with a versatile
                toolset, including ReactJS, NextJS, Redux, Zustand, Typescript,
                WebRTC Apis, TRPC and UI frameworks such as Ant Design,
                Material-UI, and Mantine.In this role, I have leveraged my
                knowledge and skills towards contributing to the development and
                improvement of the web application that enables educators and
                learners to provide and ensure effective e-learning help and
                meet their requirements.
                <br />
                <br />I have collaborated with a talented and diverse team of
                developers, designers, and educators, and I always strive to
                deliver solutions that not only meet but exceed client
                expectations.
              </p>
            </div>
          </div>
        </div>
        <div className="my-auto flex h-full flex-row justify-center gap-12 md:flex-col md:items-center">
          <div
            className="flex h-10 w-10 scale-0 cursor-pointer rounded-full border border-zinc-600 p-2 hover:border-white"
            id="linkedin"
          >
            <Linkedin className="text-zinc-600 hover:text-white" />
          </div>
          <div
            className="flex h-10 w-10 scale-0 cursor-pointer rounded-full border border-zinc-600 p-2 hover:border-white"
            id="github"
          >
            <Github className="text-zinc-600 hover:text-white" />
          </div>
          <div
            className="flex h-10 w-10 scale-0 cursor-pointer rounded-full border border-zinc-600 p-2 hover:border-white"
            id="resume"
          >
            <StickyNote className="text-zinc-600 hover:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
