import type { Metadata } from "next";
import { Geist, Geist_Mono, Prompt } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapClient from "./BootstrapClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const prompt = Prompt({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sittichai Sangnon | Portfolio",
  description: "Programmer portfolio landing page for Sittichai Sangnon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${prompt.variable}`}>
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
