
import React, { Suspense, useRef, useState } from 'react'
import ContactImag from '../assets/contact.png';
import emailjs from '@emailjs/browser'
function Contact() {
  
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isloading, setIsLoading] = useState(false)
  const formRef=useRef()
  const handleChange = ({target:{name,value}}) => {
   
    setForm({...form ,[name]:value})
    
    
  }
  const handleOnsumbit = (e) => {
    e.preventDefault()
    setIsLoading(true)
  
   
    emailjs.sendForm(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      formRef.current, 
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setIsLoading(false);
      console.log("Email sent successfully!");
    })
    .catch((err) => {
      setIsLoading(false);
      console.error("Failed to send email:", err);
    });
    setTimeout(() => {
   
    }, 4000);
  }
  return (
    <section className='relative h-screen w-[100vw] dark:bg-black-500   flex lg:flex-row flex-row  max-container'>
      <div >
        <h1 className='dark:text-white head-text'>
          Get in touch
        </h1>
        <form ref={formRef}onSubmit={handleOnsumbit} className='w-full   justify-center gap-5 flex flex-col items-start mt-[20px] sm:w-[400px]'>
          <label className='dark:text-white flex justify-center  font-medium items-center text-[24px] align-super mb-[-10px]'>

            Name :
          </label>
          <input
            type='text'
            name='name'
            className="border h-10 w-[500px] shadow-lg focus:outline-none border-gray-300 focus:border-purple-200 focus:ring-2 focus:ring-purple-900 rounded-md p-2"
            placeholder='Menna'
            required
            onChange={handleChange}
            value={form.name}
          />
          <label className='  dark:text-white  flex justify-center font-medium items-center text-[24px] align-super mb-[-10px]'>

            Email :
          </label>
          <input
            type='email'
            name='email'
            className="border h-10 w-[500px] focus:outline-none shadow-lg border-gray-300 focus:border-purple-200 focus:ring-2 focus:ring-purple-900 rounded-md p-2"
            placeholder='Menna@gmail.com'
            required
            onChange={handleChange}
            value={form.email}
          />
          <label className='dark:text-white flex justify-center font-medium items-center text-[24px] align-super mb-[-10px]'>
            Your Message :
          </label>
          <textarea
            name='message'
            rows={5}
            required
            onChange={handleChange}
            value={form.message}
            placeholder='write your thoughts here...' className='shadow-lg p-3  w-[500px] border focus:outline-none border-gray-300 focus:border-purple-200 focus:ring-2 focus:ring-purple-900 rounded-md' />
          <button disabled={isloading} className='transform scale-95 transition-transform duration-500 hover:scale-100 w-[520px] h-[45px] bg-gradient-to-br from-purple-800  via-purple-250 to-purple-400  rounded text-white ml-[-9px]  '>
            {isloading ? 'sending....' : 'Send Message'}
          </button>
        </form>
       
      </div>
      <div>
          <img className='ml-[150px] animate-float mt-[100px]' src={ContactImag}/>
        </div>
 </section>
  )
}

export default Contact