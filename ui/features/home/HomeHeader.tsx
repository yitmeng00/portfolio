import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const HomeHeader: React.FC = () => {
  return (
    <header id="home-header__container">
      <div className="header__heading-wrapper">
        <h4 className="header__main-heading">
          Hello, my name is <span>Ivan</span>.
        </h4>
        <h6 className="header__sub-heading">
          I am a full-stack developer based in KL with a passion for building impactful and scalable
          software, and web application.
        </h6>
        <div className="header__icon-wrapper">
          <Link href={"https://www.linkedin.com/in/yitmengwong/"}>
            <LinkedInIcon fontSize="large" />
          </Link>
          <Link href={"https://github.com/yitmeng00"}>
            <GitHubIcon fontSize="large" />
          </Link>
        </div>
      </div>
      <Image
        src="/assets/code-typing-illustration.png"
        alt="Header Image"
        width={300}
        height={300}
        priority={true}
        className="header__img"
      />
    </header>
  );
};

export default HomeHeader;
