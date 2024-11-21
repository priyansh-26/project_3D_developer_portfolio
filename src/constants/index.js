import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  flutter,
  java,
  gfg,
  chatApp,
  vCard,
  wordHurdle,

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
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  // {
  //   name: "flutter",
  //   icon: flutter,
  // },
];

const experiences = [
  {
    title: "Flutter Developer",
    company_name: "Udemy",
    icon: flutter,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining mobile and web applications using Flutter and related technologies.",
      "Collaborating with cross-functional teams including UI/UX designers, product managers, and backend developers to create high-quality, user-centric applications.",
      "Implementing responsive and adaptive design principles to ensure optimal user experience across devices and platforms.",
      "Participating in code reviews and providing constructive feedback to team members to maintain code quality and best practices.",
    ],
  },
  {
    title: "MERN Developer",
    company_name: "GeeksforGeeks",
    icon: gfg,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Developing and maintaining web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and related technologies.",
      "Collaborating with cross-functional teams including UI/UX designers, product managers, and backend developers to create high-quality, scalable applications.",
      "Implementing responsive design and ensuring cross-browser compatibility for seamless user experiences.",
      "Participating in code reviews and providing constructive feedback to other developers to uphold code quality and ensure best practices."
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Web Developer",
    company_name: "",
    icon: javascript,
    iconBg: "#383E56",
    date: "",
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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chat Verse",
    description:
      "A cross-platform chat application built using Flutter that allows users to send messages, share media, and engage in real-time conversations. The app provides a seamless and user-friendly communication platform with features like message notifications, group chats, and end-to-end encryption for privacy.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: chatApp,
    source_code_link: "https://github.com/priyansh-26/realtime_chatapp",
  },
  {
    name: "V-Card App",
    description:
      "A Flutter-based mobile application that allows users to create, store, and organize digital business cards efficiently. The app provides features to input, edit, and categorize contact information, offering a seamless solution for managing professional connections. Users can also search and filter stored cards.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "sqflite",
        color: "green-text-gradient",
      },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: vCard,
    source_code_link: "https://github.com/priyansh-26/v_card_app",
  },
  {
    name: "Word Hurdle",
    description:
      "A Flutter-based word puzzle application that challenges users to guess the correct word within a set number of attempts. The app offers an engaging way to improve vocabulary and problem-solving skills, featuring daily challenges, hints, and a progress tracker to keep users engaged and motivated.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "guessing",
        color: "green-text-gradient",
      },
      {
        name: "learning",
        color: "pink-text-gradient",
      },
    ],
    image: wordHurdle,
    source_code_link: "https://github.com/priyansh-26/word_hurdle",
  },
];

export { services, technologies, experiences, testimonials, projects };
