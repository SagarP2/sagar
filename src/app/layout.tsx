import type { Metadata } from "next";
import { Space_Grotesk, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sagarpanchal.dev"),
  title: {
    default: "Sagar Panchal | MERN Stack & Shopify App Developer",
    template: "%s | Sagar Panchal",
  },
  description:
    "Portfolio of Sagar Panchal, a MERN Stack Developer and Shopify App Developer building scalable web applications, custom Shopify solutions, and intuitive digital experiences.",
  keywords: [
    "Sagar Panchal",
    "MERN Stack Developer",
    "Shopify App Developer",
    "Shopify Developer",
    "Full-Stack Developer",
    "Node.js Developer",
    "React.js Developer",
    "Next.js Portfolio",
    "REST API Developer",
    "GraphQL Developer",
  ],
  authors: [{ name: "Sagar Panchal" }],
  creator: "Sagar Panchal",
  openGraph: {
    title: "Sagar Panchal | MERN Stack & Shopify App Developer",
    description:
      "Scalable web applications, backend APIs, custom Shopify apps, and full-stack MERN products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagar Panchal | MERN Stack & Shopify App Developer",
    description:
      "MERN Stack Developer and Shopify App Developer building scalable web applications and custom commerce systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F5F0] text-[#252522]">
        <SmoothScroll>{children}</SmoothScroll>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
