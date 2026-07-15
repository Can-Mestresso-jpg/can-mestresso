import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Experience from "../components/Experience";
import BookingBar from "../components/BookingBar";
import Location from "../components/Location";
import Contact from "../components/Contact";
import BookingOptions from "@/components/BookingOptions";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BookingBar />
      <About />
      <Gallery />
      <Experience />
      <Location />
      <BookingOptions/>
      <Contact />
    </>
  );
}