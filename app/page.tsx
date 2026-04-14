"use client";
import PageContainer from "@/ui/components/PageContainer";
import { About, Bio } from "@/ui/features/home";
import { HomeHeader } from "@/ui/features/home";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <PageContainer>
        <About />
        <Bio />
      </PageContainer>
    </>
  );
};

export default HomePage;
