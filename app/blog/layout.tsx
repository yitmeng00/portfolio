import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ivan - Blog",
  description: "Personal Blog",
  icons: {
    icon: "/favicon.png",
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
