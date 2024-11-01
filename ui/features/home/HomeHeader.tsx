import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const HomeHeader: React.FC = () => {
  return (
    <header id="home-header__container">
      <div className="header__heading-wrapper">
        <h2 className="header__main-heading">
          Hello, my name is <span>Ivan</span>.
        </h2>
        <p className="header__sub-heading">
          I’m a full-stack developer based in Kuala Lumpur, focused on full-stack web development.
        </p>
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
        sizes="100vw"
        style={{
          width: "25%",
          height: "auto",
        }}
        priority={true}
        className="header__img"
      />
    </header>
  );
};

export default HomeHeader;
