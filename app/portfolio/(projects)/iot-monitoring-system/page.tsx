"use client";

import { MainHeader } from "@/ui/components/layout";
import MainChip from "@/ui/components/MainChip";
import PageContainer from "@/ui/components/PageContainer";
import SectionWrapper from "@/ui/components/SectionWrapper";

const IoTMonitoringSystem = () => {
  const techStack = ["HTML", "CSS", "Bootstrap", "JavaScript", "MongoDB", "WebSocket"];

  return (
    <>
      <MainHeader title="IoT Monitoring System" />
      <PageContainer>
        <h3>A real-time monitoring system for environmental conditions.</h3>
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
              Optimization, Responsive Design, WebSocket Connection, Testing
            </p>
          </SectionWrapper>
        </div>
        <SectionWrapper title="ABOUT">
          <div className="project-about__container">
            <p>
              The IoT Monitoring System is designed to manage and visualize environmental data, such
              as humidity levels, soil quality, and temperature, collected from various sensors. The
              system’s core functionality is to monitor and display real-time data, enabling users
              to make informed decisions based on the current conditions.
            </p>
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

export default IoTMonitoringSystem;
