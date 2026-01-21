import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bernhard Riemann - Mathematician",
  description: "Explore the life and work of Bernhard Riemann, the German mathematician who revolutionized number theory, complex analysis, and differential geometry.",
  keywords: ["Bernhard Riemann", "Riemann Hypothesis", "Riemann Geometry", "Mathematics", "Number Theory", "Complex Analysis"],
  authors: [{ name: "Riemann Tribute Project" }],
  openGraph: {
    title: "Bernhard Riemann - Mathematician",
    description: "Explore the life and work of Bernhard Riemann",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
