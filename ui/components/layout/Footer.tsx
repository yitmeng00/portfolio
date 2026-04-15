import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <FontAwesomeIcon icon={faCopyright} style={{ width: "18px", height: "18px" }} />
      <p> {currentYear} Ivan Wong. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
