import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/TalentMesh White Logo.png", sizes: "256x256" },
    ],
    apple: [
      { url: "/TalentMesh White Logo.png" },
    ],
  },
  title: "TalentMesh",
  description: "Elite AI-native recruitment protocol bridging the gap between world-class talent and innovative firms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Navbar />
        {children}
      </body>
    </html>
  );
}
