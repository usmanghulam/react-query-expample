import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Errors from '../../Status/Errors';
import Pending from '../../Status/Pending';
import Planet from '../components/Planet';
import { PlanetProps } from '../types/type';

const Planets = () => {
    const [page, setPage] = useState(1);
    const fetchPlanets: any = async ({ queryKey }: any) => {
        const [key, page] = queryKey;
        const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
        return res.json();
    };
    const { data, status }: { data: any | undefined, status: string } = useQuery(['planets', page], fetchPlanets);
    return (
        <div>
            <button
            disabled={Boolean(page === 1)} 
            onClick={() => setPage(old => (old > 1 ? old - 1 : 1) )}>Previous</button>
            <span>{page}</span>
            <button
            disabled={typeof data === 'object' && !data.next}
            onClick={() => setPage(val => ((data && data.next) ? val + 1: page))}>Next</button>
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