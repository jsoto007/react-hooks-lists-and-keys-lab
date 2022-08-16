import React from "react";

function ProjectItem({ name, about, technologies }) {
  const projectHeadings = technologies.map((item)=> {
    return <span key={item}>{item}</span>
  })
  console.log(projectHeadings)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {projectHeadings}
      </div>
    </div>
  );
}

export default ProjectItem;
