import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  nda,
  docker,
  digicode,
  usdc,
  sorbet_client,
  sorbet_bo,
  sorbet_portal,
  sorbet_dbrd,
  sorbet_calc,
  mogo_client,
  mogo_bo,
  meta,
  carsrent,
  threejs,
  threejsintro,
  aigenerator,
  vueproject,
  nefflix,
  nest,
  angularjs,
  mobilestore,
  asher,
  guy,
  beach,
  next,
  ukr,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "angular",
    icon: angularjs,
  },
  {
    name: "Next",
    icon: next,
  },
  {
    name: "Nest JS",
    icon: nest,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front and partially Backend Developer",
    company_name: "Digicode",
    icon: digicode,
    iconBg: "#E6DEDD",
    date: "April 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js/Nest.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Developer",
    company_name: "PE USDC",
    icon: usdc,
    iconBg: "#383E56",
    date: "July 2018 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Developer",
    company_name: "PJSC UKRNAFTA",
    icon: ukr,
    iconBg: "#E6DEDD",
    date: "March 2017 - July 2018",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "We thank Roman for the wonderful job in developing and supporting our applications for 2 years. He was professional, excellent and hard working. Thanks to him, we were able to achieve our goals on time, and we look forward to continue working with him in the future.",
    name: "Asher",
    designation: "VP R&D",
    company: "Sorbet",
    image: asher,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Roman does. In addition to the development of the frontend, he took a part on backend side",
    name: "Guy",
    designation: "CTO",
    company: "Simasti",
    image: guy,
  },
];

