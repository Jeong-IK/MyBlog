import React, { FunctionComponent } from 'react';
import { repositoryData } from '../Project_type';
import { Card, ReposeName } from './RepositoryCard_style';

export const RepositoryCard: FunctionComponent<repositoryData> = props => {
  return (
  <Card>
    <ReposeName>{props.name}</ReposeName>
  </Card>
  );
};
