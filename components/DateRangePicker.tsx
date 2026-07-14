 "use client";

import { CalendarDays } from "lucide-react";
import { DayPicker, DateRange } from "react-day-picker";
import { format } from "date-fns";
import { useState } from "react";

type Props = {
  range: DateRange | undefined;
  setRange: (range: DateRange | undefined) => void;
};

export default function DateRangePicker({
  range,
  setRange,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-8"
      >
        <CalendarDays size={22} />

        <div className="text-left">

          <p className="text-xs uppercase text-gray-500">
            Check in
          </p>

          <p>
            {range?.from
              ? format(range.from, "dd MMM yyyy")
              : "Select date"}
          </p>

        </div>

        <div className="text-left">

          <p className="text-xs uppercase text-gray-500">
            Check out
          </p>

          <p>
            {range?.to
              ? format(range.to, "dd MMM yyyy")
              : "Select date"}
          </p>

        </div>

      </button>

      {open && (

        <div className="absolute top-20 left-0 z-50 rounded-3xl bg-white p-6 shadow-2xl">

          <DayPicker
            mode="range"
            numberOfMonths={2}
            selected={range}
            onSelect={(value) => {
              setRange(value);

              if (value?.from && value?.to) {
                setOpen(false);
              }
            }}
          />

        </div>

      )}

    </div>
  );
}