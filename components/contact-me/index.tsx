"use client";

import { trpc } from "@/lib/trpc/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { MailIcon, MessageSquareText, Send } from "lucide-react";
import { forwardRef, JSX } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

const ContactMe = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  (props, ref): JSX.Element => {
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
    const isPending = sendMail.isPending || saveContactDetails.isPending;

    async function handleAddVisitor(values: z.infer<typeof formSchema>) {
      try {
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
            description:
              "Thank you for reaching out! I will get back to you soon.",
          });
          form.reset();
        }
      } catch {
        toast.error("Message could not be sent", {
          description: "Please check your details and try again.",
        });
      }
    }

    return (
      <section
        className="section-block w-full"
        id="contactme"
        ref={ref}
        {...props}
      >
        <div className="surface-card grid gap-8 p-5 md:p-6 lg:grid-cols-[0.86fr_1.14fr] lg:p-8">
          <div className="flex flex-col justify-between gap-10">
            <div>
              <p className="section-kicker">Contact</p>
              <HeaderText>Let&apos;s build something steady.</HeaderText>
              <p className="section-copy mt-6 max-w-xl">
                Send a short note about the AI workflow, product surface, or
                document-heavy process you want to improve. I read for context
                first, then respond with the next useful step.
              </p>
            </div>

            <div className="grid gap-3">
              <div className="flex items-start gap-3 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
                <MailIcon className="mt-1 h-5 w-5 text-teal-600 dark:text-teal-300" />
                <div>
                  <p className="text-sm font-black text-zinc-950 dark:text-zinc-50">
                    Clear project notes help most
                  </p>
                  <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Timeline, users, documents, stack, and the current review
                    bottleneck are enough to start a useful conversation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
                <MessageSquareText className="mt-1 h-5 w-5 text-teal-600 dark:text-teal-300" />
                <div>
                  <p className="text-sm font-black text-zinc-950 dark:text-zinc-50">
                    Best fit
                  </p>
                  <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Applied AI applications, RAG and OCR workflows, React and
                    Next.js interfaces, FastAPI services, and review dashboards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Form {...form}>
            <form
              className="grid gap-5 rounded-xl border border-zinc-200 bg-white/70 p-4 dark:border-zinc-800 dark:bg-zinc-950/40 sm:p-5"
              onSubmit={form.handleSubmit(handleAddVisitor)}
            >
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="text-sm font-black">Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John Doe"
                          className="h-11 rounded-xl"
                        />
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
                      <FormLabel className="text-sm font-black">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          required
                          placeholder="you@example.com"
                          className="h-11 rounded-xl"
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
                      <FormLabel className="text-sm font-black">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Tell me what you are building..."
                          rows={8}
                          className="resize-none rounded-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <Button
                type="submit"
                variant={"default"}
                className="h-11 w-full rounded-xl bg-zinc-950 text-sm font-extrabold text-white hover:bg-teal-700 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-teal-200"
                disabled={isPending}
                loading={isPending}
              >
                <Send />
                Send message
              </Button>
            </form>
          </Form>
        </div>
      </section>
    );
  }
);

ContactMe.displayName = "ContactMe";

export default ContactMe;
