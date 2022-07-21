import React, { useState, useEffect } from 'react';
import { ProjectService } from './Project_type';

export const Project = () => {
  const [project, setProject] = useState<ProjectService>({
    status: 'loading',
  });

  useEffect(() => {
    fetch('https://api.github.com/users/Jeong-IK/repos')
      .then(res => res.json())
      .then(data => {
        setProject({
          status: 'success',
          result: data,
        });
      })
      .catch(() => setProject({ status: 'error' }));
  }, []);

  return (
    <>
      {project.status === 'success' &&
        project.result.map(prop => {
          console.log(prop.name);
        })}
    </>
  );
};
