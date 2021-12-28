import { FC } from 'react';

interface Props {
    title: string;
    setPage: (prams: string) => void;
}
const buttons: FC<Props> = ({ title, setPage }) => {
    return <button onClick={() => setPage(`${title}`)} >{title}</button>
};

export default buttons;