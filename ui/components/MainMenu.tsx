import Link from "next/link";

import { menuItems } from "@/shared/data/menu";

import SocialLink from "./SocialLink";

interface MainMenuProps {
  onToggleOpen: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onToggleOpen }) => (
  <div className="navbar__container">
    <div className="navbar__menu-wrapper">
      <div className="navbar__menu">
        {menuItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="navbar__menu-item group"
            onClick={onToggleOpen}
          >
            <div className="navbar__menu-item-info">
              <p>{String(index + 1).padStart(2, "0")}</p>
              <h1>
                {item.label}
                <span />
              </h1>
            </div>
          </Link>
        ))}
        <SocialLink className="justify-center mt-5" />
      </div>
    </div>
  </div>
);

export default MainMenu;
