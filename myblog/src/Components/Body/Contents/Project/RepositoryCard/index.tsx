import React, { FunctionComponent } from 'react';
import { repositoryData } from '../Project_type';
import { Card } from './RepositoryCard_style';

export const RepositoryCard: FunctionComponent<repositoryData> = props => {
  return <Card>{props.name}</Card>;
};
