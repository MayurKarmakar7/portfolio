import { CalendarDays, GraduationCap } from "lucide-react";
import { forwardRef } from "react";
import HeaderText from "../header-text";

const Education = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  (props, ref) => {
    return (
      <section
        className="section-block flex w-full flex-col gap-8"
        ref={ref}
        {...props}
        id="education"
      >
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className="section-kicker">Foundation</p>
            <HeaderText>Education</HeaderText>
          </div>
          <p className="section-copy max-w-3xl lg:justify-self-end">
            A computer applications background paired with production work in
            applied AI, React, FastAPI, regulatory workflows, EdTech, and
            healthcare platforms.
          </p>
        </div>

        <article className="surface-card grid gap-6 p-5 md:grid-cols-[0.34fr_1fr] md:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-300">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-teal-700 dark:text-teal-300">
                Degree
              </p>
              <h3 className="mt-2 text-2xl font-black text-zinc-950 dark:text-zinc-50">
                Bachelor of Computer Applications
              </h3>
            </div>
          </div>

          <div className="grid gap-5 border-t border-zinc-200 pt-5 dark:border-zinc-800 md:border-l md:border-t-0 md:pl-6 md:pt-0">
            <div>
              <p className="text-lg font-black text-zinc-950 dark:text-zinc-50">
                Trident Academy Of Creative Technology, Bhubaneswar
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm font-bold text-zinc-500 dark:text-zinc-400">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-teal-600 dark:text-teal-300" />
                  August 2018 - September 2021
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">
                  CGPA 8.08
                </span>
              </div>
            </div>
          </div>
        </article>
      </section>
    );
  }
);
Education.displayName = "Education";

export default Education;
