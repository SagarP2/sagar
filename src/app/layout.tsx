import type { Metadata } from "next";
import { Space_Grotesk, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScroll } from "@/components/portfolio/smooth-scroll";

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
  metadataBase: new URL("https://sagarpanchal.dev"),
  title: {
    default: "Sagar Panchal | MERN Stack Developer & Shopify App Developer",
    template: "%s | Sagar Panchal",
  },
  description:
    "Portfolio of Sagar Panchal — MERN Stack Developer and Shopify App Developer building full-stack web applications, custom Shopify apps, GraphQL integrations, and reliable digital products.",
  keywords: [
    "Sagar Panchal",
    "MERN Stack Developer",
    "Shopify App Developer",
    "Shopify Developer",
    "Full-Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Shopify Admin API",
    "Shopify GraphQL",
  ],
  authors: [{ name: "Sagar Panchal" }],
  creator: "Sagar Panchal",
  alternates: {
    canonical: "https://sagarpanchal.dev",
  },
  openGraph: {
    title: "Sagar Panchal | MERN Stack Developer & Shopify App Developer",
    description:
      "Building digital products that work beautifully — full-stack MERN applications, custom Shopify apps, and dependable backend architectures.",
    url: "https://sagarpanchal.dev",
    siteName: "Sagar Panchal Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagar Panchal | MERN Stack Developer & Shopify App Developer",
    description:
      "Full-stack MERN web applications, custom Shopify apps, and thoughtful digital engineering.",
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
      <body className="min-h-full flex flex-col bg-[#F7F5F0] text-[#24231F]">
        <SmoothScroll>{children}</SmoothScroll>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
