"use client";

import { NavigateBackBtn } from "@/ui/components/button";
import { MainHeader } from "@/ui/components/layout";
import MainChip from "@/ui/components/MainChip";
import PageContainer from "@/ui/components/PageContainer";
import SectionWrapper from "@/ui/components/SectionWrapper";

const ResponsiveWebsite = () => {
  const techStack = ["Vue.js", "Nuxt", "Buefy", "Bulma", "JavaScript", "HTML", "CSS", "WordPress"];

  return (
    <>
      <NavigateBackBtn />
      <MainHeader title="Responsive Website" />
      <PageContainer>
        <SectionWrapper title="TECHNOLOGIES">
          <MainChip techStack={techStack} />
        </SectionWrapper>
        <SectionWrapper title="ABOUT">
          <div className="project-about__container">
            <p>
              I was involved in the development and enhancement of previous and current company
              websites, collaborating closely with UI/UX designers to ensure alignment with the
              overall vision.
            </p>
            <p>
              For current company website, I worked with Vue.js using the Nuxt framework, Buefy for
              UI components, and Bulma as the CSS framework. My responsibilities included developing
              and implementing new features, refactoring and enhancing page design and structure,
              and ensuring responsiveness across devices.
            </p>
            <p>
              For the previous company website, developed on WordPress, I took full ownership of the
              entire development process. This included customizing templates, optimizing for SEO,
              implementing caching strategies to improve performance, and managing web hosting.
            </p>
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

export default ResponsiveWebsite;
