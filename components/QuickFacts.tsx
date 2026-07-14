import { villa } from "../data/property";
import { Users, BedDouble, Bath, Waves } from "lucide-react";

export default function QuickFacts() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-8 md:grid-cols-4">

        <div className="text-center">
          <Users className="mx-auto h-10 w-10" />
          <p className="mt-4 text-3xl font-light">{villa.guests}</p>
          <p className="text-gray-500">Guests</p>
        </div>

        <div className="text-center">
          <BedDouble className="mx-auto h-10 w-10" />
          <p className="mt-4 text-3xl font-light">{villa.bedrooms}</p>
          <p className="text-gray-500">Bedrooms</p>
        </div>

        <div className="text-center">
          <Bath className="mx-auto h-10 w-10" />
          <p className="mt-4 text-3xl font-light">{villa.bathrooms}</p>
          <p className="text-gray-500">Bathrooms</p>
        </div>

        <div className="text-center">
          <Waves className="mx-auto h-10 w-10" />
          <p className="mt-4 text-xl font-light">Private</p>
          <p className="text-gray-500">Pool</p>
        </div>

      </div>
    </section>
  );
}