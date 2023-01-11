import React, {useEffect, useState} from "react";
import url from '../../keys/backend_keys'
import { useParams } from 'react-router-dom';
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
// import '../../sass/Orden.sass'
import '../../sass/Recetas.sass'
import ModalAccepted from "../includes/ModalAccepted";
import ModalCrearEliminar from "../includes/ModalCrearEliminar";

const ListaOrden = () => {
    //OBTENIENDO TODAS LAS ÓRDENES
    const {id} = useParams()
    const [ListaOrden, setListaOrden] = useState([])
    useEffect(() => {
        fetch(`${url}/Orden/id_HistClinica/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setListaOrden(data)
        })
    }, [id])

    const [Orden, setOrden] = useState({})
	const history = useHistory()
	const NuevaOrden = () => {
		fetch(`${url}/Orden/new`, {
			headers: {
				'Content-Type' : 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				fecha: moment().format(),
				// fecha: moment().format('DD-MM-YYYY HH:mm'),
				id_HistClinica: id

			})
		})
		.then((resp) => resp.json())
		.then((data) => {
			if(data.ok){
				setOrden({
					...Orden,
					_id: data.orden._id,
					fecha: moment().format(),
					// fecha: moment().format('DD-MM-YYYY HH:mm'),
					id_HistClinica: id
				})
			}
			// window.location.href = `/agregar-orden/${data.orden._id}`
			history.push(`/agregar-orden/${data.orden._id}`)
		})
	}

    const [form, setForm] = useState(false);
	const onForm = () => {
		setForm(!form);
	};

    const eliminarIndicacionesOrden = (idOrden) => {
        fetch(`${url}/IndicacionOrden/idOrden/${idOrden}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        })
    }

    const [ordenElim, setOrdenElim] = useState({});
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [modalAccepted, setModalAccepted] = useState(false)

    const eliminarOrden = () => {
        eliminarIndicacionesOrden(ordenElim._id)
        fetch(`${url}/Orden/${ordenElim._id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        })
            .then((resp) => resp.json())
            .then((data) => {
                if(data.ok){
                    setListaOrden(ListaOrden.filter((item) => item._id !== ordenElim._id))
                    setConfirmDelete(false)
                    setModalAccepted(true)
                }
            })
            .catch((error) => {
                console.log('Error: ', error)
            })
    }

    return (
        <>
            <div className="contenedorReceta">
                <div className='titulo_receta'>
                    <h3>ÓRDENES MÉDICAS</h3>
                    <span onClick={onForm}><i className="fas fa-file-medical"></i></span>
                </div>
                {
                    form && 
                    <ModalCrearEliminar 
                        message='¿DESEA CREAR UNA NUEVA RECETA?' 
                        doFunction={NuevaOrden}
                        setModal={setForm}
                    />
                }

                {
                    confirmDelete && 
                    <ModalCrearEliminar 
                        message='¿DESEA ELIMINAR ESTA RECETA?' 
                        doFunction={eliminarOrden}
                        setModal={setConfirmDelete}
                    />
                }
                {modalAccepted && <ModalAccepted message='Eliminado Correctamente' setModalAccepted={setModalAccepted}/>}
                {
                    ListaOrden.length > 0 &&
                        <div className='ScrollTable' style={{marginLeft: '3%'}}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>N°</th>
                                        <th>Fecha</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ListaOrden.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{moment(item.fecha).format('DD-MM-YYYY HH:mm')}</td>
                                            <td>
                                                <Link to={`/agregar-orden/${item._id}`}>
                                                    <strong
                                                        style={{
                                                            textDecoration: 'underline',
                                                            cursor: 'pointer',
                                                        }}
                                                        >
                                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                                    </strong>
                                                </Link>
                                            </td>
                                            <td>
                                                <button 
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        setOrdenElim(item)
                                                        setConfirmDelete(true)
                                                    }}
                                                    
                                                    style={{
                                                        background: 'transparent',
                                                        border: 'none',
                                                        color: 'red',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                }
            </div>
        </>
    )
}

export default ListaOrden