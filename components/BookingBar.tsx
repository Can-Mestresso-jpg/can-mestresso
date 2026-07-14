 "use client";

import { useMemo, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
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
    if (!canSearch) return;

    alert(
      `Searching availability\n\n${range.from?.toDateString()} → ${range.to?.toDateString()}\n${nights} nights`
    );

    // Más adelante:
    // router.push(...)
    // abrir formulario
    // consultar API
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