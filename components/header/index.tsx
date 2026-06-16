"use client";

import { Menu } from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { JSX, useState } from "react";
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

  return (
    <header className="sticky top-4 z-50 w-full pt-4">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
