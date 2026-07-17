 "use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import FadeIn from "./ui/FadeIn";
import { gallery } from "../data/gallery";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section
      id="gallery"
      className="bg-white py-16 sm:py-24 lg:py-32"
    >
      <FadeIn delay={0.2}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Heading */}

          <div className="mb-16 text-center">
            <p className="uppercase tracking-[0.35em] text-sm text-gray-500">
              Gallery
            </p>

            <h2 className="mt-4 text-4xl font-light sm:text-5xl lg:text-6xl">
              Explore the Villa
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-gray-600 leading-relaxed">
              From the private pool and Mediterranean gardens to the elegant
              interiors, discover every corner of Can Mestresso.
            </p>
          </div>

          {/* Gallery */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[280px]">
            {gallery.map((image, i) => (
              <motion.div
                key={image.src}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer
                  h-[260px]
                  sm:h-[320px]
                  lg:h-auto
                  ${
                    i === 0
                      ? "lg:col-span-2 lg:row-span-2 lg:min-h-[580px]"
                      : ""
                  }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={i === 0}
                  sizes="(max-width:640px) 100vw,
                         (max-width:1024px) 50vw,
                         25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Text */}

                <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="mb-2 text-xs uppercase tracking-[0.35em] text-white/80">
                    {image.category}
                  </p>

                  <h3 className="text-xl sm:text-2xl font-light text-white">
                    {image.alt}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={gallery}
          plugins={[
            Zoom,
            Fullscreen,
            Counter,
            Thumbnails,
          ]}
          carousel={{
            finite: false,
          }}
          zoom={{
            maxZoomPixelRatio: 3,
            scrollToZoom: true,
          }}
          controller={{
            closeOnBackdropClick: true,
          }}
          thumbnails={{
            position: "bottom",
            border: 0,
            borderRadius: 12,
          }}
          styles={{
            container: {
              backgroundColor: "#000",
            },
          }}
        />
      </FadeIn>
    </section>
  );
}