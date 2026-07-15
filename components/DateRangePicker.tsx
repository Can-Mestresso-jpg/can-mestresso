"use client";

import { useEffect, useMemo, useState } from "react";
import { CalendarDays } from "lucide-react";
import { DayPicker, DateRange } from "react-day-picker";
import {
  addDays,
  format,
  isBefore,
  startOfDay,
} from "date-fns";

type Props = {
  range: DateRange | undefined;
  setRange: (range: DateRange | undefined) => void;
};

type CalendarEvent = {
  from: string;
  to: string;
};

export default function DateRangePicker({
  range,
  setRange,
}: Props) {
  const [open, setOpen] = useState(false);
  const [bookedDates, setBookedDates] = useState<Date[]>([]);

  useEffect(() => {
    async function loadCalendar() {
      try {
        const res = await fetch("/api/calendar");

        if (!res.ok) return;

        const events: CalendarEvent[] = await res.json();

        const dates: Date[] = [];

        events.forEach((event) => {
          let current = startOfDay(new Date(event.from));
          const end = startOfDay(new Date(event.to));

          while (current <= end) {
            dates.push(new Date(current));
            current = addDays(current, 1);
          }
        });

        setBookedDates(dates);
      } catch (err) {
        console.error("Unable to load calendar", err);
      }
    }

    loadCalendar();
  }, []);

  const disabledDays = useMemo(() => {
    return [
      {
        before: new Date(),
      },
      ...bookedDates,
    ];
  }, [bookedDates]);

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
        <div className="absolute left-0 top-20 z-50 rounded-3xl bg-white p-6 shadow-2xl">

          <DayPicker
            mode="range"
            numberOfMonths={2}
            selected={range}
            disabled={disabledDays}
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