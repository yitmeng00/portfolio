interface MainChipProps {
  techStack: string[];
}

const MainChip: React.FC<MainChipProps> = ({ techStack }) => {
  return (
    <div className="skill__wrapper">
      <div className="skill__chip-wrapper">
        {techStack.map((tech, index) => (
          <div key={index}>
            <span className="text-primary-600"> </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainChip;
