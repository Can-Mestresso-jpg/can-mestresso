 import { NextResponse } from "next/server";
import ical, { VEvent } from "node-ical";

export const runtime = "nodejs";
export const revalidate = 3600; // cachea 1 hora

type ValidEvent = VEvent & {
  start: Date;
  end: Date;
};

export async function GET() {
  const url = process.env.BOOKING_ICAL_URL;

  if (!url) {
    return NextResponse.json(
      { error: "BOOKING_ICAL_URL no configurada" },
      { status: 500 }
    );
  }

  try {
    const data = await ical.async.fromURL(url);

    const events = Object.values(data)
      .filter((event): event is ValidEvent => {
        return (
          !!event &&
          event.type === "VEVENT" &&
          !!event.start &&
          !!event.end
        );
      })
      .map((event) => ({
        from: event.start.toISOString(),
        to: event.end.toISOString(),
      }));

    return NextResponse.json(events);
  } catch (error) {
    console.error("Error leyendo iCal de Booking:", error);
    return NextResponse.json(
      { error: "No se pudo leer el calendario" },
      { status: 502 }
    );
  }
}