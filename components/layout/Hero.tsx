import Image from "next/image";
import { H1 } from "./H1";
import { P } from "./P";
import { Button } from "./Button";
import { Stack } from "./Stack";
import { ButtonLink } from "./ButtonLink";
import Container from "./Container";
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mt-[var(--header-height)] w-full 
      flex justify-center items-center
    min-h-[65vh] md:min-h-[70vh] lg:min-h-[70vh]"
    >
      <Image
        src="/images/profile2W.jpg"
        alt="Biodanza group session"
        fill
        priority
        className="absolute inset-0 
        object-cover object-top"
      />

      {/* soft overlay */}
      <div
        className="absolute inset-0 
      bg-black/40"
      />

      {/* content */}
      <div
        className="relative z-10 flex h-full flex-col 
      items-center justify-center text-white text-center 
      px-6"
      >
        <Container>
          <Stack>
            <h1
              className="text-[36px] md:[48px] lg:[58px] 
            font-bold tracking-tight color-[#c8c4b4]"
            >
              Move. Connect. Belong.
            </h1>

            <p className="text-center mx-auto text-[20px]">
              Guided biodanza sessions where movement becomes connection and
              everyone is welcome.
            </p>

            <ButtonLink
              href="#class-preview"
              className="bg-[#d8a4a0] text-white font-semibold"
            >
              Join a session
            </ButtonLink>
          </Stack>
        </Container>
      </div>
    </section>
  );
}
