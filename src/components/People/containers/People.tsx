import React from 'react';
import { useQuery } from 'react-query';
import Errors from '../../Status/Errors';
import Pending from '../../Status/Pending';
import Person from '../components/Person';
import { PersonProps } from '../types/types';

const People = () => {
    const fetchPeople = async () => {
        const res = await fetch('https://swapi.dev/api/people');
        return res.json();
    };
    const { data, status }: { data: any | undefined, status: string } = useQuery('people', fetchPeople);
    return (
        <div>
            {status === "loading" && <Pending />}
            {status === "error" && <Errors />}
            {status === "success" && (
                <div>
                    {data.results.map((person: PersonProps) => <Person key={person.name} {...{person}} />)}
                </div>
            )}
        </div>
    );
};

export default People;