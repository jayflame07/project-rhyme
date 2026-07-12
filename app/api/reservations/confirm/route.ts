import { NextRequest, NextResponse } from "next/server";

const usernamePattern = /^[a-z0-9_]{3,20}$/;

export async function POST(request: NextRequest) {
  const accessToken = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const body = await request.json().catch(() => null) as { username?: string; intent?: string } | null;
  const username = body?.username?.trim().toLowerCase() || "";
  const intent = body?.intent === "creator" ? "creator" : "fan";
  if (!accessToken || !usernamePattern.test(username)) return NextResponse.json({ message: "This confirmation link is invalid." }, { status: 400 });

  const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const anonKey = process.env.SUPABASE_ANON_KEY;
  if (!supabaseUrl || !anonKey) return NextResponse.json({ message: "Reservations are not connected yet." }, { status: 503 });

  const userResponse = await fetch(`${supabaseUrl}/auth/v1/user`, { headers: { apikey: anonKey, Authorization: `Bearer ${accessToken}` } });
  if (!userResponse.ok) return NextResponse.json({ message: "Your email confirmation has expired. Please request a new link." }, { status: 401 });
  const user = await userResponse.json() as { id?: string; email?: string };
  if (!user.id || !user.email) return NextResponse.json({ message: "We could not verify this email." }, { status: 401 });

  const reservation = await fetch(`${supabaseUrl}/rest/v1/username_reservations`, {
    method: "POST",
    headers: { apikey: anonKey, Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json", Prefer: "return=representation" },
    body: JSON.stringify({ user_id: user.id, email: user.email.toLowerCase(), username, intent }),
  });
  if (reservation.status === 409) return NextResponse.json({ message: `@${username} was reserved by someone else. Please choose another name.` }, { status: 409 });
  if (!reservation.ok) return NextResponse.json({ message: "We could not complete this reservation." }, { status: 502 });

  return NextResponse.json({ username });
}
