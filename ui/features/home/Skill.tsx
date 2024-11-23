import { skillData } from "@/shared/data/skill";
import SectionWrapper from "@/ui/components/SectionWrapper";
import Chip from "@mui/material/Chip";

const Skill: React.FC = () => {
  return (
    <SectionWrapper title="TECH STACK">
      {skillData.map((skill) => (
        <div key={skill.id} className="skill__wrapper">
          <div className="skill__chip-wrapper">
            {skill.techstack.map((tech, index) => (
              <div key={index}>
                <Chip
                  label={tech}
                  variant="outlined"
                  sx={{
                    borderColor: "#504538",
                    fontFamily: "var(--font-newsreader)",
                    color: "#504538",
                    fontWeight: 600,
                    boxShadow: "rgba(95,85,74,0.75) 1.5px 1.5px 3px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default Skill;
