import { Italiana } from "next/font/google";
import Hero from "@/components/Hero.jsx";
import EventDetails from "@/components/EventDetails";
import NavBar from "@/components/NavBar";
import Gifting from "@/components/Gifting";
const italiana = Italiana({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${italiana.className} py-4`}>
      <NavBar />
      <Hero />
      <EventDetails />
      <Gifting />
    </div>
  );
}
