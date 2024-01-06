"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectTag from "../components/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "React Portfolio",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://hamoodas.netlify.app/",
    previewUrl: "https://hamoodas.netlify.app/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Potography Portfolio  amazing Website",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fitsaleem",
    previewUrl: "https://github.com/fitsaleem",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "E-commerce Application",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fitsaleem/e-comerce-website",
    previewUrl: "https://github.com/fitsaleem/e-comerce-website",
  },
  {
    id: 4,
    title: "software development Application",
    description: " software development consulting services for businesses.",
    image: "/images/projects/9.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://fitcodding.netlify.app/",
    previewUrl: "https://fitcodding.netlify.app/",
  },
  {
    id: 5,
    title: "Full-stack Applicaton",
    description: "Next js CarHab full stack application",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://carhub-coral.vercel.app/",
    previewUrl: "https://carhub-coral.vercel.app/",
  },
  {
    id: 6,
    title: "Full-stack Applicaton",
    description: "Next js Movies full stack application",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fitsaleem/nextjs-movies-web",
    previewUrl: "https://nextjs-movies-web.vercel.app/",
  },
 
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    
    <div id="projects" className="bg-black h-full  m-auto">
      <h2 className="text-center text-4xl font-bold text-white pt-10 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12 px-10">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;