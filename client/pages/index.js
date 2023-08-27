import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero.jsx";
import EventDetails from "@/components/EventDetails";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Hero/>
    <EventDetails/>
    </>
  );
}
