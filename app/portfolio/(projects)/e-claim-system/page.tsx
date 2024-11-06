"use client";

import { NavigateBackBtn } from "@/ui/components/button";
import { MainHeader } from "@/ui/components/layout";
import MainChip from "@/ui/components/MainChip";
import PageContainer from "@/ui/components/PageContainer";
import SectionWrapper from "@/ui/components/SectionWrapper";

const EClaimSystem = () => {
  const techStack = ["HTML", "CSS", "JavaScript", "AJAX", "PHP", "MySQL"];

  return (
    <>
      <NavigateBackBtn />
      <MainHeader title="E-Claim System" />
      <PageContainer>
        <SectionWrapper title="TECHNOLOGIES">
          <MainChip techStack={techStack} />
        </SectionWrapper>
        <SectionWrapper title="ABOUT">
          <div className="project-about__container">
            <p>
              The E-Claim System is an internal system designed to streamline and digitalize the
              claims process, aiming to reduce the time and complexity associated with manual claim
              submissions and approvals. By automating the process, the system helps increase
              efficiency and accuracy, ensuring that claims are processed more quickly.
            </p>
            <p>
              I was involved in the entire software development life cycle, including leading the
              development team. In collaboration with the team, the process began with gathering
              requirements through meetings with internal departments, followed by designing the
              system architecture, setting up and managing the MySQL database, developing the UI
              using HTML with Bootstrap, integrating with the backend using JavaScript and PHP, and
              conducting user acceptance testing.
            </p>
            <p>
              Upon successful development, the E-Claim System was deployed on a cloud server. The
              impact of this system was reducing the claim process time by 75%, from a lengthy
              4-week process to a mere 1-week turnaround.
            </p>
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

export default EClaimSystem;
