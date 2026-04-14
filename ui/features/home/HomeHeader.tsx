import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import Link from "next/link";

import HomeHeaderBackground from "./HomeHeaderBackground";

const HomeHeader: React.FC = () => {
  return (
    <header id="home-header__container">
      <HomeHeaderBackground />
      <div className="header__heading-wrapper">
        <h4 className="header__main-heading">
          Hello, <span>Yit Meng</span> here
        </h4>
        <h4 className="header__main-heading">
          but you can call me <span>Ivan</span>
        </h4>
        <p className="header__sub-heading">
          A Full Stack Software Engineer (AWS Certified) focused on scalable system design and
          advancing toward a Solution Architect role.
        </p>
        <div className="header__icon-wrapper">
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
    </header>
  );
};

export default HomeHeader;
