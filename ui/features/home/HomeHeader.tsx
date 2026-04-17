import { SocialLink } from "@/ui/components";

import HomeHeaderBackground from "./HomeHeaderBackground";

const HomeHeader: React.FC = () => {
  return (
    <header id="home-header__container">
      <HomeHeaderBackground />
      <div className="header__heading-wrapper">
        <h1 className="home-header-heading">
          Hello, <span>Yit Meng</span> here
        </h1>
        <h1 className="home-header-heading">
          but you can call me <span>Ivan</span>
        </h1>
        <p className="header__sub-heading">
          A Full Stack Software Engineer (AWS Certified) focused on scalable system design and
          advancing toward a Solution Architect role.
        </p>
        <SocialLink />
      </div>
    </header>
  );
};

export default HomeHeader;
