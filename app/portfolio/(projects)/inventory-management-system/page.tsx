"use client";

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
    "Android",
    "Java",
  ];

  return (
    <>
      <MainHeader title="Inventory Management System" />
      <PageContainer>
        <h3>RFID-driven digital solution for accurate stock counting.</h3>
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
              the development team, I designed and set up the database schema, developed the UI
              components and layout using React, and chose Tailwind as the CSS framework for its
              flexibility and highly customizable styling. I also built backend APIs, integrated the
              frontend, backend, and database, visualized data with Chart.js, set up the WebSocket
              server, designed and developed the mobile app UI using Java, and integrated the RFID
              scanner SDK with the mobile app.
            </p>
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

export default InventoryManagementSystem;
