import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "إسلام جوبا - Eslam Jupa",
  description: "تطبيق إسلام جوبا الرسمي - اتبعنا على يوتيوب، تيك توك، إنستجرام، وفيسبوك للحصول على أحدث المحتوى والفيديوهات.",
  keywords: ["إسلام جوبا", "Eslam Jupa", "يوتيوب", "تيك توك", "إنستجرام", "فيسبوك", "فنان", "منشئ محتوى"],
  authors: [{ name: "Eslam Jupa" }],
  openGraph: {
    title: "إسلام جوبا - Eslam Jupa",
    description: "تطبيق إسلام جوبا الرسمي - اتبعنا على جميع منصات التواصل الاجتماعي",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
