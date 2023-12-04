"use client";
import { Button, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { NextPage } from "next";
import { api } from "~/trpc/react";

const ContactForm: NextPage = (): JSX.Element => {
  const addVisitor = api.visitor.addVisitor.useMutation();
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

  const handleAddVisitor = async (value: {
    name: string;
    email: string;
    message: string;
  }) => {
    addVisitor.mutate({ ...value });
  };

  return (
    <form
      onSubmit={form.onSubmit((values) => handleAddVisitor(values))}
      className="w-full"
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 px-24 py-4 text-left">
        <TextInput
          withAsterisk
          label="Name"
          placeholder="ex Jhon Doe"
          className="w-full"
          {...form.getInputProps("name")}
          styles={{
            label: {
              fontSize: "1.5rem",
              color: "white",
              textAlign: "left",
            },
            input: {
              borderRadius: 25,
              borderWidth: 2,
              fontFamily: "cursive",
            },
          }}
        />
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          className="w-full"
          {...form.getInputProps("email")}
          styles={{
            root: {
              borderRadius: 5,
            },
            label: {
              fontSize: "1.5rem",
              color: "white",
              textAlign: "left",
            },
            input: {
              borderRadius: 25,
              borderWidth: 2,
            },
          }}
        />
        <Textarea
          label="Your Message"
          {...form.getInputProps("message")}
          maxRows={12}
          minRows={10}
          className="w-full"
          styles={{
            input: {
              borderRadius: 12,
              borderWidth: 2,
            },
            label: {
              fontSize: "1.5rem",
              color: "white",
              textAlign: "left",
            },
          }}
        />
        <div className="mt-4 flex w-full items-center justify-center">
          <Button
            type="submit"
            variant="gradient"
            loading={addVisitor.isLoading}
            bg={"blue"}
            styles={{
              root: {
                width: "100%",
              },
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
