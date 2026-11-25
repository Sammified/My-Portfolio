import "server-only";
import { maskPhone, type Signup } from "./signup";

export type SaveResult = "saved" | "duplicate" | "logged_only";

export interface SignupStore {
  save(signup: Signup): Promise<SaveResult>;
}

/** Writes to Supabase via its REST API. RLS allows anonymous INSERT only, never SELECT. */
class SupabaseStore implements SignupStore {
  constructor(private url: string, private key: string) {}
  async save(s: Signup): Promise<SaveResult> {
    const res = await fetch(`${this.url}/rest/v1/pilot_signups`, {
      method: "POST",
      headers: {
        apikey: this.key,
        Authorization: `Bearer ${this.key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ name: s.name, whatsapp: s.whatsapp, business_type: s.businessType, consent: true }),
      cache: "no-store",
    });
    if (res.status === 409) return "duplicate";
    if (!res.ok) throw new Error(`Supabase insert failed: ${res.status} ${await res.text()}`);
    return "saved";
  }
}

/** Used when Supabase isn't configured. Logs a masked record; stores nothing. */
class LogOnlyStore implements SignupStore {
  async save(s: Signup): Promise<SaveResult> {
    console.info("[signup:log-only] Supabase not configured", {
      name: s.name.split(" ")[0],
      whatsapp: maskPhone(s.whatsapp),
      businessType: s.businessType,
    });
    return "logged_only";
  }
}

export function getSignupStore(): SignupStore {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  return url && key ? new SupabaseStore(url.replace(/\/$/, ""), key) : new LogOnlyStore();
}
