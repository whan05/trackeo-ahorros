import React, { useState } from 'react'
import { Mensaje } from './Mensaje';

export const Formulario = ({guardarAhorro}) => {
    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState(0)

    const [mensaje, setMensaje] = useState("")

    const handleAhorro = (e) => {
        e.preventDefault();

        if ( nombre === "" || cantidad <= 0) {
            setMensaje("Por favor ingrese los datos correctamente")

            setTimeout(() => {
                setMensaje("")
            }, 3000);
            return;
        }

        guardarAhorro({nombre,cantidad})


    }


  return (
    <form onSubmit={handleAhorro} className='formulario'>
        <div className="formulario__campos">
            <div className="formulario__campo">
                <label className='formulario__label'>Nombre</label>
                <input
                    type="text" 
                    placeholder='Nombre de ahorro'
                    className='formulario__input'
                    onChange={e => setNombre(e.target.value)}
                    value={nombre}
                />
            </div>
            <div className="formulario__campo">
                <label className='formulario__label'>Cantidad</label>
                <input 
                    type="number"
                    placeholder='300' 
                    className='formulario__input'
                    onChange={e => Number(setCantidad(e.target.value))}
                    value={cantidad}
                />
            </div>
            <input 
                type="submit"
                className='formulario__btn'
                value="Añardir ahorro" 
            />
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </div>
    </form>
  )
}
