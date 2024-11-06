"use client";

import { NavigateBackBtn } from "@/ui/components/button";
import { MainHeader } from "@/ui/components/layout";
import MainChip from "@/ui/components/MainChip";
import PageContainer from "@/ui/components/PageContainer";
import SectionWrapper from "@/ui/components/SectionWrapper";

const IoTMonitoringSystem = () => {
  const techStack = ["HTML", "CSS", "Bootstrap", "JavaScript", "MongoDB", "Web Socket"];

  return (
    <>
      <NavigateBackBtn />
      <MainHeader title="IoT Monitoring System" />
      <PageContainer>
        <SectionWrapper title="TECHNOLOGIES">
          <MainChip techStack={techStack} />
        </SectionWrapper>
        <SectionWrapper title="ABOUT">
          <div className="project-about__container">
            <p>
              The IoT Monitoring System is designed to manage and visualize environmental data, such
              as humidity levels, soil quality, and temperature, collected from various sensors. The
              system’s core functionality is to monitor and display real-time data, enabling users
              to make informed decisions based on the current conditions.
            </p>
            <p>
              I focused on the front-end development for this project. In collaboration with the
              development team, I design, set up, and manage the MongoDB database, develop the UI
              using HTML with Bootstrap, and integrate the frontend with the backend APIs and
              WebSocket server to retrieve data, enabling seamless real-time updates.
            </p>
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

export default IoTMonitoringSystem;
