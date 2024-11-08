import { Chip } from "@mui/material";

interface MainChipProps {
  techStack: string[];
}

const MainChip: React.FC<MainChipProps> = ({ techStack }) => {
  return (
    <div className="skill__wrapper">
      <div className="skill__chip-wrapper">
        {techStack.map((tech, index) => (
          <div key={index}>
            <Chip
              label={tech}
              variant="outlined"
              sx={{
                borderColor: "#504538",
                fontFamily: "var(--font-newsreader)",
                color: "#504538",
                fontWeight: 600,
                boxShadow: "rgba(95,85,74,0.75) 1.5px 1.5px 3px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainChip;
