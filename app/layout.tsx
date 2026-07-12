import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RHYME — Closer to the music",
  description: "An artist-first music community for intimate live sessions, learning, and discovery.",
  metadataBase: new URL("https://rhyme-design-studio.ocanseyderrick07.chatgpt.site"),
  openGraph: {
    title: "RHYME — Closer to the music",
    description: "Enter intimate live sessions. Learn from artists. Support the work you love.",
    type: "website",
    images: [{ url: "/og.png", width: 1672, height: 941, alt: "RHYME — Closer to the music" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RHYME — Closer to the music",
    description: "An artist-first music community.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
