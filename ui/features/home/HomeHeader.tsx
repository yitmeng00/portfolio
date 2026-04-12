import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

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
      <Image
        src="/assets/code-typing-illustration.png"
        alt="Header Image"
        width={350}
        height={350}
        className="header__img"
        loading="eager"
      />
    </header>
  );
};

export default HomeHeader;
