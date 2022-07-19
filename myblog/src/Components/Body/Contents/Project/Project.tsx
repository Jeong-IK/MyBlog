import React, { useState, useEffect } from 'react';
import { ProjectService, ProjectType } from './Project_type';

export interface projectArray {
  datas: ProjectType[];
}

export const Project = () => {
  const [project, setProject] = useState<ProjectService<projectArray>>({
    status: 'loading',
  });

  useEffect(() => {
    fetch('https://api.github.com/users/Jeong-IK/repos')
      .then((res) => res.json())
      .then((data) => {
        setProject({
          status: 'success',
          data,
        });
      })
      .catch(() => setProject({ status: 'error' }));
  }, []);

  return (
    <>
      {project && console.log(project)}
    </>
  );
};
