"use client";

import { NavigateBackBtn } from "@/ui/components/button";
import { MainHeader } from "@/ui/components/layout";
import MainChip from "@/ui/components/MainChip";
import PageContainer from "@/ui/components/PageContainer";
import SectionWrapper from "@/ui/components/SectionWrapper";

const IoTMonitoringSystem = () => {
  const techStack = ["HTML", "CSS", "Bootstrap", "JavaScript", "MongoDB", "WebSocket"];

  return (
    <>
      <NavigateBackBtn />
      <MainHeader title="IoT Monitoring System" />
      <PageContainer>
        <h3>A real-time monitoring system for environmental conditions.</h3>
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
              I focused on front-end and database development for this project. I was responsible
              for designing and setting up the database schema, as well as developing the UI
              dashboard using HTML and Bootstrap, which provided ready-made components that helped
              save development time and ensured responsiveness. I also connected front-end to the
              WebSocket server to receive real-time sensor data.
            </p>
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

export default IoTMonitoringSystem;
