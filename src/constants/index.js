import {
  airbnb,
  binance,
  coinbase,
  dropbox,
  nitk,
  cluboard,
  cash_flow,
  freadom,
  bank,
  gdsc,
  iris,
  ecell,
  genesis,
  graphql,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  Imagi,
  SumUp
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGoogle,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiSqlite,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiPhp,
  SiC,
  SiNodedotjs,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiCss3,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiUnocss,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiSpring,
  SiSpringboot,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiScikitlearn,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiSocketdotio,
  SiStripe,
  SiPrisma,
  SiTypescript,
  SiRedux
} from "react-icons/si";

import {
  FaHardHat
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1H5Zo6YqsSe2CTVKGgElm0P4KsvaSQlRH/view?usp=sharing";
export const repoLink = "https://github.com/BurningHat20";

export const callToAction = "https://www.linkedin.com/in/yash-gohel-187812277";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "openSource",
  //   title: "Open Source",
  // },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "LUKHDHIRJI ENGINEERING COLLEGE (DIPLOMA), MORBI",
    degree: "Bachelor of Technology",
    duration: "2021 - 2024 | Purshuing",
    content1: "Major: Information Technology",
    // content2: "Minor: ",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiPhp,
        name: "PHP",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-4",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-5",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-6",
        icon: SiJavascript,
        name: "JavaScript",
      },
      // {
      //   id: "pl-7",
      //   icon: SiJavascript,
      //   name: "",
      // },
      // {
      //   id: "pl-8",
      //   icon: SiSolidity,
      //   name: "Solidity",
      // },
      // {
      //   id: "pl-9",
      //   icon: DiJava,
      //   name: "",
      // },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-2",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-3",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiSpring,
        name: "Spring",
      },
      {
        id: "f-6",
        icon: SiFlask,
        name: "Flask",
      },
      {
        id: "f-7",
        icon: SiOpenai,
        name: "Openai",
      },
      {
        id: "f-8",
        icon: SiScikitlearn,
        name: "Scikitlearn",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-3",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-4",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-5",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-7",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-8",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "RED Labz",
    logo: oracle,
    link: "https://redlabz.in/",
    positions: [
      {
        title: "Full stack web application development Internship",
        duration: "oct 2023 - Present",
        content: [
          {
            text: "Implementing security measures such as data validation, encryption, and authentication to protect web applications from security threats.",
            link: "",
          },
          {
            text: "Working with a diverse set of technologies, including HTML, CSS, JavaScript, PHP, Python, Ruby, or other relevant languages and frameworks.",
            link: "",
          },
          {
            text: "Developing and managing databases, and integrating them with the application to store and retrieve data.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "RED Labz",
    logo: iris,
    link: "https://redlabz.in/",
    positions: [
      {
        title: "Backend web development Internship",
        duration: "July 2023 - Sep 2023",
        content: [
          {
            text: "Developing and maintaining the server-side components of web applications using PHP and related technologies.",
            link: "",
          },
          {
            text: "Creating and managing databases, as well as integrating them with PHP to store and retrieve data efficiently.",
            link: "",
          },
          {
            text: "Implementing security measures such as data validation, encryption, and authentication to protect web applications from security threats.",
            link: "",
          },
        ],
      },
      // {
      //   title: "Web Lead",
      //   duration: "Apr 2022 - Present",
      //   content: [
      //     {
      //       text: "Managing a team of 6 student developers while also overlooking multiple modules.",
      //       link: "",
      //     },
      //   ],
      // },
      // {
      //   title: "Web Developer",
      //   duration: "Nov 2021 - Apr 2022",
      //   content: [
      //     {
      //       text: "Added Conditional Fields support to the Forms Module.",
      //       link: "",
      //     },
      //   ],
      // },
      // {
      //   title: "Web Developer Intern",
      //   duration: "Jun 2021 - Oct 2021",
      //   content: [
      //     {
      //       text: "Developed a multi-role approval flow system to facilitate data collection and display on the Institute's Department Websites.",
      //       link: "",
      //     },
      //   ],
      // },
    ],
  },
  {
    organisation: "RED Labz",
    logo: cdc,
    link: "https://redlabz.in/",
    positions: [
      {
        title: "Front-end web development Internship",
        duration: "March 2022 - April 2022",
        content: [
          {
            text: "Designing and crafting user interfaces that are not only visually appealing but also user-friendly and intuitive.",
            link: "",
          },
          {
            text: "Gaining hands-on experience with HTML, CSS, and JavaScript to develop interactive and dynamic web applications.",
            link: "",
          },
          {
            text: "Implementing responsive design principles to ensure that web applications are accessible and function seamlessly on various devices and screen sizes.",
            link: "",
          },
        ],
      },
    ],
  },
];

export const openSourceContributions = [
  // {
  //   id: "os-1",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "pull-request",
  //   status: "merged",
  //   title:
  //     "Move _wiki to old table look, common template for email and settings digest only",
  //   link: "https://github.com/publiclab/plots2/pull/10731",
  //   number: "#10731",
  //   date: "Feb 24 2022",
  //   linesAdded: "101",
  //   linesDeleted: "48",
  // },
  // {
  //   id: "os-2",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "pull-request",
  //   status: "merged",
  //   title: "Combine templates for email digest and settings digest",
  //   link: "https://github.com/publiclab/plots2/pull/10681",
  //   number: "#10681",
  //   date: "Feb 9 2022",
  //   linesAdded: "86",
  //   linesDeleted: "106",
  // },
  // {
  //   id: "os-3",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "pull-request",
  //   status: "merged",
  //   title: "Fix reverse chronological sorting on inline grids",
  //   link: "https://github.com/publiclab/plots2/pull/11114",
  //   number: "#11114",
  //   date: "May 4 2022",
  //   linesAdded: "1",
  //   linesDeleted: "1",
  // },
  // {
  //   id: "os-4",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "pull-request",
  //   status: "merged",
  //   title: "style: Make post page footer responsive",
  //   link: "https://github.com/publiclab/plots2/pull/10634",
  //   number: "#10634",
  //   date: "Feb 24 2022",
  //   linesAdded: "64",
  //   linesDeleted: "8",
  // },
  // {
  //   id: "os-5",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "issue",
  //   status: "closed",
  //   title: "Typos in Translation_System.md",
  //   link: "https://github.com/publiclab/plots2/issues/11120",
  //   number: "#11120",
  //   date: "May 6 2022",
  //   linesAdded: "",
  //   linesDeleted: "",
  // },
  // {
  //   id: "os-6",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "issue",
  //   status: "closed",
  //   title: "Missing translations on layouts/_header.html.erb",
  //   link: "https://github.com/publiclab/plots2/issues/11115",
  //   number: "#11115",
  //   date: "May 4 2022",
  //   linesAdded: "",
  //   linesDeleted: "",
  // },
  // {
  //   id: "os-7",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "issue",
  //   status: "closed",
  //   title: "Missing translation of 'This is part of' on _tagging.html.erb",
  //   link: "https://github.com/publiclab/plots2/issues/10986",
  //   number: "#10986",
  //   date: "Apr 8 2022",
  //   linesAdded: "",
  //   linesDeleted: "",
  // },
  // {
  //   id: "os-8",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "issue",
  //   status: "closed",
  //   title: "Wrong closing heading tag in _digest.html.erb",
  //   link: "https://github.com/publiclab/plots2/issues/10985",
  //   number: "#10985",
  //   date: "Apr 8 2022",
  //   linesAdded: "",
  //   linesDeleted: "",
  // },
  // {
  //   id: "os-9",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "issue",
  //   status: "closed",
  //   title: "Add class to center wiki.scraped_image in wikis template",
  //   link: "https://github.com/publiclab/plots2/issues/10797",
  //   number: "#10797",
  //   date: "Mar 18 2022",
  //   linesAdded: "",
  //   linesDeleted: "",
  // },
  // {
  //   id: "os-10",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "issue",
  //   status: "closed",
  //   title: "Images on /wiki are not center aligned",
  //   link: "https://github.com/publiclab/plots2/issues/10755",
  //   number: "#10755",
  //   date: "Mar 4 2022",
  //   linesAdded: "",
  //   linesDeleted: "",
  // },
  // {
  //   id: "os-11",
  //   organisation: "Zulip",
  //   logo: zulip,
  //   repo: "zulip",
  //   type: "pull-request",
  //   status: "merged",
  //   title: "invitations: Check invitation from a now-deactivated user.",
  //   link: "https://github.com/zulip/zulip/pull/20206",
  //   number: "#20206",
  //   date: "Dec 30 2021",
  //   linesAdded: "31",
  //   linesDeleted: "1",
  // },
  // {
  //   id: "os-12",
  //   organisation: "Zulip",
  //   logo: zulip,
  //   repo: "zulip",
  //   type: "pull-request",
  //   status: "merged",
  //   title: "invitations: Check invitation from a now-deactivated user.",
  //   link: "https://github.com/zulip/zulip/pull/20206",
  //   number: "#20206",
  //   date: "Dec 30 2021",
  //   linesAdded: "31",
  //   linesDeleted: "1",
  // },
  // {
  //   id: "os-13",
  //   organisation: "Zulip",
  //   logo: zulip,
  //   repo: "zulip",
  //   type: "pull-request",
  //   status: "merged",
  //   title: "authentication: Fix placeholder realms for redirects.",
  //   link: "https://github.com/zulip/zulip/pull/19689",
  //   number: "#19689",
  //   date: "Sep 9 2021",
  //   linesAdded: "1",
  //   linesDeleted: "1",
  // },
  // {
  //   id: "os-14",
  //   organisation: "Zulip",
  //   logo: zulip,
  //   repo: "zulip",
  //   type: "pull-request",
  //   status: "merged",
  //   title: "message_editing : Fix topic edit propagate option cut-off",
  //   link: "https://github.com/zulip/zulip/pull/19760",
  //   number: "#19760",
  //   date: "Feb 10 2022",
  //   linesAdded: "9",
  //   linesDeleted: "8",
  // },
];

export const projects = [
  {
    id: "project-1",
    title: "Saas AI Platform",
    link: "https://imagi-ai-2.vercel.app/",
    image: Imagi,
    content:
      "Ai Plateform with 5 Ai tools:- Conversation AI, Image Generation AI, Video Generation Ai, Music Generation Ai and Code Generation AI ",
    stack: [
      {
        id: "icon-1",
        icon: SiNextdotjs,
        name: "Next.Js"
      },
      {
        id: "icon-2",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-3",
        icon: SiTailwindcss,
        name: "Tailwindcss"
      },
      {
        id: "icon-4",
        icon: SiPrisma,
        name: "Prisma"
      },
      {
        id: "icon-3",
        icon: SiMysql,
        name: "MySQL"
      },
      {
        id: "icon-2",
        icon: SiStripe,
        name: "Stripe"
      },
    ],
  },
  {
    id: "project-2",
    title: "SumUp",
    link: "https://golden-lily-2361b6.netlify.app/",
    image: SumUp,
    content:
      "Summarize any kind of article with just one click using this powerful tool.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiTypescript,
        name: "TyperScript"
      },
      {
        id: "icon-4",
        icon: SiRedux,
        name: "Redux Toolkit"
      }
    ],
  }
  // {
  //   id: "project-3",
  //   title: "ChargeSwap",
  //   github: "https://github.com/CommanderAstern/ChargeSwap",
  //   link: "https://devfolio.co/projects/chargeswap-3527",
  //   image: chargeswap,
  //   content:
  //     "A Blockchain-based EV-Battery swapping solution - winning project at ETHIndia'22, the world's largest Ethereum Hackathon",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiReact,
  //       name: "React"
  //     },
  //     {
  //       id: "icon-2",
  //       icon: SiTailwindcss,
  //       name: "TailwindCSS"
  //     },
  //     {
  //       id: "icon-3",
  //       icon: SiWeb3Dotjs,
  //       name: "Web3.js"
  //     },
  //     {
  //       id: "icon-4",
  //       icon: SiSolidity,
  //       name: "Solidity"
  //     },
  //     {
  //       id: "icon-5",
  //       icon: FaHardHat,
  //       name: "HardHat"
  //     },
  //     {
  //       id: "icon-6",
  //       icon: SiIpfs,
  //       name: "IPFS"
  //     },
  //     {
  //       id: "icon-7",
  //       icon: SiArduino,
  //       name: "Arduino"
  //     },
  //     {
  //       id: "icon-8",
  //       icon: IoIosNotificationsOutline,
  //       name: "Push Protocol"
  //     },
  //   ],
  // },
  // {
  //   id: "project-4",
  //   title: "Samsotech Table Management System",
  //   github: "",
  //   link: "https://www.linkedin.com/posts/mittal-parth_technologysolutions-softwaredevelopment-technology-activity-6994915645066809344-WnMY?utm_source=share&utm_medium=member_desktop",
  //   image: placeicon,
  //   content:
  //     "Restaurant, Place, Table and realtime Reservation Management with Multi-Tenant Architecture, RBAC, SMS and Email integration for Samsotech International",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiDotnet,
  //       name: "Dot Net Core MVC 6"
  //     },
  //     {
  //       id: "icon-2",
  //       icon: SiBootstrap,
  //       name: "Bootstrap"
  //     },
  //     {
  //       id: "icon-3",
  //       icon: DiMsqlServer,
  //       name: "MS Sql Server"
  //     },
  //     {
  //       id: "icon-4",
  //       icon: SiJquery,
  //       name: "jQuery"
  //     },
  //     {
  //       id: "icon-5",
  //       icon: SiTwilio,
  //       name: "Twillio"
  //     },
  //   ],
  // },
  // {
  //   id: "project-5",
  //   title: "Non-Teaching Recruitment Portal, NITK",
  //   github: "",
  //   link: "http://recruitment.nitk.ac.in/",
  //   image: recruitment,
  //   content:
  //     "The official recruitment portal for non-teaching staff with an admin panel, email notifications and payment integration.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiRubyonrails,
  //       name: "Ruby on Rails"
  //     },
  //     {
  //       id: "icon-2",
  //       icon: SiTailwindcss,
  //       name: "TailwindCSS"
  //     },
  //     {
  //       id: "icon-3",
  //       icon: SiJquery,
  //       name: "jQuery"
  //     },
  //   ],
  // },
  // {
  //   id: "project-6",
  //   title: "Huntly",
  //   github: "",
  //   link: "https://devfolio.co/projects/huntly-b5a9",
  //   image: huntly,
  //   content:
  //     "A cross-platform mobile application that brings people closer to the physical environment and forms meaningful connections by organising real-world Treasure Hunts for free and winning rewards. The app uses machine learning to match users and form teams of like-minded people.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiDjango,
  //       name: "Django Rest Framework"
  //     },
  //     {
  //       id: "icon-2",
  //       icon: SiFlutter,
  //       name: "Flutter"
  //     },
  //     {
  //       id: "icon-3",
  //       icon: SiReplit,
  //       name: "Replit"
  //     },
  //     {
  //       id: "icon-3",
  //       icon: SiFlask,
  //       name: "Flask"
  //     },
  //     {
  //       id: "icon-4",
  //       icon: SiFigma,
  //       name: "Figma"
  //     },
  //     {
  //       id: "icon-4",
  //       icon: SiGooglemaps,
  //       name: "Google Maps API"
  //     },
  //   ],
  // },
  // {
  //   id: "project-7",
  //   title: "Cluboard",
  //   github: "https://github.com/mittal-parth/Cluboard",
  //   link: "",
  //   image: cluboard,
  //   content:
  //     "A full-stack web application to facilitate sharing resources in college clubs with email notifications, requests and ticketing system, and analytical dashboards.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiDjango,
  //       name: "Django"
  //     },
  //     {
  //       id: "icon-2",
  //       icon: AiFillHtml5,
  //       name: "HTML"
  //     },
  //     {
  //       id: "icon-3",
  //       icon: DiCss3,
  //       name: "CSS"
  //     },
  //     {
  //       id: "icon-4",
  //       icon: SiJavascript,
  //       name: "JavaScript"
  //     },
  //     {
  //       id: "icon-5",
  //       icon: SiBootstrap,
  //       name: "Bootstrap"
  //     },
  //     {
  //       id: "icon-6",
  //       icon: SiChartdotjs,
  //       name: "Chart.js"
  //     },
  //   ],
  // },
  // {
  //   id: "project-8",
  //   title: "Cash Flow Minimiser",
  //   github: "https://github.com/mittal-parth/Cash-Flow-Minmiser",
  //   link: "https://minimise-cash-flow.netlify.app/",
  //   image: cash_flow,
  //   content:
  //     "A React application to help users visualise and minimise cash flow among multiple transactions.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiReact,
  //       name: "React"
  //     },
  //     {
  //       id: "icon-2",
  //       icon: AiFillHtml5,
  //       name: "HTML"
  //     },
  //     {
  //       id: "icon-3",
  //       icon: DiCss3,
  //       name: "CSS"
  //     }
  //   ],
  // },
  // {
  //   id: "project-9",
  //   title: "Portfolio",
  //   github: "https://github.com/mittal-parth/personal-portfolio",
  //   link: "https://parthmittal.netlify.app/",
  //   image: portfolio,
  //   content: "Personal portfolio website with React and Tailwind CSS.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiReact,
  //       name: "React"
  //     },
  //     {
  //       id: "icon-2",
  //       icon: SiTailwindcss,
  //       name: "Tailwind CSS"
  //     },
  //     {
  //       id: "icon-3",
  //       icon: AiFillHtml5,
  //       name: "HTML"
  //     },
  //   ],
  // },
  // {
  //   id: "project-10",
  //   title: "Bank Landing Page",
  //   github: "https://github.com/mittal-parth/bank-landing-page-react",
  //   link: "https://bank-landing-page-parth.netlify.app/",
  //   image: bank,
  //   content:
  //     "A landing page for a bank with modern UI/UX using React and Tailwind.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiReact,
  //       name: "React"
  //     },
  //     {
  //       id: "icon-5",
  //       icon: SiTailwindcss,
  //       name: "Tailwind CSS"
  //     },
  //   ],
  // }
];

export const blogPosts = [
  {
    // id: "post-1",
    // title: "Blog Post 01 - Title",
    // link: "#",
    // date: new Date().toLocaleDateString(), // Can be edited to any string format
    // image: "https://via.placeholder.com/600/92c952",
    // tags: [
    //   {
    //     id: "tag-1",
    //     name: "tag 01"
    //   },
    //   {
    //     id: "tag-2",
    //     name: "tag 03"
    //   },
    //   {
    //     id: "tag-3",
    //     name: "tag 03"
    //   },
    // ],
  },
  {
    // id: "post-2",
    // title: "Blog Post 02 - Title",
    // link: "#",
    // date: new Date().toLocaleDateString(),
    // image: "https://via.placeholder.com/600/d32776",
    // tags: [
    //   {
    //     id: "tag-1",
    //     name: "tag 01"
    //   },
    //   {
    //     id: "tag-2",
    //     name: "tag 03"
    //   },
    //   {
    //     id: "tag-3",
    //     name: "tag 03"
    //   },
    // ],
  },
  {
    // id: "post-3",
    // title: "Blog Post 03 - Title",
    // link: "#",
    // date: new Date().toLocaleDateString(),
    // image: "https://via.placeholder.com/600/771796",
    // tags: [
    //   {
    //     id: "tag-1",
    //     name: "tag 01"
    //   },
    //   {
    //     id: "tag-2",
    //     name: "tag 03"
    //   },
    //   {
    //     id: "tag-3",
    //     name: "tag 03"
    //   },
    // ],
  },
];

export const stats = [
  // {
  //   id: "stats-1",
  //   title: "Organisations",
  //   value: "2+",
  // },
  // {
  //   id: "stats-2",
  //   title: "Issues Opened",
  //   value: "6+",
  // },
  // {
  //   id: "stats-3",
  //   title: "Pull Requests",
  //   value: "6+",
  // },
];

export const extraCurricular = [
  {
    organisation: "Google Digital Garage Certificate",
    title: "Fundamental of Digital Marketing",
    duration: "March 2023",
    content: [
      {
        text: "Achieved Google's Digital Garage certificate by completing their 'Fundamentals of Digital Marketing' course.",
        link: "https://drive.google.com/file/d/13pXS10e4bIqzrV5Rwd87Iqq2wWyiYGjB/view?usp=sharing",
      },
    ],
    logo: gdsc,
  },
  {
    organisation: "Government Polytechnic Junagadh",
    title: "National Level Technical event Winner",
    duration: "Sep 2023",
    content: [
      {
        text: "I won first place in the project competition at Gyan Gumbaj 2023, a national technical event at Government Polytechnic Junagadh.",
        link: "",
      },
      // {
      //   text: "Won 7 inter-college solo dance competitions",
      //   link: "",
      // },
    ],
    logo: genesis,
  },
  // {
  //   organisation: "IRIS, NITK",
  //   title: "Tutor",
  //   duration: "Jan 2022 - Jan 2022",
  //   content: [
  //     {
  //       text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
  //       link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
  //     },
  //   ],
  //   logo: iris,
  // },
  // {
  //   organisation: "E-Cell, NITK",
  //   title: "Executive Member",
  //   duration: "Sep 2021 - Apr 2022",
  //   content: [
  //     {
  //       text: "Organised the season 3 of the E-Cell NITK Podcast",
  //       link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
  //     },
  //     {
  //       text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
  //       link: "",
  //     },
  //   ],
  //   logo: ecell,
  // },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/yash-gohel-187812277",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/BurningHat20",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:yashgohel395@gmail.com",
  },
  // {
  //   id: "social-media-4",
  //   icon: AiOutlineTwitter,
  //   link: "https://www.twitter.com/mittalparth_",
  // },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/yashdgaf._",
  },
];

export const aboutMe = {
    name: "Yash Gohel",
    tagLine: "RED Labz intern | Web developer | National Level Technical event winner | 1x Certificate of fundamental of Digital marketing by Google | PHP Expert",
    intro: "Student web-developer from India who is either busy improving his craft or pondering over the next big idea."
}
