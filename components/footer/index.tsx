
type FooterProps = {
  scrollIntoView: (
    type:
      | "skills"
      | "education"
      | "experience"
      | "projects"
      | "certification"
      | "contactme"
      | "introduction"
      | ""
  ) => void;
};

function Footer({ scrollIntoView }: FooterProps) {
  const handleRouteToSection = (
    id:
      | "skills"
      | "education"
      | "experience"
      | "projects"
      | "certification"
      | "contactme"
      | "introduction"
      | ""
  ) => {
    scrollIntoView(id);
  };

  return (
    <footer className="mt-20 flex-none">
      <div className="w-full max-w-full">
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  <p
                    className="cursor-pointer tracking-wide transition hover:text-teal-500 dark:hover:text-teal-400"
                    onClick={() => handleRouteToSection("introduction")}
                  >
                    About
                  </p>
                  <p
                    className="cursor-pointer tracking-wide transition hover:text-teal-500 dark:hover:text-teal-400"
                    onClick={() => handleRouteToSection("skills")}
                  >
                    Skills
                  </p>
                  <p
                    className="cursor-pointer tracking-wide transition hover:text-teal-500 dark:hover:text-teal-400"
                    onClick={() => handleRouteToSection("experience")}
                  >
                    Experience
                  </p>
                  <p
                    className="cursor-pointer tracking-wide transition hover:text-teal-500 dark:hover:text-teal-400"
                    onClick={() => handleRouteToSection("projects")}
                  >
                    Projects
                  </p>
                  <p
                    className="cursor-pointer tracking-wide transition hover:text-teal-500 dark:hover:text-teal-400"
                    onClick={() => handleRouteToSection("certification")}
                  >
                    Certifications
                  </p>
                </div>
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  © {new Date().getFullYear()} Mayur Karmakar. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
