"use client";

import { FormEvent, useEffect, useState } from "react";

type FormStatus = { type: "idle" | "loading" | "success" | "error"; message?: string };

export function ReserveForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [intent, setIntent] = useState<"fan" | "creator">("fan");
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("type") === "creator") setIntent("creator");
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "loading" });
    try {
      const response = await fetch("/api/reservations/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, intent }),
      });
      const data = await response.json() as { message?: string };
      if (!response.ok) throw new Error(data.message || "We could not start this reservation.");
      setStatus({ type: "success", message: data.message || "Check your email to confirm your reservation." });
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Please try again." });
    }
  }

  if (status.type === "success") {
    return <div className="reservation-success" role="status"><span>EMAIL SENT</span><h2>One click<br />to make it yours.</h2><p>{status.message}</p><a href="/">Back to RHYME</a></div>;
  }

  return (
    <form className="reserve-form" onSubmit={submit}>
      <fieldset>
        <legend>I am joining as</legend>
        <label className={intent === "fan" ? "selected" : ""}><input type="radio" name="intent" value="fan" checked={intent === "fan"} onChange={() => setIntent("fan")} />Listener / fan</label>
        <label className={intent === "creator" ? "selected" : ""}><input type="radio" name="intent" value="creator" checked={intent === "creator"} onChange={() => setIntent("creator")} />Music creator</label>
      </fieldset>
      <label className="field-label" htmlFor="username">Choose your RHYME username</label>
      <div className="username-field"><span>@</span><input id="username" name="username" value={username} onChange={(event) => setUsername(event.target.value.toLowerCase().replace(/[^a-z0-9_]/g, "").slice(0, 20))} minLength={3} maxLength={20} pattern="[a-z0-9_]{3,20}" autoComplete="username" placeholder="yourname" required /></div>
      <small>3-20 characters. Lowercase letters, numbers, and underscores.</small>
      <label className="field-label" htmlFor="reserve-email">Your email</label>
      <input className="email-field" id="reserve-email" name="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" placeholder="you@example.com" required />
      <button className="reserve-submit" type="submit" disabled={status.type === "loading"}>{status.type === "loading" ? "Checking your name..." : "Reserve my username"}<b>{"\u2197"}</b></button>
      {status.type === "error" && <p className="form-message error" role="alert">{status.message}</p>}
      <p className="form-terms">We will use this email to verify the reservation and send essential RHYME launch updates. No payment is taken.</p>
      <p className="preview-note">Private preview: reservations activate after the Supabase database and email confirmation settings are connected.</p>
    </form>
  );
}
