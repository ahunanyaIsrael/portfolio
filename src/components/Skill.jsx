import React from "react";

const Skill = ({ name, icon }) => {
  return (
    <div className="bg-[var(--primary-color-shade-400)] flex gap-4 justify-around items-center p-2 w-full max-md:h-[100%] max-md:">
      <div className = "w-full text-[clamp(8px,2vw,14px)]">{name}</div>
      <div className = "w-full">{icon}</div>
    </div>
  );
};

export default Skill;
