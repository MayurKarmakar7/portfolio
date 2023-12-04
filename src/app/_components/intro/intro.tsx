"use client";
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";
import { NextPage } from "next";
import { useEffect, useRef } from "react";
import MayurLogo from "../../../assets/images/mayurLogo.jpg";
import TextHeader from "../textHeaders/textHeaders";
import { TextPlugin } from "gsap/TextPlugin";
// import SplitText from "gsap/src/SplitText";

const Introduction: NextPage = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const introDivRef = useRef<HTMLDivElement | null>(null);
  const textOneRef = useRef<HTMLParagraphElement | null>(null);
  gsap.registerPlugin(SplitText, TextPlugin);
  const textTl = gsap.timeline({ repeat: -1 });
  textTl.timeScale(2);

  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (1 + max - min) + min);
  };

  const rangeToPercent = (number: number, min: number, max: number) => {
    return (number - min) / (max - min);
  };

  useEffect(() => {
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
    }, containerRef);

    const ele = textOneRef.current;
    if (ele) {
      try {
        const splitTxt = new SplitText(ele, { type: "words" });
        const tl = gsap.timeline({ delay: 1, repeat: -1, repeatDelay: 15 });
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
            tl.from(
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
        tl.from(
          ele,
          {
            rotationY: 180,
            transformOrigin: "50% 75% 200",
            ease: Power2.easeOut,
            duration: tl.duration(),
          },
          0,
        );
        /* eslint-disable */
        for (let i = 0; i < numWords; i++) {
          var z = randomNumber(-50, 50);
          tl.to(
            splitTxt.words[i] as any,
            { z: z, opacity: rangeToPercent(z, -50, 50), duration: 0.5 },
            "pulse",
          );
          /* eslint-disable */
        }

        tl.to(ele, { rotationX: -35, rotationY: 0, duration: 0.5 }, "pulse2");

        tl.to(splitTxt.words, { z: 0, opacity: 1, duration: 0.5 }, "reset");
        tl.to(ele, { rotationY: 0, rotationX: 0, duration: 0.5 }, "reset");

        tl.add("explode", "+=90");
        /* eslint-disable */
        for (let i = 0; i < numWords; i++) {
          tl.to(
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
    return () => ctx.revert();
  }, []);
  return (
    <div
      className="my-8 flex h-full w-full flex-col items-center justify-between gap-16"
      ref={(el) => {
        containerRef.current = el;
      }}
    >
      <TextHeader>About</TextHeader>
      <div className="flex h-full w-full flex-col items-center justify-center gap-10">
        <div className="flex h-full w-full place-items-center justify-center">
          <img
            src={MayurLogo.src}
            ref={(el) => {
              imageRef.current = el;
            }}
            alt="..."
            className={`h-44 w-44 place-items-center rounded-full border-none object-cover align-middle shadow-lg`}
          />
        </div>
        <div
          className="flex h-full flex-col items-start justify-start gap-6 overflow-hidden"
          ref={(el) => {
            introDivRef.current = el;
          }}
        >
          <p
            className="h-hull break-before-all text-xl shadow-indigo-500/50 text-shadow-[0_4px_8px_var(--tw-shadow-color)]"
            style={{
              WebkitTransform: "translate3d(0, 0, 0)",
              // lineHeight: 36,
              color: "#dedede",
              margin: "50px auto",
              width: "100%",
              visibility: "hidden",
            }}
            ref={(el) => {
              textOneRef.current = el;
            }}
          >
            I am a Senior Frontend Developer at Beyond Exam, an Edtech SAAS
            company that focuses on equitable learning. I have two years of
            hands-on experience working with a versatile toolset, including
            ReactJS, NextJS, Redux, Zustand, Typescript, WebRTC Apis, TRPC and
            UI frameworks such as Ant Design, Material-UI, and Mantine.In this
            role, I have leveraged my knowledge and skills towards contributing
            to the development and improvement of the web application that
            enables educators and learners to provide and ensure effective
            e-learning help and meet their requirements.
            <br />
            <br />I have collaborated with a talented and diverse team of
            developers, designers, and educators, and I always strive to deliver
            solutions that not only meet but exceed client expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
