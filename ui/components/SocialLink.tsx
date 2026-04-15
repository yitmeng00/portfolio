import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const SocialLink: React.FC = () => (
  <div id="social-link__container">
    <Link href={"https://www.linkedin.com/in/yitmengwong/"}>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ width: "13px", height: "13px" }} />
      <p>LinkedIn</p>
    </Link>
    <Link href={"https://github.com/yitmeng00"}>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ width: "13px", height: "13px" }} />
      <p>GitHub</p>
    </Link>
  </div>
);

export default SocialLink;
