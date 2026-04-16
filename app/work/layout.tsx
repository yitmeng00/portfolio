import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ivan - Work",
  description: "Personal Work Portfolio",
  icons: {
    icon: "/favicon.png",
  },
};

export default function WorkLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
