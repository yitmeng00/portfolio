"use client";

import { NavigateBackBtn } from "@/ui/components/button";
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
      <NavigateBackBtn />
      <MainHeader title="Project Management System" />
      <PageContainer>
        <SectionWrapper title="TECHNOLOGIES">
          <MainChip techStack={techStack} />
        </SectionWrapper>
        <SectionWrapper title="ABOUT">
          <div className="project-about__container">
            <p>
              The Project Management System is an internal system designed to help track project
              timelines and progress, aiming to reduce delays and improve overall task completion
              efficiency.
            </p>
            <p>
              I was involved in the full-stack development for this project. In collaboration with
              the development team, I was responsible for designing and setting up the database
              schema, developing UI components and layout using React, and integrating the frontend,
              backend, and database. Tailwind was chosen as the CSS framework for its flexibility
              and highly customizable styling. The backend was built using Node with Express for its
              efficiency and scalability.
            </p>
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

export default ProjectManagementSystem;
