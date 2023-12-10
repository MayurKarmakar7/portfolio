"use client";

import { MailIcon } from "lucide-react";
import { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import { api } from "~/trpc/react";
import TextHeaders from "../textHeaders/textHeaders";

type FormFields = {
  name: string;
  email: string;
  message: string;
};

const ContactMe: NextPage = (): JSX.Element => {
  const addVisitor = api.visitor.addVisitor.useMutation();
  const [formFieldValues, setFormFieldValues] = useState<FormFields>({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (fieldName: string, value: string) => {
    const values = { ...formFieldValues, [fieldName]: value };
    setFormFieldValues(values);
  };

  const handleAddVisitor = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    addVisitor.mutate({ ...formFieldValues });
    setFormFieldValues({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className="mx-auto w-full max-w-full rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 md:w-3/5"
      id="contactme"
    >
      <div className="flex h-full w-full flex-col items-start justify-center gap-8">
        <div className="flex w-full flex-row justify-start gap-4">
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="h-10 w-10 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.272 6.365C2 6.9 2 7.6 2 9v6c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 19 4.6 19 6 19h12c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 17.1 22 16.4 22 15V9c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C20.1 5 19.4 5 18 5H6c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093zM4.647 7h14.706a.5.5 0 0 1 .278.916l-7.075 4.732a1 1 0 0 1-1.112 0L4.369 7.916A.5.5 0 0 1 4.647 7z"
            fill="#000000"
          />
        </svg> */}
          <MailIcon className="h-10 w-10 transition" />
          <TextHeaders>Contact Me</TextHeaders>
        </div>
        <form className="w-full">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInput("name", e.target.value)
              }
              className="block w-full rounded-lg border border-zinc-400 bg-gray-50 p-2.5 text-sm text-gray-900  dark:border-zinc-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-zinc-600 dark:focus:ring-zinc-600"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInput("email", e.target.value)
              }
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                handleInput("message", e.target.value)
              }
              rows={4}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              handleAddVisitor(event)
            }
            className="inline-flex w-full flex-none items-center justify-center gap-2 rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
