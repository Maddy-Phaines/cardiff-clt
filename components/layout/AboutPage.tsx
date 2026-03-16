"use client";

import { useState, useEffect, useRef, Fragment } from "react";
import { useEntranceAnimation } from "@/hooks/useEntranceAnimation";
import Image from "next/image";
import Link from "next/link";

import { SectionEyebrow } from "../ui/SectionEyebrow";
import {
  Music4,
  Flower2,
  Waves,
  HeartHandshakeIcon,
  Sparkles,
  BriefcaseMedical,
  GraduationCap,
  ScrollIcon,
  MoveDown,
  MoveRight,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import { ButtonLink } from "./ButtonLink";

const classIcons: Record<string, LucideIcon> = {
  music: Music4,
  qualification: GraduationCap,
  diploma: ScrollIcon,
  firstAid: BriefcaseMedical,
  sparkles: Sparkles,
  handshake: HeartHandshakeIcon,
  flowers: Flower2,
  movement: Waves,
};

interface Stat {
  value: number;
  label: string;
}

interface Pillar {
  icon: string;
  title: string;
  text: string;
}

interface TimelineEntry {
  year: string;
  title: string;
  detail: string;
}

interface Badge {
  icon: string;
  label: string;
  sub: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}


const stats: Stat[] = [
  { value: 3, label: "Years teaching" },
  { value: 100, label: "Students guided" },
  { value: 4, label: "Festivals & events" },
  { value: 3, label: "Regular venues" },
];

const pillars: Pillar[] = [
  {
    icon: "music",
    title: "Music",
    text: "Every exercise is guided by carefully chosen music that evokes specific emotional and physiological responses, gently opening the body to movement and feeling.",
  },
  {
    icon: "movement",
    title: "Movement",
    text: "There's no choreography to learn — only an invitation to move as you feel. Through expressive movement, Biodanza reconnects you with the body's natural wisdom.",
  },
  {
    icon: "handshake",
    title: "Encounter",
    text: "Human connection is at the heart of Biodanza. Exercises with partners and the group cultivate trust, empathy, and a profound sense of not being alone.",
  },
];

const timeline: TimelineEntry[] = [
  {
    year: "2016",
    title: "First Biodanza class",
    detail: "Attended a class in Bristol — a moment that changed everything.",
  },
  {
    year: "2017–2019",
    title: "Facilitator training",
    detail:
      "Three-year training programme with the International Biocentric Foundation (IBF).",
  },
  {
    year: "2020",
    title: "First weekly class",
    detail:
      "Launched regular classes in Cardiff. The community grew organically from week one.",
  },
  {
    year: "2024–present",
    title: "Festivals & retreats",
    detail:
      "Now available for wellness festivals, corporate events, and residential retreats across the UK.",
  },
];

const badges: Badge[] = [
  {
    icon: "qualification",
    label: "IBF Certified",
    sub: "International Biocentric Foundation",
  },
  {
    icon: "flowers",
    label: "Biocentric Education",
    sub: "Rolando Toro System",
  },
  { icon: "firstAid", label: "First Aid Trained", sub: "Renewed annually" },
  { icon: "diploma", label: "DBS Checked", sub: "Enhanced certificate" },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "I came along not knowing what to expect and left feeling lighter than I have in months. There's something magical about moving without any pressure to get it right.",
    name: "Sarah M.",
    role: "Cardiff · Regular attendee",
  },
  {
    quote:
      "Caroline holds the space beautifully. I always feel safe, seen, and genuinely welcomed — as a complete beginner that meant everything.",
    name: "James T.",
    role: "Pontypridd · 6 months",
  },
  {
    quote:
      "I booked Caroline for our wellness festival and she was absolutely brilliant. The group energy she creates is unlike anything I've seen from other facilitators.",
    name: "Priya N.",
    role: "Festival organiser · Bristol",
  },
];

