import { Tag } from "./components/Project";

export interface MyProject {
  id: string | number;
  title: string;
  description: string;
  subDescription?: string[];
  href: string;
  logo?: string;
  image: string;
  tags: Tag[];
}

export const myProjects: MyProject[] = [
  {
    id: 1,
    title: "Poppylane Art",
    description: "An art portfolio I made for an upcoming artist.",
    subDescription: [
      "Built in Java Script, React, and Vite I was asked to create a 1 for 1 based on mockups created Adobe. Here I can demostrait how I deliver based on the criteria recieved from the client. Every page was based on a requirement and a mock up and needed to be a 1 for 1. Thoughout the course of several months various requirements would be updated and I was able to deliver these updates in a timely manner. ",
    ],
    href: "https://github.com/BoyWonder64/CoralynGrantArt",
    logo: "",
    image: "/assets/projects/PoppyLaneArt.png",
    tags: [
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "Vite", path: "/assets/logos/vitejs.svg" },
    ],
  },
  {
    id: 2,
    title: "React Portfolio",
    description:
      "A basic react portfolio to showase some of the work I did while attending my university",
    subDescription: [
      "This project was required for a class, after completing the class I periodically will revisit this project and add various pieces to it. Currently this site doesnt have a domain, however I automated the build process so that everytime I push my changes up to GitHub Netlify rebuilds the project and deploys it to the provided link. I still have lots of tweeking to perform. ",
    ],
    href: "https://github.com/BoyWonder64/ReactPortfolio",
    logo: "",
    image: "/assets/projects/ReactPortfolio.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "Node.js", path: "/assets/logos/nodeJs.svg" },
    ],
  },
  {
    id: 3,
    title: "NIBRS LLM",
    description: "A LLM based on the NIBRS Requirements.",
    subDescription: [
      "NIBRS is the base standard police agencies used for reporting to the FBI",
      "Almost every State follows the base NIBRS requirements but also adds their own",
      "I am working on creating a bot that will help assist both police and developers to understand",
      "different rules and requirements. ",
    ],
    href: "https://github.com/BoyWonder64/NIBRS-Helper-LLM",
    logo: "",
    image: "/assets/projects/Work_In_Progress.png",
    tags: [],
  },
];
