// rafce

import React, { Fragment, useState } from 'react'

const Texto = () => {
    const [mostrar, setMostrar] = useState(false);
    const [titulo, setTitulo] = useState('');

    const handlerClick = () => {
        console.log('Hola desde el boton');
        setMostrar(!mostrar);
        setTitulo('Hola, aparezco y no me quito');
    };

    console.log('Estado de mostrar:', mostrar);

  return (
    <Fragment>
        {mostrar && <h1>Titulo del componente Texto</h1>}
        <h4>{titulo}</h4>
        <button onClick={handlerClick}>
            {mostrar ? 'Ocultar': 'Mostrar'}
        </button>
    </Fragment>
  )
}

export default Texto