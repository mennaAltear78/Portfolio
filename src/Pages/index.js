import { meta, shopify, starbucks, tesla } from "../assets/images";
import screen from "../assets/Screenshot 2025-03-24 135635.png"
import Authen from "../assets/Screenshot 2025-03-24 140848.png"
import ThreeD from "../assets/Screenshot 2025-03-18 164508 (1).png"
import chatbot from "../assets/Screenshot 2025-03-24 151536.png"

import {
    
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    java
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
    // {
    //     imageUrl: motion,
    //     name: "Framer Motion",
    //     type: "Animation",
    // },

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

    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
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
        iconUrl:summiz,
        imge:screen,
        theme: 'btn-back-red',
        name: 'Tourism website react (React.js)',
        description: 'Static Website with Routing & Dark/Light Mode – A simple static website with React Router for navigation and Dark/Light mode using useContext for state management and CSS Modules for styling.',
        link: 'https://tourism-web-react-js.vercel.app',
    },
    {
        iconUrl: snapgram ,
        imge:Authen,
        theme: 'btn-back-green',
        name: 'Vendor (React.js)',
        description: 'Vendor Application – A management system for multiple hotels (Work in Progress). Completed authentication with access & refresh tokens, implemented Axios interceptors for secure API requests, and added vendor creation functionality. Features React Router for navigation and styled with CSS Modules & Tailwind CSS.',
        link: 'https://vendor-z9sx.vercel.app/',
    },
    {
        iconUrl: car,
        imge:ThreeD,
        theme: 'btn-back-blue',
        name: '3D website (React.jS & Three.js)',
        description: 'The project includes interactive elements such as dark/light mode, sky and plane movements, and a popup message when reaching a specific island. Since the 3D project was heavy on Vercel and difficult to deploy, You can see more detail in GitHub.',
        link: 'https://github.com/mennaAltear78/3D_Website',
    },
    {
        iconUrl: estate,
        imge:chatbot,
        theme: 'btn-back-pink',
        name: 'ChatBot (React.js)',
        description: 'Designed and implemented an AI-powered ChatBot using the Gemini API to handle real-time customer queries for a small restaurant, improving service efficiency and user engagement with intelligent and context-aware responses',
        link: 'https://chat-bot-api-eight.vercel.app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Information Retrieval System (java)',
        description: 'Determining document relevance for search engines or similar systems. Evaluation Metrics: Measuring the effectiveness of search algorithms. Educational Purposes: Demonstrating the implementation of search models and ranking systems.',
        link: 'https://github.com/mennaAltear78/Information-Retrieval-.git',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Turing Machine Simulator',
        description: 'Demonstrating the working of a Turing Machine. Learning Theoretical Computation: Understanding concepts of computation, state transitions, and tape manipulation.',
        link: 'https://github.com/mennaAltear78/Information-Retrieval-',
    }
];