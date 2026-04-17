const SKELETON_GROUPS = [
  { tags: ["sm", "lg", "md", "sm", "lg", "md", "sm", "lg", "md"] },
  { tags: ["md", "sm", "lg", "sm", "md", "lg", "sm", "md"] },
  { tags: ["sm", "md", "lg"] },
  { tags: ["sm", "md", "sm", "md"] },
];

const WorkSkillsSkeleton: React.FC = () => {
  return (
    <section>
      <div className="h-7 w-24 rounded bg-primary-100 mb-6" style={{ animation: "shimmer 1.5s ease-in-out infinite" }} />
      <div className="skills__grid">
        {SKELETON_GROUPS.map((group, i) => (
          <div key={i} className="skills__group">
            <div className="skills__skeleton-category" />
            <div className="skills__tags">
              {group.tags.map((size, j) => (
                <div key={j} className={`skills__skeleton-tag skills__skeleton-tag--${size}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSkillsSkeleton;
