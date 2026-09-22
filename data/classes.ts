import { v4 as uuidv4 } from "uuid";

const classId = uuidv4();

export const classes = [
  {
    slug: "/class",
    title: "Biodanza Workshop",

    location: "Sardis Chapel, Pontypridd",
    description: "Monthly group session",
    time: "Sundays 2.30pm - 4.30pm",
    price: "£10",
    id: classId,

    rates: [
      { label: "Supporter", price: "£12" },
      { label: "Standard", price: "£10" },
      { label: "Access", price: "£8" },
      { label: "Early Bird Entry", price: "£8" },
    ],

    terms: [
      {
        name: "Autumn 2026",
        dates: ["2026-10-11", "2026-11-15", "2026-12-13"],
        dandelionUrls: {
          "2026-10-11": "https://dandelion.events/e/e06k7",
          "2026-11-15": "https://dandelion.events/e/d6ymg",
          "2026-12-13": "https://dandelion.events/e/r0yz4",
        },
      },
    ],
  },
];
