import React, { FunctionComponent } from 'react';
import { RepositoryData } from '../Project_type';
import { Card, ReposeName } from './RepositoryCard_style';

export const RepositoryCard: FunctionComponent<RepositoryData> = ({ name }) => (
  <Card>
    <ReposeName>{name}</ReposeName>
  </Card>
);
