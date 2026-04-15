"use client";
import PageContainer from "@/ui/components/PageContainer";
import { About, Bio } from "@/ui/features/home";
import { HomeHeader } from "@/ui/features/home";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <PageContainer className="py-20 xl:px-64 md:px-32 px-10">
        <main>
          <About />
          <Bio />
        </main>
      </PageContainer>
    </>
  );
};

export default HomePage;
