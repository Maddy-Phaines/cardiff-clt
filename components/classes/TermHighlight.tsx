// check current date against term dates to find next session
// given this array of date strings, which date is the next to occur using today's date?
/* so what do I need? 
I need today's date: 
*/
import { getNextDate, formatDateLong } from "@/lib/dates";

import { Button } from "../layout/Button";

import Link from "next/link";

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

export const TermHighlight = ({ classInfo }: Props) => {
  const currentTerm = classInfo.terms[0];
  const currentTermDates = currentTerm.dates;
  console.log("current term:", currentTerm);
  console.log("Current term dates array:", currentTermDates);
  const nextSessionString = getNextDate(currentTermDates);
  console.log("Next session string:", nextSessionString);
  return (
    <>
      <div className="rounded-lg p-6 space-y-4">
        <div className="space-y-1">
          <p>{currentTerm.name}</p>
        </div>

        <div className="space-y-1">
          <h4 className="text-lg font-semibold">{classInfo.title}</h4>
          <p>{classInfo.time}</p>
          <p>{classInfo.location}</p>

          {classInfo.price ? (
            <p className="text-sm text-gray-700">{classInfo.price}</p>
          ) : null}
        </div>

        <div className="pt-2">
          {nextSessionString ? (
            <div>
              <p className="text-gray-600">
                <span className="font-semibold">Next session: </span>
                {formatDateLong(nextSessionString)}
              </p>
            </div>
          ) : (
            <p className="text-gray-800">
              <span className="font-semibold">Next term: </span>
              coming soon
            </p>
          )}
        </div>
        <div className="flex gap-4 pt-2">
          <Link href={`/classes/${classInfo.slug}`} className="underline">
            <Button>View Dates</Button>
          </Link>

          <Link href="/events" className="underline">
            <Button>Book</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
