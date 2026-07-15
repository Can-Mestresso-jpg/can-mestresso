import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-neutral-50 py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-sm text-gray-500">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-light sm:text-5xl lg:text-6xl">
            Book Your Stay
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            We'd love to welcome you to Can Mestresso.
            Contact us directly to check availability, request a personalised
            quote or ask any questions about your stay.
          </p>

        </div>

        {/* Contact Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {/* Email */}

          <a
            href="mailto:casaisladeibiza@gmail.com"
            className="rounded-3xl border border-gray-200 bg-white p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Mail className="mx-auto mb-5 h-8 w-8" />

            <h3 className="text-xl font-medium">
              Email
            </h3>

            <p className="mt-3 text-gray-600 break-all">
              casaisladeibiza@gmail.com
            </p>
          </a>

          {/* Phone */}

          <a
            href="tel:+34600111222"
            className="rounded-3xl border border-gray-200 bg-white p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Phone className="mx-auto mb-5 h-8 w-8" />

            <h3 className="text-xl font-medium">
              Phone
            </h3>

            <p className="mt-3 text-gray-600">
              +34 630 44 59 82
            </p>
          </a>

          {/* WhatsApp */}

          <a
            href="https://wa.me/34630445982"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-gray-200 bg-white p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <MessageCircle className="mx-auto mb-5 h-8 w-8" />

            <h3 className="text-xl font-medium">
              WhatsApp
            </h3>

            <p className="mt-3 text-gray-600">
              Chat with us
            </p>
          </a>

        </div>

        {/* CTA */}

        <div className="mt-16 text-center">

          <a
            href="mailto:info@canmestresso.com"
            className="inline-block rounded-full bg-black px-10 py-4 font-medium text-white transition duration-300 hover:bg-gray-800"
          >
            Request Availability
          </a>

        </div>

      </div>
    </section>
  );
}