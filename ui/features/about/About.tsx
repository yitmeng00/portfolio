import { aboutData } from "@/shared/data/about";

const About: React.FC = () => {
  return (
    <section className="about__container">
      {aboutData.map((paragraph, index) => (
        <p key={index} className="about__paragraph-item">
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default About;
