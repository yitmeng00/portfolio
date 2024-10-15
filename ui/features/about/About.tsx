import { aboutData } from "@/shared/data/about";

const About: React.FC = () => {
  return (
    <section className="about__container">
      {aboutData.map((paragraph, index) => (
        <h6 key={index}>{paragraph}</h6>
      ))}
    </section>
  );
};

export default About;
