import React from 'react';
import useStorage from '../hooks/useStorage';

const ProgresBar = ({file, setfile}) => {

const [url, progres] = useStorage(file);
console.log(url,progres);
    return (
        <div className='progress-bar'>
        Progress    
        </div>
    )
}

export default ProgresBar
