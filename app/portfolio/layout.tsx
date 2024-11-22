import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ivan Wong - Portfolio",
  description: "Personal Portfolio",
  icons: {
    icon: "/favicon.png",
  },
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
