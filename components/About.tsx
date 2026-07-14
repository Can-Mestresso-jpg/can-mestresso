import { villa } from "../data/property";
import FadeIn from "./ui/FadeIn";


export default function About() {
  return (
    <section className="bg-white py-24">
         <FadeIn>
      <div className="mx-auto max-w-6xl px-8">

        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Welcome
        </p>

        <h2 className="mt-4 text-5xl font-light text-gray-900">
          {villa.name}
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
          {villa.tagline}
        </p>

      </div>
      </FadeIn>
    </section>
  );
}