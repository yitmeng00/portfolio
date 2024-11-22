"use client";

import { ReactNode } from "react";
import { motion, useScroll, useCycle } from "motion/react";
import MainMenu from "@/ui/components/MainMenu";
import { MenuToggle } from "@/ui/components/MenuToggle";

interface ClientProviderProps {
  children: ReactNode;
}

const ClientProvider = ({ children }: ClientProviderProps) => {
  const { scrollYProgress } = useScroll();
  const [isOpen, toggleOpen] = useCycle(false, true);

  const handleToggleOpen = () => {
    toggleOpen();
  };

  return (
    <>
      <motion.div className="main__progress-bar" style={{ scaleX: scrollYProgress }} />
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        <MainMenu onToggleOpen={handleToggleOpen} />
        <MenuToggle isOpen={isOpen} onToggleOpen={handleToggleOpen} />
      </motion.nav>
      {children}
    </>
  );
};

export default ClientProvider;
