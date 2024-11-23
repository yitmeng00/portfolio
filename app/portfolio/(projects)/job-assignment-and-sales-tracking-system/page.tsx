"use client";

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
      <MainHeader title="Job Assignment and Sales Tracking System" />
      <PageContainer>
        <SectionWrapper title="TECHNOLOGIES">
          <MainChip techStack={techStack} />
        </SectionWrapper>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-0">
          <SectionWrapper title="ROLE">
            <p>Front-end</p>
          </SectionWrapper>
          <SectionWrapper title="RESPONSIBILITIES">
            <p>
              Environment Setup, UI Components Styling and Development, API Integration, Performance
              Optimization, Responsive Design, Testing
            </p>
          </SectionWrapper>
        </div>
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
              Tailwind was chosen as the CSS framework for its flexibility and customizable styling,
              while the MUI component library was selected for its alignment with the designed UI,
              helping to reduce development time.
            </p>
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

export default JobAssignmentAndSalesTrackingSystem;
