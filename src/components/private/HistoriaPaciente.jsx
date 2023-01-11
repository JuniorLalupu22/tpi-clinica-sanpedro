import React from 'react'
import '../../sass/Historia.sass'
import HistoriasClinicas from './extras/HistoriasClinicas'
const HistoriaPaciente = (props) => {
    return (
        <div className='contenidoHistoria'>
            <HistoriasClinicas id={props.match.params.id}  />
        </div>
    )
}

export default HistoriaPaciente
