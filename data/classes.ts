import { v4 as uuidv4 } from "uuid";

const classId = uuidv4();

export const classes = [
  {
    slug: "/sunhouse",
    title: "Biodanza Workshop",

    location: "Sardis Chapel, Pontypridd",
    description: "Fortnightly group session",
    time: "Sundays 2.30pm - 4.30pm",
    price: "£10",
    id: classId,

    terms: [
      {
        name: "Spring 2026",
        dates: [
          "2026-01-18",
          "2026-02-01",
          "2026-02-15",
          "2026-03-01",
          "2026-03-15",
        ],
      },
    ],
  },
];
