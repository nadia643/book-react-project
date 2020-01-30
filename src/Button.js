import React from 'react';

export default function Buttons({handleDelete}) {
    return (
        <button type="button" style={{background: 'red', color: 'white', fontSize: '2rem'}}
         onClick={handleDelete}
         >Delete Me</button>
    )
}
