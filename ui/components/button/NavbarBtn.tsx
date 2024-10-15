import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Navbar } from "../layout";
import { usePathname } from "next/navigation";

const NavbarBtn: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    setIsNavbarOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Disable scrolling when the navbar is open
    if (isNavbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      // Cleanup when the component unmounts
      document.body.style.overflow = "";
    };
  }, [isNavbarOpen]);

  return (
    <>
      <section className="navbar__collapsible-btn-wrapper" onClick={handleToggle}>
        <button
          className={`navbar__collapsible-btn ${
            isNavbarOpen ? "bg-primary-200" : "bg-primary-300"
          }`}
        >
          {isNavbarOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
      </section>
      {isNavbarOpen && <Navbar />}
    </>
  );
};

export default NavbarBtn;
