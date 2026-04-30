import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { SOCIAL_LINKS } from "@/shared/data/socialLink";
import { isSafeUrl } from "@/shared/utils/url";

interface SocialLinkProps {
  className?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ className = "" }) => (
  <div id="social-link__container" className={className}>
    {SOCIAL_LINKS.filter((item) => isSafeUrl(item.href)).map((item) => (
      <Link key={item.label} href={item.href} target="_blank" className="group">
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
