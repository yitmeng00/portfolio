import { projectData } from "@/shared/data/project";
import SectionWrapper from "@/ui/components/SectionWrapper";
import { List, ListItem, ListItemText } from "@mui/material";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

const Project: React.FC = () => {
  return (
    <SectionWrapper title="HANDS-ON ADVENTURES">
      <div className="project__wrapper">
        <List
          dense={true}
          disablePadding={true}
          sx={{
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {projectData.map((project) => (
            <div className="project__list-item-wrapper">
              <SubdirectoryArrowRightIcon sx={{ color: "#504538" }} />
              <ListItem
                key={project.id}
                sx={{
                  padding: 1,
                  borderWidth: 1,
                  borderColor: "#504538",
                  borderRadius: 20,
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  maxWidth: 400,
                  boxShadow: "5px 5px 0px 0px rgba(95,85,74,0.75)",
                }}
              >
                <ListItemText
                  primary={project.name}
                  sx={{
                    ".MuiListItemText-primary": {
                      fontFamily: "Poppins, sans-serif",
                      letterSpacing: 1,
                    },
                  }}
                />
              </ListItem>
            </div>
          ))}
        </List>
      </div>
    </SectionWrapper>
  );
};

export default Project;
