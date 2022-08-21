import React, { FunctionComponent } from 'react';
import { Snsdata } from '../Sns_type';

export const Button: FunctionComponent<Snsdata> = ({ url, name }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {name}
  </a>
);
