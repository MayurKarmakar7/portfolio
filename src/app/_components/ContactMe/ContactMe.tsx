"use client";

import { Button, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { CheckIcon, MailIcon } from "lucide-react";
import { forwardRef, useState } from "react";
import { api } from "~/trpc/react";
import TextHeaders from "../textHeaders/textHeaders";

type FormFields = {
  name: string;
  email: string;
  message: string;
};

type ContactFormProps = {
  visible: boolean;
  handleSumit: (values: FormFields) => void;
  loading: boolean;
};

function EmailSuccess({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <div className="flex flex-grow items-center justify-center">
      <div className="flex w-auto items-center gap-5">
        <CheckIcon className="h-10 w-10 text-emerald-500" />
        <span className="text-lg font-semibold text-gray-800 dark:text-white">
          Thanks for reaching out! I'll get back to you soon.
        </span>
      </div>
    </div>
  );
}

function ContactForm({ visible, handleSumit, loading }: ContactFormProps) {
  const form = useForm<FormFields>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must be at least 2 characters" : null,
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email address",
    },
  });

  if (!visible) return null;

  return (
    <div className="flex h-full w-full flex-col items-start justify-center gap-8">
      <div className="flex w-full flex-row justify-start gap-4">
        <MailIcon className="h-10 w-10 transition" />
        <TextHeaders>Contact Me</TextHeaders>
      </div>
      <form className="w-full" onSubmit={form.onSubmit(handleSumit)}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <TextInput
            withAsterisk
            type="text"
            {...form.getInputProps("name")}
            placeholder="Your Name"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <TextInput
            withAsterisk
            type="email"
            id="email"
            {...form.getInputProps("email")}
            placeholder="your@email.com"
            leftSection={<MailIcon className="h-4 w-4" />}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <Textarea
            placeholder="Write your thoughts here..."
            {...form.getInputProps("message")}
            rows={8}
          />
        </div>
        <Button
          type="submit"
          variant="default"
          loading={loading}
          disabled={!form.values.email || !form.values.name || loading}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

const ContactMe = forwardRef<HTMLDivElement>((props, ref): JSX.Element => {
  const sendContactEmail = api.visitor.sendContactEmail.useMutation();

  const [emailSent, setEmailSent] = useState<boolean>(false);

  const handleSumit = async (values: FormFields) => {
    const sendEmailResponse = await sendContactEmail.mutateAsync({
      userName: values.name,
      userEmail: values.email,
      userMessage: values.message,
    });

    if (!sendEmailResponse) {
      console.error("Failed to send email:", sendEmailResponse);
    }

    setEmailSent(true);

    const interval = setTimeout(() => {
      setEmailSent(false);
      clearInterval(interval);
    }, 5000);
  };

  return (
    <div
      className="mx-auto w-full max-w-full rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 md:w-3/5"
      id="contactme"
      ref={ref}
    >
      <EmailSuccess visible={emailSent} />
      <ContactForm
        visible={!emailSent}
        handleSumit={handleSumit}
        loading={sendContactEmail.isLoading}
      />
    </div>
  );
});

export default ContactMe;
