import { projectData } from "@/shared/data/project";
import SectionWrapper from "@/ui/components/SectionWrapper";

const Project: React.FC = () => {
  return (
    <SectionWrapper title="PROJECTS INVOLVED">
      <div className="project__wrapper">
        <ul>
          {projectData.map((project) => (
            <li key={project.id}>
              <p>{project.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default Project;
