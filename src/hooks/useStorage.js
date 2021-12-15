import { useState, useEffect } from "react";
import { projectStorage } from '../firebase/config';

const useStorage = (file) => {

    const [progres, setprogres] = useState(null);
    const [error, seterror] = useState(null);
    const [url, seturl] = useState(null);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        storageRef.put(file);

    }, [file]);

    return (
        <div>

        </div>
    )
}

export default useStorage
