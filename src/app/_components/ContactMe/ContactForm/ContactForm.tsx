"use client";
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

  const handleAddVisitor = (value: {
    name: string;
    email: string;
    message: string;
  }) => {
    addVisitor.mutate({ ...value });
  };

  return (
    // <form
    //   onSubmit={form.onSubmit((values) => handleAddVisitor(values))}
    //   className="w-full"
    // >
    //   <div className="flex h-full w-full flex-col items-center justify-center gap-5 px-24 py-4 text-left">
    //     <TextInput
    //       withAsterisk
    //       label="Name"
    //       placeholder="ex Jhon Doe"
    //       className="w-full"
    //       {...form.getInputProps("name")}
    //       styles={{
    //         label: {
    //           fontSize: "1.5rem",
    //           color: "white",
    //           textAlign: "left",
    //         },
    //         input: {
    //           borderRadius: 25,
    //           borderWidth: 2,
    //           fontFamily: "cursive",
    //         },
    //       }}
    //     />
    //     <TextInput
    //       withAsterisk
    //       label="Email"
    //       placeholder="your@email.com"
    //       className="w-full"
    //       {...form.getInputProps("email")}
    //       styles={{
    //         root: {
    //           borderRadius: 5,
    //         },
    //         label: {
    //           fontSize: "1.5rem",
    //           color: "white",
    //           textAlign: "left",
    //         },
    //         input: {
    //           borderRadius: 25,
    //           borderWidth: 2,
    //         },
    //       }}
    //     />
    //     <Textarea
    //       label="Your Message"
    //       {...form.getInputProps("message")}
    //       maxRows={12}
    //       minRows={10}
    //       className="w-full"
    //       styles={{
    //         input: {
    //           borderRadius: 12,
    //           borderWidth: 2,
    //         },
    //         label: {
    //           fontSize: "1.5rem",
    //           color: "white",
    //           textAlign: "left",
    //         },
    //       }}
    //     />
    //     <div className="mt-4 flex w-full items-center justify-center">
    //       <Button
    //         type="submit"
    //         variant="gradient"
    //         loading={addVisitor.isLoading}
    //         bg={"blue"}
    //         styles={{
    //           root: {
    //             width: "100%",
    //           },
    //         }}
    //       >
    //         Submit
    //       </Button>
    //     </div>
    //   </div>
    // </form>

    <form className="mx-auto max-w-sm rounded-2xl border border-zinc-100 p-6 hover:rounded-xl hover:bg-zinc-800 dark:border-zinc-700/40 md:w-auto">
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
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-5 flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="remember"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Remember me
        </label>
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
