"use client";

import { MainHeader } from "@/ui/components/layout";
import PageContainer from "@/ui/components/PageContainer";
import { Project } from "@/ui/features/portfolio";

const PortfolioPage = () => {
  return (
    <>
      <MainHeader title="HANDS-ON ADVENTURES" />
      <PageContainer>
        <Project />
      </PageContainer>
    </>
  );
};

export default PortfolioPage;
