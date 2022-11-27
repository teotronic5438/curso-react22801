import React from 'react';
import {useParams} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const Categories = () => {
    // const parameters = useParams();  // podemos crear el obejto o hacer destructuring
    const {categoria} = useParams();
    return (
        <>
            <h1 className='text-center text-primary'>Categorias</h1>
            <div>
                { (categoria === 'terror') 
                ? <Alert className='text-center' variant='danger'>Invalido, no hay peliculas de terror</Alert> 
                : "Categoria: " + categoria}
            </div>
        </>
    )
}

export default Categories;