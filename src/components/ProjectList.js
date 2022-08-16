import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects.technologies)
  const projectItems = projects.map((user) => {
    return <ProjectItem key={user.id} name ={user.name} about={user.about} technologies={user.technologies}/>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectItems}
        </div>
    </div>
  );
}

export default ProjectList;
