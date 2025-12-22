import portfolio from "../images/portfolio-project.png";
import reviewCli from "../images/review-cli-project.png";

export type ProjectType = {
  title: string;
  description: string;
  skills: string[];
  image: string;
  links: { github: string; preview: string };
};

export const projects: ProjectType[] = [
  {
    title: "Review-CLI",
    description:
      "A terminal-based UI for reviewing GitHub Pull Requests without leaving the command line. Features Vim-style navigation, split-pane diff views, inline commenting, and offline review support.",
    skills: ["TypeScript", "Bun", "Node.js", "GitHub API"],
    image: reviewCli,
    links: {
      github: "https://github.com/nelsontrangithub/reviewer_cli",
      preview: "",
    },
  },
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
