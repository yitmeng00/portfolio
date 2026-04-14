import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <FontAwesomeIcon icon={faCopyright} />
      <p> {currentYear} Ivan Wong. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
