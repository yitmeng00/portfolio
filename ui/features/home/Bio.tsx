import { BIO_DATA } from "@/shared/data/bio";
import { SectionWrapper } from "@/ui/components";

const Bio: React.FC = () => {
  return (
    <SectionWrapper title="Bio">
      <div className="bio__timeline">
        {BIO_DATA.map((bio) => (
          <div key={bio.id} className="bio__wrapper">
            <p className="bio__year">{bio.year}</p>
            <p dangerouslySetInnerHTML={{ __html: bio.desc }} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Bio;
