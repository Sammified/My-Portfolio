import { heroVoiceNote } from "@tiera/i18n";
import { demoPlan, demoVoiceAmount, formatNaira } from "@/lib/demo";
import { PhoneMockup } from "./PhoneMockup";
import { VoiceDemo } from "./VoiceDemo";
import { ButtonLink, Glow, LockIcon } from "./ui";

export function Hero() {
  const postponed = demoPlan.allocations.find((a) => a.status === "waiting");
  return (
    <section id="top" className="relative overflow-hidden">
      <Glow className="-left-40 top-10 h-[480px] w-[480px] bg-evergreen/60" />
      <Glow className="right-[-120px] top-40 h-[360px] w-[360px] bg-gold/10" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-28 pt-14 md:grid-cols-[1.1fr_1fr] md:px-8 md:pb-28 md:pt-24">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-linen/10 px-3 py-1.5 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-funded" aria-hidden="true" /> Now onboarding the Lagos pilot
          </p>
          <h1 className="font-display text-5xl leading-[1.02] text-linen sm:text-6xl md:text-7xl">
            Your business makes money.
            <br />
            <em className="text-gold">Tiera makes it stay.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Tiera splits every naira that comes in, cash or transfer, in the order you choose: restock, your salary,
            family, then growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#join">Join the Lagos pilot</ButtonLink>
            <ButtonLink href="#how" variant="ghost">
              See how it works
            </ButtonLink>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted">
            <LockIcon className="text-gold-light" />
            Your money stays in your own bank. Nothing moves until you approve it.
          </p>
        </div>

        <div className="relative mx-auto">
          <PhoneMockup />
          <div className="animate-float relative z-10 mx-auto -mt-3 w-fit xl:absolute xl:bottom-28 xl:-left-36 xl:mt-0">
            <VoiceDemo note={heroVoiceNote} amount={demoVoiceAmount} />
          </div>
          {postponed && (
            <div className="animate-float-slow card-solid absolute -right-2 top-16 hidden w-52 p-4 shadow-2xl shadow-black/50 sm:block md:hidden lg:block lg:-right-24">
              <p className="text-[11px] uppercase tracking-wider text-muted">Postponed, not forgotten</p>
              <p className="mt-1 text-sm text-linen">
                {postponed.name} <span className="money text-attention-text">{formatNaira(postponed.shortfall)}</span>
              </p>
              <p className="mt-1 text-xs text-muted">Tops up first next week.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
