import { type NextPage } from "next";
import Link from "next/link";
import { forwardRef } from "react";
import HeaderText from "../header-text";

type Certifications = {
  issued: string;
  certId: string;
  link: string;
  courseName: string;
};

const Certifications = forwardRef<HTMLDivElement>((props, ref) => {
  const certifications: Certifications[] = [
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

  return (
    <div
      className="flex h-full w-full flex-col items-start justify-center gap-8 pt-2"
      ref={ref}
      id="certification"
    >
      <div className="flex h-full flex-row items-center justify-start gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#000000"
          version="1.1"
          id="Capa_1"
          viewBox="0 0 334.197 334.197"
          xmlSpace="preserve"
          className="h-10 w-10 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
        >
          <g>
            <g>
              <path d="M296.345,8.681C290.98,3.135,283.597,0,275.881,0H82.048c16.231,8.277,28.05,25.541,28.05,44.144    c0,15.153-6.441,28.653-17.01,37.922H293.27c10.558-9.274,17.242-23.26,17.242-38.422    C310.512,30.043,305.106,17.748,296.345,8.681z" />
              <path d="M162.985,326.988c-0.122,0.725,0.207,1.449,0.826,1.854c0.627,0.394,1.432,0.362,2.033-0.052l9.432-6.576    c3.967-2.775,9.419-1.885,12.298,2.009l6.846,9.228c0.445,0.601,1.196,0.87,1.905,0.694c0.725-0.171,1.258-0.767,1.377-1.486    l8.182-50.108c-12.873-0.519-24.533-5.676-33.389-13.867L162.985,326.988z" />
              <path d="M210.046,282.56l8.182,50.104c0.119,0.715,0.663,1.305,1.378,1.481c0.72,0.165,1.471-0.099,1.905-0.694l8.948-12.06    c1.708-2.314,4.955-2.849,7.316-1.207l12.318,8.606c0.601,0.409,1.403,0.435,2.024,0.041c0.627-0.394,0.953-1.118,0.834-1.849    l-9.518-58.29C234.58,276.895,222.908,282.052,210.046,282.56z" />
              <path d="M240.308,259.921c7.146-7.809,11.547-18.165,11.547-29.546c0-24.192-19.697-43.89-43.885-43.89    c-24.197,0-43.882,19.707-43.882,43.89c0,11.335,4.347,21.639,11.436,29.432c0.854,0.953,1.745,1.854,2.688,2.734    c7.431,6.877,17.213,11.2,28.014,11.625c0.591,0.026,1.16,0.099,1.745,0.099s1.165-0.072,1.745-0.099    c10.791-0.425,20.583-4.748,28.014-11.625C238.619,261.702,239.489,260.832,240.308,259.921z" />
              <path d="M87.387,77.374c9.688-8.495,15.032-20.133,15.032-32.765c0-20.238-14.506-33.023-25.021-39.625    c-7.969-5.01-17.911-5.895-26.639-2.359C34.878,9.051,23.686,24.614,23.686,42.802v240.535c0,4.784,3.871,8.662,8.668,8.662    h127.343l5.243-32.13c-5.799-8.399-9.266-18.538-9.266-29.494c0-28.832,23.45-52.294,52.292-52.294    c28.832,0,52.289,23.473,52.289,52.294c0,10.956-3.454,21.105-9.279,29.505l5.25,32.119h17.72    c4.795-0.016,8.699-3.898,8.699-8.684V88.758H74.403C74.403,88.758,84.143,80.222,87.387,77.374z M252.921,175.693H60.515    c-2.392,0-4.327-1.946-4.327-4.339c0-2.397,1.935-4.334,4.327-4.334h192.406c2.388,0,4.329,1.937,4.329,4.334    C257.25,173.747,255.309,175.693,252.921,175.693z M56.194,145.72c0-2.395,1.937-4.336,4.332-4.336h135.778    c2.402,0,4.35,1.942,4.35,4.336c0,2.393-1.947,4.334-4.35,4.334H60.51C58.123,150.054,56.194,148.112,56.194,145.72z     M252.921,115.736c2.388,0,4.329,1.947,4.329,4.336c0,2.397-1.941,4.334-4.329,4.334H60.515c-2.392,0-4.327-1.937-4.327-4.334    c0-2.39,1.935-4.336,4.327-4.336H252.921z" />
            </g>
          </g>
        </svg>
        <HeaderText>Certifications</HeaderText>
      </div>
      <div className="flex h-full w-full flex-row flex-wrap justify-start gap-4">
        {certifications.map((item: Certifications, index: number) => {
          return (
            <CertificationItem
              key={index}
              issued={item.issued}
              certId={item.certId}
              link={item.link}
              courseName={item.courseName}
            />
          );
        })}
      </div>
    </div>
  );
});

const CertificationItem: NextPage<Certifications> = ({
  certId,
  issued,
  link,
  courseName,
}) => {
  return (
    <div className="flex w-full flex-col rounded-2xl border border-zinc-100 p-6 hover:rounded-xl hover:bg-zinc-800 dark:border-zinc-700/40">
      <div className="relative z-10 order-first mb-4 flex items-center pl-3.5 text-base">
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-full w-0.5 rounded-full bg-teal-500 dark:bg-teal-500"></span>
        </span>
        <span className="relative z-10 font-semibold tracking-wide">
          {courseName}
        </span>
      </div>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Platform - &nbsp;Udemy
      </p>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Certificate Id - &nbsp;{certId}
      </p>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Issued On - &nbsp;{issued}
      </p>
      <Link href={link} target="_blank">
        <div className="mt-6 flex h-full w-full cursor-pointer flex-row items-center justify-start text-sm font-medium text-zinc-600 transition hover:text-teal-500 dark:text-zinc-400">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 flex-none"
          >
            <path
              d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="ml-2">certificate</span>
        </div>
      </Link>
    </div>
  );
};

export default Certifications;
