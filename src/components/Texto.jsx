// rafce

import React, { Fragment, useState } from 'react'

const Texto = () => {
    const [mostrar, setMostrar] = useState(false);

    const handlerClick = () => {
        console.log('Hola desde el boton');
        setMostrar(!mostrar);
        console.log(mostrar);
    };

    console.log('Estado de mostrar:', mostrar);
    
  return (
    <Fragment>
        {mostrar && <h1>Titulo del componente Texto</h1>}
        <button onClick={handlerClick}>{mostrar ? 'Ocultar': 'Mostrar'}</button>
    </Fragment>
  )
}

export default Texto