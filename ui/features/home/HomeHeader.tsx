import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const HomeHeader: React.FC = () => {
  return (
    <header id="home-header__container">
      <div className="header__heading-wrapper">
        <h3>
          Hello, my name is <span>Ivan</span>.
        </h3>
        <h5>
          I am a full-stack software engineer focused on developing impactful and scalable system,
          software, and web application.
        </h5>
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
