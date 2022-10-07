import { useState } from "react"
import { Formulario } from "./components/Formulario"
import { ListadoAhorro } from "./components/ListadoAhorro"
import { generarId } from "./helpers"
import "./styles/app.scss"

function App() {

  const [ahorros, setAhorros] = useState([])


  const guardarAhorro = (ahorro) => {
    ahorro.id = generarId()
    ahorro.fecha = Date.now()
    setAhorros([...ahorros,ahorro])
    console.log(ahorro);
  }

  return (
    <div className="app">
      <div className="entrada seccion">
        <div className="contenedor">
        <h1 className="heading">Bienvenidos(as)</h1>
        <Formulario
        guardarAhorro={guardarAhorro}
        />
        </div>
      </div>
      <div className="contenedor">
        <ListadoAhorro
          ahorros={ahorros}
        /> 
      </div>
    </div>
  )
}

export default App
