"use client";
import PageContainer from "@/ui/components/PageContainer";
import { About, Skill, Bio } from "@/ui/features/home";
import { HomeHeader } from "@/ui/features/home";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <PageContainer>
        <About />
        <Bio />
        <Skill />
      </PageContainer>
    </>
  );
};

export default HomePage;
