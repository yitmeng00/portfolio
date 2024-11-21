import * as React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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

const MainMenu: React.FC = () => (
  <motion.div variants={navbar} className="navbar__container">
    <div className="navbar__menu-wrapper">
      <Link href="/portfolio" className="navbar__menu-item">
        <h1>Home</h1>
      </Link>
      <Link href="/portfolio/about" className="navbar__menu-item">
        <h1>About</h1>
      </Link>
      <div className="navbar__footer-wrapper">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
          <Link href={"https://www.linkedin.com/in/yitmengwong/"}>
            <LinkedInIcon fontSize="large" />
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
          <Link href={"https://github.com/yitmeng00"}>
            <GitHubIcon fontSize="large" />
          </Link>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default MainMenu;
