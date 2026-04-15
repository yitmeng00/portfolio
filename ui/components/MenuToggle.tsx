import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MenuToggleProps {
  isOpen: boolean;
  onToggleOpen: () => void;
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ isOpen, onToggleOpen }) => {
  const ICON_SIZE = "30px";

  return (
    <button onClick={onToggleOpen} className={`navbar__menu-toggle-btn ${isOpen ? "open" : ""}`}>
      <FontAwesomeIcon
        icon={isOpen ? faXmark : faBars}
        style={{ width: ICON_SIZE, height: ICON_SIZE }}
      />
    </button>
  );
};
