"use client";

import { NavigateBackBtn } from "@/ui/components/button";
import { MainHeader } from "@/ui/components/layout";
import MainChip from "@/ui/components/MainChip";
import PageContainer from "@/ui/components/PageContainer";
import SectionWrapper from "@/ui/components/SectionWrapper";

const JobAssignmentAndSalesTrackingSystem = () => {
  const techStack = [
    "Next",
    "React",
    "Redux",
    "TypeScript",
    "Tailwind",
    "Sass",
    "Material UI",
    "HTML",
    "CSS",
  ];

  return (
    <>
      <NavigateBackBtn />
      <MainHeader title="Job Assignment and Sales Tracking System" />
      <PageContainer>
        <SectionWrapper title="TECH INVOLVED">
          <MainChip techStack={techStack} />
        </SectionWrapper>
        <SectionWrapper title="ABOUT">
          <div className="project-about__container">
            <p>
              The Job Assignment and Sales Tracking System is an internal system designed to
              streamline sales operations, improve task management, and optimize delivery processes.
              The system acts as a centralized platform that tracks sales activities, monitors task
              progress, manages customer data, processes delivery orders, and oversees route and
              driver performance.
            </p>
            <p>
              I focused on front-end development for this project, working closely with UI/UX
              designers to develop UI components and layouts using Next.js. Tailwind was chosen as
              the CSS framework for its flexibility and highly customizable styling, while MUI
              components were selected for their similarity to the designed UI components, helping
              to reduce development time. I also integrated the front end with backend APIs to
              ensure functionality and optimized the front end for performance.
            </p>
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

export default JobAssignmentAndSalesTrackingSystem;
