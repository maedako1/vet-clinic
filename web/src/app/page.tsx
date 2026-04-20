import Image from "next/image";
import { AppointmentForm } from "@/components/AppointmentForm";
import { Navbar } from "@/components/Navbar";
import { StickyCallBar } from "@/components/StickyCallBar";
import { TopBar } from "@/components/TopBar";

const CLINIC_IMAGE_1 = "/images/clinic/anya-prygunova-u2H8mUzoF2Q-unsplash.jpg";
const CLINIC_IMAGE_2 =
  "/images/clinic/arseny-togulev-DE6rYp1nAho-unsplash.jpg";

const REVIEW_IMAGE_1 =
  "/images/reviews/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
const REVIEW_IMAGE_2 =
  "/images/reviews/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[color:var(--brand-50)] pb-20">
      <TopBar />
      <Navbar />

      <main className="flex-1">
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-[color:var(--brand-50)]" />
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[color:var(--brand-100)] blur-3xl opacity-60" />
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-2 md:items-center md:py-14">
            <div>
              <p className="inline-flex items-center rounded-full border border-[color:var(--brand-100)] bg-white px-3 py-1 text-xs font-semibold text-[color:var(--brand-700)]">
                Family vet clinic • Bucharest
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[color:var(--brand-900)] md:text-5xl">
                Modern, gentle, and safe care for your pet.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-black/65">
                Checkups, vaccines, lab tests, and minor procedures — with a
                strong focus on prevention and clear communication. Book quickly
                by phone or online.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-black/45">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[color:var(--brand-900)]">
                    Maria Rosetti 26A
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-black/45">
                    Phone
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[color:var(--brand-900)]">
                    0720.123.123
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                  <Image
                    src={CLINIC_IMAGE_1}
                    alt="Veterinary clinic – modern practice"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                  <Image
                    src={CLINIC_IMAGE_2}
                    alt="Medical team – professional care"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="md:justify-self-end">
              <AppointmentForm />
              <p className="mt-3 text-xs text-black/55">
                By submitting, you agree that we can contact you to confirm your
                appointment.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--brand-900)] md:text-3xl">
              Main services
            </h2>
            <p className="mt-2 text-sm leading-6 text-black/65">
              A complete set of services for dogs and cats, with clear
              recommendations and a care plan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                title: "Checkups & prevention",
                desc: "General assessment, vaccine planning, parasite prevention and nutrition.",
              },
              {
                title: "Lab tests & diagnostics",
                desc: "Sampling, result interpretation, and treatment recommendations.",
              },
              {
                title: "Treatment & procedures",
                desc: "Injections, bandaging, minor procedures and follow-up.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
              >
                <p className="text-base font-semibold text-[color:var(--brand-900)]">
                  {s.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-black/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="prices" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="mb-8 max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--brand-900)] md:text-3xl">
                Indicative prices
              </h2>
              <p className="mt-2 text-sm leading-6 text-black/65">
                Prices may vary depending on the case and supplies. We confirm
                the cost before any procedure.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  name: "General consultation",
                  price: "150 RON",
                  note: "Assessment + treatment recommendations.",
                },
                {
                  name: "Vaccination (includes booklet)",
                  price: "180 RON",
                  note: "Schedule based on your pet’s age.",
                },
                {
                  name: "Internal/external deworming",
                  price: "80 RON+",
                  note: "Depends on weight and product.",
                },
                {
                  name: "Basic lab panel",
                  price: "220 RON+",
                  note: "CBC + biochemistry (as needed).",
                },
                {
                  name: "Ears / nails care",
                  price: "70 RON",
                  note: "Quick procedure, no sedation.",
                },
                {
                  name: "Urgent care (during hours)",
                  price: "250 RON",
                  note: "Priority triage + quick evaluation.",
                },
              ].map((p) => (
                <div
                  key={p.name}
                  className="rounded-2xl border border-black/10 bg-[color:var(--brand-50)] p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-base font-semibold text-[color:var(--brand-900)]">
                      {p.name}
                    </p>
                    <p className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-semibold text-[color:var(--brand-700)] shadow-sm">
                      {p.price}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-black/65">
                    {p.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--brand-900)] md:text-3xl">
              Testimonials
            </h2>
            <p className="mt-2 text-sm leading-6 text-black/65">
              Feedback from clients who chose long-term care and a trusted vet.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              {
                name: "Andreea M.",
                quote:
                  "Excellent communication and lots of patience with our cat. Everything was explained clearly, including options and costs.",
                image: REVIEW_IMAGE_1,
              },
              {
                name: "Radu I.",
                quote:
                  "Quick booking, clean practice, and professional care. Highly recommended for checkups and vaccinations.",
                image: REVIEW_IMAGE_2,
              },
            ].map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-black/10 bg-[color:var(--brand-50)]">
                    <Image
                      src={t.image}
                      alt={`Portrait of ${t.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[color:var(--brand-900)]">
                      {t.name}
                    </p>
                    <p className="text-xs text-black/50">Client</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-black/70">
                  “{t.quote}”
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-14 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--brand-900)] md:text-3xl">
                Contact & location
              </h2>
              <p className="mt-2 text-sm leading-6 text-black/65">
                Strada Maria Rosetti 26A, București 020487. We recommend booking
                in advance.
              </p>

              <div className="mt-6 rounded-2xl border border-black/10 bg-[color:var(--brand-50)] p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-black/50">
                  Phone
                </p>
                <p className="mt-1 text-lg font-semibold text-[color:var(--brand-900)]">
                  0720.123.123
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-black/50">
                  Address
                </p>
                <p className="mt-1 text-sm font-medium text-black/70">
                  Strada Maria Rosetti 26A, București 020487
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              <iframe
                title="Map - Strada Maria Rosetti 26A"
                src="https://www.google.com/maps?q=Strada%20Maria%20Rosetti%2026A%2C%20Bucure%C8%99ti%20020487&output=embed"
                className="h-[380px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[color:var(--brand-50)]">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-black/60">
          <p className="font-semibold text-[color:var(--brand-900)]">
            FamilyVet Clinic
          </p>
          <p className="mt-1">
            Strada Maria Rosetti 26A, București 020487 • 0720.123.123
          </p>
          <p className="mt-4 text-xs text-black/50">
            © {new Date().getFullYear()} FamilyVet Clinic. All rights reserved.
          </p>
        </div>
      </footer>

      <StickyCallBar />
    </div>
  );
}
