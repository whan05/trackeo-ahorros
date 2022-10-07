import React, { useState } from 'react'
import { formatoFecha } from '../helpers'

export const AhorroTipo = ({ahorro}) => {

    const {nombre, cantidad, fecha} = ahorro



  return (
        <div className="ahorro">
            <div className="ahorro__nombre">
                <h3>Nombre de Ahorro</h3>
                <p>{nombre}</p>
            </div>
            <div className="ahorro__nombre">
                <h3>Meta de Ahorro</h3>
                <p>{cantidad}</p>
            </div>
            <div className="ahorro__cantidad">
                <h3>Cantidad de Ahorro</h3>
                <p>$11000</p>
            </div>
            <div className="ahorro__progreso">
                <h3>Fecha de Inicio</h3>
                <p>{formatoFecha(fecha)}</p>
            </div>
            <div className="ahorro__botones">
                <input 
                    type="submit"
                    value="Editar"
                    className='btn-editar'
                    />
                <input 
                    type="submit"
                    value="Eliminar" 
                    className='btn-eliminar'
                />
            </div>
        </div>
  )
}
