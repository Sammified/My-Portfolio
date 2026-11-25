import { brand } from "@tiera/ui-tokens";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-linen/[0.06] pb-28 md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <Logo />
          <p className="mt-3 font-display text-xl italic text-muted">{brand.tagline}</p>
        </div>
        <div className="max-w-md space-y-2 text-sm text-muted">
          <p>
            Tiera is not a bank and does not hold or move money. Future banking features will be provided by
            [LICENSED BANK PARTNER]. Investment features will be provided by [LICENSED PARTNER].
          </p>
          <p className="flex gap-4">
            <a href="#" className="inline-flex min-h-11 items-center text-linen hover:underline">[Terms]</a>
            <a href="#" className="inline-flex min-h-11 items-center text-linen hover:underline">[Privacy Policy]</a>
          </p>
          <p className="text-faint">© {new Date().getFullYear()} Tiera. Lagos, Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}
