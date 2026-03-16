import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Veynqor -Fleet Intelligence Infrastructure",
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
    title: "Veynqor -Fleet Intelligence Infrastructure",
    description:
      "Edge-to-cloud telematics for commercial EV fleets. Signal-level vehicle diagnostics and AI-powered analytics.",
    url: "https://veynqor.com",
    siteName: "Veynqor",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veynqor -Fleet Intelligence Infrastructure",
    description:
      "Edge-to-cloud telematics for commercial EV fleets. Signal-level vehicle diagnostics and AI-powered analytics.",
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
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
