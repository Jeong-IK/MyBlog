import React, { useState, useEffect } from 'react';
import { Card } from './Card';

export type projectType = {
  name:string
}

export const Project = () => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Jeong-IK/repos')
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      });
  }, [setProject]);

  return (
    <>
      {project
        && project.map((element) => <Card
        key={element.name}
        name={element.name} />)}
    </>
  );
};
