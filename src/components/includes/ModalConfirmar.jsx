import React from 'react'
import '../../sass/ModalConfirm.sass'

const ModalConfirmar = ({pregunta, setEliminar, setConfirmDelete, setModalAccepted, setMessage}) => {
    return (
        <div className='modalContainer'>
            <div className="contenido-modal">
                <p className="pregunta">{pregunta}</p>
                <div className="boton--container">
                    <button 
                        className="button confirm"
                        onClick={(e) => {
                            e.preventDefault()
                            setConfirmDelete(true)
                            setModalAccepted(true)
                            setMessage('Eliminado Correctamente')
                        }}
                    >
                        <i className="fas fa-trash-alt"></i>
                    </button>
                    <button 
                        className="button cancel"
                        onClick={(e) => {
                            e.preventDefault()
                            setEliminar(false)
                        }}
                    >
                        <i className="fas fa-window-close"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalConfirmar