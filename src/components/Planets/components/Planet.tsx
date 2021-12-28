import React, { FC } from 'react';
import { PlanetProps } from '../types/type';

const Planet:FC<{ planet: PlanetProps }> = ({ planet: { name, created, gravity } }) => {
    return (
        <>
            <h4>{name}</h4>
            <h4>{created}</h4> <span>{gravity}</span>
        </>
    );
};

export default Planet;