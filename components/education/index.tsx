import { forwardRef } from "react";
import HeaderText from "../header-text";

const Education = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  (props, ref) => {
    return (
      <div
        className="flex w-full flex-col items-start justify-center gap-8 pt-2"
        ref={ref}
        {...props}
        id="education"
      >
        <div className="flex h-full w-full flex-row items-center justify-start gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#000000"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 288.147 288.147"
            xmlSpace="preserve"
            className="h-10 w-10 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
          >
            <g>
              <g>
                <path d="M142.45,174.613c-4.645,0-11.495-0.514-17.779-2.926l-50.271-19.366H49.774v30.162c0,9.274,6.9,19.802,15.405,23.499    l60.872,26.496c8.505,3.691,22.312,3.707,30.826,0.036l61.536-26.574c8.508-3.671,15.41-14.183,15.41-23.457v-30.162h-27.175    l-44.547,18.78C156.742,173.365,149.756,174.613,142.45,174.613z" />
                <path d="M6.475,112.944l121.222,46.709c8.661,3.329,22.603,3.112,31.152-0.492l115.768-48.801v71.999l-7.151,23.866h20.682    l-7.399-24.114V107.45h-0.208c4.997-3.449,3.832-7.747-3.567-10.393L159.196,55.146c-8.74-3.117-22.859-2.985-31.545,0.277    L6.529,100.99C-2.157,104.258-2.178,109.612,6.475,112.944z" />
              </g>
            </g>
          </svg>
          <HeaderText>Education</HeaderText>
        </div>
        <section
          aria-labelledby=":S1:"
          className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
        >
          <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
            <h2 className="text-sm font-semibold tracking-wider text-zinc-800 dark:text-zinc-100">
              Bachelor Of Computer Applications
            </h2>
            <div className="md:col-span-3">
              <div className="space-y-16">
                <div className="group relative flex flex-col items-start">
                  <h3 className="text-base font-semibold tracking-wider text-zinc-800 dark:text-zinc-100">
                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                    <div>
                      <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                      <span className="relative z-10">
                        Trident Academy Of Creative Technology, Bhubaneshwar
                      </span>
                    </div>
                  </h3>
                  <time
                    className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500"
                    dateTime=""
                  >
                    <span
                      className="absolute inset-y-0 left-0 flex items-center"
                      aria-hidden="true"
                    >
                      <span className="h-4 w-0.5 rounded-full bg-teal-500 dark:bg-teal-500"></span>
                    </span>
                    September, 2018 ~ August, 2021
                  </time>
                  <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    CGPA - 8.08
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
);
Education.displayName = "Education";

export default Education;
