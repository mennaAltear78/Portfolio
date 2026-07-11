import screen from "../assets/Screenshot 2025-03-24 135635.png"
import Authen from "../assets/Screenshot 2025-03-24 140848.png"
import ThreeD from "../assets/Screenshot 2025-03-18 164508 (1).png"
import chatbot from "../assets/Screenshot 2025-03-24 151536.png"
import handpose from "../assets/handpose.jpg"
import todo from "../assets/todo.jpg"
import ecommerce from "../assets/ecommerce.png"

import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    nextjs,
  
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    typescript,
    docker,
    java,
    fastapi,
    // prizma
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },

    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl:docker,
        name:"Docker",
        type:""
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },

    {
        imageUrl: java,
        name: "Java",
        type: "",
    },
    {
        imageUrl:fastapi,
name:"FastApi",
type:""

    },
    {
        imageUrl: motion,
        name: "Framer Motion",
        type: "Animation",
    },
    {
        imageUrl: mongodb,
        name: "mongodb",
        type: "",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },

    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },

    {
        imageUrl: redux,
        name: "redux",
        type: "",
    },
    //   {
    //     imageUrl: prizma,
    //     name: "redux",
    //     type: "",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

// export const experiences = [
//     {
//         title: "React.js Developer",
//         company_name: "Starbucks",
//         icon: starbucks,
//         iconBg: "#accbe1",
//         date: "March 2020 - April 2021",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },

//     {
//         title: "Web Developer",
//         company_name: "Shopify",
//         icon: shopify,
//         iconBg: "#b7e4c7",
//         date: "Jan 2022 - Jan 2023",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },

// ];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [

    {
        iconUrl: snapgram,
        imge:Authen,
        theme: 'btn-back-green',
        name: 'Vendor Management Platform',
        description: 'Architected a hotel and tour management dashboard with secure Access/Refresh token authentication, role-based access control, and full CRUD operations against a REST API. The experience also included paginated, filterable, and searchable listings plus real-time vendor and tour statistics visualizations.',
        link: 'https://vendor-dun-kappa.vercel.app',
    },
    {
        iconUrl: car,
        imge:ThreeD,
        theme: 'btn-back-blue',
        name: '3D Interactive Portfolio',
        description: 'Built a WebGL-powered 3D interactive portfolio with Three.js, featuring dynamic models that respond to dark/light theme changes and smooth transition animations for a more immersive experience.',
        link: 'https://github.com/mennaAltear78/3D_Website',
    },
    {
        iconUrl: estate,
        imge:ecommerce,
        theme: 'btn-back-pink',
        name: 'E-Commerce Platform',
        description: 'Created a modern, responsive e-commerce application with React.js, Redux Toolkit, Clerk authentication, and a polished shopping experience from product browsing to cart management.',
        link: 'https://e-commerce-ola-new-8thm.vercel.app',
    },
    {
        iconUrl: estate,
        imge:handpose,
        theme: 'btn-back-black',
        name: 'Real-Time Hand Pose Recognition',
        description: 'Built a real-time hand pose estimation app using React.js, TensorFlow.js, and JavaScript, detecting hand landmarks from webcam input and rendering a live 3D mesh overlay in the browser.',
        link: 'https://hand-pose-ai-seven.vercel.app/',
    },
    {
        iconUrl: estate,
        imge:todo,
        theme: 'btn-back-yellow',
        name: 'Full-Stack Task Management App',
        description: 'Engineered a type-safe full-stack task management application with Next.js and TypeScript, featuring Clerk authentication, Zod validation, Prisma/MongoDB persistence, and a clean user-focused workflow.',
        link: 'https://todo-list-full-stack-vn6s.vercel.app/',
    },
    {
        iconUrl: estate,
        imge:chatbot,
        theme: 'btn-back-pink',
        name: 'AI ChatBot Experience',
        description: 'Designed and implemented an AI-powered chatbot using the Gemini API to handle real-time customer queries and improve service efficiency with context-aware responses.',
        link: 'https://chat-bot-api-eight.vercel.app',
    },
    {
        iconUrl:summiz,
        imge:screen,
        theme: 'btn-back-red',
        name: 'Tourism Website',
        description: 'Built a responsive tourism website with React Router, dark/light mode support, and a clean, content-focused UI for showcasing travel experiences.',
        link: 'https://tourism-web-react-js.vercel.app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Information Retrieval System',
        description: 'Implemented an information retrieval system for evaluating document relevance, search effectiveness, and ranking concepts in an educational and technical setting.',
        link: 'https://github.com/mennaAltear78/Information-Retrieval-.git',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Turing Machine Simulator',
        description: 'Developed a configurable Turing Machine simulator supporting custom transition functions, state management, and input validation for computational theory demonstrations.',
        link: 'https://github.com/mennaAltear78/Information-Retrieval-',
    }
];