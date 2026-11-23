import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import ClarityAnalytics from "@/components/Clarity";
import "./globals.css";

const heading = Manrope({
  subsets: ["latin"],
  weight: ["600", "800"],
  display: "swap",
  variable: "--font-heading",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Zorwia",
  description:
    "Zorwia is a web studio that designs, builds and launches websites for service businesses.",
  icons: {
    icon: "/zorwia-logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        {children}
        <ClarityAnalytics />
      </body>
    </html>
  );
}