"use client";

import { NavbarBtn } from "@/ui/components/button";
import { Footer, Navbar } from "@/ui/components/layout";
import { ReactNode, useState } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavbarBtn />
      {children}
      <Footer />
    </>
  );
}
