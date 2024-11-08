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
        <p className="header__sub-heading">
          I’m a full-stack developer based in Kuala Lumpur, focused on full-stack web development.
        </p>
        <div className="header__icon-wrapper">
          <Link href={"https://www.linkedin.com/in/yitmengwong/"}>
            <LinkedInIcon
              fontSize="large"
              sx={{
                ":hover": {
                  color: "#504538",
                },
              }}
            />
          </Link>
          <Link href={"https://github.com/yitmeng00"}>
            <GitHubIcon
              fontSize="large"
              sx={{
                ":hover": {
                  color: "#504538",
                },
              }}
            />
          </Link>
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
