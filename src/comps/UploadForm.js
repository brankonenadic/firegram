import React, { useState } from 'react';

const UploadForm = () => {
    const [file, setfile] = useState(null);
    const [error, seterror] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setfile(selected);
            seterror('');
        } else {
            setfile(null);
            seterror('Please select an image file (jpeg or png)');
        }
    };

    return (
        <form>
            <input type="file" onChange={changeHandler} />
            <div className='output'>
                {error && <div className='error'>{error}</div>}
                {file && <div>{file.name}</div>}
            </div>
        </form>
    )
}

export default UploadForm
