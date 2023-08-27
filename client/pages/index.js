import Image from "next/image";
import { Inter, Italiana } from "next/font/google";
import Hero from "@/components/Hero.jsx";
import EventDetails from "@/components/EventDetails";
import Reservation from "@/components/Reservation";
const inter = Inter({ subsets: ["latin"] });
const italiana = Italiana({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${italiana.className} py-4`}>
      <Hero />
      <EventDetails />
      <Reservation/>
    </div>
  );
}
