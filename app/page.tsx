"use client";

import Image from "next/image";
import { TermHighlight } from "@/components/classes/TermHighlight";
import Section from "@/components/layout/Section";
import Hero from "@/components/layout/Hero";
import { classes } from "@/data/classes";
import { Stack } from "@/components/layout/Stack";
import { H1 } from "@/components/layout/H1";
import { H2 } from "@/components/layout/H2";
import { P } from "@/components/layout/P";
import Container from "@/components/layout/Container";
import { HomePreview } from "@/components/layout/HomePreview";
import { HomeCta } from "@/components/layout/HomeCta";
import { EmblaCarousel } from "@/components/ui/EmblaCarousel";
import { ButtonLink } from "@/components/layout/ButtonLink";
import { FlowIcon } from "@/components/ui/FlowIcon";
export default function Home() {
  const featuredClass = classes[0];
  return (
    <div>
      <Hero />
      <Section>
        <div className="flex flex-col gap-6">
          <h2
            className="text-[30px] md:text-[38px] text-center 
          tracking-wide font-playfair"
          >
            Welcome to <span className="text-[#2F7F8F]">Biodanza</span> with
            <span className="text-[#2F7F8F]"> Caroline</span>
          </h2>
          <p className="text-center text-[18px] leading-[1.67em] md:text-[20px]">
            A welcoming space to rediscover joy, vitality and connection through
            movement. Using music and guided exercises, each session invites you
            to move at your own pace, reconnect with your body, and build
            meaningful connection with others. I'm a paragraph. Click here to
            add your own text and edit me. It’s easy. Just click “Edit Text” or
            double click me to add your own content and make changes to the
            font. Feel free to drag and drop me anywhere you like on your page.
            I’m a great place for you to tell a story and let your users know a
            little more about you.
          </p>
        </div>
      </Section>
      <Section>
        <div
          className="grid  
        gap-12 md:grid-cols-2 tems-center"
        >
          <div>
            <div className="flex flex-col gap-6">
              <h3
                className="text-[30px] md:text-[38px] text-left 
          tracking-wide font-playfair"
              >
                🌿 A space to reconnect with yourself{" "}
              </h3>
              <p
                className="text-left text-[18px] leading-[1.67em] 
          md:text-[20px]"
              >
                I discovered Biodanza in 2016, at a time when I felt lonely and
                unsure of where I was heading. From my first session, I felt a
                freedom in my body — the freedom to move without judgement and
                to connect without words. Week by week, that sense of
                disconnection softened. I found more confidence, more joy, and a
                deeper relationship with myself. Biodanza helped me feel at home
                in my body again. Eight years on, I’m now a
                teacher-in-supervision with the Bristol School of Biodanza,
                offering classes in Cardiff and workshops for adults and
                children. I share this work simply because of how deeply it has
                supported me — and I hope to offer others that same opportunity.
              </p>
            </div>
            <ButtonLink
              className="bg-[#2F7F8F] text-black font-semibold"
              href="/about"
            >
              → Read more about my journey
            </ButtonLink>
          </div>

          <div
            className="relative w-full h-auto 
          overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/C_solo.jpeg"
              alt="..."
              fill
              className="object-cover object-[bottom_30%]"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </Section>
      <Section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Stack size="lg">
            <div className="mb-4 font-semibold">
              (Empathy & Problem/Solution Section - is the problem defined? Is
              C's solution compellingly proposed?)
              <ul>
                <li className="font-bold">
                  "I Understand" Intro: A short section demonstrating you know
                  the client's challenges (e.g., "Feeling burnt out? You are not
                  alone").
                </li>

                <li>
                  Value Proposition: Briefly explain your approach and why it's
                  unique.
                </li>
              </ul>
            </div>
            <H1 className="max-w-3xl">
              Welcome to <span>Biodanza</span> with Caroline
            </H1>

            <P>
              I first discovered Biodanza in 2016 when I felt something was
              lacking in my life. I had recently finished university and felt
              very lonely and a general dissatisfaction with where I was at and
              what I was doing with my life. I was craving more meaningful
              connection with others as well as with myself. When I attended my
              first Biodanza session in 2016, it was the beginning of a joyful
              journey that allowed me to find freedom from judgement and a
              renewed sense of belonging and purpose.{" "}
            </P>
            <P>
              {" "}
              All of of us, perhaps never more so than right now, long for
              connection to ourselves and to each other and feel numbed and
              isolated in the monotony of our every day lives. My aim is to
              introduce and guide you to discover Biodanza and how it can help
              you connect with yourself and the people around you while growing
              in freedom and confidence.
            </P>
          </Stack>
          <div>
            <Image
              src="/images/c_diploma_grp.jpeg"
              alt=""
              width={800}
              height={600}
              className=""
            />

            {/* soft overlay */}
            <div
              className="
                  bg-black/40"
            />
          </div>
        </div>
      </Section>

      <EmblaCarousel />
      <HomeCta />
    </div>
  );
}
