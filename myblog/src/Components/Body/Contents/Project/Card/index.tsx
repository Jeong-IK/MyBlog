import React from 'react';
import { ProjectType } from '../Project_type';

export const Card = (props: ProjectType) => {
  return <div>{props.name}</div>;
};
