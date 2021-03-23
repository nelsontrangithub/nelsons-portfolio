import portfolio from "../images/portfolio-project.png";

export type ProjectType = {
  title: string;
  description: string;
  skills: string[];
  image: string;
  links: { github: string; preview: string };
};

export const projects: ProjectType[] = [
  {
    title: "Portfolio",
    description: "A responsive static website built with Gatsby and ReactJS.",
    skills: ["HTML5", "CSS3", "Sass", "TypeScript", "ReactJS"],
    image: portfolio,
    links: {
      github: "https://github.com/nelsontrangithub/nelsons-portfolio",
      preview: "https://www.nelsontran.me/",
    },
  },
];
