import Image from "next/image";

import { BADGES_DATA } from "@/shared/data/skills";

const WorkBadges: React.FC = () => {
  return (
    <section>
      <h2 className="section-title work__section-title">Badges</h2>
      <div className="badges__grid">
        {BADGES_DATA.map((badge) => (
          <div key={badge.alt} className="badges__card">
            <div className="badges__image-wrapper">
              <Image src={badge.src} alt={badge.alt} width={160} height={160} loading="eager" />
            </div>
            <p className="badges__title">{badge.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkBadges;
