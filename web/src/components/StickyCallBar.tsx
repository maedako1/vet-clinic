const PHONE_DISPLAY = "0720.123.123";
const PHONE_TEL = "0720123123";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-black/50">
            call to make an appointment
          </p>
          <p className="truncate text-sm font-semibold text-[color:var(--brand-900)]">
            {PHONE_DISPLAY}
          </p>
        </div>

        <a
          href={`tel:${PHONE_TEL}`}
          className="inline-flex h-11 items-center justify-center rounded-full bg-[color:var(--brand-600)] px-5 text-sm font-semibold text-white shadow-sm hover:bg-[color:var(--brand-700)]"
        >
          Sună acum
        </a>
      </div>
    </div>
  );
}

