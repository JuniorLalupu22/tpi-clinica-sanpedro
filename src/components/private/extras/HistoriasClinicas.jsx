import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import url from '../../../keys/backend_keys';
import { Link } from 'react-router-dom';

import useHistClinica from '../../../hooks/useHistClinica'


const HistoriasClinicas = () => {
	const { id } = useParams();
	const [datos, setDatos] = useState([]);
	useEffect(() => {
		fetch(`${url}/HistClinica/${id}`)
			.then((resp) => resp.json())
			.then((data) => setDatos(data));
	}, [id]);

	let {fechaNac} = useHistClinica()

	let fechaNacimiento = []

	for (let item in fechaNac){
		fechaNacimiento[item] = moment(fechaNac[0]).format()
	}

	const nuevosDatos = datos.slice().sort((a, b) => new Date(b.fecha) - new Date(a.fecha))

	const ModalNuevaHistClinica = () => {
		const [nuevaHistClinica, setnuevaHistClinica] = useState({})
		const handleChangeNuevo = (e) => {
			setnuevaHistClinica({
				...nuevaHistClinica,
				[e.target.name]: e.target.value,
			})
		}

		return (
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
				<form
					style={{
                        background: '#ffffff',
                        padding: '2px',
                        borderRadius: '6px',
                    }}
				>
					<div className='contenedorFormModal'>
						<h3>
							NUEVA HISTORIA CLÍNICA
						</h3>
						<div className='formularioModal'>
							<p>
								<label>Fecha </label>
								<input 
									type="date"
									name='fecha'
									onChange={handleChangeNuevo}
									value={nuevaHistClinica.fecha}
								></input>
							</p>
							<p>
								<button
									onClick={(e) => {
										e.preventDefault();
										if(nuevaHistClinica.fecha !== undefined){
											// if(!moment(moment(nuevaHistClinica.fecha).format('DD-MM-YYYY')).isBefore(moment(fechaNacimiento[0]).format('DD-MM-YYYY'))){
											if(new Date(moment(nuevaHistClinica.fecha).format()).getTime()>=new Date(moment(fechaNacimiento[0]).format()).getTime()) {
												fetch(`${url}/HistClinica/new`, {
													headers: {
														'Content-Type': 'application/json',
														// 'x-access-token': JSON.parse(window.localStorage.getItem('TOKEN')).token
													},
													method: 'POST',
													body: JSON.stringify({
														nuevaHistClinica,
														fecha: moment(nuevaHistClinica.fecha),
														id_Historia: id,
													}),
												})
												.then((resp) => resp.json())
												.then((data) => {
													if(data.ok){
														alert('Se Registró la Historia Clínica Correctamente')
														setDatos([
															...nuevosDatos,
															{
																_id:data.histClinica._id ,
																fecha: moment(nuevaHistClinica.fecha),
																id_Historia: id,
															}
														])
													}
												})
											} else {
												alert("La fecha ingresada es anterior a la fecha de nacimiento")
											}
										}
										else{
											alert("Por favor, asegurese de completar los campos")
										}
									}}
								>AGREGAR</button>
							</p>
						</div>
					</div>
				</form>
				<button
                    onClick={() => {
                        setForm(false);
                    }}
                    style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        border: 'none',
                        padding: '18px',
                        cursor: 'pointer',
                    }}
                >
                    <i
                        className="fas fa-times"
                        style={{ fontSize: '19px' }}
                    ></i>
                </button>
			</div>
		)
	}

	const [form, setForm] = useState(false);
	const onForm = () => {
		setForm(!form);
	};

	//ESTADO PARA SABER SI SE VA A ELIMINAR
	// const [BtnAcitve, setBtnActive] = useState(false)

	//MODAL DE CONFIRMACIÓN PARA CREAR
    // const ModalConfirmación = () => {
    //     return (
    //         <>
    //             <div
    //                 style={{
    //                     background: '#00000039',
    //                     position: 'absolute',
    //                     top: '0',
    //                     left: '0',
    //                     height: '100vh',
    //                     width: '100%',
    //                     zIndex:'2',
    //                     display: 'flex',
    //                     justifyContent: 'center',
    //                     alignItems: 'center',
    //                 }}
    //             >
    //                 <form
    //                      style={{
    //                         background: '#ffffff',
    //                         padding: '2px',
    //                         borderRadius: '6px',
    //                     }}
    //                 >
    //                     <div className="ModalReceta">
    //                         <h3>¿Está seguro que desea eliminar la Historia Clínica?</h3>
    //                         <div className="ListaBotones">
    //                             <button onClick={(e) => {
    //                                 e.preventDefault()
    //                                 setBtnActive(true)
    //                             }}>
    //                                 SÍ
    //                             </button>
    //                             <button onClick={() => {setFormConfirmacion(false)}}>NO</button>
    //                         </div>
    //                     </div>
    //                 </form>
    //             </div>
    //         </>
    //     )
    // }

	// const [formConfirmacion, setFormConfirmacion] = useState(false);
	// const onFormConfirmacion = () => {
	// 	setFormConfirmacion(!formConfirmacion);
	// };

	const calcularEdad = (fechaConsulta, fechaNac) =>{
		let a = moment(fechaConsulta)
		let b = moment(fechaNac)

		let years = a.diff(b, 'year')
		b.add(years, 'years')

		let months = a.diff(b, 'months')
		b.add(months, 'months')

		let days = a.diff(b, 'days')

		return years + " a " + months + " m " + days + " d"
	}

	return (
		<div>
			<div className="list">
				<h2>
					<span onClick={onForm}>Agregar Nueva Historia Clínica</span>
				</h2>
				{form && <ModalNuevaHistClinica/>}
				<div className='ScrollTable'>
					<table  style={{width: '100%'}}>
						<thead>
							<tr>
								<th>FECHA</th>
								<th>EDAD DE CONSULTA</th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{nuevosDatos.map((item) => (
								<tr key={item._id}>
									<td>{moment(item.fecha).format('DD/MM/YYYY')}</td>
									{/* <td>{(moment.duration(moment(item.fecha).diff(moment(fechaNacimiento[0])))).years()} AÑOS {(moment.duration(moment(item.fecha).diff(moment(fechaNacimiento[0])))).months()} MESES {(moment.duration(moment(item.fecha).diff(moment(fechaNacimiento[0])))).days()} DÍAS</td> */}
									<td>{fechaNacimiento[0] !== 'Invalid date' ? calcularEdad(item.fecha, fechaNacimiento[0]) : ''}</td>
									<td>
										<button
											style={{backgroundColor: 'transparent', border: 'none', cursor: 'pointer'}}
											// onClick={onFormConfirmacion}
											onClick={(e) => {
												e.preventDefault()
												var rpta = window.confirm("¿Está seguro de eliminar la Historia Clínica?")
												if(rpta){
													fetch(`${url}/HistClinica/${item._id}`, {
														headers: {
															'Content-Type': 'application/json'
														},
														method: 'DELETE'
													})
													.then((resp) => resp.json())
													.then((data) => {
														if(data.ok){
															alert('Historia Clínica eliminada')
															setDatos(datos.filter((datos) => datos._id !== item._id))
														}
													})
													.catch((err) => {
														console.log(err);
													});
												}
											}}
										>
											<i className="fas fa-trash-alt" style={{color: 'red'}}></i>
											{/* {formConfirmacion && <ModalConfirmación/>} */}
										</button>
									</td>
									<td>
										<Link to={`/historia-clinica/${item._id}`}>
											<strong
												style={{
													textDecoration: 'underline',
													cursor: 'pointer',
												}}
											>
												<i className="fas fa-external-link-alt"></i>
											</strong>
											{item.post}
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default HistoriasClinicas;
