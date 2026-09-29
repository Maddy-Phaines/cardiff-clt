import Section from "@/components/ui/Section";

import Breadcrumb from "@/components/ui/BreadCrumb";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import {
  Music,
  Leaf,
  Sparkles,
  HandshakeIcon,
  Users,
  Clock,
  MapPin,
  Star,
  MoveRight,
  CircleCheck,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import { classes } from "@/data/classes";
import { getNextDate, formatDateLong, formatDateShort } from "@/lib/dates";

export const DANDELION_URL = "https://dandelion.events/u/biodanza_with_caroline";

const expectIcons: Record<string, LucideIcon> = {
  music: Music,
  leaf: Leaf,
  sparkles: Sparkles,
  handshake: HandshakeIcon,
  users: Users,
};

interface ClassData {
  title: string;
  subtitle: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  duration: string;
  location: string;
  locationAddress: string;
  level: string;
  maxParticipants: number;
  about: string[];
  whatToExpect: Array<{ icon: string; text: string }>;
  testimonial: { quote: string; name: string; role: string };
  facilitator: { name: string; title: string; bio: string; imageSrc?: string };
  whatToBring: string[];
}

const classData: ClassData = {
  title: "Biodanza Workshop",
  subtitle:
    "A monthly space to drop in, move freely, and connect with others through music and guided dance. Suitable for complete beginners — no experience needed.",
  category: "Monthly Workshop",
  imageSrc: "/images/participant-4-compressed.webp",
  imageAlt: "Group of people moving freely together in a dance session",
  duration: "2 Hours",
  location: "Sardis Chapel",
  locationAddress: "Sardis Chapel, Sardis Road, Pontypridd, CF37 1DU",
  level: "Open to all",
  maxParticipants: 20,
  about: [
    "Biodanza is a system of human integration developed by Rolando Toro that uses music, movement, and group encounters to evoke deep feelings of joy, connection, and aliveness. Unlike performance-based dance, there is no choreography to learn — only an invitation to move as you feel.",
    "Each session follows a carefully curated sequence of exercises called a vivencia, designed to progressively open the heart and awaken the senses. You'll move solo, in pairs, and as a group — always at your own pace and comfort level.",
  ],
  whatToExpect: [
    {
      icon: "music",
      text: "A welcome circle and brief introduction — especially helpful for first-timers",
    },
    {
      icon: "leaf",
      text: "Gentle warm-up movements guided by carefully chosen music",
    },
    {
      icon: "users",
      text: "A sequence of vivencias — exercises in free movement, connection, and expression",
    },
    {
      icon: "handshake",
      text: "Partner and group exercises that build trust and a sense of community",
    },
    {
      icon: "sparkles",
      text: "A closing circle to reflect and integrate the experience",
    },
  ],
  testimonial: {
    quote:
      "Caroline has such a gentle, containing presence and she encourages everyone to try the exercises to their ability level with no judgement, promoting an accepting and inclusive atmosphere.",
    name: "Jill Lubienski",
    role: "Biodanza Customer",
  },
  facilitator: {
    name: "Caroline",
    title: "Certified IBFed Biodanza Facilitator ",
    bio: "Caroline has been teaching Biodanza for over 4 years and trained at the IBFed Bristol School of biodanza. Her classes are known for being warm, grounded, and welcoming to all.",
    imageSrc: "/images/caroline-profile.jpg",
  },
  whatToBring: [
    "Comfortable, loose clothing",
    "Bare feet or soft indoor shoes",
    "A water bottle",
    "An open mind",
  ],
};
const data = classData;

const featuredClass = classes[0];
const term = featuredClass.terms[0];
const nextDate = getNextDate(term.dates);
const upcomingSessions = term.dates.map((dateStr) => {
  const [, , day] = dateStr.split("-");
  return {
    dateStr,
    day: String(Number(day)),
    month: formatDateShort(dateStr).split(" ")[1],
    dayName: "Sunday",
    time: featuredClass.time.replace("Sundays ", ""),
    location: featuredClass.location,
    isNext: dateStr === nextDate,
    bookingUrl:
      (term.dandelionUrls as Record<string, string> | undefined)?.[dateStr] ??
      DANDELION_URL,
  };
});
const lowestRate = Math.min(
  ...featuredClass.rates.map((rate) => Number(rate.price.replace("£", ""))),
);

const MetaPill = ({
  metaIcon,
  label,
}: {
  metaIcon: React.ReactNode;
  label: string;
}): React.ReactElement => {
  return (
    <div
      className="inline-flex gap-2 items-center px-5 py-2 bg-rose-200 border
     border-stone-200 text-stone-600 rounded-full"
    >
      <span>{metaIcon}</span>
      <span>{label}</span>
    </div>
  );
};

export function SectionLabel({
  text,
  className,
}: {
  text: string;
  className?: string;
}): React.ReactElement {
  return (
    <div className={clsx(`flex items-center gap-3 mb-5 class`, className)}>
      <div className="w-6 h-px bg-rose-500" />
      <span className="text-[0.7rem] uppercase tracking-[0.2em] text-rose-500 font-medium">
        {text}
      </span>
    </div>
  );
}

interface UpcomingSession {
  dateStr: string;
  day: string;
  month: string;
  dayName: string;
  time: string;
  location: string;
  isNext: boolean;
  bookingUrl: string;
}

function SessionRow({
  session,
}: {
  session: UpcomingSession;
}): React.ReactElement {
  return (
    <Link
      href={session.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Book the ${session.dayName} ${session.day} ${session.month} session on Dandelion Events`}
      className={`flex items-center justify-between px-5 py-4 rounded-2xl border transition-colors ${
        session.isNext
          ? "border-rose-400 bg-[#fdf6f4] hover:bg-[#fbeae7]"
          : "border-stone-200 bg-white hover:border-rose-200"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-11 h-11 rounded-xl flex flex-col items-center justify-center shrink-0 ${
            session.isNext ? "bg-[#c4705a]" : "bg-[#eedad1]"
          }`}
        >
          <span
            className={`text-lg font-medium leading-none ${session.isNext ? "text-white" : "text-[#1e2a3a]"}`}
          >
            {session.day}
          </span>
          <span
            className={`text-[0.6rem] uppercase tracking-wide ${session.isNext ? "text-white/80" : "text-stone-500"}`}
          >
            {session.month}
          </span>
        </div>
        <div>
          <p className="text-[0.875rem] font-medium text-[#1e2a3a]">
            {session.dayName} · {session.time}
          </p>
          <p className="text-[0.75rem] text-stone-500">{session.location}</p>
        </div>
      </div>
      <span
        className={`inline-flex items-center gap-1 text-[0.65rem] uppercase tracking-wide px-2.5 py-1 rounded-full font-medium ${
          session.isNext ? "bg-[#c4705a] text-white" : "bg-[#8fb5a0] text-white"
        }`}
      >
        {session.isNext ? "Next up" : "Available"}
        <MoveRight size={11} aria-hidden="true" />
      </span>
    </Link>
  );
}

export default function ClassDetailPage() {
  return (
    <>
      <div className="max-w-275 mx-auto px-5 sm:px-8 pt-10 pb-24 ">
        <div className="my-8 ml-3">
          <Breadcrumb />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] items-start gap-12 mb-16">
          <div>
            <div
              className="inline-flex items-center gap-2 bg-rose-200  rounded-full px-4 
            py-1.5 text-[0.7rem] text-[#c4705a] font-medium mb-5"
            >
              <span className="bg-[#c4705a] h-1.5 w-1.5 rounded-full" />
              <span>{data.category}</span>
            </div>

            <h1 className="text-[clamp(2.5rem,5vw,4rem)] tracking-tight leading-[1.04] mb-4">
              {data.title}
            </h1>
            <p className="text-base max-w-[52ch] text-stone-600 leading-relaxed mb-8">
              {data.subtitle}
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              <MetaPill
                metaIcon={<Clock size={14} aria-hidden="true" />}
                label={`Monthly · ${featuredClass.time}`}
              />
              <MetaPill
                metaIcon={<MapPin size={14} aria-hidden="true" />}
                label={data.location}
              />
              <MetaPill
                metaIcon={<Users size={14} aria-hidden="true" />}
                label={`Up to ${data.maxParticipants} people`}
              />
              <MetaPill
                metaIcon={<Star size={14} aria-hidden="true" />}
                label={data.level}
              />
            </div>
            <div
              className="
            relative w-full aspect-video overflow-hidden rounded-3xl shadow-sm"
            >
              <Image
                src={data.imageSrc}
                alt={data.imageAlt}
                priority
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="lg:sticky lg:top-24">
            <div
              className="rounded-xl bg-amber-20 p-8 border border-stone-200 
          shadow-[0_4px_24px_rgba(30,42,58,0.06)]"
            >
              <div className="mb-4">
                <p
                  className="text-[#1e2a3a] text-[2.5rem] font-light mb-1 leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  From £{lowestRate}
                </p>
                <p className="text-[#1e2a3a]">per class</p>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-6">
                {featuredClass.rates.map((rate) => (
                  <div
                    key={rate.label}
                    className="bg-[#f8edeb] rounded-xl px-3 py-2.5"
                  >
                    <p className="text-[1rem] text-[#1e2a3a] font-medium leading-none">
                      {rate.price}
                    </p>
                    <p className="text-[0.65rem] text-stone-500 uppercase tracking-wide mt-1.5">
                      {rate.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                {[
                  {
                    label: "Next session",
                    value: nextDate
                      ? formatDateLong(nextDate)
                      : "Check back soon",
                  },
                  { label: "Duration", value: data.duration },
                  { label: "Location", value: data.locationAddress },
                  { label: "Level", value: data.level },
                ].map(({ label, value }, i) => (
                  <div key={i} className="flex justify-between items-start">
                    <span className="text-[0.75rem] text-stone-400 uppercase tracking-wide">
                      {label}
                    </span>
                    <span className="text-[0.875rem] text-[#1e2a3a] text-right max-w-[55%]">
                      {value}
                    </span>
                  </div>
                ))}
                <div className="h-px bg-stone-200 mb-6" />
              </div>
              <Link
                href={DANDELION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 bg-[#1e2a3a] py-4 text-[0.875rem] w-full justify-center
                items-center text-white rounded-full transition-all hover:-translate-y-px mb-4"
              >
                <span>Reserve your place</span>
                <MoveRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center w-full border border-stone-200 text-[#1e2a3a]
              rounded-full py-3.5 text-[0.875rem] hover:border-[#1e2a3a] hover:bg-[#f5f0e6]
              transition-colors"
              >
                <span>Ask a question</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start mb-16">
          <div>
            <section className="mb-14" aria-labelledby="about-heading">
              <SectionLabel text="About this class" />
              <h2
                id="expect-heading"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                }}
                className="text-[1.875rem] mb-4 text-[#1e2a3a] leading-snug"
              >
                What is Biodanza?
              </h2>
              {data.about.map((para, i) => (
                <p
                  key={i}
                  className="text-[0.9375rem] text-stone-600 mb-4 leading-[1.75]"
                >
                  {para}
                </p>
              ))}
            </section>
            <section className="mb-14" aria-labelledby="testimonial-heading">
              <div>
                <SectionLabel text="What to expect" />

                <h2
                  id="expect-heading"
                  className="text-[1.875rem] text-[#1e2a3a] mb-6 leading-snug"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 400,
                  }}
                >
                  A typical session
                </h2>
                <ul className="flex flex-col gap-4">
                  {data.whatToExpect.map((item, i) => {
                    const Icon = expectIcons[item.icon];
                    return (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-[0.9rem] text-stone-600 leading-relaxed"
                      >
                        <span className="w-7 h-7 rounded-full bg-[#eedad1] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon
                            size={14}
                            className="text-[#c4705a]"
                            aria-hidden="true"
                          />
                        </span>
                        {item.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
            <blockquote
              className="bg-[#1e2a3a] rounded-3xl p-8 mb-14"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
              }}
            >
              <p className="text-white text-[1.375rem] font-medium mb-6">
                &ldquo;{data.testimonial.quote}&ldquo;
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full relative overflow-hidden">
                  <Image
                    src={data.imageSrc}
                    alt={data.imageAlt}
                    width={9}
                    height={9}
                    className="w-9 h-9"
                  />
                </div>
                <div>
                  <cite className="not-italic text-white text-[0.7rem] font-medium block">
                    {data.testimonial.name}
                  </cite>
                  <span className="text-white/50 text-[0.8rem]">
                    {data.testimonial.role}
                  </span>
                </div>
              </footer>
            </blockquote>
            <section className="mb-14">
              <SectionLabel text="Upcoming sessions"></SectionLabel>
              <h2
                id="sessions-heading"
                className="text-[#1e2a3a] text-[1.875rem] mb-6 leading-snug"
              >
                Reserve your spot
              </h2>
              <div className="flex flex-col gap-3">
                {upcomingSessions.map((session) => (
                  <SessionRow key={session.dateStr} session={session} />
                ))}
              </div>
            </section>
          </div>
          <aside aria-label="Class details">
            <div className="mb-8">
              <p className="uppercase text-[0.7rem] text-stone-400 tracking-[0.15em] mb-3">
                Your facilitator
              </p>
              <div className="bg-amber-50 p-5 rounded-2xl border border-stone-200 flex items-center gap-2 mb-3">
                <div className="relative w-14 h-14 flex items-end justify-center">
                  {data.facilitator.imageSrc ? (
                    <Image
                      src={data.facilitator.imageSrc}
                      alt={data.facilitator.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover object-center rounded-full"
                    />
                  ) : (
                    <div className="w-8 h-10 bg-stone-400/30 rounded-t"></div>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-[#1e2a3a] font-medium text-[0.9rem] mb-1">
                    {" "}
                    {data.facilitator.name}
                  </p>
                  <p className="text-[0.8rem] text-stone-500 leading-relaxed">
                    {" "}
                    {data.facilitator.title}
                  </p>
                </div>
              </div>
              <p className="text-stone-500">{data.facilitator.bio}</p>
            </div>
            <div className="mb-6">
              <p className="uppercase text-stone-400 text-[0.7rem] tracking-[0.15em] mb-2">
                Location
              </p>
              <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
                <div className="relative bg-linear-to-br h-40 from-[#d1e8d8] to-[#8fb5a0] border-b-stone-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158566.2406862353!2d-3.431629973124732!3d51.61226298059641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e174a3ee719a3%3A0x395bb75320772501!2sThe%20Chapel!5e0!3m2!1sen!2suk!4v1773065133986!5m2!1sen!2suk"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                  ></iframe>
                </div>
                <div className="bg-white p-5 z-999">
                  <p className="text-[#1e2a3a] text-[0.9rem] font-medium leading-relaxed">
                    {data.location}
                  </p>
                  <p className="text-stone-500 text-[0.8rem]">
                    {data.locationAddress}
                  </p>
                  <Link
                    href={`https://maps.google.com/?q=${encodeURIComponent(data.locationAddress)}`}
                    className="inline-flex items-center gap-1 text-[0.75rem] text-[#c4705a] cursor-pointer mt-3"
                  >
                    Open in Google maps
                    <MoveRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <p className="uppercase text-[0.7rem] text-stone-400 tracking-[0.15em] mb-2">
                What to bring
              </p>
              <ul className="flex flex-col gap-2.5" role="list">
                {data.whatToBring.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-1 text-[0.875rem] text-stone-600"
                  >
                    <CircleCheck
                      size={18}
                      className="bg-[#8fb5a0] text-white text-[0.7rem] rounded-full shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
