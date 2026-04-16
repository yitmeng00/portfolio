const AboutSkeleton: React.FC = () => (
  <section className="about__container">
    <div className="about__paragraph-item space-y-2">
      <div className="skeleton h-4 w-full rounded" />
      <div className="skeleton h-4 w-full rounded" />
      <div className="skeleton h-4 w-11/12 rounded" />
      <div className="skeleton h-4 w-full rounded" />
      <div className="skeleton h-4 w-3/4 rounded" />
    </div>
    <div className="about__paragraph-item space-y-2">
      <div className="skeleton h-4 w-full rounded" />
      <div className="skeleton h-4 w-5/6 rounded" />
    </div>
    <div className="about__paragraph-item space-y-2">
      <div className="skeleton h-4 w-full rounded" />
      <div className="skeleton h-4 w-5/6 rounded" />
    </div>
  </section>
);

const BioSkeletonRow: React.FC = () => (
  <div className="bio__wrapper">
    <div className="skeleton h-4 w-12 rounded bio__year" />
    <div className="space-y-2 flex-1">
      <div className="skeleton h-4 w-full rounded" />
      <div className="skeleton h-4 w-4/5 rounded" />
    </div>
  </div>
);

const BioSkeleton: React.FC = () => (
  <div>
    <div className="skeleton h-5 w-10 rounded mb-4" />
    {Array.from({ length: 4 }).map((_, i) => (
      <BioSkeletonRow key={i} />
    ))}
  </div>
);

export const HomeSkeleton: React.FC = () => (
  <>
    <AboutSkeleton />
    <BioSkeleton />
  </>
);
