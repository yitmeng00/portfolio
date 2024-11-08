import { projectData } from "@/shared/data/project";
import SectionWrapper from "@/ui/components/SectionWrapper";
import { List, ListItem, ListItemText } from "@mui/material";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import Link from "next/link";

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
            <div className="project__list-item-wrapper" key={project.id}>
              <SubdirectoryArrowRightIcon sx={{ color: "#504538" }} />
              <Link href={`/portfolio/${project.url}`}>
                <ListItem
                  sx={{
                    paddingTop: 1,
                    paddingBottom: 1,
                    paddingLeft: 3,
                    paddingRight: 3,
                    borderWidth: 1,
                    borderColor: "#504538",
                    borderRadius: 20,
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    maxWidth: 400,
                    boxShadow: "5px 5px 0px 0px rgba(95,85,74,0.75)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    ":hover": {
                      cursor: "pointer",
                      transform: "scale(0.98)",
                      boxShadow: "3px 3px 0px 0px rgba(95,85,74,0.75)",
                    },
                  }}
                >
                  <ListItemText
                    primary={project.name}
                    sx={{
                      ".MuiListItemText-primary": {
                        fontFamily: "var(--font-newsreader)",
                        letterSpacing: 1,
                      },
                    }}
                  />
                </ListItem>
              </Link>
            </div>
          ))}
        </List>
      </div>
    </SectionWrapper>
  );
};

export default Project;
