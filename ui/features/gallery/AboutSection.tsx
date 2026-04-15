import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div id="gallery-about">
      <p className="gallery-about__title">About</p>
      <p className="gallery-about__description">
        A hobbyist capturing everyday moments. Based in Kuala Lumpur.
      </p>
      <Link href="https://unsplash.com/@yitmeng_w" target="_blank" className="group">
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          style={{ width: "12px", height: "12px" }}
        />
        <p>more photos</p>
        <span />
      </Link>
    </div>
  );
};

export default AboutSection;
