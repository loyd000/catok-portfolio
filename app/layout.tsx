import type { Metadata } from "next";
import { Syne, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "CATOK — Smart Coconut Maturity Classifier",
  description:
    "An AI-powered handheld device that classifies young coconut maturity through acoustic analysis and TinyML — no internet, no expertise required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <body className="antialiased">
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
