const SKELETON_ITEMS = [1, 2, 3, 4];

const WorkTimelineSkeleton: React.FC = () => {
  return (
    <div className="timeline__container">
      <div className="timeline__content-wrapper">
        {SKELETON_ITEMS.map((i) => (
          <div key={i} className="timeline__item">
            <div className="timeline__skeleton-dot" />
            <div className="timeline__skeleton-role" />
            <div className="timeline__skeleton-company" />
            <div className="timeline__skeleton-period" />
            <div className="timeline__project-wrapper">
              <div className="timeline__skeleton-tag" />
              <div className="timeline__skeleton-tag timeline__skeleton-tag--short" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkTimelineSkeleton;
