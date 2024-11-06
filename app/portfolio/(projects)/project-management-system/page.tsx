"use client";

import { NavigateBackBtn } from "@/ui/components/button";
import { MainHeader } from "@/ui/components/layout";
import MainChip from "@/ui/components/MainChip";
import PageContainer from "@/ui/components/PageContainer";
import SectionWrapper from "@/ui/components/SectionWrapper";

const ProjectManagementSystem = () => {
  const techStack = [
    "React",
    "Redux",
    "JavaScript",
    "Tailwind",
    "HTML",
    "CSS",
    "Node",
    "Express",
    "Sequelize",
    "MySQL",
    "Redis",
    "Docker",
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
              I was involved in full-stack development for this project. In collaboration with the
              development team, I designed, set up, and managed the MySQL database, developed the UI
              using React with JavaScript and Tailwind CSS, integrated with backend APIs built with
              Node and the Express framework, and set up Docker with Redis to ensure smooth
              deployment and scalability.
            </p>
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

export default ProjectManagementSystem;
