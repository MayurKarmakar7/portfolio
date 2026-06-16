"use client";

import { Menu } from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { JSX, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type NavItemWithIds = {
  id:
    | "introduction"
    | "skills"
    | "education"
    | "experience"
    | "projects"
    | "certification"
    | "contactme"
    | "";
  name: string;
};

type HeaderProps = {
  scrollIntoView: (
    type:
      | "introduction"
      | "skills"
      | "education"
      | "experience"
      | "projects"
      | "certification"
      | "contactme"
      | ""
  ) => void;
};

const Header: NextPage<HeaderProps> = ({ scrollIntoView }): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHeaderFocused, setIsHeaderFocused] = useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const scrollIdleTimer = useRef<number | null>(null);

  const navItems: NavItemWithIds[] = [
    {
      id: "introduction",
      name: "Profile",
    },
    {
      id: "skills",
      name: "Skills",
    },
    {
      id: "experience",
      name: "Experiences",
    },
    {
      id: "projects",
      name: "Projects",
    },
    {
      id: "education",
      name: "Education",
    },
    {
      id: "certification",
      name: "Certifications",
    },
    {
      id: "contactme",
      name: "Contact me",
    },
  ];

  const handleRouteToSection = (
    id:
      | "introduction"
      | "skills"
      | "education"
      | "experience"
      | "projects"
      | "certification"
      | "contactme"
      | ""
  ) => {
    setOpen(false);
    const interval = setInterval(() => {
      scrollIntoView(id);
      clearInterval(interval);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollIdleTimer.current) {
        window.clearTimeout(scrollIdleTimer.current);
      }

      if (window.scrollY <= 8) {
        setIsScrolling(false);
        return;
      }

      setIsScrolling(true);
      scrollIdleTimer.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (scrollIdleTimer.current) {
        window.clearTimeout(scrollIdleTimer.current);
      }
    };
  }, []);

  const isHeaderEngaged = isHeaderFocused || isHeaderHovered;
  const isHeaderPinned = isScrolling || open || isHeaderEngaged;

  const renderHeaderBar = (shouldRenderMobileMenu: boolean) => {
    return (
      <div className="nav-glass mx-auto flex h-14 w-full items-center justify-between gap-4 rounded-xl px-3 sm:px-4">
        <Link
          aria-label="Go to profile"
          href="#about"
          className="flex min-w-0 items-center gap-3 rounded-lg p-1 pr-3 outline-none transition hover:bg-zinc-950/[0.03] focus-visible:ring-2 focus-visible:ring-teal-500/50 dark:hover:bg-white/[0.04]"
          onClick={(event) => {
            event.preventDefault();
            handleRouteToSection("introduction");
          }}
        >
          <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
            <Image
              src={"/images/mayurLogo.jpg"}
              alt={"Mayur"}
              fill
              sizes="40px"
              className="object-cover"
            />
          </span>
          <span className="hidden min-w-0 flex-col leading-none sm:flex">
            <span className="truncate text-sm font-extrabold text-zinc-900 dark:text-zinc-50">
              Mayur Karmakar
            </span>
            <span className="mt-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              Applied AI systems
            </span>
          </span>
        </Link>

        <nav className="hidden md:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-1 text-sm font-bold text-zinc-600 dark:text-zinc-300">
            {navItems.map((item: NavItemWithIds) => {
              return (
                <li key={item.id || item.name}>
                  <button
                    type="button"
                    className="rounded-lg px-3 py-2 transition hover:bg-zinc-950/[0.04] hover:text-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500/50 dark:hover:bg-white/[0.05] dark:hover:text-teal-300"
                    onClick={() => handleRouteToSection(item.id)}
                  >
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto block md:hidden">
          {shouldRenderMobileMenu ? (
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  aria-label="Open navigation menu"
                  aria-expanded={open}
                  variant="ghost"
                  size="icon"
                  className="ml-auto rounded-lg text-zinc-800 hover:bg-zinc-950/[0.04] dark:text-zinc-200 dark:hover:bg-white/[0.05]"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="nav-glass w-56 rounded-xl border-zinc-200 p-2 dark:border-zinc-800"
                align="end"
              >
                <DropdownMenuGroup>
                  {navItems.map((item: NavItemWithIds) => {
                    return (
                      <DropdownMenuItem
                        key={item.id || item.name}
                        className="cursor-pointer rounded-lg px-3 py-2 font-semibold"
                        onClick={(e) => {
                          e.preventDefault();
                          handleRouteToSection(item.id);
                        }}
                      >
                        {item.name}
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              aria-label="Open navigation menu"
              aria-hidden="true"
              tabIndex={-1}
              variant="ghost"
              size="icon"
              className="ml-auto rounded-lg text-zinc-800 dark:text-zinc-200"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    );
  };

  return (
    <header className="relative z-50 h-[4.5rem] w-full pt-4">
      <div
        aria-hidden={isHeaderPinned}
        inert={isHeaderPinned}
        className={cn(
          "transition-opacity duration-300 ease-out motion-reduce:transition-none",
          isHeaderPinned ? "pointer-events-none opacity-0" : "opacity-100"
        )}
      >
        {renderHeaderBar(!isHeaderPinned)}
      </div>

      <div
        aria-hidden={!isHeaderPinned}
        inert={!isHeaderPinned}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsHeaderFocused(false);
          }
        }}
        onFocus={() => setIsHeaderFocused(true)}
        onPointerEnter={() => setIsHeaderHovered(true)}
        onPointerLeave={() => setIsHeaderHovered(false)}
        className={cn(
          "fixed left-1/2 top-4 z-50 w-[calc(100vw-2rem)] -translate-x-1/2 transition-[opacity,filter,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:w-[calc(100vw-3rem)] lg:w-[calc(100vw-4rem)] lg:max-w-[76rem]",
          isHeaderPinned
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100 blur-0"
            : "pointer-events-none -translate-y-4 scale-[0.985] opacity-0 blur-[1px]"
        )}
      >
        <div className="shadow-2xl shadow-zinc-950/10 dark:shadow-black/30">
          {renderHeaderBar(isHeaderPinned)}
        </div>
      </div>
    </header>
  );
};

export default Header;
