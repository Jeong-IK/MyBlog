import { useState, useEffect, Fragment } from "react";
import { CardMenu } from "./Card";

export const Project = () => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/Jeong-IK/repos`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      });
  }, [setProject]);

  return (
    <>
      {project &&
        project.map((element) => {
          return <CardMenu name={element.name} full_name={element.full_name} />;
        })}
    </>
  );
};