function useCountUp(
  target: number,
  duration: number = 1200,
  start: boolean = false,
): number {
  const [value, setValue] = useState<number>(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTime = performance.now();
    const tick = (now: number): void => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}

function useScrollFade(): [React.RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

export function StatCounter({
  stat,
  triggered,
}: {
  stat: Stat;
  triggered: boolean;
}): React.ReactElement {
  const count = useCountUp(stat.value, 1000, triggered);
  return (
    <div className="text-center">
      <span
        className="block text-[2.5rem] font-light text-white leading-none mb-1"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {count}+
      </span>
      <span className="block text-[0.65rem] uppercase tracking-[0.15em] text-white/80">
        {stat.label}
      </span>
    </div>
  );
}

const AboutPage = (): React.ReactElement => {
  const { fadeUp } = useEntranceAnimation();
  const [statsTriggered, setStatsTriggered] = useState<boolean>(false);

  const [storyRef, storyVisible] = useScrollFade();
  const [biodanzaRef, biodanzaVisible] = useScrollFade();
  const [credsRef, credsVisible] = useScrollFade();
  const [testiRef, testiVisible] = useScrollFade();
  const [ctaRef, ctaVisible] = useScrollFade();

  useEffect(() => {
    const t2 = setTimeout(() => setStatsTriggered(true), 700);
    return () => clearTimeout(t2);
  }, []);

  const scrollFade = (
    visible: boolean,
    delay: number = 0,
  ): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
  });
  return (
    <div>
      <section className="pt-16 pb-12 px-5 sm:px-8 py-20 max-w-275 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 lg:gap-12 items-end mb-8">
          <div className="flex flex-col items-start justify-start row-span-1 row-start-1">
            <span
              className="inline-flex items-center text-blue-950 text-[clamp(0.7rem)] uppercase
tracking-[0.15em]
bg-rose-400 rounded-full
px-4 py-1.5 mb-6"
            >
              Biodanza facilitator
              <MoveDown size={13} />
            </span>
            <h1
              className="text-[clamp(3.5rem,7vw,6rem)] leading-none tracking-tight 
            mb-6 max-w-2"
            >
              About <span className="text-rose-500">Biodanza</span> with{" "}
              <span className="text-rose-500">Caroline</span>
            </h1>
            <p className="text-base text-stone-600 leading-relaxed max-w-[38ch] mb-8">
              A gentle and welcoming space to reconnect with yourself through
              movement, music, and human connection — wherever you are in life.
            </p>
            <ButtonLink
              href="#my-story"
              className=" inline-flex items-center gap-1.5 px-7 py-3.5 text-[0.8125rem] text-white 
            rounded-full bg-blue-950 font-medium tracking-[0.15em] cursor-pointer 
            hover:border hover:border-blue-950 hover:text-blue-950 hover:bg-transparent transition-all 
            hover:-translate-y-px"
            >
              read my story
              <MoveRight size={15} />
            </ButtonLink>
          </div>
          <div
            style={fadeUp(300)}
            className="flex flex-col gap-4 col-start-2 col-span-2"
          >
            <div className="relative">
              <div
                className="absolute -top-4 -right-4 w-full h-full rounded-t-[999px] border border-rose-500/25 pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative w-full aspect-3/4 rounded-t-[999px] overflow-hidden shadow-[0_24px_60px_rgba(30,42,58,0.15)]">
                <Image
                  src="/images/profile2W.jpg"
                  alt="Caroline dancing joyfully in a field of yellow flowers"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 80vw, 45vw"
                  priority
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-[#1e2a3a]/15 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-sm">
              <span className="bg-rose-100 rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                <GraduationCap size={18} className="text-stone-900" />
              </span>
              <span className="flex flex-col">
                <span className="text-stone-800">Caroline</span>
                <span
                  className="inline-flex gap-2 
                items-center text-sm text-stone-600"
                >
                  Certified Biodanza Facilitator{" "}
                  <span className="inline-flex bg-[#c4705a] h-1.5 w-1.5 rounded-full" />
                  IBF Trained
                </span>
              </span>
            </div>
          </div>
        </div>
        <div
          style={fadeUp(600)}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-blue-950 rounded-3xl px-8 py-8"
        >
          {stats.map((stat, i) => (
            <Fragment key={stat.label}>
              <StatCounter stat={stat} triggered={statsTriggered} />
              {i < stats.length - 1 && (
                <div
                  className="hidden md:block w-px bg-white/10"
                  aria-hidden="true"
                />
              )}
            </Fragment>
          ))}
        </div>
      </section>
      <section id="my-story" className="max-w-275 mx-auto py-20 px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
          <div className="relative overflow-hidden aspect-3/4 rounded-3xl shadow-sm">
            <Image
              alt="Caroline with her diploma"
              src="/images/c_diploma1773672798.webp"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 389px"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5">
              <span
                className="inline-flex items-center gap-1.5 bg-white/82 backdrop-blur-sm rounded-full px-4 py-1.5 text-[0.7rem]
                 font-medium text-[#1e2a3a]
              "
              >
                <span
                  className="inline-block w-1.5 h-1.5 bg-[#c4705a] rounded-full"
                  aria-hidden="true"
                />
                Cardiff, 2024
              </span>
            </div>
          </div>
          <div>
            <SectionEyebrow text="My story" />
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-[#1e2a3a] mb-6">
              How I found Biodanza and what it has done for me
            </h2>
            <p className="text-[0.9375rem] text-stone-600 leading-[1.75] mb-5">
              I came to Biodanza at a time when I was searching for something —
              though I couldn't have told you what. I'd tried yoga, meditation,
              therapy. All helpful in their own ways. But something was missing.
              When a friend dragged me to a class one rainy Tuesday evening,
              everything shifted.
            </p>
            <p className="text-[0.9375rem] text-stone-600 leading-[1.75] mb-5">
              For the first time in years, I felt genuinely present in my body.
              Not performing movement, not thinking about it — just moving. The
              music held me, the group held me, and something in me that had
              been very quiet for a long time started to stir.
            </p>
            <p className="text-[0.9375rem] text-stone-600 leading-[1.75] mb-5">
              {" "}
              I trained as a Biodanza facilitator with the International
              Biocentric Foundation and have been teaching weekly classes in
              South Wales ever since. Every session still surprises me. That is
              the gift of Biodanza.
            </p>
            <Link
              className="inline-flex gap-1.5 items-center px-7 py-3.5 text-[0.8125rem] rounded-full bg-blue-950 text-white tracking-[0.15em] font-medium"
              href="/classes"
            >
              See my classes
              <MoveRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section
        ref={biodanzaRef as React.RefObject<HTMLElement | null>}
        className="bg-[#1e2a3a] rounded-3xl mx-4 sm:mx-8 mb-20 py-16 px-6 sm:px-12"
      >
        <div className="max-w-275 mx-auto">
          <div className="text-center mb-12">
            <SectionEyebrow text="The practice" onDark center />

            <h2 className="text-[clamp(2rem,4vw,3.5rem)] text-white leading-1.1 mb-4">
              What is <span className="text-[#c4705a]">Biodanza?</span>
            </h2>
            <p className="text-[0.9375rem] text-white/80 max-w-[45ch] mx-auto leading-[1.7]">
              Developed by Rolando Toro, Biodanza is a system of human
              integration that uses music, movement, and encounter to awaken
              joy, vitality, and belonging.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = classIcons[pillar.icon];
              return (
                <div
                  key={pillar.title}
                  className="bg-white/6 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
                >
                  <div
                    className="w-12 h-12 rounded-full bg-[#c4705a]/20 flex items-center justify-center text-xl mb-5"
                    aria-hidden="true"
                  >
                    {Icon && <Icon size={20} className="text-[#c4705a]" />}
                  </div>
                  <h3 className="text-[1.375rem] text-white mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-[0.8215rem] text-white/80 leading-[1.65]">
                    {pillar.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section
        ref={credsRef as React.RefObject<HTMLElement | null>}
        className="max-w-275 mx-auto px-5 sm:px-8 py-8 mb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <SectionEyebrow text="Training & background" />
            <h2
              className="text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-[#1e2a3a] mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
              }}
            >
              A path built on lived experience
            </h2>
            <ol className="flex flex-col" aria-label="Career timeline">
              {timeline.map((entry, i) => {
                return (
                  <li key={entry.year} className="flex gap-5 pb-8 relative">
                    {i < timeline.length - 1 && (
                      <div
                        className="absolute left-2.75 top-7 w-px h-[calc(100%-28px)] bg-stone-200"
                        aria-hidden="true"
                      />
                    )}
                    <div
                      className="w-6 h-6 rounded-full bg-[#eedad1] border-2 border-[#c4705a] 
                  flex items-center justify-center shrink-0 mt-0.5"
                    >
                      <div
                        className="w-2 h-2 rounded-full bg-[#c4705a]"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-[0.12em] text-stone-600 mb-0.5">
                        {entry.year}
                      </p>
                      <p className="text-[0.9rem] font-medium text-[#1e2a3a] mb-0.5">
                        {entry.title}
                      </p>
                      <p className="text-[0.8125rem] text-stone-500 leading-normal">
                        {entry.detail}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <div>
            <SectionEyebrow text="Certifications" />
            <h2
              className="text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-[#1e2a3a] mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
              }}
            >
              Qualified &amp; accredited
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {badges.map((badge) => {
                const Icon = classIcons[badge.icon];
                return (
                  <div
                    key={badge.label}
                    className="bg-white border border-stone-200 rounded-2xl p-5 flex flex-col items-center text-center gap-2 hover:shadow-[0_4px_16px_rgba(30,42,58,0.08)] transition-shadow"
                  >
                    {Icon && <Icon size={20} className="text-[#c4705a]" />}
                    <span className="text-[0.8125rem] font-medium text-[#1e2a3a]">
                      {badge.label}
                    </span>
                    <span className="text-[0.65rem] text-stone-600 leading-snug">
                      {badge.sub}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section
        ref={testiRef as React.RefObject<HTMLElement | null>}
        className="max-w-275 mx-auto px-5 sm:px-8 mb-20"
      >
        <SectionEyebrow text="Student voices" />
        <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-[#1e2a3a] mb-8">
          What people say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.name}
              className={`rounded-3xl p-7 flex flex-col justify-between border hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(30,42,58,0.1)] transition-all ${
                i === 0
                  ? "bg-[#eedad1] border-transparent"
                  : "bg-white border-stone-200"
              }`}
            >
              <div>
                <p
                  className="text-[#c4705a] text-xs tracking-widest mb-4"
                  aria-label="5 stars"
                >
                  ★★★★★
                </p>
                <p className="text-[1.125rem] text-[#1e2a3a] leading-[1.55] mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <footer className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#e8ddd0] flex items-end justify-center overflow-hidden flex-shrink-0">
                  <div
                    className="w-5 h-7 bg-stone-400/30 rounded-t-full"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <cite className="not-italic text-[0.8125rem] font-medium text-[#1e2a3a] block">
                    {t.name}
                  </cite>
                  <span className="text-[0.7rem] text-stone-600">{t.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section
        ref={ctaRef as React.RefObject<HTMLElement | null>}
        className="max-w-275 mx-auto px-5 sm:px-8 pb-24"
      >
        <div className="bg-[#eedad1] rounded-3xl px-8 py-20 text-center relative overflow-hidden">
          <div
            className="absolute top-8 right-12 text-[5rem] text-[#c4705a]/12 select-none pointer-events-none"
            aria-hidden="true"
          >
            ✦
          </div>
          <div
            className="absolute bottom-6 left-10 text-[3rem] text-[#c4705a]/8 select-none pointer-events-none"
            aria-hidden="true"
          >
            ✦
          </div>

          <h2 className="text-[clamp(2rem,4vw,3.5rem)] text-[#1e2a3a] leading-[1.1] mb-4 relative z-10">
            Ready to <span className="italic">move with us?</span>
          </h2>
          <p className="text-[0.9375rem] text-stone-600 leading-[1.65] max-w-[40ch] mx-auto mb-8 relative z-10">
            Your first class is always a gentle introduction. There is nothing
            to prepare, nothing to get right and everyone is welcome.
          </p>
          <div className="flex gap-3 justify-center flex-wrap relative z-10">
            <Link
              href="/classes"
              className="inline-flex items-center gap-2.5 bg-[#1e2a3a] text-white rounded-full px-7 py-3.5 text-[0.8125rem] font-medium hover:bg-[#2d3f55] transition-all hover:-translate-y-px"
            >
              See upcoming classes →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 border-[1.5px] border-[#1e2a3a] text-[#1e2a3a] rounded-full px-7 py-3.5 text-[0.8125rem] font-medium hover:bg-[#1e2a3a]/5 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutPage;
