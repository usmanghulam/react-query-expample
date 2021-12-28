import React from 'react';
import { useQuery } from 'react-query';
import Errors from '../../Status/Errors';
import Pending from '../../Status/Pending';
import Planet from '../components/Planet';
import { PlanetProps } from '../types/type';

const Planets = () => {
    const fetchPlanets = async () => {
        const res = await fetch('https://swapi.dev/api/planets');
        return res.json();
    };
    const { data, status }: { data: any | undefined, status: string } = useQuery('planets', fetchPlanets);
    return (
        <div>
            {status === "loading" && <Pending />}
            {status === "error" && <Errors />}
            {status === "success" && (
                <div>
                    {data.results.map((planet: PlanetProps) => <Planet key={planet.name} {...{planet}} />)}
                </div>
            )}
        </div>
    );
};

export default Planets;