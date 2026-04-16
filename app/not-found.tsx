import { faFaceFrown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotFound = () => {
  return (
    <section className="not-found__container">
      <FontAwesomeIcon
        icon={faFaceFrown}
        style={{ width: "72px", height: "72px" }}
        color="#504538"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p>We can&apos;t seem to find the page you&apos;re looking for.</p>
    </section>
  );
};

export default NotFound;
