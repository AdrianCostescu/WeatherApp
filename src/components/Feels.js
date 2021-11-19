import React from 'react'
import { useState, useEffect } from 'react'

const Feels = ({temp_c}) => {

    const [message, setMessage] = useState();

    useEffect (() => {
        if(temp_c >= -3 && temp_c <= 3 ){
            setMessage('Coats and hats are appropriate, consider gloves and a scarf.')
        } else if(temp_c >= 4 && temp_c <= 10){
            setMessage('Jacket or sweater is recommended.')
        } else if(temp_c >= 11 && temp_c <= 16){
            setMessage('Light jacket or swater may be appropriate.')
        }
    }, [temp_c]);

    return (
        <div>
            {message}
        </div>
    )
}

export default Feels
