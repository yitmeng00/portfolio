"use client";

import { NavigateBackBtn } from "@/ui/components/button";
import { MainHeader } from "@/ui/components/layout";
import MainChip from "@/ui/components/MainChip";
import PageContainer from "@/ui/components/PageContainer";
import SectionWrapper from "@/ui/components/SectionWrapper";

const JobAssignmentAndSalesTrackingSystem = () => {
  const techStack = [
    "Next.js",
    "React.js",
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
        <SectionWrapper title="TECHNOLOGIES">
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
              This project is currently in progress, and I am focusing on front-end development,
              working closely with UI/UX designers. My responsibilities include developing UI
              components and layouts using Next.js. Tailwind was chosen as the CSS framework for its
              flexibility and customizable styling, while the MUI component library was selected for
              its alignment with the designed UI, helping to reduce development time. I am also
              working on integrating the frontend with backend APIs to ensure full functionality and
              optimizing the front end for performance.
            </p>
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

export default JobAssignmentAndSalesTrackingSystem;
