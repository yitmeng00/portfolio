import Link from "next/link";

import { projectData } from "@/shared/data/project";

const Project: React.FC = () => {
  return (
    <div className="project__wrapper" id="project__section">
      <div>
        {projectData.map((project) => (
          <div className="project__list-item-wrapper" key={project.id}>
            <Link href={`/portfolio/${project.url}`}>
              <div className="project__list-item">
                <p>{project.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
