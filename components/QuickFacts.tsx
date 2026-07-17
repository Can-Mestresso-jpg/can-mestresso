 import {
  BedDouble,
  Bath,
  Waves,
  Flame,
  Wifi,
  Car,
} from "lucide-react";

const facts = [
  {
    icon: BedDouble,
    title: "3 Bedrooms",
  },
  {
    icon: Bath,
    title: "1 Bathroom",
  },
  {
    icon: Waves,
    title: "Private Pool",
  },
  {
    icon: Flame,
    title: "BBQ Area",
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
  },
  {
    icon: Car,
    title: "Private Parking",
  },
];

export default function QuickFacts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">
            Villa Highlights
          </h2>

          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            Everything you need for a comfortable and relaxing stay in Ibiza.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {facts.map((fact) => {
            const Icon = fact.icon;

            return (
              <div
                key={fact.title}
                className="rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-sm hover:shadow-md transition"
              >
                <Icon
                  className="mx-auto mb-4 text-neutral-800"
                  size={34}
                  strokeWidth={1.8}
                />

                <h3 className="font-medium text-neutral-900">
                  {fact.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}