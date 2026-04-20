import Link from "next/link";

const NAV_ITEMS: Array<{ label: string; href: string }> = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Prices", href: "#prices" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="#home" className="group inline-flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight text-[color:var(--brand-900)]">
            FamilyVet
          </span>
          <span className="text-sm font-medium text-black/55 group-hover:text-black/70">
            Clinic
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-black/70 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[color:var(--brand-700)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="inline-flex h-10 items-center justify-center rounded-full bg-[color:var(--brand-600)] px-4 text-sm font-semibold text-white shadow-sm hover:bg-[color:var(--brand-700)]"
        >
          Book an appointment
        </Link>
      </div>
    </div>
  );
}