const projects = [
  {
    name: "Sorbet Client",
    description:
      "Web Application for employees. They can now instantly cash out their unused PTO (paid time off) and spend it on anything, while employers turn an enormous liability into a huge tax benefit that helps control cash flow and saves the company money.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "mobX",
        color: "green-text-gradient",
      },
      {
        name: "StyledComponents",
        color: "pink-text-gradient",
      },
      {
        name: "Cypress",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "gray-text-gradient",
      },
      {
        name: "Github actions",
        color: "pink-text-gradient",
      },
      {
        name: "ArgoCD",
        color: "blue-text-gradient",
      },
    ],
    image: sorbet_client,
    source_code_link: "https://www.pymnts.com/consumer-finance/2023/sorbet-launches-on-demand-pto-cash-advance-solution-in-8-states/",
  },
  {
    name: "Sorbet BO",
    description:
      "Backoffice for Sorbet. Web Application for administrators, managers, owners to export and manage some data of employees, organization’s settings, planning company events, viewing employee’s calendar of events, getting reports, etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "mobX",
        color: "green-text-gradient",
      },
      {
        name: "StyledComponents",
        color: "pink-text-gradient",
      },
      {
        name: "Cypress",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "gray-text-gradient",
      },
      {
        name: "Github actions",
        color: "pink-text-gradient",
      },
      {
        name: "ArgoCD",
        color: "blue-text-gradient",
      },
    ],
    image: sorbet_bo,
    source_code_link: "https://payspacemagazine.com/news/sorbet-launches-on-demand-pto-cash-advance-solution/",
  },
  {
    name: "Sorbet Portal",
    description:
      "Web Application for getting reports and analytics for organization’s owners.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "mobX",
        color: "green-text-gradient",
      },
      {
        name: "StyledComponents",
        color: "pink-text-gradient",
      },
      {
        name: "Cypress",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "gray-text-gradient",
      },
      {
        name: "Github actions",
        color: "pink-text-gradient",
      },
      {
        name: "ArgoCD",
        color: "blue-text-gradient",
      },
    ],
    image: sorbet_portal,
    source_code_link: "https://slashdot.org/software/p/Sorbet-PTO/",
  },
  {
    name: "Sorbet Dashboard",
    description:
      "Sorbet Company dashboard. Live reports and analytics on the company's offices info devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "react-query",
        color: "green-text-gradient",
      },
      {
        name: "StyledComponents",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "gray-text-gradient",
      },
      {
        name: "Github actions",
        color: "pink-text-gradient",
      },
      {
        name: "ArgoCD",
        color: "blue-text-gradient",
      },
    ],
    image: sorbet_dbrd,
    source_code_link: "https://www.pymnts.com/consumer-finance/2023/sorbet-launches-on-demand-pto-cash-advance-solution-in-8-states/",
  },
  {
    name: "Sorbet calculator",
    description:
      "Sorbet calculator. The basic concept of Sorbet and complex calculation logic is transferred to the web application. A potential client can calculate real financial benefits from participating in the project.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "StyledComponents",
        color: "pink-text-gradient",
      },
      {
        name: "Cypress",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "gray-text-gradient",
      },
      {
        name: "Github actions",
        color: "pink-text-gradient",
      },
      {
        name: "ArgoCD",
        color: "blue-text-gradient",
      },
    ],
    image: sorbet_calc,
    source_code_link: "https://www.getsorbet.com/post/sorbet-pto-cash-advance-what-it-is-how-it-works-how-to-apply",
  },
  {
    name: "Mogo Client",
    description:
      "Web Application for clients of Mogo. Client able to create and managing the campaigns, messages, client settings, dashboards etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "mobX",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "gray-text-gradient",
      },
      {
        name: "NestJS",
        color: "pink-text-gradient",
      },
      {
        name: "ArgoCD",
        color: "blue-text-gradient",
      },
    ],
    image: mogo_client,
    source_code_link: "https://mogo.io/",
  },
  {
    name: "Mogo BO",
    description:
      "Application for administrators, managers, owners to export and manage some data of agencies, agencies settings, dashboards etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "mobX",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "gray-text-gradient",
      },
      {
        name: "NestJS",
        color: "pink-text-gradient",
      },
      {
        name: "ArgoCD",
        color: "blue-text-gradient",
      },
    ],
    image: mogo_bo,
    source_code_link: "https://bo.mogo.io/",
  },
  {
    name: "Cars Rent",
    description:
      "Cars Rent, Next.js 13 Application | React, Next JS, TypeScript, Tailwind CSS, RapidAPI",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "pet Project",
          color: "blue-text-gradient",
        },
      ],
      image: carsrent,
    source_code_link: "https://github.com/kayot88/rent_cars",
  },
  {
    name: "Metaverse",
    description:
      "Metaverse is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "pet Project",
        color: "blue-text-gradient",
      },
    ],
    image: meta,
    source_code_link: "https://github.com/kayot88/metaverse",
  },
  {
    name: "T-Shirt Modeling",
    description:
      "AI-Powered 3D Website Using React, Express, OpenAI, ThreeJS | 2023",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "blue-text-gradient",
      },
      {
        name: "threeJS",
        color: "pink-text-gradient",
      },
      {
        name: "pet Project",
        color: "green-text-gradient",
      },
    ],
    image: threejsintro,
    source_code_link: "https://github.com/kayot88/tshirtmodeling",
  },
  {
    name: "AI Image Generation",
    description:
      "Full Stack MERN AI Image Generation App MidJourney & DALL E Clone",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "pet Project",
        color: "blue-text-gradient",
      },
    ],
    image: aigenerator,
    source_code_link: "https://github.com/kayot88/aiphotogenerator",
  },
  {
    name: "FireBlogs",
    description:
      "A multi-user blog project with Vue.js, Vuex and Firebase",
    tags: [
      {
        name: "vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "vuex",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "pet Project",
        color: "blue-text-gradient",
      },
    ],
    image: vueproject,
    source_code_link: "https://github.com/kayot88/vueproject",
  },
  {
    name: "Nefflix",
    description:
      "Building Netflix from Scratch Using React, Firebase, Compound & Styled Components",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "Styled Components",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "pet Project",
        color: "blue-text-gradient",
      },
    ],
    image: nefflix,
    source_code_link: "https://github.com/kayot88/netflix",
  },
  {
    name: "Mobile store",
    description:
      "Building Mobile store Using React and Redux",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "pet Project",
        color: "green-text-gradient",
      },
    ],
    image: mobilestore,
    source_code_link: "https://github.com/kayot88/Ract-Redux_re-store",
  },
  {
    name: "Beach Resort",
    description:
      "Building Beach Resort application Using React, Styled Components, contentful",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "Styled Components",
        color: "pink-text-gradient",
      },
      {
        name: "Contentful",
        color: "green-text-gradient",
      },
      {
        name: "pet Project",
        color: "blue-text-gradient",
      },
    ],
    image: beach,
    source_code_link: "https://github.com/kayot88/beach_resort",
  },

];

export { services, technologies, experiences, testimonials, projects };
