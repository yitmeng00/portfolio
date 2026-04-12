import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import Link from "next/link";
import * as React from "react";

const navbar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 50px) 50px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 50px) 50px)",
    transition: {
      delay: 0.2,
      type: "spring",
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
      <Link href="/portfolio" className="navbar__menu-item" onClick={onToggleOpen}>
        <h1>Portfolio</h1>
      </Link>
      <div className="navbar__footer-wrapper">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
          <Link href={"https://www.linkedin.com/in/yitmengwong/"}>
            <FontAwesomeIcon icon={faSquareLinkedin} style={{ width: "24px", height: "24px" }} />
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
          <Link href={"https://github.com/yitmeng00"}>
            <FontAwesomeIcon icon={faGithub} style={{ width: "24px", height: "24px" }} />
          </Link>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default MainMenu;
