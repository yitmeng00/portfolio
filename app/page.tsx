"use client";

import { lazy, Suspense } from "react";

import PageContainer from "@/ui/components/PageContainer";
import { HomeHeader } from "@/ui/features/home";
import { HomeSkeleton } from "@/ui/features/home/HomeSkeleton";

const About = lazy(() => import("@/ui/features/home/About"));
const Bio = lazy(() => import("@/ui/features/home/Bio"));

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <main>
        <PageContainer className="py-20 xl:px-64 md:px-32 px-10">
          <Suspense fallback={<HomeSkeleton />}>
            <About />
            <Bio />
          </Suspense>
        </PageContainer>
      </main>
    </>
  );
};

export default HomePage;
