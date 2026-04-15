import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ivan - Gallery",
  description: "Personal Portfolio Gallery",
  icons: {
    icon: "/favicon.png",
  },
};

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
