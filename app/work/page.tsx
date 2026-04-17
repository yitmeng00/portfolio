"use client";

import { lazy, Suspense } from "react";

import { PageContainer } from "@/ui/components";
import { MainHeader } from "@/ui/components/layout";
import { WorkTimelineSkeleton } from "@/ui/features/work";

const WorkTimeline = lazy(() => import("@/ui/features/work/WorkTimeline"));

const WorkPage = () => {
  return (
    <PageContainer className="py-20 xl:px-64 md:px-32 px-10">
      <div>
        <MainHeader title="WORK" />
        <p className="work__desc">
          I&apos;m a Full Stack Software Engineer with 2+ years of experience delivering end-to-end
          web solutions, and 1.5 years specializing in frontend development. Proven track record of
          owning solution design from stakeholder discovery and system architecture through to
          deployment and performance optimization. AWS Certified Solutions Architect – Associate,
          with growing expertise in cloud infrastructure and system design. Currently focused on
          advancing into a Solution Architect role, with a passion for building efficient,
          real-world solutions that effectively bridge business needs with technical excellence.
        </p>
      </div>
      <Suspense fallback={<WorkTimelineSkeleton />}>
        <WorkTimeline />
      </Suspense>
    </PageContainer>
  );
};

export default WorkPage;
