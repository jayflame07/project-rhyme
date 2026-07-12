import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RHYME — Closer to the music",
  description: "An artist-first music community for intimate live sessions, learning, and discovery.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
