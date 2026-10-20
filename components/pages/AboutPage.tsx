"use client";

import clsx from "clsx";
import { useState, useEffect, useRef, Fragment } from "react";
import { useEntranceAnimation } from "@/hooks/useEntranceAnimation";
import Image from "next/image";
import Link from "next/link";

import {
  Music4,
  Waves,
  HeartHandshakeIcon,
  Sparkles,
  GraduationCap,
  MoveDown,
  MoveRight,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import { ButtonLink } from "../ui/ButtonLink";

const classIcons: Record<string, LucideIcon> = {
  music: Music4,
  sparkles: Sparkles,
  handshake: HeartHandshakeIcon,
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
  // Highlights the entry Caroline is in now
  current?: boolean;
}

interface Qualification {
  name: string;
  detail: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  imageSrc: string;
}

const stats: Stat[] = [
  { value: 4, label: "Years teaching" },
  { value: 100, label: "Students guided" },
  { value: 5, label: "Festivals & events" },
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
    detail: "A class in Cardiff that changed everything.",
  },
  {
    year: "2019–2022",
    title: "Facilitator training",
    detail:
      "Completed a three-year training programme at the IBFed Bristol School of Biodanza including observed practice.",
  },
  {
    year: "2023",
    title: "First weekly class",
    detail: "Launched regular weekly classes in Penarth.",
  },
  {
    year: "2024–present",
    current: true,
    title: "Classes, courses & events in Pontypridd",
    detail:
      "I now offer monthly classes as well as 5-week courses in Pontypridd. I am also available for wellness festivals, corporate events, community & charity workshops and residential retreats across the UK.",
  },
];

const qualifications: Qualification[] = [
  {
    name: "IBFed certified facilitator",
    detail:
      "International Biodanza Federation, trained in the Rolando Toro System",
  },
  {
    name: "PGCE trained",
    detail:
      "11+ years teaching in further education and adult community learning",
  },
];

const checks = [
  "First aid trained, renewed annually",
  "Enhanced DBS certificate",
];

