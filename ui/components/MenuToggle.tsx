import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

interface MenuToggleProps {
  isOpen: boolean;
  onToggleOpen: () => void;
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ isOpen, onToggleOpen }) => {
  const ICON_SIZE = "35px";

  return (
    <motion.button
      initial={false}
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3 }}
      onClick={onToggleOpen}
      className="navbar__menu-toggle-btn"
    >
      {isOpen ? (
        <FontAwesomeIcon icon={faXmark} style={{ width: ICON_SIZE, height: ICON_SIZE }} />
      ) : (
        <FontAwesomeIcon icon={faBars} style={{ width: ICON_SIZE, height: ICON_SIZE }} />
      )}
    </motion.button>
  );
};
