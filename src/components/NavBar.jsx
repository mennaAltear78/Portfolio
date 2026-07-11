import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import AuthContext from "../Hooks/Auth-context";
import { useTheme } from "../Hooks/ThemeContext";

function NavBar() {
  const ctx = useContext(AuthContext);
  const { toggleTheme } = useTheme();
  const modenow = JSON.parse(localStorage.getItem("mode"));
  const [mode, setMode] = useState(modenow);

  const handlingSlider = () => {
    const modee = JSON.parse(localStorage.getItem("mode"));
    setMode(!modee);
    localStorage.setItem("mode", JSON.stringify(!mode));
    toggleTheme();
    ctx.setMode((prevMode) => !prevMode);
    console.log(ctx.mode);
  };

  useEffect(() => {
    console.log("Mode updated:", ctx.mode);
  }, [ctx.mode]);

  const linkClass = ({ isActive }) =>
    [
      "font-body text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full transition-colors duration-200 whitespace-nowrap",
      isActive
        ? "bg-[#7C3AED]/20 border border-[#A78BFA]/40 text-[#E9D5FF]"
        : "text-[#F5F3FF]/60 hover:text-[#F5F3FF] border border-transparent",
    ].join(" ");

  return (
    <div>
      <style>{`
        .font-display { font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif; }
        .font-body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-8 py-3 sm:py-4 max-w-7xl mx-auto">
        <NavLink
          to="./"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md items-center justify-center flex shadow-lg hover:border-[#A78BFA]/40 transition-colors shrink-0"
        >
          <span className="font-display font-bold bg-gradient-to-r from-[#C4B5FD] via-[#A78BFA] to-[#F472B6] text-transparent bg-clip-text">
            MA
          </span>
        </NavLink>

        <nav className="flex items-center gap-1 sm:gap-2 px-1.5 sm:px-2 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg overflow-x-auto max-w-[calc(100vw-88px)]">
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

          <div className={`${style.addCost} ml-2 pl-2 border-l border-white/10`}>
            {/* <div
              className={mode ? style.sliderL : style.sliderR}
              onClick={handlingSlider}
            >
              <div
                onClick={toggleTheme}
                className={mode ? style.CircleL : style.CircleR}
              />
            </div> */}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;