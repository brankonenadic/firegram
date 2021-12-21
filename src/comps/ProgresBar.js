import React from 'react';
import useStorage from '../hooks/useStorage';

const ProgresBar = ({file, setfile}) => {
    console.log(file);
const {progres, url} = useStorage(file);
console.log(progres, url);
    return (
        <div className='progress-bar'>
        Progress    
        </div>
    )
}

export default ProgresBar
