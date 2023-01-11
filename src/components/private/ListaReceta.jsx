import React, {useEffect, useState} from "react";
import url from '../../keys/backend_keys'
import { useParams } from 'react-router-dom';
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
import '../../sass/Recetas.sass'
import ModalAccepted from "../includes/ModalAccepted";
import ModalCrearEliminar from "../includes/ModalCrearEliminar";

const ListaReceta = () => {
    //OBTENIENDO TODAS LAS RECETAS
    const {id} = useParams()
    const [listaReceta, setListaReceta] = useState([])
    useEffect(() => {
        fetch(`${url}/Receta/idHistClinica/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setListaReceta(data)
        })
    }, [id])

    //PARA REGISTRAR NUEVA RECETA
    const [Receta, setReceta] = useState({})
    const history = useHistory()
    const NuevaReceta = () => {
        fetch(`${url}/Receta/new`, {
            headers: {
				'Content-Type' : 'application/json'
			},
            method: 'POST',
            body: JSON.stringify({
                fecha: moment().format(),
                id_HistClinica: id
            })
        })
        .then((resp) => resp.json())
        .then((data) => {
            if(data.ok){
                setReceta({
                    ...Receta,
                    _id: data.receta._id,
                    fecha: moment().format(),
                    id_HistClinica: id
                })
                setForm(false)
            }
            history.push(`/agregar-receta/${data.receta._id}`)
        })
    }

    //MODAL DE CONFIRMACIÓN PARA CREAR
    const [form, setForm] = useState(false);
	const onForm = () => {
		setForm(!form);
	};

    const eliminarMedicamentosReceta = (idReceta) => {
        fetch(`${url}/MedicamentoReceta/idReceta/${idReceta}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        })
    }

    const [recetaElim, setRecetaElim] = useState({});
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [modalAccepted, setModalAccepted] = useState(false)

    const eliminarReceta = () => {
        eliminarMedicamentosReceta(recetaElim._id)
        fetch(`${url}/Receta/${recetaElim._id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        })
            .then((resp) => resp.json())
            .then((data) => {
                if(data.ok){
                    setListaReceta(listaReceta.filter((item) => item._id !== recetaElim._id))
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
                    <h3>RECETAS MÉDICAS</h3>
                    <span onClick={onForm}><i className="fas fa-file-medical"></i></span>
                </div>
                {
                    form && 
                    <ModalCrearEliminar 
                        message='¿DESEA CREAR UNA NUEVA RECETA?' 
                        doFunction={NuevaReceta}
                        setModal={setForm}
                    />
                }

                {
                    confirmDelete && 
                    <ModalCrearEliminar 
                        message='¿DESEA ELIMINAR ESTA RECETA?' 
                        doFunction={eliminarReceta}
                        setModal={setConfirmDelete}
                    />
                }
                {modalAccepted && <ModalAccepted message='Eliminado Correctamente' setModalAccepted={setModalAccepted}/>}
                {
                    listaReceta.length > 0 &&
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
                                    {listaReceta.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{moment(item.fecha).format('DD-MM-YYYY HH:mm')}</td>
                                            <td>
                                                <Link to={`/agregar-receta/${item._id}`}>
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
                                                        setRecetaElim(item)
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

export default ListaReceta