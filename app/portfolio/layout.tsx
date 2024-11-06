"use client";

import { Footer } from "@/ui/components/layout";
import { ReactNode } from "react";
import { motion, useScroll } from "framer-motion";

export default function HomeLayout({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div className="main__progress-bar" style={{ scaleX: scrollYProgress }} />
      {children}
      <Footer />
    </>
  );
}
