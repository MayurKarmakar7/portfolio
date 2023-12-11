import { NextPage } from "next";

const Footer: NextPage = (): JSX.Element => {
  return (
    <footer className="mt-20 flex-none">
      <div className="w-full max-w-full">
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  <a
                    className="tracking-wide transition hover:text-teal-500 dark:hover:text-teal-400"
                    href="#about"
                  >
                    About
                  </a>
                  <a
                    className="tracking-wide transition hover:text-teal-500 dark:hover:text-teal-400"
                    href="#skills"
                  >
                    Skills
                  </a>
                  <a
                    className="tracking-wide transition hover:text-teal-500 dark:hover:text-teal-400"
                    href="#experience"
                  >
                    Experience
                  </a>
                  <a
                    className="tracking-wide transition hover:text-teal-500 dark:hover:text-teal-400"
                    href="#projects"
                  >
                    Projects
                  </a>
                  <a
                    className="tracking-wide transition hover:text-teal-500 dark:hover:text-teal-400"
                    href="#certification"
                  >
                    Certifications
                  </a>
                </div>
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  © 2023 Mayur Karmakar. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
