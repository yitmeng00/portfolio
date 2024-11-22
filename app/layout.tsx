import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/app.scss";
import { Footer } from "@/ui/components/layout";
import ClientProvider from "@/ui/features/ClientProvider";

const newsreader = localFont({
  src: [
    {
      path: "../public/fonts/Newsreader-VariableFont_opsz,wght.ttf",
      style: "normal",
    },
    {
      path: "../public/fonts/Newsreader-Italic-VariableFont_opsz,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: "Ivan Wong",
  description: "Personal Portfolio",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${newsreader.variable}`}>
        <ClientProvider>
          {children}
          <Footer />
        </ClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
