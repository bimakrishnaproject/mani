import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MANI — Emotional Support Made Simple™",
  description: "MANI brings together expert-guided collections, daily educational videos, and a guided app to help you better understand yourself and navigate life's challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans bg-editorial-white text-ink-black min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}

