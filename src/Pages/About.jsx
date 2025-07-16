import React from 'react'
import { skills } from './index'

function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12  dark:from-[#18122B] dark:to-[#393053] rounded-2xl  mt-10 mb-10">
      <label className="block dark:text-white text-gray-900 font-semibold text-2xl mb-6">
        Hello, I'm{' '}
        <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-800 bg-clip-text text-transparent font-extrabold">
          menna
        </span>
      </label>
      <p className="dark:text-gray-300 text-gray-700 leading-relaxed mb-10">
        A frontend developer who loves building interactive, user-focused apps using React.js and modern JavaScript tools like Next.js and TypeScript.<br />
        I have hands-on experience with authentication (Clerk, JWT), API integration, and deploying full-stack applications using tools like GitHub, Vercel, and MongoDB.<br />
        My projects include a hotel management dashboard, a 3D portfolio with Three.js, and a hand pose recognition app using TensorFlow.js. I’m also exploring AI and prompt engineering to create smarter user experiences.<br />
        I’m currently pursuing a Computer Science degree (Class of 2025, GPA 3.69/4.0) and training at ITI in frontend development. I also mentor students and simplify coding concepts thanks to my TOT certification and teaching background.<br />
       Passionate about clean code, problem-solving, and always learning to push frontend boundaries.
      </p>

      <h2 className="text-3xl font-bold mb-8 border-purple-300 dark:border-purple-700  text-purple-800 dark:text-purple-200">
        Experience & Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Work Experience */}
        <section className="bg-purple-50 dark:bg-[#443C68]/40 rounded-xl p-6 shadow">
          <h3 className="text-xl font-bold mb-4 text-purple-700 flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-purple-400 rounded mr-2"></span>
            Work Experience
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-200">
            <li>
              <strong className="text-purple-800 dark:text-purple-300">Robo Genie</strong> – Instructor <span className="text-sm text-gray-500">(6 months)</span><br />
              <span className="ml-2">Delivered hands-on training sessions in programming and robotics for students aged 10–18.</span>
            </li>
            <li>
              <strong className="text-purple-800 dark:text-purple-300">G7</strong> – Instructor <span className="text-sm text-gray-500">(1 year)</span><br />
              <span className="ml-2">Conducted programming workshops and guided students through coding fundamentals.</span>
            </li>
          </ul>
        </section>

        {/* Internship Experience */}
        <section className="bg-purple-50 dark:bg-[#443C68]/40 rounded-xl p-6 shadow">
          <h3 className="text-xl font-bold mb-4 text-purple-700 flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-purple-400 rounded mr-2"></span>
            Internship Experience
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-200">
            <li>
              <strong className="text-purple-800 dark:text-purple-300">Information Technology Institute (ITI)</strong> – Advanced Frontend Web Development (React.js) <br />
              <span className="ml-2">Gained practical experience in HTML5, CSS3, Bootstrap, JavaScript, and React.js through intensive training.</span>
            </li>
          </ul>
        </section>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Leadership & Extracurricular */}
        <section className="bg-purple-50 dark:bg-[#443C68]/40 rounded-xl p-6 shadow">
          <h3 className="text-xl font-bold mb-4 text-purple-700 flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-purple-400 rounded mr-2"></span>
            Leadership & Extracurricular
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-200">
            <li>
              <strong className="text-purple-800 dark:text-purple-300">Semicolon</strong> – React Track Instructor <span className="text-sm text-gray-500">(2023)</span>
            </li>
            <li>
              <strong className="text-purple-800 dark:text-purple-300">White Virus</strong> – Technical Track Mentor <span className="text-sm text-gray-500">(Web Track, 2023)</span>
            </li>
          </ul>
        </section>

        {/* Certifications */}
        <section className="bg-purple-50 dark:bg-[#443C68]/40 rounded-xl p-6 shadow">
          <h3 className="text-xl font-bold mb-4 text-purple-700 flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-purple-400 rounded mr-2"></span>
            Certifications
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-200">
            <li>
              <strong className="text-purple-800 dark:text-purple-300">Information Technology Institute (ITI)</strong> – Advanced Frontend Web Development (React.js)
            </li>
            <li>
              <strong className="text-purple-800 dark:text-purple-300">ICDL</strong> – International Computer Driving License <span className="text-sm text-gray-500">(Basic computer & office software skills)</span>
            </li>
            <li>
              <strong className="text-purple-800 dark:text-purple-300">TOT (Training of Trainers)</strong> – Certified in teaching and mentoring technical subjects
            </li>
          </ul>
        </section>
      </div>

      {/* Courses */}
      <section className="bg-purple-50 dark:bg-[#443C68]/40 rounded-xl p-6 shadow mb-10">
        <h3 className="text-xl font-bold mb-4 text-purple-700 flex items-center gap-2">
          <span className="inline-block w-2 h-6 bg-purple-400 rounded mr-2"></span>
          Courses
        </h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-200">
          <li>
            <strong className="text-purple-800 dark:text-purple-300">React – Maximilian Schwarzmüller</strong> <span className="text-sm text-gray-500">(Udemy)</span>
          </li>
          <li>
            <strong className="text-purple-800 dark:text-purple-300">JavaScript – Jonas Schmedtmann</strong> <span className="text-sm text-gray-500">(Udemy)</span>
          </li>
          <li>
            <strong className="text-purple-800 dark:text-purple-300">ChatGPT Prompt Engineering for Developers</strong> – DeepLearning.AI
          </li>
          <li>
            <strong className="text-purple-800 dark:text-purple-300">Building Systems with the ChatGPT API</strong> – DeepLearning.AI
          </li>
        </ul>
      </section>

      {/* Skills */}
      <div>
        <p className="font-bold text-2xl mb-8 text-purple-800 dark:text-purple-200">My Skills</p>
        <div className="flex flex-wrap gap-8 justify-center">
     
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl bg-purple-400 flex justify-center items-center'>
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