export default function BookingOptions() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <p className="text-sm uppercase tracking-[0.35em] text-gray-500">
          Reservations
        </p>

        <h2 className="mt-4 text-4xl font-light sm:text-5xl">
          Book Your Stay
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Book directly with Can Mestresso and enjoy an
          <span className="font-semibold text-black">
            {" "}exclusive discount
          </span>, personalised service and the best available rates.
          Prefer another platform? You can also book through Booking.com or Airbnb.
        </p>

        {/* Direct Booking Badge */}

        <div className="mt-8 inline-flex items-center rounded-full bg-green-100 px-5 py-2 text-sm font-medium text-green-700">
          ✓ Save on your stay with our exclusive direct booking discount
        </div>

        {/* Buttons */}

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">

          {/* Direct */}

          <a
            href="https://wa.me/34630445982"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-10 py-4 font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-gray-800"
          >
            Book Direct & Save
          </a>

          {/* Booking */}

          <a
            href="https://www.booking.com/hotel/es/casa-can-mestresso.es.html?aid=357028&label=bin859jc-10CAsoRkISY2FzYS1jYW4tbWVzdHJlc3NvSDNYA2g7iAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuAKHx9_SBsACAdICJGM3N2FhNTljLWM3NzYtNDVkYi05ZDM1LTIxNjY3NGVhNDAwZdgCAeACAQ&sid=95391b519e229974d05419a652b2319e&dist=0&keep_landing=1&sb_price_type=total&type=total&"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-300 px-10 py-4 font-medium transition duration-300 hover:border-black hover:bg-black hover:text-white"
          >
            Booking.com
          </a>

          {/* Airbnb */}

          <a
            href="https://es.airbnb.com/rooms/6460500?source_impression_id=p3_1784146112_P3-tKFI-C5zI5Bjf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-300 px-10 py-4 font-medium transition duration-300 hover:border-black hover:bg-black hover:text-white"
          >
            Airbnb
          </a>

        </div>

        <p className="mt-8 text-sm text-gray-500">
          Secure booking • Instant confirmation • Personal assistance before and during your stay
        </p>

      </div>
    </section>
  );
}