import { Button } from "@mantine/core";
import { NextPage } from "next";
import Image from "next/image";
import MayurLogo from "../../../assets/images/mayurLogo.jpg";

const Header: NextPage = (): JSX.Element => {
  const handleMenuOpen = () => {
    console.log("handleMenuOpen");
    open();
  };
  return (
    <div className="flex h-16 w-full flex-row justify-between pt-6">
      <div className="mr-auto w-full md:hidden">
        <div className="mr-auto h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
          <a aria-label="Home" href="/">
            <Image
              src={MayurLogo}
              alt={"Mayur"}
              className="h-9 w-9 cursor-pointer rounded-full bg-transparent bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </a>
        </div>
      </div>
      <div className="ml-auto block md:hidden">
        <Button
          onClick={handleMenuOpen}
          className="ml-auto rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
        >
          Menu
        </Button>
      </div>
      <div className="flex justify-end md:flex-1 md:justify-center">
        <nav className="hidden md:block">
          <ul className="flex rounded-full bg-white/90 px-3 text-sm font-semibold tracking-wide text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
            <li>
              <a
                className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                href="#education"
              >
                Education
              </a>
            </li>
            <li>
              <a
                className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                href="#certification"
              >
                Certification
              </a>
            </li>
            <li>
              <a
                className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                href="#contactme"
              >
                Contact me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
