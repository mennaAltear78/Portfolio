import screen from "../assets/Screenshot 2025-03-24 135635.png"
import Authen from "../assets/Screenshot 2025-03-24 140848.png"
import ThreeD from "../assets/Screenshot 2025-03-18 164508 (1).png"
import chatbot from "../assets/Screenshot 2025-03-24 151536.png"
import customer from "../assets/icons/segemntaionandchrun.jpeg"
import handpose from "../assets/handpose.jpg"
import todo from "../assets/todo.jpg"
import fraud from "../assets/icons/creditcard fraud.jpg"
import ecommerce from "../assets/ecommerce.png"

import airline from "../assets/images/airline.png"
import consumer from "../assets/images/consumer.png"
import house from "../assets/images/house.png"
import ml_projects from "../assets/images/ml_projects.png"
import flyassist from "../assets/images/flyassist.png"

import {
    contact,
    css,
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
    tailwindcss,
    typescript,
    docker,
    java,
    fastapi
} from "../assets/icons";

export const skills = [
    { name: "React", type: "Frontend", imageUrl: react },
    { name: "TypeScript", type: "Frontend", imageUrl: typescript },
    { name: "JavaScript", type: "Frontend", imageUrl: javascript },
    { name: "Next.js", type: "Frontend", imageUrl: nextjs },
    { name: "FastAPI", type: "Backend", imageUrl: fastapi },
    { name: "Python", type: "Backend", imageUrl: null }, // no python icon imported yet
    { name: "Docker", type: "DevOps", imageUrl: docker },
    { name: "Git", type: "Version Control", imageUrl: git },
    { name: "Machine Learning", type: "AI", imageUrl: null },
    { name: "SQL / Databases", type: "Backend", imageUrl: mongodb },
];

export const socialLinks = [
    { name: 'Contact', iconUrl: contact, link: '/contact' },
    { name: 'GitHub', iconUrl: github, link: 'https://github.com/mennaAltear78' },
    { name: 'LinkedIn', iconUrl: linkedin, link: 'https://www.linkedin.com/in/menna-altear' }
];

export const featuredProjects = [
    {
        name: 'FlyAssist',
        category: 'Full-Stack • Enterprise Dashboard',
        technologies: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts', 'ApexCharts', 'Zustand', 'React Router v7', 'i18next', 'Lucide React'],
        problem: 'International airports lack a unified digital operations hub to manage PRM (Persons with Reduced Mobility) assistance, staff timeline allocations, real-time transit analytics, and bilingual (AR/EN) passenger communication in a single platform.',
        solution: 'Built an enterprise-grade airport operations dashboard featuring a full PRM booking system, interactive staff timeline grid, AI-powered ML forecasting overlays, real-time analytics with Recharts/ApexCharts, bilingual RTL/LTR i18n, and a multi-modal reporting hub — all within a fully responsive React 19 architecture.',
        challenges: 'Synchronizing real-time staff allocation state across an interactive drag-and-drop timeline grid while supporting full RTL/LTR layout switching without component remounts, and rendering virtualized large passenger datasets without performance degradation.',
        decisions: 'Adopted Zustand for lightweight cross-component state management, react-virtuoso for efficient large-table rendering, and i18next with dynamic HTML dir attribute toggling for seamless language switching between Arabic and English.',
        image: flyassist,
        github: 'https://github.com/mennaAltear78/platform',
        demo: 'https://platform-bnat.vercel.app/calendar'
    },
    {
        name: 'End-to-End Customer Intelligence Platform',
        category: 'Full-Stack • Machine Learning',
        technologies: ['Python', 'Scikit-learn', 'Pandas', 'FastAPI', 'React.js', 'PostgreSQL'],
        problem: 'Modern businesses lack actionable real-time customer segmentation and predictive behavioral churn insights from raw transactional data.',
        solution: 'Built a full-stack platform combining RFM (Recency, Frequency, Monetary) analytics, K-Means clustering visualization, and time-based churn prediction pipeline.',
        challenges: 'Architecting a low-latency ML scoring pipeline with FastAPI while rendering multi-dimensional cluster charts reactively in React without blocking the main thread.',
        decisions: 'Decoupled model training pipeline from API response handlers to reduce temporal data leakage and ensure scalable real-time inference.',
        image: customer,
        github: 'https://github.com/mennaAltear78/customer-segmentation',
        demo: "https://fcustomer-segmentation12menna.vercel.app"
    },
 
    {
        name: 'Credit Card Fraud Detection',
        category: 'Machine Learning • Full-Stack',
        technologies: ['Python', 'FastAPI', 'React.js', 'Scikit-learn'],
        problem: 'Detecting fraudulent financial transactions in highly imbalanced datasets in real time before payment authorization.',
        solution: 'Developed an ML pipeline for highly imbalanced transaction data, integrating a trained Fraud Prediction API via FastAPI, with a React interface for visualization.',
        challenges: 'Handling severe class imbalance without over-fitting while ensuring rapid inference latency.',
        decisions: 'Evaluated classification performance using Precision, Recall, F1-score, and PR-AUC, deploying a lightweight FastAPI inference container.',
        image: fraud,
        github: 'https://github.com/mennaAltear78/Credit_card_fraud_detection',
        demo: "https://credit-fraud-frontend-menna78.vercel.app/"
    },
       {
        name: 'Vendor Management Platform',
        category: 'Full-Stack',
        technologies: ['React.js', 'TypeScript', 'FastAPI', 'JWT Auth', 'REST APIs', 'Tailwind CSS'],
        problem: 'Managing multi-vendor hotel and tour operations requires robust role-based access control, paginated listing searches, and real-time vendor activity tracking.',
        solution: 'Architected a comprehensive administrative dashboard with secure Access/Refresh token authentication, full CRUD operations against REST APIs, and paginated data tables.',
        challenges: 'Managing secure token refresh cycles seamlessly on API request interceptors without interrupting active user workflows or state.',
        decisions: 'Implemented custom fetch interceptor middleware for dual-token refresh, modular table component with server-side pagination, and accessible multi-step forms.',
        image: Authen,
        github: 'https://github.com/mennaAltear78',
        demo: 'https://vendor-dun-kappa.vercel.app'
    },
];

