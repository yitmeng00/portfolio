"use client";

import { MainHeader } from "@/ui/components/layout";
import PageContainer from "@/ui/components/PageContainer";
import { About, Project, Skill } from "@/ui/features/about";

const AboutPage = () => {
  return (
    <>
      <MainHeader title="ABOUT" />
      <PageContainer>
        <About />
        <Skill />
        <Project />
      </PageContainer>
    </>
  );
};

export default AboutPage;
