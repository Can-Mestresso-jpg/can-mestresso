 "use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/70" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="relative z-10 flex w-full max-w-6xl flex-col items-center px-6 pt-28 text-center text-white sm:px-10 lg:px-12"
      >
        {/* Eyebrow */}
        <p className="mb-6 text-xs uppercase tracking-[0.45em] text-gray-200 sm:text-sm">
          Ibiza · Mediterranean Luxury Retreat
        </p>

        {/* Title */}
        <h1 className="max-w-5xl text-5xl font-light leading-none tracking-wide sm:text-6xl lg:text-8xl">
          Can Mestresso
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-3xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8 lg:text-xl">
          Discover an authentic Ibizan villa where privacy, Mediterranean
          elegance and unforgettable sunsets come together to create a truly
          exceptional holiday experience.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex w-full max-w-md flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">

          <a
            href="#booking"
            className="w-full rounded-full bg-white px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.15em] text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-100 sm:w-auto"
          >
            Book Your Stay
          </a>

          <a
            href="#gallery"
            className="w-full rounded-full border border-white px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-white hover:text-black sm:w-auto"
          >
            Explore the Villa
          </a>

        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#booking"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-white"
      >
        <div className="flex flex-col items-center">

          <span className="mb-2 text-[11px] uppercase tracking-[0.35em]">
            Scroll
          </span>

          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            viewBox="0 0 24 24"
          >
            <path d="M12 5v14" />
            <path d="M19 12l-7 7-7-7" />
          </svg>

        </div>
      </motion.a>
    </section>
  );
}