export const projects = [
    {
        name: 'Full-Stack Task Management App',
        category: 'Full-Stack',
        technologies: ['Next.js', 'TypeScript', 'Clerk', 'Prisma', 'MongoDB', 'Zod', 'shadcn/ui'],
        description: 'Built a type-safe full-stack task management application with Clerk auth, Prisma/MongoDB persistence, and Zod schema validation.',
        image: todo,
        link: 'https://todo-list-full-stack-vn6s.vercel.app/'
    },
    // {
    //     name: 'Real-Time Hand Pose Recognition',
    //     category: 'Machine Learning • Real-Time',
    //     technologies: ['React.js', 'TensorFlow.js', 'JavaScript'],
    //     description: 'Built a real-time hand pose estimation app detecting hand landmarks from webcam input and rendering a live 3D mesh overlay in the browser.',
    //     image: handpose,
    //     link: 'https://hand-pose-ai-seven.vercel.app/'
    // },
    {
        name: '3D Interactive Portfolio',
        category: 'Frontend',
        technologies: ['React.js', 'Three.js', 'WebGL'],
        description: 'Built a WebGL-powered 3D interactive portfolio with Three.js, featuring dynamic models that respond to dark/light theme changes.',
        image: ThreeD,
        link: 'https://github.com/mennaAltear78/3D_Website'
    },
    // {
    //     name: 'AI ChatBot Experience',
    //     category: 'Full-Stack • AI',
    //     technologies: ['React.js', 'Gemini API'],
    //     description: 'Designed and implemented an AI-powered chatbot using the Gemini API to handle real-time customer queries with context-aware responses.',
    //     image: chatbot,
    //     link: 'https://chat-bot-api-eight.vercel.app'
    // },
    {
        name: 'E-Commerce Platform',
        category: 'Frontend',
        technologies: ['React.js', 'Redux Toolkit', 'Clerk'],
        description: 'Created a modern, responsive e-commerce application with Redux Toolkit and a polished shopping experience from product browsing to cart management.',
        image: ecommerce,
        link: 'https://e-commerce-ola-new-8thm.vercel.app'
    },
    {
        name: 'Tourism Website',
        category: 'Frontend',
        technologies: ['React.js', 'React Router'],
        description: 'Built a responsive tourism website with dark/light mode support and a clean UI for showcasing travel experiences.',
        image: screen,
        link: 'https://tourism-web-react-js.vercel.app'
    },
    {
        name: 'Information Retrieval System',
        category: 'Algorithms',
        technologies: ['Python'],
        description: 'Implemented an information retrieval system for evaluating document relevance, search effectiveness, and ranking concepts.',
        image: null,
        link: 'https://github.com/mennaAltear78/Information-Retrieval-.git'
    },
    {
        name: 'Turing Machine Simulator',
        category: 'Algorithms',
        technologies: ['JavaScript'],
        description: 'Developed a configurable Turing Machine simulator supporting custom transition functions, state management, and input validation.',
        image: null,
        link: 'https://github.com/mennaAltear78/Information-Retrieval-'
    },
    {
        name: 'Airline Passengers Forecasting',
        category: 'Machine Learning',
        technologies: ['Python', 'Jupyter Notebook'],
        description: 'Time Series Analysis and Forecasting using historical records of monthly airline passenger counts.',
        image: airline,
        link: 'https://github.com/mennaAltear78/Airline-Passengers'
    },
    {
        name: 'Consumer Complaint Categorizer',
        category: 'Machine Learning',
        technologies: ['Python', 'Jupyter Notebook', 'NLP'],
        description: 'NLP model to categorize unstructured, noisy consumer complaint texts and isolate root issues.',
        image: consumer,
        link: 'https://github.com/mennaAltear78/Consumer-Complaint-Text-Categorizer'
    },
    {
        name: 'House Price Prediction',
        category: 'Machine Learning',
        technologies: ['Python', 'Jupyter Notebook'],
        description: 'Predicted median house values for residential block groups across California using demographic, geographic, and housing features.',
        image: house,
        link: 'https://github.com/mennaAltear78/house-price-prediction'
    },
    {
        name: 'Machine Learning Projects',
        category: 'Machine Learning',
        technologies: ['Python', 'Machine Learning'],
        description: 'A comprehensive collection of various machine learning projects and implementations.',
        image: ml_projects,
        link: 'https://github.com/mennaAltear78/Machine-Learning-Projects'
    }
];