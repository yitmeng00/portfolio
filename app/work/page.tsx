"use client";

import { lazy, Suspense } from "react";

import { PageContainer } from "@/ui/components";
import { MainHeader } from "@/ui/components/layout";
import { WorkTimelineSkeleton, WorkSkillsSkeleton, WorkBadgesSkeleton } from "@/ui/features/work";

const WorkTimeline = lazy(() => import("@/ui/features/work/WorkTimeline"));
const WorkSkills = lazy(() => import("@/ui/features/work/WorkSkills"));
const WorkBadges = lazy(() => import("@/ui/features/work/WorkBadges"));
const WorkProjects = lazy(() => import("@/ui/features/work/WorkProjects"));

const WorkPage = () => {
  return (
    <PageContainer className="py-20 xl:px-64 md:px-32 px-10">
      <div>
        <MainHeader title="WORK" />
        <p className="work__desc">
          Software Architect with 4+ years of experience architecting and delivering
          enterprise-grade systems across the web and cloud. Proven track record of owning solution
          design end-to-end — from stakeholder discovery and system architecture through
          containerised deployment, performance optimization, and DevOps automation. AWS Certified
          Solutions Architect – Associate, with solid cloud architecture foundations and practical
          exposure to production monitoring via Amazon CloudWatch. Driven by a genuine passion for
          translating complex business challenges into scalable, resilient technical solutions that
          deliver measurable outcomes.
        </p>
      </div>
      <Suspense fallback={<WorkTimelineSkeleton />}>
        <WorkTimeline />
      </Suspense>
      <Suspense fallback={<WorkSkillsSkeleton />}>
        <WorkSkills />
      </Suspense>
      <Suspense fallback={null}>
        <WorkProjects />
      </Suspense>
      <Suspense fallback={<WorkBadgesSkeleton />}>
        <WorkBadges />
      </Suspense>
    </PageContainer>
  );
};

export default WorkPage;
