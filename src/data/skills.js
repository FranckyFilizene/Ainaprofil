import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiSharp,
  SiCplusplus,
  SiVuedotjs,
} from "react-icons/si";

const skills = [
  {
    id: 1,
    name: "Frontend",
    skills: [
      {
        id: 1,
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        id: 2,
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        id: 3,
        name: "HTML5",
        icon: SiHtml5,
        color: "#E34F26",
      },
      {
        id: 4,
        name: "CSS3",
        icon: SiCss,
        color: "#1572B6",
      },
      {
        id: 5,
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        id: 6,
        name: "Vue.js",
        icon: SiVuedotjs,
        color: "#4FC08D",
      },
    ],
  },

  {
    id: 2,
    name: "Programmation",
    skills: [
      {
        id: 1,
        name: "C#",
        icon: SiSharp,
        color: "#512BD4",
      },
      {
        id: 2,
        name: "C++",
        icon: SiCplusplus,
        color: "#00599C",
      },
    ],
  },

  {
    id: 3,
    name: "Bases de données",
    skills: [
      {
        id: 1,
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        id: 2,
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#4169E1",
      },
    ],
  },

  {
    id: 4,
    name: "Outils",
    skills: [
      {
        id: 1,
        name: "Git",
        icon: SiGit,
        color: "#F05032",
      },
      {
        id: 2,
        name: "GitHub",
        icon: SiGithub,
        color: "#FFFFFF",
      },
    ],
  },
];

export default skills;