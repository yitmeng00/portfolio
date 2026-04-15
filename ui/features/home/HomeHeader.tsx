import SocialLink from "@/ui/components/SocialLink";

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
        <SocialLink />
      </div>
    </header>
  );
};

export default HomeHeader;
