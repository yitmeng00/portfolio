"use client";

import { Footer } from "@/ui/components/layout";
import { ReactNode } from "react";
import { motion, useScroll, useCycle } from "motion/react";
import MainMenu from "@/ui/components/MainMenu";
import { MenuToggle } from "@/ui/components/MenuToggle";

export default function HomeLayout({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const [isOpen, toggleOpen] = useCycle(false, true);

  const handleToggleOpen = () => {
    toggleOpen();
  };

  return (
    <>
      <motion.div className="main__progress-bar" style={{ scaleX: scrollYProgress }} />
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        <MainMenu />
        <MenuToggle isOpen={isOpen} onToggleOpen={handleToggleOpen} />
      </motion.nav>
      {children}
      <Footer />
    </>
  );
}
