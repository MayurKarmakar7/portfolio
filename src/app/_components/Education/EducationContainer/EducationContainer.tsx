import { NextPage } from "next";
import TACT from "../../../../assets/logos/tact.png";
import { CalendarIcon, EducationIcon, GuardIcon } from "./Icons";
import { PropsWithChildren, useEffect, useRef } from "react";
import gsap from "gsap";

type EducationDetail = {
  image: string;
  headline: string;
  abbreviations: string;
  startDate: string;
  endDate: string;
  institutionName: string;
};

const EducationContainer: NextPage = (): JSX.Element => {
  const iconDimensions = { height: "2.5rem", width: "2.5rem" };
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tl = gsap.timeline({ defaults: { duration: 2, ease: "none" } });
  const educationList: EducationDetail[] = [
    {
      image: TACT.src,
      headline: "Bachelor of Computer Applications",
      abbreviations: "BCA",
      startDate: "SEPT 2018",
      endDate: "AUG 2021",
      institutionName: "Trident Academy Of Creative Technology",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.to("#scramble", {
        duration: 3,
        scrambleText: {
          text: "Trident Academy Of Creative Technology",
          chars: "lowerCase",
          revealDelay: 0.5,
          tweenLength: false,
        },
        repeat: -1,
      })
        .to("#charsCustom", {
          duration: 4,
          scrambleText: {
            text: "Bachelor of Computer Applications",
            chars: "XO",
            revealDelay: 1,
            tweenLength: false,
            speed: 0.4,
          },
          repeat: -1,
        })
        .to("#charsUppercase", {
          scrambleText: {
            text: "SEPT 2018 ~ AUG 2021",
            chars: "upperCase",
            speed: 0.3,
          },
          repeat: -1,
        });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 py-2">
      <img
        src={educationList[0]?.image}
        alt=""
        className="h-28 w-28 bg-transparent"
      />
      <div className="flex h-full w-full flex-row items-start justify-center gap-4">
        {/* <div className="flex h-full flex-1 flex-col items-end justify-end gap-4"></div> */}
        <div
          className="flex h-full flex-col items-center gap-4"
          ref={(el) => {
            containerRef.current = el;
          }}
        >
          <div className="flex h-full w-full flex-row items-center justify-center gap-4">
            <EducationIcon
              height={iconDimensions.height}
              width={iconDimensions.width}
              fill={"white"}
            />
            <Text>{educationList[0]?.institutionName}</Text>
          </div>
          <div className="flex h-full w-full flex-row items-center justify-center gap-4">
            <GuardIcon
              height={iconDimensions.height}
              width={iconDimensions.width}
              fill={"white"}
            />
            <Text>{educationList[0]?.headline}</Text>
          </div>
          <div className="flex h-full w-full flex-row items-center justify-center gap-4">
            <CalendarIcon
              height={iconDimensions.height}
              width={iconDimensions.width}
              fill={"white"}
            />
            <Text>
              {educationList[0]?.startDate} ~ {educationList[0]?.endDate}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

const Text: NextPage<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <p className="w-full truncate text-left text-base font-medium">
      {children}
    </p>
  );
};

export default EducationContainer;
