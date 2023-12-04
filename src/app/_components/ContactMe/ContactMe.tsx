"use client";

import { useForm } from "@mantine/form";
import { NextPage } from "next";
import { trpc } from "~/app/_trpc/client";
import TextHeaders from "../textHeaders/textHeaders";
import ContactForm from "./ContactForm/ContactForm";
import selector from "./ContactMe.module.css";

const ContactMe: NextPage = (): JSX.Element => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validate: {
      name: (value) => (value.length === 0 ? "invalid" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      message: (value) =>
        value.length > 500 ? "Max 500 character allowed" : null,
    },
  });

  const handleAddVisitor = (value: {
    name: string;
    email: string;
    message: string;
  }) => {
    const response = trpc.addVisitor.useMutation().mutate({
      name: value.name,
      email: value.email,
      message: value.message,
    });
  };
  return (
    <div className="mt-[25rem] flex h-full w-3/5 flex-col items-center justify-start gap-8 md:mt-[25rem]">
      <TextHeaders>Contact Me</TextHeaders>
      <div
        className={`h-3/5 w-full flex-grow rounded border ${selector.contactBox}`}
      >
        <div className="flex h-full items-center justify-center text-black">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
