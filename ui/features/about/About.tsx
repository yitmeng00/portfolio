import Link from "@mui/material/Link";

const About: React.FC = () => {
  return (
    <section className="about__container">
      <p className="about__paragraph-item">
        Hey there! Exploring and learning new things has been my passion forever. For me, the best
        part of being a developer is being able to craft solutions that actually make a difference.
        Whether it’s developing a feature that improves user experience or building something from
        scratch that solves a real-life problem, it’s all about using tech as a modern-day magic
        wand to make life easier, more efficient, and more convenient.
      </p>
      <p className="about__paragraph-item">
        When I’m not coding, you’ll likely find me with a camera in hand.{" "}
        <span>
          <Link
            href="https://unsplash.com/@yitmeng_w"
            underline="always"
            sx={{ color: "#504538", textDecorationColor: "#504538" }}
          >
            Photography
          </Link>
        </span>{" "}
        is my zen zone—it’s where I get to capture life’s beautiful moments in pixels.
      </p>
      <p className="about__paragraph-item">
        <span className="about__paragraph-item-heading">FUN FACT:</span> I have a quirky habit of
        documenting my life. I love capturing everything in my album—the shops I visit, the food I
        eat, the streets I walk, and even the daily items I buy. It’s my way of turning little
        moments into lasting memories!
      </p>
    </section>
  );
};

export default About;
