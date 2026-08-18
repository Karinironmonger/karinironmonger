import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karin Barak Ironmonger",
  description:
    "Employee experience, workplace operations, employer branding and event production.",
};

const FONTS =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,300..700,0..100,0..1" +
  "&family=Instrument+Sans:wght@400..600&family=Martian+Mono:wght@300..500" +
  "&family=Frank+Ruhl+Libre:wght@300..700&family=Assistant:wght@300..600&display=swap";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={FONTS} />
      </head>
      <body>{children}</body>
    </html>
  );
}
