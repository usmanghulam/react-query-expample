import React, { FC } from 'react';
import Button from '../components/buttons';

interface Props {
    setPage: (arg: string) => void;
}
const Navbar:FC<Props> = ({ setPage }) => {
    return (
        <nav>
            <Button title='planet' {...{ setPage }} />
            <Button title='people' {...{ setPage }} />
        </nav>
    );
};

export default Navbar;