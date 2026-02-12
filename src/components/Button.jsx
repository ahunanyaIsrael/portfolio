import React from "react";

const Button = ({ name, onClick, width }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[var(--primary-color-shade-400)] cursor-pointer p-4 rounded-4xl w-${width || 36} text-[var(--text-color)] font-bold mt-4 hover:scale-105 transition-colors duration-300 hover:bg-transparent hover:border-2 hover:border-[var(--text-color)] max-md:font-medium max-md:text-sm max-sm:p-2 max-sm:text-sm max-sm:font-medium`}
    >
      {name}
    </button>
  );
};

export default Button;
