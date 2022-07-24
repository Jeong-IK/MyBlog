import React, { FunctionComponent } from 'react';
import { repositoryData } from '../Project_type';

export const RepositoryCard: FunctionComponent<repositoryData> = props => {
  return <div>{props.name}</div>;
};
