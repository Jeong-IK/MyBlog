import { useState, useEffect, Fragment } from 'react';
import { CardMenu } from './Card';
interface ProjectData {}
interface ProjectArray {
    projects: ProjectData[];
}

export const Project = () => {
    const [project, setProject] = useState<ProjectArray | null>(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/Jeong-IK/repos`)
            .then(res => res.json())
            .then(data => {
                setProject(data);
                console.log(data);
            });
    }, [setProject]);

    return (
        <>
            {project &&
                project.map(element => {
                    return (
                        <CardMenu
                            name={element.name}
                            full_name={element.full_name}
                        />
                    );
                })}
        </>
    );
};
