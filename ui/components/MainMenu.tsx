import { motion } from "motion/react";
import Link from "next/link";

import SocialLink from "./SocialLink";

const navbar = {
  open: (height: number = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 50px) 50px)`,
    transition: {
      type: "spring" as const,
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 50px) 50px)",
    transition: {
      delay: 0.2,
      type: "spring" as const,
      stiffness: 400,
      damping: 40,
    },
  },
};

interface MainMenuProps {
  onToggleOpen: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onToggleOpen }) => (
  <motion.div initial={false} variants={navbar} className="navbar__container">
    <div className="navbar__menu-wrapper">
      <Link href="/" className="navbar__menu-item" onClick={onToggleOpen}>
        <h1>Home</h1>
      </Link>
      <Link href="/gallery" className="navbar__menu-item" onClick={onToggleOpen}>
        <h1>Gallery</h1>
      </Link>
      <SocialLink />
    </div>
  </motion.div>
);

export default MainMenu;
