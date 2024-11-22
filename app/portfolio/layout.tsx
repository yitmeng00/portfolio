"use client";

import { Footer } from "@/ui/components/layout";
import { ReactNode, useEffect, useState } from "react";
import { motion, useScroll, useCycle } from "motion/react";
import MainMenu from "@/ui/components/MainMenu";
import { MenuToggle } from "@/ui/components/MenuToggle";

export default function HomeLayout({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Mark the component as hydrated once it is rendered on the client
    setHydrated(true);
  }, []);

  const handleToggleOpen = () => {
    toggleOpen();
  };

  if (!hydrated) {
    // Avoid rendering motion.nav until client-side hydration is complete
    return null;
  }

  return (
    <>
      <motion.div className="main__progress-bar" style={{ scaleX: scrollYProgress }} />
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        <MainMenu onToggleOpen={handleToggleOpen} />
        <MenuToggle isOpen={isOpen} onToggleOpen={handleToggleOpen} />
      </motion.nav>
      {children}
      <Footer />
    </>
  );
}
