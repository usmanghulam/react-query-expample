import React, { FC } from 'react';
import { PersonProps } from '../types/types';

const Person: FC<{person: PersonProps}> = ({ person }) => {
    return (
        <>
        <h2>
        {person.name}
        </h2>
        </>
    );
};

export default Person;