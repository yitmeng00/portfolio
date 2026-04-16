import { TIMELINE_DATA } from "@/shared/data/timeline";

const WorkTimeline: React.FC = () => {
  return (
    <div className="timeline__container">
      <div className="timeline__content-wrapper">
        {TIMELINE_DATA.map((item, i) => (
          <div key={i} className="timeline__item">
            <div className="timeline__dot" />
            <p className="timeline__role">{item.role}</p>
            <p className="timeline__company">{item.company}</p>
            <p className="timeline__period">{item.period}</p>
            <div className="timeline__project-wrapper">
              {item.projects.map((proj, j) => (
                <span key={j} className="timeline__project">
                  {proj}
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
