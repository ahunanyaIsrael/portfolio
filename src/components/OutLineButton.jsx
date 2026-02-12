import React from "react";

const OutLineButton = ({ name, onClick }) => {
  return (
    <button
      className="bg-transparent border-2 border-[var(--text-color)] p-4 rounded-4xl text-[var(--text-color)] w-36 hover:bg-[var(--primary-color-shade-400)] hover:border-0 transition duration-300 cursor-pointer font-bold mt-4 max-md:font-medium max-md:text-sm max-sm:p-2 max-sm:text-sm max-sm:font-medium"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default OutLineButton;
