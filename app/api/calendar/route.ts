 import { NextResponse } from "next/server";
import ical from "node-ical";

export async function GET() {
  try {
    const calendars = [
      process.env.BOOKING_ICS,
      process.env.AIRBNB_ICS,
    ].filter(Boolean);

    const occupied: { from: string; to: string }[] = [];

    for (const url of calendars) {
      const events = await ical.async.fromURL(url!);

      for (const event of Object.values(events)) {
        if (!event) continue;

        if (event.type !== "VEVENT") continue;

        if (!event.start || !event.end) continue;

        occupied.push({
          from: event.start.toISOString(),
          to: event.end.toISOString(),
        });
      }
    }

    return NextResponse.json(occupied);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to load calendar" },
      { status: 500 }
    );
  }
}