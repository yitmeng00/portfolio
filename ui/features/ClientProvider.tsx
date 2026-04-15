"use client";

import { useState, ReactNode } from "react";

import MainMenu from "@/ui/components/MainMenu";
import { MenuToggle } from "@/ui/components/MenuToggle";

interface ClientProviderProps {
  children: ReactNode;
}

const ClientProvider = ({ children }: ClientProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav className={isOpen ? "navbar open" : "navbar closed"}>
        <MainMenu onToggleOpen={handleToggleOpen} />
        <MenuToggle isOpen={isOpen} onToggleOpen={handleToggleOpen} />
      </nav>
      {children}
    </>
  );
};

export default ClientProvider;
