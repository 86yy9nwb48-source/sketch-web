import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SKETCH | Visual Directing",
  description:
    "내면과 외면을 함께 읽어 당신에게 이미 존재하는 이미지를 발견하고 설계하는 Personal Image Direction Studio, SKETCH.",
  openGraph: {
    title: "SKETCH | Visual Directing",
    description:
      "내면과 외면을 함께 읽어 당신에게 이미 존재하는 이미지를 발견하고 설계하는 Personal Image Direction Studio, SKETCH.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
