import React from 'react'

export default function ErrorMessage(props) {
    const message = props.message;
    
    //Definir style para que sea un error
    return (
        <>
            <label className='bg-danger text-light text-center'>{message}</label>
        </>
    )
}
