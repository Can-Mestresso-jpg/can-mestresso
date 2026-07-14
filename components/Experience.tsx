import Image from "next/image";
import FadeIn from "./ui/FadeIn";

export default function Experience() {
  return (
    <section  id="experience" className="bg-neutral-50 py-28">
      <FadeIn delay={0.3}> 
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">

        <div>
          <Image
            src="/piscina.png"
            alt="Villa"
            width={900}
            height={900}
            className="rounded-3xl object-cover"
          />
        </div>

        <div>

          <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
            Experience
          </p>

          <h2 className="mt-4 text-5xl font-light">
            More than a place to stay
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Enjoy complete privacy, Mediterranean sunsets,
            local gastronomy and the authentic Ibiza lifestyle
            from a unique location.
          </p>

        </div>

      </div>
      </FadeIn>
    </section>
  );
}