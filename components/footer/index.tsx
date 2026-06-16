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

const footerLinks: Array<{
  label: string;
  target:
    | "skills"
    | "education"
    | "experience"
    | "projects"
    | "certification"
    | "contactme"
    | "introduction";
}> = [
  { label: "Profile", target: "introduction" },
  { label: "Skills", target: "skills" },
  { label: "Experience", target: "experience" },
  { label: "Projects", target: "projects" },
  { label: "Certifications", target: "certification" },
  { label: "Contact", target: "contactme" },
];

function Footer({ scrollIntoView }: FooterProps) {
  return (
    <footer className="mt-4 flex-none pb-10">
      <div className="border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-black text-zinc-950 dark:text-zinc-50">
              Mayur Karmakar
            </p>
            <p className="mt-1 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
              Applied AI products with React, Next.js, FastAPI, and Azure AI.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-sm font-bold text-zinc-600 dark:text-zinc-300">
            {footerLinks.map((item) => (
              <button
                className="rounded-lg px-3 py-2 transition hover:bg-zinc-950/[0.04] hover:text-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500/50 dark:hover:bg-white/[0.05] dark:hover:text-teal-300"
                key={item.target}
                type="button"
                onClick={() => scrollIntoView(item.target)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <p className="text-sm font-semibold text-zinc-400 dark:text-zinc-500">
            © {new Date().getFullYear()} Mayur Karmakar.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
