"use client";

import HomeHeader from "@/ui/components/HomeHeader";
import { Footer } from "@/ui/components/layout";
import PageContainer from "@/ui/components/PageContainer";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HomeHeader />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </>
  );
}
