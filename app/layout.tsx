import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";

const heading = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-heading",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "DW's Home Improvements | Sherman & Denison Home Repair",
  description:
    "DW's Home Improvements provides home repairs, interior updates, handyman projects, maintenance, and improvement services in Sherman, Denison, and nearby North Texas areas.",
  keywords: [
    "DW's Home Improvements",
    "home improvements Sherman TX",
    "home improvements Denison TX",
    "handyman Sherman TX",
    "handyman Denison TX",
    "home repair Sherman",
    "home repair Denison",
    "North Texas home repairs",
  ],
  openGraph: {
    title: "DW's Home Improvements | Sherman & Denison Home Repair",
    description:
      "Reliable home repairs, updates, maintenance, and improvement work for Sherman, Denison, and nearby North Texas homeowners.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}