import React, { FC } from 'react';

interface Props {
    setPage: (arg: string) => void;
}
const Navbar:FC<Props> = ({ setPage }) => {
    return (
        <div>
            <button onClick={() => setPage('planet')} >Planets</button>
            <button onClick={() => setPage('people')}>People</button>
        </div>
    );
};

export default Navbar;