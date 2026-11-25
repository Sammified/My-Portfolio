"use client";
import { useActionState } from "react";
import { joinPilot, type SignupState } from "@/app/actions";
import { businessTypes } from "@/lib/signup";
import { Eyebrow, H2, Section } from "./ui";

const initial: SignupState = { status: "idle" };

const field =
  "mt-2 block min-h-12 w-full rounded-xl border bg-midnight px-4 text-base text-linen placeholder:text-faint focus:border-gold-light focus:outline-none";

export function SignupForm() {
  const [state, action, pending] = useActionState(joinPilot, initial);
  const e = state.errors ?? {};
  const v = state.values;

  return (
    <Section id="join" className="pb-32 md:pb-28">
      <div className="card relative overflow-hidden p-6 md:grid md:grid-cols-[1fr_1.1fr] md:gap-12 md:p-12">
        <div>
          <Eyebrow>Lagos pilot</Eyebrow>
          <H2 className="md:text-5xl">
            Join the pilot. <em className="text-gold">First 3 months free.</em>
          </H2>
          <p className="mt-4 leading-relaxed text-muted">
            We’re starting with a small group of Lagos business owners. Leave your WhatsApp number and we’ll message
            you to set up your first week.
          </p>
        </div>

        {state.status === "success" ? (
          <div role="status" className="mt-8 flex flex-col justify-center rounded-2xl border border-funded/40 bg-funded/10 p-6 md:mt-0">
            <p className="font-display text-3xl text-linen">Thank you.</p>
            <p className="mt-2 text-linen">{state.message}</p>
          </div>
        ) : (
          <form action={action} noValidate className="mt-8 space-y-5 md:mt-0" aria-describedby={e.form ? "form-error" : undefined}>
            <div>
              <label htmlFor="name" className="text-sm font-medium text-linen">Your name</label>
              <input id="name" name="name" autoComplete="name" required maxLength={80} defaultValue={v?.name}
                aria-invalid={!!e.name} aria-describedby={e.name ? "name-error" : undefined}
                className={`${field} ${e.name ? "border-overdue-text" : "border-linen/15"}`} placeholder="Ada Obi" />
              {e.name && <p id="name-error" className="mt-1.5 text-sm text-overdue-text">{e.name}</p>}
            </div>

            <div>
              <label htmlFor="whatsapp" className="text-sm font-medium text-linen">WhatsApp number</label>
              <div className="relative mt-2">
                <span className="money pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-muted">+234</span>
                <input id="whatsapp" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel-national" required
                  defaultValue={v?.whatsapp} aria-invalid={!!e.whatsapp}
                  aria-describedby={e.whatsapp ? "whatsapp-error" : "whatsapp-hint"}
                  className={`${field} !mt-0 pl-16 money ${e.whatsapp ? "border-overdue-text" : "border-linen/15"}`} placeholder="803 123 4567" />
              </div>
              {e.whatsapp ? (
                <p id="whatsapp-error" className="mt-1.5 text-sm text-overdue-text">{e.whatsapp}</p>
              ) : (
                <p id="whatsapp-hint" className="mt-1.5 text-sm text-muted">We’ll only use this to message you about the pilot.</p>
              )}
            </div>

            <div>
              <label htmlFor="businessType" className="text-sm font-medium text-linen">Business type</label>
              <select id="businessType" name="businessType" required defaultValue={v?.businessType ?? ""}
                aria-invalid={!!e.businessType} aria-describedby={e.businessType ? "bt-error" : undefined}
                className={`${field} appearance-none ${e.businessType ? "border-overdue-text" : "border-linen/15"}`}>
                <option value="" disabled>Choose one</option>
                {businessTypes.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
              {e.businessType && <p id="bt-error" className="mt-1.5 text-sm text-overdue-text">{e.businessType}</p>}
            </div>

            {/* Honeypot for bots. Hidden from people and screen readers. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" tabIndex={-1} autoComplete="off" />
            </div>

            <div>
              <label className="flex min-h-11 items-start gap-3 text-sm text-muted">
                <input type="checkbox" name="consent" required aria-invalid={!!e.consent}
                  className="mt-0.5 h-5 w-5 shrink-0 accent-[#C8A45D]" />
                <span>
                  I agree that Tiera can contact me on WhatsApp about the pilot and store my details as described in
                  the <a href="#" className="text-linen underline underline-offset-2">[Privacy Policy]</a>.
                </span>
              </label>
              {e.consent && <p className="mt-1.5 text-sm text-overdue-text">{e.consent}</p>}
            </div>

            {e.form && <p id="form-error" role="alert" className="text-sm text-overdue-text">{e.form}</p>}

            <button type="submit" disabled={pending}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gold text-base font-semibold text-ink hover:bg-gold-light disabled:opacity-60">
              {pending ? "Saving…" : "Join the Lagos pilot"}
            </button>
          </form>
        )}
      </div>
    </Section>
  );
}
