"use client";

import { MainHeader } from "@/ui/components/layout";
import MainChip from "@/ui/components/MainChip";
import PageContainer from "@/ui/components/PageContainer";
import SectionWrapper from "@/ui/components/SectionWrapper";

const EClaimSystem = () => {
  const techStack = ["HTML", "CSS", "JavaScript", "AJAX", "PHP", "MySQL"];

  return (
    <>
      <MainHeader title="E-Claim System" />
      <PageContainer>
        <h3>Streamlined the claim process with 75% time savings.</h3>
        <SectionWrapper title="TECHNOLOGIES">
          <MainChip techStack={techStack} />
        </SectionWrapper>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-0">
          <SectionWrapper title="ROLE">
            <p>Full-stack, Database</p>
          </SectionWrapper>
          <SectionWrapper title="RESPONSIBILITIES">
            <p>
              System Architecture Design, Environment Setup, UI Components Styling and Development,
              API Development and Integration, Performance Optimization, Responsive Design, Database
              Schema Design and Setup, Database Administration and Optimization, User Acceptance
              Testing
            </p>
          </SectionWrapper>
        </div>
        <SectionWrapper title="ABOUT">
          <div className="project-about__container">
            <p>
              The core objective of E-Claim System to reduce the time and complexity associated with
              manual claim submissions and approvals. By automating the process, the system helps
              increase efficiency and accuracy, ensuring that claims are processed more quickly.
            </p>
            <p>
              I was involved in the entire software development life cycle as the lead developer. In
              collaboration with the team, the process began with gathering requirements through
              meetings with internal departments, followed by creating software requirement
              specification documents, designing the system architecture, designing and setting up
              the database schema, and developing the UI using HTML. Bootstrap was used as the CSS
              framework for its ready-made components, which helped save development time and
              ensured responsiveness. I also worked on integrating the frontend, backend, and
              database, and conducted user acceptance testing after development.
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
