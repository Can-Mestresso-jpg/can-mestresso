 "use client";

import { useMemo, useState } from "react";
import {
  differenceInCalendarDays,
  format,
} from "date-fns";
import { DateRange } from "react-day-picker";

import DateRangePicker from "./DateRangePicker";

export default function BookingBar() {
  const [range, setRange] = useState<DateRange>();

  const nights = useMemo(() => {
    if (!range?.from || !range?.to) return 0;

    return differenceInCalendarDays(range.to, range.from);
  }, [range]);

  const canSearch = !!range?.from && !!range?.to;

  function handleAvailability() {
    if (!canSearch || !range?.from || !range?.to) return;

    const checkIn = format(range.from, "dd MMMM yyyy");
    const checkOut = format(range.to, "dd MMMM yyyy");

    const message = `Hello,

I would like to check the availability for Can Mestresso.

Check-in: ${checkIn}
Check-out: ${checkOut}
Length of stay: ${nights} night${nights > 1 ? "s" : ""}

Thank you.`;

    const whatsappUrl =
      `https://wa.me/34630445982?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  }

  return (
    <section
      id="booking"
      className="relative z-30 -mt-16 px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl bg-white p-6 shadow-2xl lg:flex-row lg:items-center lg:justify-between">

        <DateRangePicker
          range={range}
          setRange={setRange}
        />

        <button
          disabled={!canSearch}
          onClick={handleAvailability}
          className={`rounded-full px-8 py-4 font-medium transition ${
            canSearch
              ? "bg-black text-white hover:bg-gray-800"
              : "cursor-not-allowed bg-gray-300 text-gray-500"
          }`}
        >
          {canSearch
            ? `Check Availability • ${nights} night${nights > 1 ? "s" : ""}`
            : "Select your dates"}
        </button>

      </div>
    </section>
  );
}