import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
  return (
    <footer>
      <FontAwesomeIcon icon={faCopyright} />
      <p> 2024 Ivan Wong. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
