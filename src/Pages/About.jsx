import React from 'react'
import { skills,projects } from './index'

function About() {
  console.log(skills);

  return (
    
    <section className='max-container  dark:bg-black-500 '>

      <label className='dark:text-[white] font-semibold text-[20px] mb-10 '>hello ,I'm <span className='bg-gradient-to-r from-purple-400 via-purple-500 to-purple-800 bg-clip-text text-transparent font-bold'>Menna</span></label>
<p className='dark:text-gray-300 text-gray-500 mt-[20px]'>
   a frontend developer who loves building interactive, user-focused apps using React.js and modern JavaScript tools like Next.js and TypeScript.<br />
  I have hands-on experience with authentication (Clerk, JWT), API integration, and deploying full-stack applications using tools like GitHub, Vercel, and MongoDB.<br />
  My projects include a hotel management dashboard, a 3D portfolio with Three.js, and a hand pose recognition app using TensorFlow.js. I’m also exploring AI and prompt engineering to create smarter user experiences.<br />
  I’m currently pursuing a Computer Science degree (Class of 2025, GPA 3.69/4.0) and training at ITI in frontend development. I also mentor students and simplify coding concepts thanks to my TOT certification and teaching background.<br />
  Passionate about clean code, problem-solving, and always learning to push frontend boundaries.
</p>
      <div>
        <p className='font-bold mt-[20px] text-[20px] mb-10 dark:text-white '> My Skills</p>
        <div className='mt-16 flex flex-wrap gap-12 '>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>

   
      </div>
    </section>
  )
}

export default About