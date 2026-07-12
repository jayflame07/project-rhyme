import type { Metadata } from "next";
import "./globals.css";

const title = "RHYME \u2014 Stream. Learn. Connect.";
const description = "RHYME brings music streaming, learning, and community together, with intimate live sessions hosted by verified artists, DJs, producers, and music teachers.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://rhyme-design-studio.ocanseyderrick07.chatgpt.site"),
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/og.png", width: 1672, height: 941, alt: "RHYME \u2014 Closer to the music" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
