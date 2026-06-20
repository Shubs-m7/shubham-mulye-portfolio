import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Shubham Mulye | MERN Stack Developer",
  description: "Full-Stack Developer specializing in React, Next.js, Node.js & MongoDB. Building scalable web experiences for startups and clients.",
  authors: [{ name: "Shubham Mulye" }],
  keywords: ["MERN Stack Developer", "Full-Stack Developer", "React Developer", "Next.js", "Node.js", "MongoDB", "Web Developer India"],
  openGraph: {
    title: "Shubham Mulye | MERN Stack Developer",
    description: "Full-Stack Developer turning ideas into production-ready products.",
    type: "website",
    images: [
      {
        url: "https://lovable.dev/opengraph-image-p98pqg.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shubhammulye",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
