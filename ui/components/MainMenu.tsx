import Link from "next/link";

import SocialLink from "./SocialLink";

interface MainMenuProps {
  onToggleOpen: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onToggleOpen }) => (
  <div className="navbar__container">
    <div className="navbar__menu-wrapper">
      <Link href="/" className="navbar__menu-item" onClick={onToggleOpen}>
        <h1>Home</h1>
      </Link>
      <Link href="/gallery" className="navbar__menu-item" onClick={onToggleOpen}>
        <h1>Gallery</h1>
      </Link>
      <SocialLink />
    </div>
  </div>
);

export default MainMenu;
