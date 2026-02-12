import React from "react";
import { web } from "../utils/img";

const MainSkillCard = ({ image, title, description, color }) => {
  return (
    <div className="action-card" style={{ borderColor: color }}>
      <div>
        <img src={web} alt="skill" />
      </div>
      <div>
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <div>{description}</div>
    </div>
  );
};

export default MainSkillCard;
