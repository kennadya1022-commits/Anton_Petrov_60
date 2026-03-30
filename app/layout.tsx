import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/SideNav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-quote",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Piter Pen Life 60",
  description:
    "С днём рождения, папа. Персональный сайт-поздравление к 60-летию.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        <SideNav />
        <main className="min-h-screen pl-0 md:pl-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
