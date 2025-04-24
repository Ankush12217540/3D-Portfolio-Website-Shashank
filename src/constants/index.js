import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  gdu,
  rewind,
  portfolio,
  stickytanks,
  threejs,
  unity,
  love2d,
  cpp,
  csharp,
  python,
  java,
  blender,
  mysql,
  lua,
  godot,
  photo,
  pr,
  bootstrap,
  swampmaster,
  bugs,
  neon_fables,
  tictactoe,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "certificate",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cloud Computing",
    icon: mobile,
  },
  {
    title: "Database(MYSQL)",
    icon: web,
  },
  {
    title: "Web Development",
    icon: backend,
  },
  {
    title: "IOT system",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "MySQL",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    summer_training: "Data Structures and Algorithms",
    company_name: "GeeksforGeeks : summer Training",
    icon: gdu,
    iconBg: "#383E56",
    date: "June 2024 - July 2024",
    points: [
      "Completed a structured summer training on Data Structures and Algorithms.",
      "Mastered core concepts like arrays, linked lists, trees, graphs, and dynamic programming.",
      "Practiced real-world problems to enhance problem-solving and logical skills.",
      "Learned advanced techniques including recursion, backtracking, greedy algorithms, and divide & conquer.",
      "Prepared for technical interviews through quizzes, exercises, and curated challenges."
    ],
  },
];


const projects = [
  {
    name: "Deployment on AWS",
    description:
      "Deployment of containarized app using Docker and Kubernetes on AW.",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "green-text-gradient",
      },
    ],
    image: swampmaster,
    source_code_link: "https://github.com/shashank007s",
    live_project_link: "https://github.com/shashank007s",
  },
  {
    name: "Employee management system",
    description: "Built an Employee management system using mern stack.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Node js",
        color: "green-text-gradient",
      },
    ],
    image: bugs,
    source_code_link: "",
    live_project_link: "https://github.com/shashank007s",
  },
  {
    name: "3D Portflio Website",
    description:
      "A 3d portfolio website build using React.js. Three.js and Blender",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/shashank007s",
    live_project_link: "#",
  },
];

export { services, technologies, experiences, projects };
