import React, { Suspense, useContext, useState } from "react";
import AuthContext from "../Hooks/Auth-context";

import myprofile from '../assets/Adobe Express - file.png';
import { Typewriter } from "react-simple-typewriter";



function Home() {
  const ctx = useContext(AuthContext);


  return (
    <section className="dark:bg-black-500  flex flex-wrap  justify-center gap-3 sm:gap-[200px]  text-white w-full h-screen relative  flex-row items-center ">
     


      <div className="w-[500px] sm:ml-[100px] ml-10  mt-[100px]">
        <h1 className="font-bold text-6xl  sm:mb-[50px] px-[20px] sm:px-[0px] bg-gradient-to-r from-purple-300 via-purple-600 to-purple-800 text-transparent bg-clip-text ">
          Welcome to My Portfolio</h1>
        <h1 className="dark:text-white text-gray-600 text-3xl mt-3 sm:ml-0 ml-5  ">
          <Typewriter
            words={["Hello, world!","react.js","three.js","prompt engineer"]}
            loop={5} 
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </h1>
      </div>

      {/* العناصر المتحركة */}
      <div className="flex items-center sm:gap-0 gap-10 relative sm:ml-[0px]  ml-[120px]">
        <div className="relative ">
          <div className="w-[400px] h-[30px] animate-slideIn absolute z-10 border-0 top-[120px] left-[-120px] rounded-[20px] bg-gradient-to-br from-purple-800 via-purple-250 to-purple-400 shadow-lg" />
          <div className="w-[50px] h-[500px] animate-slideIn absolute z-10 top-[-190px] left-[-70px] rounded-[20px] bg-gradient-to-br from-purple-800 via-purple-250 to-purple-400 shadow-lg" />
          <div className="w-[70px] h-[70px] animate-spin absolute z-10 top-[-100px] left-[190px] rounded-[50%] bg-gradient-to-br from-purple-800 via-purple-250 to-purple-400 shadow-lg" />
          <div className="w-[30px] h-[30px] animate-spin absolute top-[-100px] left-[150px] rounded-[50%] bg-gradient-to-br from-purple-800 via-purple-250 to-purple-400 shadow-lg" />
          <div className="w-[50px] h-[50px] animate-spin absolute z-10 top-[-190px] left-[150px] rounded-[50%] bg-gradient-to-br from-purple-800 via-purple-250 to-purple-400 shadow-lg" />
        </div>

        {/* الصورة الشخصية */}
        <div className="w-[300px] h-[500px] border-0">
          <img
            className="w-full h-full absolute border-0 top-[-100px] left-[-70px] animate-fade object-cover rounded-[20%] shadow-lg"
            src={myprofile}
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
