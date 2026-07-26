import type { Metadata } from "next";
import { ReserveShowcase } from "./ReserveShowcase";

export const metadata: Metadata = {
  title: "Reserve your RHYME username",
  description: "Choose the username you want to use in the RHYME music community before public launch.",
};

export default async function ReservePage({ searchParams }: { searchParams?: Promise<{ type?: string }> }) {
  const params = await searchParams;
  const initialIntent = params?.type === "creator" ? "creator" : "fan";

  return <ReserveShowcase initialIntent={initialIntent} />;
}
