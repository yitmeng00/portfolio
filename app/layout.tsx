import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";

import "@/styles/app.scss";
import { Footer } from "@/ui/components/layout";
import ClientProvider from "@/ui/features/ClientProvider";

const notoSans = localFont({
  src: [
    {
      path: "../public/fonts/NotoSans-VariableFont_wdth,wght.ttf",
      style: "normal",
    },
  ],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Ivan",
  description: "Personal Portfolio",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable}`}>
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
