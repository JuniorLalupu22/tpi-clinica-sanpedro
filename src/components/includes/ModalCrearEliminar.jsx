import '../../sass/HistoriaClinica.sass'

const ModalCrearEliminar = ({message, doFunction, setModal}) => {
    return (
        <>
            <div
                style={{
                    background: '#00000039',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    height: '100vh',
                    width: '100%',
                    zIndex:'2',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                     style={{
                        background: '#ffffff',
                        padding: '2px',
                        borderRadius: '6px',
                    }}
                >
                    <div className="ModalReceta">
                        <h3>{message}</h3>
                        <div className="ListaBotones">
                            <button onClick={(e) => {
                                e.preventDefault()
                                doFunction()
                            }}>
                                SÍ
                            </button>
                            <button onClick={() => {setModal(false)}}>NO</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalCrearEliminar