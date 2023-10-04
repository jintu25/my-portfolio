import React, { useEffect, useState } from "react";
import SingleProject from "./SingleProject";
import "./Project.css";
import { useLoaderData } from "react-router-dom";
// import Aos from "aos";
// import 'aos/dist/aos.css'
const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-server-jintu45.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  
  // const projects = useLoaderData()
  return (
    <div id="project" className="bg-project max-w-screen-xl m-auto pb-16">
      <div className="py-16">
        <h2 className="font-bold project-title text-3xl lg:text-5xl text-center mb-6">
          Latest Project
        </h2>
        <p className="text-lg text-slate-100 font-medium text-center mb-20 w-full md:w-2/6 m-auto">Here are some of the latest website i have designed and developed and i plan to do more in the future.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:text-center gap-8  lg:mx-0 mx-3">
          {projects.map((project) => (
            <SingleProject key={project._id} project={project}></SingleProject>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
