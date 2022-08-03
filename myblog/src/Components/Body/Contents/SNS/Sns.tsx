import React from 'react';
import { Button } from './Button';
import { SnsList } from './Sns_style';

export const Sns = () => {
    return (
                <SnsList>
                    <Button name='velog' url='https://velog.io/@han1368'></Button>
                    <Button name='Github' url='https://github.com/Jeong-IK'></Button>
                </SnsList>
            )};
