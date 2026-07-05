import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ivan - Photography",
  description: "Personal Photography Portfolio",
  icons: {
    icon: "/favicon.png",
  },
};

export default function PhotographyLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
