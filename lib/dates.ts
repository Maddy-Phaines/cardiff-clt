/*
Pick the next upcoming class date from an array of `YYYY-MM-DD` strings.
Dates are compared as calendar days in UK time.
*/

const ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

const getTodayUkIso = (): string => {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  console.log("Parts:", parts);
  Parts: [
    { type: "year", value: "2026" },
    { type: "literal", value: "-" },
    { type: "month", value: "02" },
    { type: "literal", value: "-" },
    { type: "day", value: "12" },
  ];
  const year = parts.find((p) => p.type === "year")?.value;
  const month = parts.find((p) => p.type === "month")?.value;
  const day = parts.find((p) => p.type === "day")?.value;

  if (!year || !month || !day) {
    throw new Error("Failed to resolve UK calendar date");
  }

  return `${year}-${month}-${day}`;
};

export const getNextDate = (dates: string[]): string | null => {
  const todayUk = getTodayUkIso();
  const futureDates = dates
    .map((d) => d.trim())
    .filter((d) => ISO_DATE_REGEX.test(d))
    .filter((d) => d >= todayUk)
    .sort();

  return futureDates[0] ?? null;
};

// This turns "2026-02-15" into something like: Sun 15 Feb 2026
export const formatDateLong = (dateStr: string) => {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day, 12));

  return date.toLocaleDateString("en-GB", {
    timeZone: "Europe/London",
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
