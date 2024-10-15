"use client";

import { NavbarBtn } from "@/ui/components/button";
import { Footer } from "@/ui/components/layout";
import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavbarBtn />
      {children}
      <Footer />
    </>
  );
}
