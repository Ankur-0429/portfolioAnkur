"use client";
import { sendEmail } from "@/email/sendEmail";
import SubmitButton from "./submit-button";
import { useToast } from "./ui/use-toast";
import { useRef } from "react";

const Contact = () => {
  const {toast} = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="mb-20 sm:mb-28 w-full max-w-screen-lg mx-auto px-4 sm:px-8 md:px-10 sm:text-2xl">
      <p className="leading-normal text-xs text-white/70">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ahir.ankur0429@gmail.com">
          ahir.ankur0429@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        ref={formRef}
        className="mt-2 flex flex-col shadow-input"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast({
              variant: "destructive",
              title: "Error occurred on my end.",
              description: "please send me the email directly"
            })
            return;
          }
          toast({
            variant: "default",
            title: "Success",
            description: "I'll will be in touch soon!"
          })
          formRef.current?.reset();
        }}>
        <input
          className="h-14 px-4 rounded-lg transition-all text-white bg-white/10 hover:bg-white/20 bg-opacity-80 outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="email"
        />
        <textarea
          className="resize-none h-52 my-3 rounded-lg borderBlack p-4 transition-all text-white bg-white/10 hover:bg-white/20 bg-opacity-80 outline-none"
          name="message"
          placeholder="message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </section>
  );
};

export default Contact;
