"use server";

import { validateSignup, type SignupErrors } from "@/lib/signup";
import { getSignupStore } from "@/lib/store";

export interface SignupState {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: SignupErrors;
  values?: { name: string; whatsapp: string; businessType: string };
}

export async function joinPilot(_prev: SignupState, form: FormData): Promise<SignupState> {
  const values = {
    name: String(form.get("name") ?? ""),
    whatsapp: String(form.get("whatsapp") ?? ""),
    businessType: String(form.get("businessType") ?? ""),
  };
  // Honeypot: real people never fill this hidden field.
  if (form.get("company")) return { status: "success", message: "Thanks! We'll be in touch on WhatsApp." };

  const result = validateSignup({ ...values, consent: form.get("consent") });
  if (!result.ok) return { status: "error", errors: result.errors, values };

  try {
    const saved = await getSignupStore().save(result.value);
    const first = result.value.name.split(" ")[0];
    return {
      status: "success",
      message:
        saved === "duplicate"
          ? `You're already on the list, ${first}. We'll message you on WhatsApp.`
          : `You're on the list, ${first}. We'll message you on WhatsApp within a few days.`,
    };
  } catch (err) {
    console.error("[signup] save failed", err);
    return { status: "error", errors: { form: "Something went wrong on our side. Please try again in a minute." }, values };
  }
}
