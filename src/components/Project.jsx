import React from "react";
import { demo } from "../utils/img";
import Button from "./Button";
import OutLineButton from "./OutLineButton";

const Project = ({ image, title, description, link, repo }) => {
  const handleViewLive = () => {
    window.open(link, "_blank");
  };
  const handleViewRepo = () => {
    window.open(repo, "_blank");
  };
  return (
    <div className="card">
      <div className="w-full">
        <img
          src={image}
          alt="project"
          className="w-full h-48 object-cover rounded-tl-2xl rounded-tr-2xl"
        />
      </div>

      <div className="p-4 w-full h-full bg-[var(--primary-color-shade-700)] rounded-b-2xl  flex flex-col gap-4">
        <div>
          <h3 className="text-[min(10vw,18px)] font-bold text-[var(--primary-color-shade-400)]">
            {title}
          </h3>
        </div>
        <div>
          <p>{description}</p>
        </div>

        <div className="flex gap-4 justify-around items-end w-full h-full">
          <Button name={"View Live"} onClick={handleViewLive} />
          <OutLineButton name={"GitHub Repo"} onClick={handleViewRepo} />
        </div>
      </div>
    </div>
  );
};

export default Project;
