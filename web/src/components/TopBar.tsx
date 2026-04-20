import Link from "next/link";
import { IconFacebook, IconInstagram, IconMapPin, IconPhone } from "./icons";

const PHONE_DISPLAY = "0720.123.123";
const PHONE_TEL = "0720123123";
const ADDRESS = "26A Maria Rosetti Street, Bucharest 020487";

export function TopBar() {
  return (
    <div className="w-full bg-[color:var(--brand-900)] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2 text-sm md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 text-white/90 hover:text-white"
          >
            <IconPhone className="h-4 w-4" />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <div className="inline-flex items-center gap-2 text-white/90">
            <IconMapPin className="h-4 w-4" />
            <span className="line-clamp-1">{ADDRESS}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/85 hover:text-white"
            aria-label="Facebook"
          >
            <IconFacebook className="h-5 w-5" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/85 hover:text-white"
            aria-label="Instagram"
          >
            <IconInstagram className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

