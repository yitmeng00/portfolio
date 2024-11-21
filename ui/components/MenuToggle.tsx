import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface MenuToggleProps {
  isOpen: boolean;
  onToggleOpen: () => void;
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ isOpen, onToggleOpen }) => (
  <motion.button
    initial={false}
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3 }}
    onClick={onToggleOpen}
    className="navbar__menu-toggle-btn"
  >
    {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
  </motion.button>
);
