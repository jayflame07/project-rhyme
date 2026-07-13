"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ReservationConfirmedPage() {
  const [state, setState] = useState<{ status: "loading" | "success" | "error"; username?: string; message?: string }>({ status: "loading" });

  useEffect(() => {
    async function confirm() {
      const query = new URLSearchParams(window.location.search);
      const hash = new URLSearchParams(window.location.hash.slice(1));
      const accessToken = hash.get("access_token");
      const username = query.get("username") || "";
      const intent = query.get("intent") === "creator" ? "creator" : "fan";
      if (!accessToken || !username) {
        setState({ status: "error", message: "This confirmation link is incomplete or has expired." });
        return;
      }
      try {
        const response = await fetch("/api/reservations/confirm", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` }, body: JSON.stringify({ username, intent }) });
        const data = await response.json() as { username?: string; message?: string };
        if (!response.ok) throw new Error(data.message || "This username could not be reserved.");
        window.history.replaceState({}, "", window.location.pathname);
        setState({ status: "success", username: data.username });
      } catch (error) {
        setState({ status: "error", message: error instanceof Error ? error.message : "Please try again." });
      }
    }
    void confirm();
  }, []);

  return <main className="site confirmation-page"><div className="confirmation-card"><Link className="wordmark" href="/">RHYME</Link>{state.status === "loading" && <><span>CONFIRMING</span><h1>Holding<br />your name.</h1><p>We are verifying your email and reservation.</p></>}{state.status === "success" && <><span>RESERVED</span><h1>@{state.username}<br /><em>is yours.</em></h1><p>Your username is reserved for RHYME launch.</p><Link className="outline-link" href="/">Return to RHYME {"\u2197"}</Link></>}{state.status === "error" && <><span>NEEDS ATTENTION</span><h1>We could not<br />confirm it.</h1><p>{state.message}</p><Link className="outline-link" href="/reserve">Try again {"\u2197"}</Link></>}</div></main>;
}
