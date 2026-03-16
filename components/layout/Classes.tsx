"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useEntranceAnimation } from "@/hooks/useEntranceAnimation";
import {
  Music4,
  Waves,
  HeartHandshakeIcon,
  Plus,
  MapPin,
  Clock,
  CalendarDays,
  PoundSterling,
  MoveRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SectionEyebrow } from "../ui/SectionEyebrow";
import { classes } from "@/data/classes";
import { getNextDate, formatDateLong } from "@/lib/dates";

interface Expectation {
  icon: LucideIcon;
  title: string;
  text: string;
}

interface PriceTier {
  label: string;
  value: string;
  sub: string;
  featured?: boolean;
}

interface FaqItem {
  q: string;
  a: string;
}

const expectations: Expectation[] = [
  {
    icon: Music4,
    title: "Curated music",
    text: "Carefully chosen music guides every exercise and sets the emotional tone for the session.",
  },
  {
    icon: Waves,
    title: "Free expression",
    text: "No choreography to learn — only an invitation to move as you feel, naturally and freely.",
  },
  {
    icon: HeartHandshakeIcon,
    title: "Human connection",
    text: "Partner and group exercises that build genuine trust, empathy and a sense of belonging.",
  },
];

const priceTiers: PriceTier[] = [
  { label: "Standard", value: "£10", sub: "per class" },
  { label: "Concessions", value: "£7", sub: "per class" },
  {
    label: "First class",
    value: "£5",
    sub: "introductory offer",
    featured: true,
  },
];

const faqs: FaqItem[] = [
  {
    q: "Do I need any experience?",
    a: "Not at all. Biodanza is designed to be accessible to everyone regardless of dance background, age, or fitness level. There is nothing to get right — only an invitation to move as you feel.",
  },
  {
    q: "What should I wear and bring?",
    a: "Comfortable, loose clothing you can move freely in. Bare feet or soft indoor shoes are ideal. Bring a water bottle — everything else is provided.",
  },
  {
    q: "How do I book a place?",
    a: "Simply email biodanzawithcaroline@gmail.com to reserve your place. Caroline will confirm your booking and send any joining details ahead of the class.",
  },
  {
    q: "Can I come just once to try it?",
    a: "Absolutely. There is no commitment required. Your first class is just £5 as an introductory offer, and you are welcome to attend as regularly or occasionally as suits you.",
  },
  {
    q: "Is it suitable if I have mobility issues?",
    a: "Yes. Biodanza can be adapted to suit different mobility levels. If you have any specific concerns, get in touch with Caroline before your first class and she will be happy to discuss how to make it work for you.",
  },
];

const classMeta: { icon: React.ReactNode; label: string }[] = [
  { icon: <Clock size={14} aria-hidden="true" />, label: "2:30–4:30pm" },
  {
    icon: <CalendarDays size={14} aria-hidden="true" />,
    label: "Fortnightly Sundays",
  },
  {
    icon: <MapPin size={14} aria-hidden="true" />,
    label: "Sardis Chapel, Pontypridd",
  },
  { icon: <PoundSterling size={14} aria-hidden="true" />, label: "From £5" },
];

function formatShortDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const d = new Date(Date.UTC(year, month - 1, day, 12));
  return d.toLocaleDateString("en-GB", {
    timeZone: "Europe/London",
    day: "numeric",
    month: "short",
  });
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

