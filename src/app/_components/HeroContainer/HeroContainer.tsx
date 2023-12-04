"use client";

import { gsap } from "gsap";
import { NextPage } from "next";
import { PropsWithChildren, useEffect, useRef } from "react";

type CombinedCardItemProps = PropsWithChildren;

const HeroContainer: NextPage = (): JSX.Element => {
  const tech: string[] = [
    "Healthcare Industry",
    "E-Learning",
    "Node.js",
    "TypeScript",
    "Front-End Development",
    "User Experience (UX)",
    "Git",
    "Web-based Software Development",
    "React Native",
    "Python (Programming Language)",
  ];

  const getCards = (): JSX.Element[] => {
    const len = tech.length;
    const ele: JSX.Element[] = [];
    for (let i = 0; i < 27; i++) {
      if (i > len) {
        ele.push(<CardItems key={i}>{tech[Math.abs(i % len)]}</CardItems>);
      } else {
        ele.push(<CardItems key={i}>{tech[i]}</CardItems>);
      }
    }
    return ele;
  };
  return (
    <div className="relative flex min-h-screen w-screen flex-row flex-wrap items-center justify-center gap-x-5 gap-y-8 p-8">
      {getCards()}
    </div>
  );
};

const CardItems: NextPage<CombinedCardItemProps> = ({
  children,
}): JSX.Element => {
  const cardContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.set(cardContainerRef.current, {
      opacity: 1,
    });
    gsap.to(".stagger", {
      duration: 3,
      yoyo: true,
      scale: 0.1,
      y: 40,
      ease: "power1.inOut",
      repeat: -1,
      stagger: {
        from: "center",
        amount: 1.5,
      },
    });
  }, []);
  return (
    <div className={`stagger h-4/5 w-auto flex-grow`}>
      <div
        className={`flex h-full place-items-center justify-center rounded-lg p-12`}
        ref={(el) => {
          cardContainerRef.current = el;
        }}
        style={{
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(4.9px)",
          WebkitBackdropFilter: "blur(4.9px)",
          border: "1px solid rgba(255, 255, 255, 0.66)",
        }}
      >
        <p className="text-base">{children}</p>
      </div>
    </div>
  );
};

export default HeroContainer;
