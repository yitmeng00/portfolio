import { Skill } from "../interface/Skill";

export const skillData: Skill[] = [
  {
    id: 1,
    category: "frontend",
    techstack: ["React", "Next", "Vue", "Vite", "JS", "TS", "HTML", "CSS", "Bootstrap", "Tailwind"],
  },
  {
    id: 2,
    category: "backend",
    techstack: ["Node", "Express", "Sequelize", "Mongoose", "PHP", "C#", ".NET"],
  },
  {
    id: 3,
    category: "database",
    techstack: ["MongoDB", "MySQL", "Redis"],
  },
  {
    id: 4,
    category: "others",
    techstack: [
      "Agile",
      "Docker",
      "Git",
      "Jest",
      "REST",
      "WebSocket",
      "WordPress",
      "Figma",
      "Photoshop",
      "Illustrator",
    ],
  },
];
