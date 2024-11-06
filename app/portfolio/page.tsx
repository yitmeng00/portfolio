"use client";

import PageContainer from "@/ui/components/PageContainer";
import { About, Skill, Project, Bio } from "@/ui/features/about";
import { HomeHeader } from "@/ui/features/home";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <PageContainer>
        <About />
        <Bio />
        <Skill />
        <Project />
      </PageContainer>
    </>
  );
};

export default HomePage;
