import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";

const hankenGrotesk = localFont({
  src: "./fonts/HankenGrotesk-VariableFont_wght.ttf",
  variable: "--font-hanken-grotesk",
  weight: "500 700 800",
});

export const metadata: Metadata = {
  title: "Results Summary Component",
  description: "Results Summary App.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.variable} antialiased bg-neutral-paleBlue min-h-dvh flex flex-col`}
      >
        <main className="flex-grow flex items-center justify-center p-0 md:p-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
