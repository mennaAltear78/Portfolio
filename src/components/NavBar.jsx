import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import AuthContext from "../Hooks/Auth-context";
import { useTheme } from "../Hooks/ThemeContext";
function NavBar() {
  const ctx =useContext(AuthContext)
  const {toggleTheme}= useTheme()
  const modenow = JSON.parse(localStorage.getItem("mode"));
  const [mode,setMode]=useState(modenow)
  

  const handlingSlider =()=>{
   
    const modee = JSON.parse(localStorage.getItem("mode"));
    setMode(!modee)
    localStorage.setItem("mode", JSON.stringify(!mode));
    toggleTheme()
    ctx.setMode((prevMode) => !prevMode); 
    console.log(ctx.mode);
}
useEffect(() => {
  console.log("Mode updated:", ctx.mode);
}, [ctx.mode]); // يتم تشغيل الـ console.log عند تغيير mode

  return (
    <div>
        <header className="header">
      <NavLink
        to="./"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className=" bg-gradient-to-r from-purple-200 via-purple-400 to-purple-600 text-transparent bg-clip-text">
          MA
        </p>
      </NavLink>
      <nav className=" text-black gap-10 p-3 h-10 rounded-lg sm:text-[14px] text-[10px] sm:ml-2 ml-[20px] bg-white items-center justify-center flex font-bold shadow-md">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive &&
            "bg-gradient-to-r from-purple-400 via-purple-450 to-purple-800 text-transparent bg-clip-text"
          }
        >
          <p className="">About</p>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive &&
            "bg-gradient-to-r from-purple-400 via-purple-450 to-purple-800 text-transparent bg-clip-text"
          }
        >
          <p className="">Projects</p>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive &&
            "bg-gradient-to-r from-purple-400 via-purple-450 to-purple-800 text-transparent bg-clip-text"
          }
        >
          <p className="">Contact</p>
        </NavLink>
        <div className={style.addCost}>
          <div
            className={mode ? style.sliderL : style.sliderR}
            onClick={handlingSlider} 
          >
            <div onClick={toggleTheme} className={mode ? style.CircleL : style.CircleR} />
          </div>
        </div>
      </nav>
    </header>
    
    </div>
  
  );
}

export default NavBar;
