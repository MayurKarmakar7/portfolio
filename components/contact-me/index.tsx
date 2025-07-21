"use client";

import { trpc } from "@/lib/trpc/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { MailIcon, Send } from "lucide-react";
import { forwardRef, JSX } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import HeaderText from "../header-text";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

const ContactMe = forwardRef<HTMLDivElement>((props, ref): JSX.Element => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const sendMail = trpc.sendContactMail.useMutation();
  const saveContactDetails = trpc.saveContactMeDetails.useMutation();

  async function handleAddVisitor(values: z.infer<typeof formSchema>) {
    const [sendMailResult, saveDetailsResult] = await Promise.all([
      sendMail.mutateAsync({
      email: values.email,
      fullName: values.name,
      message: values.message,
      }),
      saveContactDetails.mutateAsync({
      email: values.email,
      fullName: values.name,
      message: values.message,
      }),
    ]);

    const success = sendMailResult.success || saveDetailsResult.success;

    if (success) {
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out! I will get back to you soon.",
      });
    }

    form.reset();
  }

  return (
    <div
      className="mx-auto w-full max-w-full rounded-2xl border border-zinc-100 p-6 pt-2 dark:border-zinc-700/40 md:w-3/5"
      id="contactme"
      ref={ref}
    >
      <div className="flex h-full w-full flex-col items-start justify-center gap-8">
        <div className="flex w-full flex-row justify-start gap-4">
          <MailIcon className="h-10 w-10 transition" />
          <HeaderText>Contact Me</HeaderText>
        </div>
        <Form {...form}>
          <form
            className="w-full space-y-5"
            onSubmit={form.handleSubmit(handleAddVisitor)}
          >
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="eg: John Doe" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        required
                        placeholder="eg: your@email.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              name="message"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Write your message here..."
                        rows={8}
                        className="resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <div className="w-full">
              <Button
                type="submit"
                variant={"default"}
                className="w-full"
                disabled={sendMail.isPending}
                loading={sendMail.isPending}
              >
                <Send />
                Send Message
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
});

export default ContactMe;
