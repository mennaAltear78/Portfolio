import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { projects } from './index';
import { motion } from "framer-motion";


function Projects() {
  return (
    <div className='max-container dark:bg-black-500'>
      <div className='mb-10'>
        <p className='dark:text-[white] font-bold text-[25px] mb-5'>
          projects
        </p>
        <p className='dark:text-gray-300 text-gray-500'>
          As a passionate React developer, I love turning ideas into interactive and visually appealing web experiences. My projects reflect my journey in front-end development, showcasing my skills in React, Tailwind CSS, APIs, authentication, and more.<br />

          From building a modern portfolio to working on a feature-rich dashboard with chatbot integration, each project highlights my ability to create user-friendly and functional web applications. I’m always eager to learn, experiment, and push my limits!
        </p>
      </div>
      <div className="py-12  text-white">
      <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-600 text-transparent bg-clip-text"> My Projects </h2>

      <VerticalTimeline  lineColor="#a855f7">
        
  {projects.map((project, index) => (
   
    <VerticalTimelineElement
      key={index}
      contentStyle={{
        backgroundColor: "#7E22CE", // لون بنفسجي ثابت
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        padding: "16px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #a855f7" }}
     
      icon={
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center items-center w-full h-full bg-purple-500 rounded-full p-2 shadow-lg"
        >
          <img src={project.iconUrl} className="w-[60%] h-[60%] object-contain rounded-full" />
        </motion.div>
      }
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer"> <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
        <div>
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
          <p className="text-gray-200">{project.description}</p>
         
          
      <img src={project.imge}/>
   
 
        </div>
      </motion.div></a>
    </VerticalTimelineElement> 
  ))}
</VerticalTimeline>

    </div>
    </div>

  )
}

export default Projects