const testimonials: Testimonial[] = [
  {
    quote:
      "I always enjoy Caroline's Biodanza classes. She is a wonderful facilitator who makes everyone feel welcome and relaxed. I also love her music choices and the way she gently guides the participants through her sessions (which are always different). I always leave her classes feeling uplifted. It is a great class for beginners as well as those more experienced in Biodanza, and I would say to anyone thinking about trying Biodanza and attending Caroline's class to definitely give it a go!",
    name: "Nduka",
    imageSrc: "/images/participant-2-compressed.webp",
    role: "Biodanza Participant",
  },
  {
    quote:
      "Caroline is a wonderful teacher who holds a beautiful nurturing space where you can play, explore and discover the many joys and benefits of dancing Biodanza. Her classes are lovely!",
    name: "Maris",
    imageSrc: "/images/participant-1-compressed.webp",
    role: "Biodanza Participant",
  },
  {
    quote:
      "She encourages everyone to listen to their own needs in a non-judgmental space. She is a wonderful teacher whose gentle presence is felt immediately upon arrival and her classes are perfect for beginners and all abilities.",
    name: "Alys",
    imageSrc: "/images/participant-5-compressed.webp",
    role: "Biodanza Participant",
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
          <div className="flex flex-col items-start justify-start md:row-span-1 md:row-start-1">
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
            className="flex flex-col gap-4 md:col-start-2 md:col-span-2"
          >
            <div className="relative">
              <div
                className="absolute -top-4 -right-4 w-full h-full rounded-t-[999px] border border-rose-500/25 pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative w-full aspect-3/4 rounded-t-[999px] overflow-hidden shadow-[0_24px_60px_rgba(30,42,58,0.15)]">
                <Image
                  src="/images/caroline-profile.webp"
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
              <span className="bg-[#EEDAD1] rounded-full w-10 h-10 flex items-center justify-center shrink-0">
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
                  IBFed Trained
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
      <section
        id="my-story"
        className="max-w-275 mx-auto py-4 md:py-20 px-5 sm:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
          <figure>
            <div className="relative overflow-hidden aspect-3/4 rounded-3xl shadow-sm">
              <Image
                alt="Caroline with her diploma"
                src="/images/caroline-diploma-celebration.webp"
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
                  Cardiff, 2025
                </span>
              </div>
            </div>
            <figcaption className="mt-3 text-center text-[0.8125rem] italic text-[#1e2a3a]/70">
              Graduation Ceremony at IBFed Bristol School of Biodanza, 2025
            </figcaption>
          </figure>
          <div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-[#1e2a3a] mb-6">
              How I found Biodanza and what it has done for me
            </h2>
            <p className="text-[0.9375rem] text-stone-600 leading-[1.75] mb-5">
              I first discovered Biodanza in 2016 when I felt something was
              lacking in my life. I had recently finished university and felt
              very lonely and a general dissatisfaction with where I was at and
              what I was doing with my life. I was craving more meaningful
              connection with others as well as with myself.
            </p>
            <p className="text-[0.9375rem] text-stone-600 leading-[1.75] mb-5">
              I remember walking into the first session and felt I could move
              with freedom and connect with others in a playful, non-verbal way.
              I felt the loneliness wedged in my body start to ease week after
              week and start to find my spark and find out how creative I was
              just as myself! I remember discovering just how joyful it felt to
              move in the way I wanted to and not what was expected of me or how
              I would be perceived. This was a freedom I had been craving for a
              long time. I felt like I had come home to my body and started to
              discover who I was.
            </p>
            <p className="text-[0.9375rem] text-stone-600 leading-[1.75] mb-5">
              {" "}
              By doing Biodanza, I have grown in confidence, self-esteem and the
              ability to listen and connect to myself and my needs. I feel more
              freedom to express myself in my own life. I feel more connected to
              others and to nature too.
            </p>
            <p className="text-[0.9375rem] text-stone-600 leading-[1.75] mb-5">
              {" "}
              Fast forward 10 years, I’m now a fully trained facilitator who is
              very eager to share the benefits of the system with others in my
              community just as it’s benefited me and promoted growth in my own
              life.
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
            <h2
              className="text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-[#1e2a3a] mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
              }}
            >
              A path built on lived experience
            </h2>
            <ol aria-label="Career timeline">
              {timeline.map((entry, i) => (
                <li
                  key={entry.year}
                  className={clsx(
                    "relative isolate grid grid-cols-[3.25rem_1fr] gap-x-6 py-7",
                    entry.current && "pr-12",
                  )}
                >
                  {/* Highlight band: bleeds off the left edge of the screen */}
                  {entry.current && (
                    <span
                      className="absolute inset-y-0 -left-[100vw] right-0 -z-10 rounded-r-full bg-[#eedad1]"
                      aria-hidden="true"
                    />
                  )}
                  {/* Dotted connector, drawn in two halves per entry so it
                      stays above the highlight band */}
                  {i > 0 && (
                    <span
                      className="absolute left-6.25 top-0 h-7 border-l-2 border-dotted border-[#1e2a3a]/50"
                      aria-hidden="true"
                    />
                  )}
                  {i < timeline.length - 1 && (
                    <span
                      className="absolute left-6.25 top-20 bottom-0 border-l-2 border-dotted border-[#1e2a3a]/50"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className={clsx(
                      "size-13 rounded-full shadow-[-5px_1px_0_#1e2a3a]",
                      entry.current ? "bg-[#8fb5a0]" : "bg-[#c4705a]",
                    )}
                    aria-hidden="true"
                  />
                  <div>
                    <p
                      className="text-[1.5rem] leading-tight text-[#a4513e] mb-1"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {entry.year}
                    </p>
                    <p className="text-[1rem] font-medium text-[#1e2a3a] mb-1">
                      {entry.title}
                    </p>
                    <p className="text-[0.875rem] text-stone-600 leading-relaxed">
                      {entry.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2
              className="text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-[#1e2a3a] mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
              }}
            >
              Qualified &amp; accredited
            </h2>
            <dl className="border-t border-stone-200">
              {qualifications.map((q) => (
                <div key={q.name} className="py-6 border-b border-stone-200">
                  <dt
                    className="text-[1.625rem] leading-tight text-[#1e2a3a]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {q.name}
                  </dt>
                  <dd className="mt-1 text-[0.9375rem] text-stone-600 leading-relaxed">
                    {q.detail}
                  </dd>
                </div>
              ))}
            </dl>
            <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-[0.875rem] text-stone-600">
              {checks.map((check, i) => (
                <li key={check}>
                  {i > 0 && (
                    <span className="mr-2 text-stone-400" aria-hidden="true">
                      ·
                    </span>
                  )}
                  {check}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section
        ref={testiRef as React.RefObject<HTMLElement | null>}
        className="max-w-275 mx-auto px-5 sm:px-8 mb-20"
      >
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
                {/* Decorative: the name is announced alongside it */}
                <Image
                  src={t.imageSrc}
                  alt=""
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full object-cover object-center bg-[#e8ddd0] shrink-0"
                />
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
