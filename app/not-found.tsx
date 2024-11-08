import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const NotFound = () => {
  return (
    <section className="not-found__container">
      <SentimentVeryDissatisfiedIcon sx={{ color: "#504538", fontSize: 72 }} />
      <h2 className="not-found__main-heading">Page Not Found</h2>
      <h6 className="not-found__sub-heading">
        We can&apos;t seem to find the page you&apos;re looking for.
      </h6>
    </section>
  );
};

export default NotFound;
