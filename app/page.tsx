import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Experience from "../components/Experience";
import BookingBar from "../components/BookingBar";
import Location from "../components/Location";
import Contact from "../components/Contact";
import BookingOptions from "@/components/BookingOptions";
import QuickFacts from "@/components/QuickFacts";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BookingBar />
      <QuickFacts />

      <Gallery />
      <Experience />
      <Location />
      <BookingOptions/>
      <Contact />
    </>
  );
}