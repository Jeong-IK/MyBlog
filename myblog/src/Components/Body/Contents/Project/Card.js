import { Fragment } from "react";

export const Card = (props) => {
  return (
    <Fragment key={props.name}>
      <h1>{props.name}</h1>
      <h1>{props.full_name}</h1>
    </Fragment>ㅎ
  );
};
