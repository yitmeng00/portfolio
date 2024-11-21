import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "motion/react";

const HomeHeader: React.FC = () => {
  return (
    <header id="home-header__container">
      <div className="header__heading-wrapper">
        <h4 className="header__main-heading">
          Hello, my name is <span>Ivan</span>.
        </h4>
        <p className="header__sub-heading">
          I’m a full-stack developer based in Kuala Lumpur, focused on full-stack web development.
        </p>
        <div className="header__icon-wrapper">
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
      <img
        src="/assets/code-typing-illustration.png"
        alt="Header Image"
        width="350rem"
        height="auto"
        className="header__img"
      />
    </header>
  );
};

export default HomeHeader;
