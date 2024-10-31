"use client";

import PageContainer from "@/ui/components/PageContainer";
import { About, Skill, Project, Journey } from "@/ui/features/about";
import { HomeHeader } from "@/ui/features/home";
import { motion, useScroll } from "framer-motion";

const HomePage = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div className="main__progress-bar" style={{ scaleX: scrollYProgress }} />
      <HomeHeader />
      <PageContainer>
        <About />
        <Journey />
        <Skill />
        <Project />
      </PageContainer>
    </>
  );
};

export default HomePage;
