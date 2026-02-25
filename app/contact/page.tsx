import Section from "@/components/layout/Section";
import Image from "next/image";
import { Button } from "@/components/layout/Button";
import { P } from "@/components/layout/P";
import { Stack } from "@/components/layout/Stack";
import { H1 } from "@/components/layout/H1";
const ContactPage = () => {
  return (
    <main className="">
      {/*   <section
        className="relative min-h-screen
      flex flex-col lg:flex-row justify-center 
      items-center"
      >
       <div className="absolute inset-0">
          <Image
              src="/images/5899035.jpg"
              fill
              priority
              alt=""
              className="w-full h-full object-cover"
            /> 

          <div
            className="absolute inset-0 bg-gradient-to-b 
          from-black/90 to-black/30 backdrop-brightness-95"
          />
        </div>
      </section> */}
      <div className="bg-[#4A148C] border">
        <section
          className="relative relative 
            text-center"
        >
          <Stack
            size="md"
            className="max-w-2xl 
            mx-auto text-white my-8"
          >
            <h1
              className="text-[24px]
                font-semibold tracking-tight"
            >
              Get in touch.
            </h1>

            <P className="mt-6 text-lg leading-relaxed">
              Whether you're curious about a class, ready to join a session, or
              simply want to ask a question, I warmly welcome your message.
            </P>

            <P className="mt-4 text-base opacity-80">
              Biodanza is about connection, expression, and rediscovering joy
              through movement — and every journey begins with a conversation.
            </P>
          </Stack>
        </section>

        {/* Bottom Half – Form Section */}
        {/* ========================= */}
        <div>
          <h2 className="text-left">Contact</h2>

          <form
            className="relative w-[600px] mx-auto
               flex flex-col items-center gap-5"
          >
            <div
              className="flex flex-col w-[90%] 
            m-auto"
              id="name"
            >
              <label className="text-white mb-2" htmlFor="name">
                First name:
              </label>
              <input
                className="bg-white"
                type="text"
                id="name"
                name="user_name"
              />
            </div>
            <div className="flex flex-col w-[90%] mx-auto" id="name">
              <label className="text-white mb-2" htmlFor="name">
                Last name:
              </label>
              <input
                className="bg-white"
                type="text"
                id="name"
                name="user_name"
              />
            </div>

            <div className="flex flex-col w-[90%] m-auto" id="email">
              <label className="text-white mb-2" htmlFor="mail">
                Email:
              </label>
              <input
                className="bg-white"
                type="email"
                id="mail"
                name="user_email"
              />
            </div>

            <div className="flex flex-col m-auto w-[90%]" id="message">
              <label className="text-white mb-2" htmlFor="msg">
                Your message:
              </label>

              <textarea
                className="bg-white py-0 px-[10px]"
                id="msg"
                name="user_message"
              ></textarea>
            </div>

            <div
              className="flex w-full justify-center 
            items-center p-4"
            >
              <Button className="bg-white text-black" type="submit">
                Send your message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
