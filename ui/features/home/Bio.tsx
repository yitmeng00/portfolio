import { bioData } from "@/shared/data/bio";
import SectionWrapper from "@/ui/components/SectionWrapper";

const Bio: React.FC = () => {
  return (
    <SectionWrapper title="BIO">
      {bioData.map((bio) => (
        <div key={bio.id} className="bio__wrapper">
          <p className="bio__year">{bio.year}</p>
          <p dangerouslySetInnerHTML={{ __html: bio.desc }} />
        </div>
      ))}
    </SectionWrapper>
  );
};

export default Bio;
