import type { Metadata } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScroll } from "@/components/portfolio/smooth-scroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sagarpanchal.dev"),
  title: {
    default: "Sagar Panchal | Backend-Focused MERN & Shopify Developer",
    template: "%s | Sagar Panchal",
  },
  description:
    "Premium portfolio of Sagar Panchal, a backend-focused MERN Stack Engineer and Shopify Developer building scalable APIs, full-stack products, and custom commerce systems.",
  keywords: [
    "Sagar Panchal",
    "MERN Stack Developer",
    "Backend Engineer",
    "Shopify Developer",
    "Node.js Developer",
    "Next.js Portfolio",
    "REST API Developer",
    "GraphQL Developer",
  ],
  authors: [{ name: "Sagar Panchal" }],
  creator: "Sagar Panchal",
  openGraph: {
    title: "Sagar Panchal | Backend-Focused MERN & Shopify Developer",
    description:
      "Scalable web experiences, backend architecture, Shopify apps, and full-stack MERN products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagar Panchal | MERN & Shopify Developer",
    description:
      "Backend-focused portfolio with immersive 3D, cinematic motion, and premium project showcases.",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
