import Image from "next/image";
import { Inter, Italiana } from "next/font/google";
import Hero from "@/components/Hero.jsx";
import EventDetails from "@/components/EventDetails";
const inter = Inter({ subsets: ["latin"] });
const italiana = Italiana({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${italiana.className}`}>
      <Hero />
      <EventDetails />
    </div>
  );
}
