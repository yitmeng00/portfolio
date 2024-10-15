import { skillData } from "@/shared/data/skill";
import SectionWrapper from "@/ui/components/SectionWrapper";
import Chip from "@mui/material/Chip";

const Skill: React.FC = () => {
  return (
    <SectionWrapper title="TECH STACK">
      {skillData.map((skill) => (
        <div key={skill.id} className="skill__wrapper">
          <h6>{skill.category.toUpperCase()}</h6>
          <div className="skill__chip-wrapper">
            {skill.techstack.map((tech, index) => (
              <div key={index}>
                <Chip label={tech} variant="outlined" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default Skill;
