import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact -Book a Fleet Assessment",
  description:
    "Get in touch with Veynqor. Book a fleet assessment, request a demo, or start a pilot deployment for your commercial EV fleet.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
