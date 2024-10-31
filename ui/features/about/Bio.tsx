import SectionWrapper from "@/ui/components/SectionWrapper";
import { bioData } from "@/shared/data/bio";

const Bio: React.FC = () => {
  return (
    <SectionWrapper title="BIO">
      {bioData.map((bio) => (
        <div key={bio.id} className="bio__wrapper">
          <p className="bio__year">{bio.year}</p>
          <p>{bio.desc}</p>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default Bio;
