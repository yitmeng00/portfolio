import { BIO_DATA } from "@/shared/data/bio";
import SectionWrapper from "@/ui/components/SectionWrapper";

const Bio: React.FC = () => {
  return (
    <SectionWrapper title="BIO">
      {BIO_DATA.map((bio) => (
        <div key={bio.id} className="bio__wrapper">
          <p className="bio__year">{bio.year}</p>
          <p dangerouslySetInnerHTML={{ __html: bio.desc }} />
        </div>
      ))}
    </SectionWrapper>
  );
};

export default Bio;
