import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Shubham Mulye | MERN Stack Developer",
  description: "Full-Stack Developer specializing in React, Next.js, Node.js & MongoDB. Building scalable web experiences for startups and clients.",
  authors: [{ name: "Shubham Mulye" }],
  keywords: ["MERN Stack Developer", "Full-Stack Developer", "React Developer", "Next.js", "Node.js", "MongoDB", "Web Developer India"],
  openGraph: {
    title: "Shubham Mulye | MERN Stack Developer",
    description: "Full-Stack Developer turning ideas into production-ready products.",
    type: "website",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shubhammulye",
    images: [],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`min-h-screen bg-background font-sans antialiased ${inter.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
