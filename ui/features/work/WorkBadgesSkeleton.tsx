const SKELETON_BADGES = [
  { titleSize: "md" },
  { titleSize: "lg" },
  { titleSize: "sm" },
  { titleSize: "md" },
  { titleSize: "lg" },
  { titleSize: "md" },
];

const WorkBadgesSkeleton: React.FC = () => {
  return (
    <section>
      <div className="h-7 w-20 rounded bg-primary-100 mb-6" style={{ animation: "shimmer 1.5s ease-in-out infinite" }} />
      <div className="badges__grid">
        {SKELETON_BADGES.map((badge, i) => (
          <div key={i} className="badges__card">
            <div className="badges__image-wrapper">
              <div className="badges__skeleton-image" />
            </div>
            <div className={`badges__skeleton-title badges__skeleton-title--${badge.titleSize}`} />
            <div className="badges__skeleton-title badges__skeleton-title--short" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkBadgesSkeleton;
