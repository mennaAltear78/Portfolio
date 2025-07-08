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
        <p className='dark:text-gray-300 text-gray-500 mt-[20px]'>
          I’ve built a range of projects that helped me grow as a developer — from a full vendor management dashboard using React, and JWT, to a 3D interactive portfolio with Three.js, and even a hand pose recognition app using TensorFlow.js.<br />
          One of my favorite projects is a full-stack ToDo app using Next.js, TypeScript, and Clerk, where I focused on clean structure and smooth user experience.<br />
          Through these projects, I’ve worked with real APIs, authentication systems, responsive design, and modern tools like Tailwind CSS, MongoDB, and Vercel.<br />
          Every project I’ve built taught me something new, and I’m always excited to take on the next challenge.
        </p>


      </div>
      <div className="py-12  text-white">
        <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-600 text-transparent bg-clip-text"> My Projects </h2>

        <VerticalTimeline lineColor="#a855f7">

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


                  <img src={project.imge} />


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