import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import { Project_Service, ProjectType } from './Project_type';

export interface projectArray {
  data: ProjectType[];
}

export const Project = () => {
  const [project, setProject] = useState<Project_Service<projectArray>>({
    status: 'loading',
  });
  useEffect(() => {
    fetch('https://api.github.com/users/Jeong-IK/repos')
      .then(res => res.json())
      .then(data => {
        setProject(data);
      });
  }, [setProject]);

  return (
    <>
      {project &&
        project.map(element => <Card key={element.name} name={element.name} />)}
    </>
  );
};
