import { TIMELINE_DATA } from "@/shared/data/timeline";

const WorkTimeline: React.FC = () => {
  return (
    <div className="timeline__container">
      <div className="timeline__content-wrapper">
        {TIMELINE_DATA.map((item, index) => (
          <div key={index} className="timeline__item">
            <div className="timeline__dot" />
            <p className="timeline__role">{item.role}</p>
            <p className="timeline__company">{item.company}</p>
            <p className="timeline__period">{item.period}</p>
            <div className="timeline__project-wrapper">
              {item.projects.map((project, i) => (
                <span key={i} className="timeline__project">
                  {project}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkTimeline;
