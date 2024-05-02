import React from 'react'

const Boton = (props) => {
  return (
    <button>{`${props.texto} ${props.icon}`}</button>
  )
}

export default Boton