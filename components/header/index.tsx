"use client";

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

  const handleMenuOpen = () => {
    setOpen(true);
  };

  return (
    <div className="flex h-16 w-full flex-row justify-between pt-6">
      <div className="mr-auto w-full md:hidden">
        <div className="mr-auto h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
          <Link aria-label="Home" href="#about">
            <Image
              src={"/images/mayurLogo.jpg"}
              alt={"Mayur"}
              width={36}
              height={36}
              className="h-9 w-9 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </Link>
        </div>
      </div>
      <div className="ml-auto block md:hidden">
        <DropdownMenu open={open}>
          <DropdownMenuTrigger asChild>
            <Button
              onClick={handleMenuOpen}
              className="ml-auto rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
            >
              Menu
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-auto" align="end">
            <DropdownMenuGroup>
              {navItems.map((item: NavItemWithIds, index: number) => {
                return (
                  <DropdownMenuItem
                    key={index}
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
      <div className="flex justify-end md:flex-1 md:justify-center">
        <nav className="hidden md:block">
          <ul className="flex rounded-full bg-white/90 px-3 text-sm font-semibold tracking-wide text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
            {navItems.map((item: NavItemWithIds, index: number) => {
              return (
                <li key={index}>
                  <p
                    className="relative block cursor-pointer px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                    onClick={() => handleRouteToSection(item.id)}
                  >
                    {item.name}
                  </p>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
