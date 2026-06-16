import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import { forwardRef } from "react";
import HeaderText from "../header-text";

type Certification = {
  issued: string;
  certId: string;
  link: string;
  courseName: string;
};

const certifications: Certification[] = [
  {
    issued: "Mar, 2021",
    certId: "UC-840177ec-c9f4-41f9-a39a-27d34e4af316",
    link: "https://www.udemy.com/certificate/UC-840177ec-c9f4-41f9-a39a-27d34e4af316/",
    courseName: "React - The Complete Guide 2023",
  },
  {
    issued: "Mar, 2018",
    certId: "UC-ZPNYJ3TO",
    link: "https://www.udemy.com/certificate/UC-ZPNYJ3TO/",
    courseName: "Python and Django Full Stack Web Developer Bootcamp",
  },
];

const Certifications = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  (props, ref) => {
    return (
      <section
        className="section-block flex w-full flex-col gap-8"
        ref={ref}
        id="certification"
        {...props}
      >
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className="section-kicker">Proof points</p>
            <HeaderText>Certifications</HeaderText>
          </div>
          <p className="section-copy max-w-3xl lg:justify-self-end">
            Formal learning that supports the production stack: React for
            modern interfaces, Python and Django for backend fluency.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((item) => (
            <CertificationItem
              key={item.certId}
              issued={item.issued}
              certId={item.certId}
              link={item.link}
              courseName={item.courseName}
            />
          ))}
        </div>
      </section>
    );
  }
);
Certifications.displayName = "Certifications";

const CertificationItem: React.FC<Certification> = ({
  certId,
  issued,
  link,
  courseName,
}) => {
  return (
    <article className="surface-card group flex min-h-64 flex-col justify-between p-5 transition duration-300 hover:-translate-y-1 hover:border-teal-500/40">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700 transition group-hover:bg-teal-500 group-hover:text-white dark:text-teal-300">
            <Award className="h-5 w-5" />
          </div>
          <span className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-bold text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            {issued}
          </span>
        </div>

        <h3 className="mt-6 text-xl font-black text-zinc-950 dark:text-zinc-50">
          {courseName}
        </h3>
        <p className="mt-3 text-sm font-bold text-zinc-500 dark:text-zinc-400">
          Udemy
        </p>
        <p className="mt-3 break-all rounded-xl bg-zinc-100 px-3 py-2 text-xs font-bold text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">
          {certId}
        </p>
      </div>

      <Link
        href={link}
        target="_blank"
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl border border-zinc-200 px-4 py-2 text-sm font-extrabold text-zinc-700 transition hover:border-teal-500 hover:text-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500/60 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-teal-400 dark:hover:text-teal-300"
      >
        View certificate
        <ExternalLink className="h-4 w-4" />
      </Link>
    </article>
  );
};

export default Certifications;
