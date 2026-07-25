import { NextRequest, NextResponse } from "next/server";

const usernamePattern = /^[a-z0-9_]{3,20}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null) as { username?: string; email?: string; intent?: string } | null;
  const username = body?.username?.trim().toLowerCase() || "";
  const email = body?.email?.trim().toLowerCase() || "";
  const intent = body?.intent === "creator" ? "creator" : "fan";

  if (!usernamePattern.test(username)) return NextResponse.json({ message: "Use 3-20 lowercase letters, numbers, or underscores." }, { status: 400 });
  if (!emailPattern.test(email)) return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });

  const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const anonKey = process.env.SUPABASE_ANON_KEY;
  if (!supabaseUrl || !anonKey) return NextResponse.json({ message: "Username reservations are not active on this private preview yet." }, { status: 503 });

  const headers = { apikey: anonKey, Authorization: `Bearer ${anonKey}`, "Content-Type": "application/json" };
  const availability = await fetch(`${supabaseUrl}/rest/v1/rpc/username_available`, { method: "POST", headers, body: JSON.stringify({ candidate: username }) });
  if (!availability.ok) return NextResponse.json({ message: "We could not check that username right now." }, { status: 502 });
  if (!(await availability.json() as boolean)) return NextResponse.json({ message: `@${username} has already been reserved. Try another name.` }, { status: 409 });

  const origin = request.headers.get("origin") || new URL(request.url).origin;
  const redirect = `${origin}/reserve/confirmed?username=${encodeURIComponent(username)}&intent=${intent}`;
  const otp = await fetch(`${supabaseUrl}/auth/v1/otp?redirect_to=${encodeURIComponent(redirect)}`, { method: "POST", headers, body: JSON.stringify({ email, create_user: true }) });
  if (!otp.ok) return NextResponse.json({ message: "We could not send the confirmation email. Please try again." }, { status: 502 });

  return NextResponse.json({ message: `We sent a secure confirmation link to ${email}. Open it to reserve @${username}.` });
}
