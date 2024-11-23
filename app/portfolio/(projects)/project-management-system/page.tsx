"use client";

import { MainHeader } from "@/ui/components/layout";
import MainChip from "@/ui/components/MainChip";
import PageContainer from "@/ui/components/PageContainer";
import SectionWrapper from "@/ui/components/SectionWrapper";

const ProjectManagementSystem = () => {
  const techStack = [
    "React.js",
    "Redux",
    "JavaScript",
    "Tailwind",
    "HTML",
    "CSS",
    "Node",
    "Express",
    "Sequelize",
    "MySQL",
  ];

  return (
    <>
      <MainHeader title="Project Management System" />
      <PageContainer>
        <h3>An end-to-end solution for optimized task management.</h3>
        <SectionWrapper title="TECHNOLOGIES">
          <MainChip techStack={techStack} />
        </SectionWrapper>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-0">
          <SectionWrapper title="ROLE">
            <p>Full-stack, Database</p>
          </SectionWrapper>
          <SectionWrapper title="RESPONSIBILITIES">
            <p>
              Environment Setup, UI Components Styling and Development, API Development and
              Integration, Performance Optimization, Responsive Design, Database Schema Design and
              Setup, Database Administration and Optimization, Testing
            </p>
          </SectionWrapper>
        </div>
        <SectionWrapper title="ABOUT">
          <div className="project-about__container">
            <p>
              The Project Management System is an internal system designed to help track project
              timelines and progress, aiming to reduce delays and improve overall task completion
              efficiency.
            </p>
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

export default ProjectManagementSystem;
