import { Card } from './Project_style';

export const CardMenu = props => {
    return (
        <Card key={props.name}>
            {props.name}
            {props.full_name}
        </Card>
    );
};
