import { useState } from 'react'
import Boton from './components/Boton'
import Texto from './components/Texto'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hola desde vite!</h1>
      <Texto />
      <Boton texto="Pizza" icon='🍕'/>
      <Boton texto="Hamburguesa" icon='🍔'/>
      <Boton texto="Taco" icon='🌮'/>
    </>
  )
}

export default App
