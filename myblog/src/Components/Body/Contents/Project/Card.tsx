import { projectType } from './Project';

type propjectProps = {
    name: projectType;
};

export const Card = (props: propjectProps) => {
    return (
        <>
            <p>{props.name}</p>
        </>
    );
};
