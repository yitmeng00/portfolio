import { skillData } from "@/shared/data/skill";
import SectionWrapper from "@/ui/components/SectionWrapper";

const Skill: React.FC = () => {
  return (
    <SectionWrapper title="TECH STACK">
      {skillData.map((skill) => (
        <div key={skill.id} className="skill__wrapper">
          <div className="skill__chip-wrapper">
            {skill.techstack.map((tech, index) => (
              <div key={index}>
                <span className="text-primary-600">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default Skill;
