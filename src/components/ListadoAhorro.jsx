import React from 'react'
import { AhorroTipo } from './AhorroTipo'

export const ListadoAhorro = ({ahorros}) => {
  return (
    <div className='ahorros'>
        {ahorros.map(ahorro => (
            <AhorroTipo
                key={ahorro.id}
                ahorro={ahorro}
            />
        ))}


    </div>
  )
}
