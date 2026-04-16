import Link from "next/link";

const About: React.FC = () => {
  return (
    <section className="about__container">
      <p className="about__paragraph-item">
        Hey there! Exploring and learning new things has been my passion forever. For me, the best
        part of being an engineer and developer is being able to craft solutions that actually make
        a difference. Whether it’s developing a feature that improves user experience or building a
        solution that solves a real-life problem, it’s all about using tech as a modern-day magic
        wand to make life easier, more efficient, and more convenient.
      </p>
      <p className="about__paragraph-item">
        When I’m not coding, you’ll likely find me with a camera in hand. Photography is my zen
        zone—it’s where I get to capture life’s random moments in pixels. When I need to reset, I
        turn to movement. I stay active with running, hiking, and sports like tennis, badminton, and
        swimming—it’s how I clear my mind and recharge. And beyond all that, I look for ways to
        contribute where I can. Volunteering adds a different kind of perspective—one that reminds
        me that the most meaningful impact often happens off the screen.
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
