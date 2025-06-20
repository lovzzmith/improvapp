import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mythia – Master Improv, Transform Your Life",
  description: "The world's best way to learn improv. It's funny, it's effective, and it's easy. Join Mythia to boost your humor, confidence, and social skills.",
  keywords: [
    "improv",
    "improvisation",
    "comedy",
    "social skills",
    "confidence",
    "humor training",
    "Mythia"
  ],
  openGraph: {
    title: "Mythia – Master Improv, Transform Your Life",
    description: "The world's best way to learn improv. It's funny, it's effective, and it's easy. Join Mythia to boost your humor, confidence, and social skills.",
    url: "https://mythia.app/",
    siteName: "Mythia",
    images: [
      {
        url: "/mythia-logo.jpeg",
        width: 800,
        height: 800,
        alt: "Mythia Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mythia – Master Improv, Transform Your Life",
    description: "The world's best way to learn improv. It's funny, it's effective, and it's easy. Join Mythia to boost your humor, confidence, and social skills.",
    images: ["/mythia-logo.jpeg"]
  },
  metadataBase: new URL("https://mythia.app/"),
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mythia">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
