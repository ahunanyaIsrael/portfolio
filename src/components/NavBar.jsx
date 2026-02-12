import React from "react";
import { about, home, msg, project, resume } from "../utils/img";

const NavBar = () => {
  return (
    <div className="flex justify-around items-center max-w-lg bg-purple-500 rounded-4xl p-1.5 mt-6">
      <a href="#home" className="hover:scale-110 transition-transform duration-300">
        <img className="w-8 cursor-pointer " src={home} alt="" />
      </a>
      <a href="#about" className="hover:scale-110 transition-transform duration-300">
        <img className="w-8 cursor-pointer " src={about} alt="" />
      </a>
      <a href="#resume" className="hover:scale-110 transition-transform duration-300">
        <img className="w-8 cursor-pointer " src={resume} alt="" />
      </a>

      <a href="#projects" className="hover:scale-110 transition-transform duration-300">
        <img className="w-8 cursor-pointer " src={project} alt="" />
      </a>
      <a href="#contact" className="hover:scale-110 transition-transform duration-300">
        <img className="w-8 cursor-pointer " src={msg} alt="" />
      </a>
    </div>
  );
};

export default NavBar;
