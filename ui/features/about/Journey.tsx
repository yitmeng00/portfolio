import SectionWrapper from "@/ui/components/SectionWrapper";
import { journeyData } from "@/shared/data/journey";

const Journey: React.FC = () => {
  return (
    <SectionWrapper title="JOURNEY">
      {journeyData.map((journey) => (
        <div key={journey.id} className="journey__wrapper">
          <p className="journey__year">{journey.year}</p>
          <p>{journey.desc}</p>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default Journey;
