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
              I focused on front-end and database development for this project. I was responsible
              for designing and setting up the database schema, as well as developing the UI using
              HTML. Bootstrap was chosen as the CSS framework for its ready-made components, which
              helped save development time and ensured responsiveness. I also integrated the
              frontend with backend APIs and the WebSocket server to retrieve data, enabling
              seamless real-time updates.
            </p>
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

export default IoTMonitoringSystem;
