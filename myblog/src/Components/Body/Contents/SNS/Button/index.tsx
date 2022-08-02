import React, { FunctionComponent } from 'react';
import { Snsdata } from '../Sns_type';

export const Button: FunctionComponent<Snsdata> = prop =>{
    return <a href={prop.url} target='_blank' rel='noreferrer'>{prop.name}</a>;
}