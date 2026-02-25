// check current date against term dates to find next session
// given this array of date strings, which date is the next to occur using today's date?
/* so what do I need? 
I need today's date: 
*/
import { getNextDate, formatDateLong } from "@/lib/dates";

import { Button } from "./Button";
import { Stack } from "./Stack";
import Link from "next/link";
import Image from "next/image";
type Term = {
  name: string;
  dates: string[];
};

type ClassInfo = {
  slug: string;
  title: string;
  location: string;
  time: string;
  price?: string;
  terms: Term[];
};

type Props = {
  classInfo: ClassInfo;
};

export const HomePreview = ({ classInfo }: Props) => {
  const currentTerm = classInfo.terms[0];
  const currentTermDates = currentTerm.dates;
  console.log("current term:", currentTerm);
  console.log("Current term dates array:", currentTermDates);
  const nextSessionString = getNextDate(currentTermDates);
  console.log("Next session string:", nextSessionString);
  return (
    <>
      <section
        id="hero"
        className="relative w-full flex justify-center items-center
        min-h-[65vh] md:min-h-[75vh] lg:min-h-[85vh]"
      >
        <Image
          src="/images/pexels-fotios-photos-109260.jpg"
          alt="Biodanza group session"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* soft overlay */}
        <div
          className="absolute inset-0 
          bg-[#ffbc42]/80"
        />
        <div
          className="relative z-10 flex h-full flex-col 
      items-center justify-center text-white text-center 
      px-6"
        >
          <div
            className="rounded-lg p-6 space-y-4 flex 
          flex-col items-center text-black"
          >
            <Stack size="md">
              <p
                className="text-[var(--font-body)] text-[30px] md:text-[40px] text-black
              font-semibold"
              >
                Join a {classInfo.title}
              </p>
              <div>
                {classInfo.price ? (
                  <p className="text-[26px]">90 min | {classInfo.price}</p>
                ) : null}
              </div>

              <div className="flex pt-2 mx-auto text-center justify-center">
                <Link href="/events" className="underline">
                  <Button className="bg-[#000] text-white">Book Now</Button>
                </Link>
              </div>
            </Stack>
          </div>
        </div>
      </section>
    </>
  );
};
