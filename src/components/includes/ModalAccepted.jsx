import React from 'react'
import '../../sass/ModalConfirm.sass'

const ModalAccepted = ({message, setModalAccepted}) => {

    return (
        <div className="modalContainer">
            <div className="contenido-modal">
                <p className="pregunta">{message}</p>
                <button
                    className='btnAccept'
                    onClick={(e) => {
                        e.preventDefault()
                        setModalAccepted(false)
                    }}
                >
                    OK
                </button>
            </div>
        </div>
    )
}

export default ModalAccepted