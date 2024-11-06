"use client";

import { NavigateBackBtn } from "@/ui/components/button";
import { MainHeader } from "@/ui/components/layout";
import MainChip from "@/ui/components/MainChip";
import PageContainer from "@/ui/components/PageContainer";
import SectionWrapper from "@/ui/components/SectionWrapper";

const InventoryManagementSystem = () => {
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
    "Chart.js",
  ];

  return (
    <>
      <NavigateBackBtn />
      <MainHeader title="Inventory Management System" />
      <PageContainer>
        <SectionWrapper title="TECHNOLOGIES">
          <MainChip techStack={techStack} />
        </SectionWrapper>
        <SectionWrapper title="ABOUT">
          <div className="project-about__container">
            <p>
              The Inventory Management System is an internal system designed to address the critical
              issue of inefficient stock counting and management, which often results in inaccurate
              stock levels. This system is designed to streamline and automate stock tracking,
              improving inventory accuracy and reducing human error. The project comprises two main
              components: a web application focused on data management, and a mobile app focused on
              stock counting with RFID handheld scanner.
            </p>
            <p>
              I was involved in the full-stack development for this project. In collaboration with
              the development team, I designed, set up, and managed the MySQL database, developed
              the UI using React with JavaScript and Tailwind CSS, visualized data with Chart.js,
              integrated with backend APIs built with Node and the Express framework, set up the
              WebSocket server, designed and developed the mobile app UI using Java, and integrated
              the RFID scanner SDK with the mobile app.
            </p>
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

export default InventoryManagementSystem;
