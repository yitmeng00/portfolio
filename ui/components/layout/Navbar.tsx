import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar: React.FC = () => {
  return (
    <>
      <section className="navbar__container">
        <div className="navbar__menu-wrapper">
          <Link href="/portfolio" className="navbar__menu-item">
            <h2>Home</h2>
          </Link>
          <Link href="/portfolio/about" className="navbar__menu-item">
            <h2>About</h2>
          </Link>
          <div className="navbar__footer">
            <Link href={"https://www.linkedin.com/in/yitmengwong/"}>
              <LinkedInIcon fontSize="large" />
            </Link>
            <Link href={"https://github.com/yitmeng00"}>
              <GitHubIcon fontSize="large" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
