import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { socialLinks } from "@/shared/data/socialLink";

interface SocialLinkProps {
  className?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ className = "" }) => (
  <div id="social-link__container" className={className}>
    {socialLinks.map((item) => (
      <Link
        key={item.label}
        href={item.href}
        target="_blank"
        className="group flex items-center gap-2"
      >
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          style={{ width: "13px", height: "13px" }}
        />
        <p>{item.label}</p>
        <span />
      </Link>
    ))}
  </div>
);

export default SocialLink;
