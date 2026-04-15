"use client";
import PageContainer from "@/ui/components/PageContainer";
import { About, Bio } from "@/ui/features/home";
import { HomeHeader } from "@/ui/features/home";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <PageContainer className="py-20 xl:px-96 md:px-52 px-10">
        <About />
        <Bio />
      </PageContainer>
    </>
  );
};

export default HomePage;
