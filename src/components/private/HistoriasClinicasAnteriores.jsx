import React, { useEffect, useState } from 'react'
import '../../sass/HistoriasClinicasAnteriores.sass'
import url from '../../keys/backend_keys';
import moment from 'moment';
import MostrarHistoriasClinicas from './MostrarHistoriasClinicas';

const HistoriasClinicasAnteriores = ({id, fechaNac}) => {
    const [datos, setDatos] = useState([]);
    const [state, setState] = useState(false)
    const [open, setOpen]  = useState('')
	useEffect(() => {
		fetch(`${url}/HistClinica/${id}`)
			.then((resp) => resp.json())
			.then((data) => setDatos(data));
	}, [id]);

    const nuevosDatos = datos.slice().sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
    
    return (
        <>
            <div className='mostrarHistClinicas'>
                <div>
                    <h3 style={{width: '100%', textAlign: 'center'}}>HISTORIAS CLINICAS</h3>
                    <div className='histClinicas'> 
                            {
                                nuevosDatos.map((item) => (
                                    <div 
                                    className={open === item._id ? 'LinkHistClinicAnteriores LinkHistClinicAnterioresActivo' : 'LinkHistClinicAnteriores'}
                                    key={item._id}
                                    onClick={
                                        ()=>{
                                            setState(true)
                                            setOpen(item._id)
                                            }
                                        }
                                        >
                                        <p>{moment(item.fecha).format('DD/MM/YYYY')}</p>
                                        {/* {calcularEdad(item.fecha, fechaNac)} */}
                                    </div>
                                ))
                            }
                    </div>
                </div>
                <div 
                    style={{
                        height: '72vh', 
                        width: '10px', 
                        display: 'flex', 
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '40px'
                    }}
                    >
                    <i className="fa-solid fa-arrow-right" style={{color: '#50B4A1'}}></i>
                </div>
                {
                    open !== '' ?
                        <div className="contenedor_Mostrar_HistClinicas">
                            {state && <MostrarHistoriasClinicas id={open}/>}
                        </div>
                    :
                        <div style={{width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <h1>SELECCIONE UNA HISTORIA CLÍNICA</h1>
                        </div>
                }
            </div>
        </>
    )


}

export default HistoriasClinicasAnteriores