function FaqAccordion({ items }: { items: FaqItem[] }): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-160 border-t border-stone-200">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-btn-${i}`;

        return (
          <div key={item.q} className="border-b border-stone-200">
            <button
              id={buttonId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex justify-between items-center py-[18px] bg-transparent border-none cursor-pointer text-left gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 rounded"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="text-[0.9375rem] text-[#1e2a3a] font-normal group-hover:text-[#c4705a] transition-colors">
                {item.q}
              </span>
              <Plus
                size={18}
                className="text-[#c4705a] flex-shrink-0 transition-transform duration-200"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                aria-hidden="true"
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 300ms ease-out",
              }}
            >
              <div className="overflow-hidden">
                <p className="text-[0.875rem] text-stone-600 leading-[1.75] pb-[18px]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function StructuredData({
  term,
  title,
}: {
  term: { name: string; dates: string[] };
  title: string;
}): React.ReactElement {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${title} with Caroline`,
    description:
      "A fortnightly Biodanza group class for all abilities at Sardis Chapel, Pontypridd. Guided by music, movement, and human encounter. No experience needed. First class £5.",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    startDate: term.dates[0],
    endDate: term.dates[term.dates.length - 1],
    location: {
      "@type": "Place",
      name: "Sardis Chapel",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sardis Road",
        addressLocality: "Pontypridd",
        postalCode: "CF37 1DU",
        addressRegion: "Wales",
        addressCountry: "GB",
      },
    },
    organizer: {
      "@type": "Person",
      name: "Caroline",
      email: "biodanzawithcaroline@gmail.com",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Standard",
        price: "10.00",
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "First class introductory offer",
        price: "5.00",
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export const Classes = () => {
  const featuredClass = classes[0];
  const term = featuredClass.terms[0];
  const allDates = term.dates;
  const nextDate = getNextDate(allDates);

  const { fadeUp } = useEntranceAnimation();

  return (
    <div className="min-h-screen">
      <StructuredData term={term} title={featuredClass.title} />

      <section className="" aria-label="Classes hero">
        <div className="max-w-275 mx-auto px-5 sm:px-8 pt-14 pb-16 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center">
          <div>
            <div style={fadeUp(200)}>
              <SectionEyebrow text="Biodanza classes · Sardis Chapel, Pontypridd" />
            </div>

            <h1
              className="text-[clamp(2.6rem,5.5vw,4.2rem)] leading-[1.08] tracking-tight text-[#1e2a3a] mt-3 mb-5 max-w-[14ch]"
              style={{
                fontWeight: 400,
                ...fadeUp(350),
              }}
            >
              Move without judgement.{" "}
              <em className="text-rose-500" style={{ fontStyle: "italic" }}>
                Connect without words.
              </em>
            </h1>

            <p
              style={fadeUp(550)}
              className="text-[1rem] max-w-[40ch] text-[#1e2a3a] leading-relaxed mb-8"
            >
              A fortnightly Sunday class in Pontypridd for all levels — no
              experience, no performance, no judgement. Just music, movement and
              genuine human connection.
            </p>

            {nextDate && (
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#c4705a]/20 rounded-full px-4 py-2 mb-8 text-[0.875rem] text-[#1e2a3a]">
                <CalendarDays
                  size={15}
                  className="text-[#c4705a] shrink-0"
                  aria-hidden="true"
                />
                <span>
                  <span className="font-medium">Next class:</span>{" "}
                  {formatDateLong(nextDate)}
                </span>
              </div>
            )}

            <div style={fadeUp(700)} className="flex flex-wrap gap-3 mb-10">
              <a
                href="mailto:biodanzawithcaroline@gmail.com?subject=Class%20booking%20enquiry"
                className="inline-flex items-center gap-2 bg-[#1e2a3a] text-white text-[0.9375rem] font-medium px-6 py-3 rounded-full hover:bg-[#2d3f55] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e2a3a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5ede8]"
                aria-label="Email Caroline to book a Biodanza class"
              >
                Book a place
                <MoveRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#what-to-expect"
                className="inline-flex items-center gap-2 border border-[#1e2a3a]/30 text-[#1e2a3a] text-[0.9375rem] px-6 py-3 rounded-full hover:border-[#1e2a3a]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e2a3a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5ede8]"
              >
                What to expect
              </a>
            </div>

            <ul
              style={fadeUp(850)}
              className="flex flex-wrap gap-x-6 gap-y-1.5 text-[0.8125rem] text-[#1e2a3a]/70"
              aria-label="Class credentials"
            >
              {[
                "4+ years teaching",
                "All levels welcome",
                "£5 first class",
                "BSCO-affiliated facilitator",
              ].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <span
                    className="w-1 h-1 rounded-full bg-[#c4705a] shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex justify-center items-end relative">
            <div
              className="absolute -inset-3 rounded-t-[999px] border border-rose-500/25 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative w-52 xl:w-80 overflow-hidden rounded-t-[999px] rounded-b-none aspect-3/4 shadow-lg">
              <Image
                src="/images/profile2W1773672679.webp"
                alt="Participants moving joyfully together in a Biodanza session at Sardis Chapel, Pontypridd"
                fill
                sizes="(min-width: 1024px) 320px, 0px"
                className="object-cover object-top"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            <div
              style={fadeUp(850)}
              className="absolute -bottom-3 -left-6 bg-white rounded-2xl px-5 py-3 shadow-md border border-stone-100 text-center"
              aria-hidden="true"
            >
              <p
                className="text-[2rem] leading-none text-[#1e2a3a]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                £5
              </p>
              <p className="text-[0.8125rem] text-stone-500 mt-0.5">
                First class
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="what-to-expect"
        className="max-w-275 mx-auto pt-16 px-5 sm:px-8 pb-20"
      >
        <FadeIn>
          <SectionEyebrow text="What to expect" />
          <div className="bg-[#eedad1] rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-6 px-10 py-10">
            {expectations.map((expect, i) => {
              const Icon = expect.icon;
              return (
                <FadeIn key={expect.title} delay={i * 0.08}>
                  <div className="bg-white rounded-2xl p-8 hover:shadow-md transition-shadow h-full">
                    <span
                      className="inline-flex items-center justify-center bg-[#eedad1] h-12 w-12 rounded-full mb-5"
                      aria-hidden="true"
                    >
                      <Icon size={20} className="text-rose-400" />
                    </span>
                    <h2 className="text-[1.375rem] mb-2.5 font-normal">
                      {expect.title}
                    </h2>
                    <p className="text-[0.875rem] leading-[1.65] text-stone-600">
                      {expect.text}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </FadeIn>
      </section>

      <section
        className="bg-[#f8edeb] py-20 px-5 sm:px-8"
        aria-labelledby="class-card-heading"
      >
        <div className="max-w-275 mx-auto">
          <SectionEyebrow text="Current class" />
          <FadeIn>
            <div
              className="grid grid-cols-1 md:grid-cols-[240px_2fr] bg-white border
              border-stone-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="relative min-h-55 md:min-h-75">
                <Image
                  src="/images/group-happy.jpeg"
                  alt="Participants moving joyfully together in a Biodanza session at Sardis Chapel, Pontypridd"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 240px"
                />
                <div className="absolute bottom-5 left-5">
                  <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-[0.75rem] text-[#1e2a3a] bg-white/90 backdrop-blur-sm rounded-full">
                    <MapPin
                      size={11}
                      className="text-[#c4705a]"
                      aria-hidden="true"
                    />
                    Sardis Chapel, Pontypridd
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between p-8 gap-5">
                <div>
                  <span className="inline-flex items-center bg-rose-100 rounded-full text-[0.75rem] text-[#c4705a] px-4 py-1.5 mb-3">
                    Fortnightly · Sundays
                  </span>
                  <h2 id="class-card-heading" className="text-[1.75rem] mb-3">
                    Biodanza Workshop
                  </h2>
                  <p className="text-[0.875rem] text-stone-500 leading-[1.75] max-w-[40ch] mb-4">
                    A gentle, welcoming group class open to all abilities. We
                    meet fortnightly on Sunday afternoons at Sardis Chapel in
                    Pontypridd — a friendly and inclusive space.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {classMeta.map((item) => (
                      <span
                        key={item.label}
                        className="inline-flex items-center bg-stone-100 text-stone-600 text-[0.75rem] rounded-full gap-1.5 px-4 py-1.5"
                      >
                        {item.icon}
                        {item.label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/classes/class"
                    className="inline-flex items-center gap-1.5 px-7 py-3 text-[0.8125rem] bg-[#1e2a3a] hover:bg-[#2d3f55] transition-colors rounded-full text-white tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e2a3a] focus-visible:ring-offset-2"
                  >
                    View class details
                    <MoveRight size={15} aria-hidden="true" />
                  </Link>
                  <a
                    href="mailto:biodanzawithcaroline@gmail.com?subject=Class booking enquiry"
                    aria-label="Email Caroline to book a Biodanza class"
                    className="inline-flex items-center gap-1.5 px-7 py-3 text-[0.8125rem] tracking-wide border border-[#1e2a3a] hover:bg-[#1e2a3a] hover:text-white transition-colors rounded-full text-[#1e2a3a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e2a3a] focus-visible:ring-offset-2"
                  >
                    Email to book
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-5 sm:px-8 pt-16 pb-5 bg-[#f8edeb]">
        <div className="max-w-275 mx-auto">
          <SectionEyebrow text={`${term.name} · Session dates`} />
          <FadeIn>
            <div
              className="grid grid-cols-2 md:grid-cols-5 gap-px rounded-3xl overflow-hidden bg-[#1e2a3a]"
              role="list"
              aria-label={`${term.name} session dates`}
            >
              {allDates.map((dateStr, i) => {
                const isPast = nextDate ? dateStr < nextDate : true;
                const isNext = dateStr === nextDate;

                return (
                  <div
                    key={dateStr}
                    role="listitem"
                    className={`p-5 text-center text-white relative ${
                      i < allDates.length - 1
                        ? "border-r border-white/[0.07]"
                        : ""
                    } ${isPast ? "opacity-35" : ""}`}
                  >
                    {isNext && (
                      <span
                        className="absolute top-2 left-1/2 -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.15em] text-rose-400 whitespace-nowrap"
                        aria-label="Next session"
                      >
                        Next
                      </span>
                    )}
                    <span className="text-[0.7rem] uppercase tracking-[0.15em] text-white/45 mb-1.5 block mt-3">
                      Sun
                    </span>
                    <div
                      className={`text-[1.3rem] font-light ${
                        isNext ? "text-rose-300" : "text-white"
                      }`}
                    >
                      {formatShortDate(dateStr)}
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
          {nextDate ? (
            <p className="text-[0.8125rem] text-stone-400 mt-3">
              Next session:{" "}
              <span className="text-stone-500">{formatDateLong(nextDate)}</span>
            </p>
          ) : (
            <p className="text-[0.8125rem] text-stone-600 mt-3">
              All sessions for this term have passed. Check back soon for new
              dates.
            </p>
          )}
        </div>
      </section>

      <section className="px-5 sm:px-8 py-16 bg-[#f8edeb]">
        <div className="max-w-275 mx-auto">
          <SectionEyebrow text="Pricing" />
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-[700px] mx-auto">
              {priceTiers.map((tier) => (
                <div
                  key={tier.label}
                  className={`rounded-2xl p-6 text-center border ${
                    tier.featured
                      ? "bg-[#eedad1] border-[#d4b09a]"
                      : "bg-white border-stone-200"
                  }`}
                >
                  <div
                    className={`text-[0.75rem] uppercase tracking-[0.13em] mb-2 ${
                      tier.featured ? "text-[#c4705a]" : "text-stone-500"
                    }`}
                  >
                    {tier.label}
                  </div>
                  <div
                    className="text-[2.4rem] leading-none text-[#1e2a3a] font-light"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {tier.value}
                  </div>
                  <div
                    className={`text-[0.75rem] mt-1 ${
                      tier.featured ? "text-[#c4705a]" : "text-stone-500"
                    }`}
                  >
                    {tier.sub}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-6 max-w-175 mx-auto">
              <a
                href="mailto:biodanzawithcaroline@gmail.com?subject=Booking enquiry"
                className="inline-flex items-center gap-2 bg-[#1e2a3a] text-white rounded-full px-6 py-2.5 text-[0.8125rem] font-medium hover:bg-[#2d3f55] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e2a3a] focus-visible:ring-offset-2"
              >
                Book your place →
              </a>
              <span className="text-[0.8125rem] text-stone-600">
                No booking system needed — just email Caroline
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-5 sm:px-8">
        <div className="max-w-[1100px] mx-auto">
          <SectionEyebrow text="Common questions" />
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="py-24 px-5 sm:px-8">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <div className="bg-[#1e2a3a] rounded-3xl px-8 py-16 text-center relative overflow-hidden">
              <div
                className="absolute top-4 right-8 text-[4rem] text-[#c4705a]/10 pointer-events-none select-none"
                aria-hidden="true"
              >
                ✦
              </div>
              <div
                className="absolute bottom-3 left-6 text-[2.5rem] text-[#c4705a]/8 pointer-events-none select-none"
                aria-hidden="true"
              >
                ✦
              </div>

              <h2
                className="text-[clamp(1.6rem,4vw,2.6rem)] text-white leading-[1.15] mb-3 relative z-10"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                }}
              >
                Ready to come along?
              </h2>
              <p className="text-[0.9rem] text-white/55 max-w-[38ch] mx-auto mb-7 leading-[1.7] relative z-10">
                Your first class is just £5. There is nothing to prepare — just
                turn up and be yourself.
              </p>
              <div className="flex gap-3 justify-center flex-wrap relative z-10">
                <a
                  href="mailto:biodanzawithcaroline@gmail.com?subject=Booking enquiry"
                  className="inline-flex items-center gap-2 bg-[#c4705a] text-white rounded-full px-7 py-3.5 text-[0.8125rem] font-medium tracking-[0.1em] hover:bg-[#b5614d] transition-colors hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e2a3a]"
                >
                  Email to book →
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-[1.5px] border-white/30 text-white rounded-full px-7 py-3.5 text-[0.8125rem] font-medium tracking-[0.1em] hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e2a3a]"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
