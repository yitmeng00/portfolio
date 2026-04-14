"use client";

import { motion, useCycle } from "motion/react";
import { ReactNode } from "react";

import MainMenu from "@/ui/components/MainMenu";
import { MenuToggle } from "@/ui/components/MenuToggle";

interface ClientProviderProps {
  children: ReactNode;
}

const ClientProvider = ({ children }: ClientProviderProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const handleToggleOpen = () => {
    toggleOpen();
  };

  return (
    <>
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        <MainMenu onToggleOpen={handleToggleOpen} />
        <MenuToggle isOpen={isOpen} onToggleOpen={handleToggleOpen} />
      </motion.nav>
      {children}
    </>
  );
};

export default ClientProvider;
