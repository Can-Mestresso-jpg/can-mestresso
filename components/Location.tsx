 import { MapPin, Plane, Waves, UtensilsCrossed } from "lucide-react";

export default function Location() {
  return (
    <section
      id="location"
      className="bg-white py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}

        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-gray-500">
            Location
          </p>

          <h2 className="mt-4 text-4xl font-light sm:text-5xl lg:text-6xl">
            Perfectly Located to Explore Ibiza
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Can Mestresso offers the perfect balance between peace and
            convenience. Enjoy the tranquillity of the Ibizan countryside while
            remaining within easy reach of the island's most beautiful beaches,
            charming villages and vibrant nightlife.
          </p>
        </div>

        {/* Location Cards */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-gray-200 p-8 text-center transition hover:shadow-lg">
            <Plane className="mx-auto mb-5 h-8 w-8" />

            <h3 className="text-lg font-medium">
              Ibiza Airport
            </h3>

            <p className="mt-2 text-gray-600">
              Approximately 20 min
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 p-8 text-center transition hover:shadow-lg">
            <Waves className="mx-auto mb-5 h-8 w-8" />

            <h3 className="text-lg font-medium">
              Beaches
            </h3>

            <p className="mt-2 text-gray-600">
              10–15 min drive
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 p-8 text-center transition hover:shadow-lg">
            <UtensilsCrossed className="mx-auto mb-5 h-8 w-8" />

            <h3 className="text-lg font-medium">
              Restaurants
            </h3>

            <p className="mt-2 text-gray-600">
              Excellent local dining nearby
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 p-8 text-center transition hover:shadow-lg">
            <MapPin className="mx-auto mb-5 h-8 w-8" />

            <h3 className="text-lg font-medium">
              Peaceful Location
            </h3>

            <p className="mt-2 text-gray-600">
              Surrounded by Mediterranean nature
            </p>
          </div>
        </div>

        {/* Map */}

        <div className="mt-20 overflow-hidden rounded-3xl shadow-2xl">
          <iframe
            title="Can Mestresso Location"
            src="https://www.google.com/maps?q=39.051004,1.484464&z=16&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Located in a peaceful area of Ibiza, Can Mestresso offers the perfect
          base to explore the island while enjoying complete privacy and
          relaxation.
        </p>
      </div>
    </section>
  );
}