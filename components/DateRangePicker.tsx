 "use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CalendarDays } from "lucide-react";
import { DayPicker, DateRange } from "react-day-picker";
import {
  addDays,
  format,
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
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadCalendar() {
      try {
        const res = await fetch("/api/calendar");

        if (!res.ok) {
          console.error("Calendar API returned", res.status);
          return;
        }

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
      } finally {
        setLoading(false);
      }
    }

    loadCalendar();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const disabledDays = useMemo(() => {
    return [
      {
        before: startOfDay(new Date()),
      },
      ...bookedDates,
    ];
  }, [bookedDates]);

  function rangeContainsBookedDay(from: Date, to: Date) {
    let current = startOfDay(from);
    const end = startOfDay(to);

    while (current <= end) {
      const booked = bookedDates.some(
        (date) => startOfDay(date).getTime() === current.getTime()
      );

      if (booked) {
        return true;
      }

      current = addDays(current, 1);
    }

    return false;
  }

  return (
    <div className="relative" ref={containerRef}>
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
          {loading ? (
            <p className="p-6 text-sm text-gray-400">
              Loading availability...
            </p>
          ) : (
            <DayPicker
              mode="range"
              numberOfMonths={2}
              selected={range}
              disabled={disabledDays}
              onSelect={(value) => {
                if (!value) {
                  setRange(undefined);
                  return;
                }

                // Solo check-in seleccionado
                if (!value.from || !value.to) {
                  setRange(value);
                  return;
                }

                // Hay algún día reservado entre medias
                if (rangeContainsBookedDay(value.from, value.to)) {
                  alert(
                    "The selected stay includes unavailable dates. Please choose another range."
                  );
                  setRange(undefined);
                  return;
                }

                setRange(value);
                setOpen(false);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}