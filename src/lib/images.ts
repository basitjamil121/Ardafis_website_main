// Photography: CC0 Unsplash photos mirrored on Wikimedia Commons — see IMAGE_SOURCES.md.
// Static imports give us intrinsic sizes, blur placeholders, and immutable caching.
import nycNight from "../../public/images/nyc-night.jpg";
import womanLaptop from "../../public/images/woman-laptop.jpg";
import statsLaptop from "../../public/images/stats-laptop.jpg";
import warmBuilding from "../../public/images/warm-building.jpg";
import handsKb from "../../public/images/hands-kb.jpg";
import openOffice from "../../public/images/open-office.jpg";
import ipadMeeting from "../../public/images/ipad-meeting.jpg";
import strategy from "../../public/images/strategy.jpg";
import desksOffice from "../../public/images/desks-office.jpg";
import darkDesk from "../../public/images/dark-desk.jpg";
import minMeeting from "../../public/images/min-meeting.jpg";
import calcLaptop from "../../public/images/calc-laptop.jpg";
import notepad from "../../public/images/notepad.jpg";
import dubai from "../../public/images/dubai.jpg";
import newspaper from "../../public/images/newspaper.jpg";
import meetingRoom from "../../public/images/meeting-room.jpg";

export const photos = {
  nycNight: { src: nycNight, alt: "New York skyline at dusk with light trails along the waterfront" },
  womanLaptop: { src: womanLaptop, alt: "Accountant working on a laptop in a dimly lit office" },
  statsLaptop: { src: statsLaptop, alt: "Financial dashboard with charts open on a laptop" },
  warmBuilding: { src: warmBuilding, alt: "Office building windows lit warmly at night" },
  handsKb: { src: handsKb, alt: "Hands typing on a laptop on a wooden desk" },
  openOffice: { src: openOffice, alt: "Bright open-plan office with a person working at a desk" },
  ipadMeeting: { src: ipadMeeting, alt: "Two people taking notes during a meeting at a wooden table" },
  strategy: { src: strategy, alt: "Two professionals discussing strategy over a laptop" },
  desksOffice: { src: desksOffice, alt: "Quiet open office with desks and a person working on a laptop" },
  darkDesk: { src: darkDesk, alt: "Minimal desk with a computer in a dark, quiet office" },
  minMeeting: { src: minMeeting, alt: "Minimalist meeting room with a long white table" },
  calcLaptop: { src: calcLaptop, alt: "Desk with a laptop, calculator, and notebook" },
  notepad: { src: notepad, alt: "Tidy workspace with a laptop and an open notepad" },
  dubai: { src: dubai, alt: "Dubai skyline reflected in the water at night" },
  newspaper: { src: newspaper, alt: "Person reading the business section of a newspaper" },
  meetingRoom: { src: meetingRoom, alt: "Large bright meeting room with a long table" },
} as const;
