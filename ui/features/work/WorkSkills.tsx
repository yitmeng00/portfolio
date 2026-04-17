import { SKILLS_DATA } from "@/shared/data/skills";

const WorkSkills: React.FC = () => {
  return (
    <section>
      <h2 className="section-title work__section-title">Skills</h2>
      <div className="skills__grid">
        {SKILLS_DATA.map((group) => (
          <div key={group.category} className="skills__group">
            <p className="skills__category">{group.category}</p>
            <div className="skills__tags">
              {group.items.map((skill) => (
                <span key={skill} className="skills__tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSkills;
