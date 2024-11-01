import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/app.scss";

const notoSerif = localFont({
  src: [
    {
      path: "../public/fonts/NotoSerif-VariableFont_wdth,wght.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/NotoSerif-Italic-VariableFont_wdth,wght.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/NotoSerif-VariableFont_wdth,wght.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/NotoSerif-Italic-VariableFont_wdth,wght.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/NotoSerif-VariableFont_wdth,wght.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/NotoSerif-Italic-VariableFont_wdth,wght.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/NotoSerif-VariableFont_wdth,wght.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NotoSerif-Italic-VariableFont_wdth,wght.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/NotoSerif-VariableFont_wdth,wght.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/NotoSerif-Italic-VariableFont_wdth,wght.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/NotoSerif-VariableFont_wdth,wght.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/NotoSerif-Italic-VariableFont_wdth,wght.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/NotoSerif-VariableFont_wdth,wght.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/NotoSerif-Italic-VariableFont_wdth,wght.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/NotoSerif-VariableFont_wdth,wght.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/NotoSerif-Italic-VariableFont_wdth,wght.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/NotoSerif-VariableFont_wdth,wght.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/NotoSerif-Italic-VariableFont_wdth,wght.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: "Ivan's Portfolio",
  description: "Personal Portfolio",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${notoSerif.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
