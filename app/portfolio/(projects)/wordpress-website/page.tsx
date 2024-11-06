"use client";

import { NavigateBackBtn } from "@/ui/components/button";
import { MainHeader } from "@/ui/components/layout";
import MainChip from "@/ui/components/MainChip";
import PageContainer from "@/ui/components/PageContainer";
import SectionWrapper from "@/ui/components/SectionWrapper";

const WordPressWebsite = () => {
  const techStack = ["WordPress", "SEO", "Caching", "JavaScript", "HTML", "CSS", "Web Hosting"];

  return (
    <>
      <NavigateBackBtn />
      <MainHeader title="WordPress Website" />
      <PageContainer>
        <SectionWrapper title="TECHNOLOGIES">
          <MainChip techStack={techStack} />
        </SectionWrapper>
        <SectionWrapper title="ABOUT">
          <div className="project-about__container">
            <p>
              I developed several WordPress websites for different clients related to Green IT
              infrastructure, construction, consultancy, IoT, and e-commerce using page builders
              such as Divi, Elementor, and WPBakery, along with a suite of essential plugins.
            </p>
            <p>
              My responsibilities included customizing themes to align with the client’s visual
              identity, optimizing images for fast loading, implementing SEO best practices to
              enhance search visibility, applying caching techniques to improve performance, and
              ensuring responsiveness across various screen sizes. Additionally, I managed aspects
              of web hosting setup to ensure site stability and accessibility, working with
              providers such as GoDaddy and Exabytes.
            </p>
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

export default WordPressWebsite;
