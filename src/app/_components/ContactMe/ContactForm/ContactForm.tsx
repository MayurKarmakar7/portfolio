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
    <div className="flex h-full w-4/5 gap-2">
      <form
        onSubmit={form.onSubmit((values) => handleAddVisitor(values))}
        className="w-full"
      >
        <TextInput
          withAsterisk
          label="Name"
          placeholder="ex Jhon Doe"
          className=""
          {...form.getInputProps("name")}
          styles={{
            label: {
              fontSize: "1.5rem",
              color: "white",
              textShadow: "-15px 5px 20px #ced0d3",
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
          {...form.getInputProps("email")}
          styles={{
            root: {
              borderRadius: 5,
            },
            label: {
              fontSize: "1.5rem",
              color: "white",
              textShadow: "-15px 5px 20px #ced0d3",
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
          styles={{
            input: {
              borderRadius: 12,
              borderWidth: 2,
            },
            label: {
              fontSize: "1.5rem",
              color: "white",
              textShadow: "-15px 5px 20px #ced0d3",
            },
          }}
        />
        <div className="mt-4 flex w-full items-center justify-center">
          <Button
            type="submit"
            styles={{
              root: {
                width: "100%",
                borderRadius: 12,
              },
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
