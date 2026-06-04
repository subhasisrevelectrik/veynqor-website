import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Veynqor: Fleet Intelligence Infrastructure",
    template: "%s | Veynqor",
  },
  description:
    "Edge-to-cloud telematics for commercial EV fleets. Deep CAN bus diagnostics, real-time vehicle health monitoring, and AI-powered fleet analytics.",
  keywords: [
    "fleet telematics",
    "EV fleet management",
    "CAN bus telemetry",
    "vehicle health monitoring",
    "fleet analytics",
    "electric vehicle diagnostics",
    "battery health monitoring",
    "fleet intelligence",
  ],
  openGraph: {
    title: "Veynqor: Fleet Intelligence Infrastructure",
    description:
      "Edge-to-cloud telematics for commercial EV fleets. Signal-level vehicle diagnostics and AI-powered analytics.",
    url: "https://veynqor.com",
    siteName: "Veynqor",
    type: "website",
    locale: "en_US",
    // Branded link-preview card. Replace with nicer art when ready.
    images: [{ url: "/images/og/og-default.png", width: 1200, height: 630, alt: "Veynqor: Know What Your Car Knows" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@veynqor",
    title: "Veynqor: Fleet Intelligence Infrastructure",
    description:
      "Edge-to-cloud telematics for commercial EV fleets. Signal-level vehicle diagnostics and AI-powered analytics.",
    images: ["/images/og/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://veynqor.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AnnouncementBar />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
