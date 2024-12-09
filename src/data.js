import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/work-6.png";
import Work2 from "./assets/work-1.png";
import Work3 from "./assets/work-3.png";
import Work4 from "./assets/work-4.png";
import Work5 from "./assets/work-5.png";
import Work6 from "./assets/work-2.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Kanwaljeet",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Rathore",
  },

  {
    id: 3,
    title: "Age : ",
    description: "21 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Karnal,Haryana",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+919518118427",
  },

  {
    id: 8,
    title: "Email : ",
    description: "kanwaljeet9941@.com",
  },

  {
    id: 9,
    title: "Languages : ",
    description: "Hindi, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "2+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "12+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "18+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "3+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2024 - PRESENT",
    title: "Full Stack Developer <span> Intern </span>",
    desc: "working and learning as a full stack developer at Kgisl Institute of Techology",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023 - 2022",
    title: "UI/UX Designer <span> Themeforest </span>",
    desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2024",
    title: "Computer Science Degree <span> Delhi University </span>",
    desc: "took a computer science major course from delhi university ",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2021",
    title: "Secondary Education <span> Arya Sr. Sec.School (CBSE) </span>",
    desc: "completed my 10th & 12th secondary education from the central board(Delhi)",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "74",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "71",
  },

  {
    id: 3,
    title: "Css",
    percentage: "80",
  },

  {
    id: 4,
    title: "Jquery",
    percentage: "30",
  },

  {
    id: 5,
    title: "React",
    percentage: "55",
  },
  {
    id: 6,
    title: "C++",
    percentage: "67",
  },
  {
    id: 7,
    title: "DSA",
    percentage: "58",
  },
  {
    id: 8,
    title: "Figma",
    percentage: "66",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "UI Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Design",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "None",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Figma",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview(pass: Kamal9941): ",
        desc: "https://www.figma.com/design/S8nj1fc3fVFRLSpPdGhtcZ/Online-Bike-Shopping-App-(Community)?node-id=104-54&t=LV6GMSGySGpmV96f-1",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "None",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://wild-wheels-kamal.netlify.app/",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Landing Page",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "None",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, Bootstrap",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://nators-bootstrap-reinforcement-kamal.netlify.app/",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Landing Page",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "None",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Framer",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://creativedesignframer.framer.website",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "UI Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Design",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "None",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Figma",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview(pass: Kamal9941) : ",
        desc: "https://www.figma.com/design/uvJAjxbvMqO5MwmDltR7SI/Weather-App-UI-Design-(Community)?node-id=2-811&t=acpBubd4wYalOrkY-1",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Landing Page",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "None",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, Sass",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://kamalnatrous.netlify.app",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
