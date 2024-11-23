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
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-0">
          <SectionWrapper title="ROLE">
            <p>Full-stack, Database, Mobile</p>
          </SectionWrapper>
          <SectionWrapper title="RESPONSIBILITIES">
            <p>
              Environment Setup, UI Components Styling and Development, API Development and
              Integration, Performance Optimization, Responsive Design, Database Schema Design and
              Setup, Database Administration and Optimization, WebSocket Setup, Mobile Development,
              RFID SDK Integration, Testing
            </p>
          </SectionWrapper>
        </div>
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
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

export default InventoryManagementSystem;
