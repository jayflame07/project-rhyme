import type { Metadata } from "next";
import { Archivo_Black, Bodoni_Moda, Instrument_Sans } from "next/font/google";
import "./globals.css";

const title = "RHYME \u2014 Stream. Learn. Connect.";
const description = "RHYME is a music app for streaming songs, learning from creators, and joining limited live sessions with artists, DJs, producers, and music teachers.";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
  display: "swap",
});

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
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${archivoBlack.variable} ${bodoniModa.variable}`}>
        {children}
      </body>
    </html>
  );
}
