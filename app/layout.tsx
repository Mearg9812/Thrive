import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";

// 1. Site SEO & Favicon Metadata
export const metadata: Metadata = {
  title: "Thrive Health & Fitness | Built For Your Next Level",
  description:
    "Sculpt your body and empower your spirit with personalized training, strength conditioning, and recovery in Addis Ababa.",
  generator: "Magiካዊ.io",
  keywords: [
    "Gym",
    "Fitness",
    "Addis Ababa",
    "Ethiopia",
    "Personal Trainer",
    "Bodybuilding",
    "Thrive Health",
  ],
  // Next.js automatically detects app/icon.svg so we removed the manual icons block!
};

// 2. Mobile Browser Header Color
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1116" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
