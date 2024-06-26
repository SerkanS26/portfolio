"use client";
import { useEffect, useState } from "react";

import items from "../projects";

import ProjectCard from "../components/ProjectCard";

const PortfolioPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(items);
  }, [projects]);

  return (
    <div className="">
      <div className="w-screen h-[calc(100vh-6rem)]  flex items-center justify-center text-8xl text-center ">
        My Works
      </div>

      <section className=" px-4 pt-10 pb-10 h-screen">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 gap-8  ">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
