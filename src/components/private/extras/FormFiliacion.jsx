import React from 'react';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import url from '../../../keys/backend_keys';
import getFecha from '../../../functions/fecha';
// import getFecha  from '../../../functions/fecha';
import { useEffect,useState } from 'react';
// import { useParams } from 'react-router';

import '../../../sass/Filiacion.sass'
const FormFiliacion = ({ item }) => {
	
	let  id  = item;
	const [Hc, setHc] = useState({})
	const [user, setUser] = useState({})
    useEffect(() => {
		const fetchData = async () => {
            let response = await fetch(`${url}/Historia/id/${id}`)
            let data = await response.json(); 
            setHc(data)
            if(data.id_Usuario){
                let responseUser = await fetch(`${url}/api/auth/${data.id_Usuario}`)
                let dataUser = await responseUser.json()
                setUser(dataUser)
            }
        }
        fetchData()
	}, [id]);
	const handleChange = (e)=>{
		setHc({
			...Hc,
			[e.target.name]: e.target.value
		})
	}

	const handleChangeUser = (e)=>{
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}
	const calcularEdad = (fechaNac) =>{
		let a = moment()
		let b = moment(fechaNac)

		let years = a.diff(b, 'year')
		b.add(years, 'years')

		let months = a.diff(b, 'months')
		b.add(months, 'months')

		let days = a.diff(b, 'days')

		return years + " a " + months + " m " + days + " d"
	}

	// const switchTipoApoderado = (valor) => {
	// 	switch (valor) {
	// 		case '1':
	// 			return user.nombre = Hc.nombre_madre;
	// 		case '2':
	// 			return user.nombre = Hc.nombre_padre;
	// 		case '3':
	// 			return user.nombre = ''
	// 		default:
	// 			return 'Sin dato';
	// 	}
	// };

	// const switchSelectorApoderado = (valor) => {
	// 	switch (valor) {
	// 		case Hc.nombre_madre:
	// 			return user.tipoApoderado = '1'
	// 		case Hc.nombre_padre:
	// 			return user.tipoApoderado = '2'
	// 		case '':
	// 			return user.tipoApoderado = '3'
	// 		default :
	// 			return 'No recibo dato'
	// 	}
	// }

	return (
		// <div>
		// 	<label>Edad</label>
		// 	<input type="text" value={(moment.duration(moment().diff(moment(Hc.fecha_nac)))).years() + ' años ' + (moment.duration(moment().diff(moment(Hc.fecha_nac)))).months() + ' meses ' + (moment.duration(moment().diff(moment(Hc.fecha_nac)))).days() + ' días'} name="Edad" onChange={handleChange} />
		// 	<label>Fecha de Nacimiento</label>
		// 	<input type="date" value={moment(Hc.fecha_nac).format('YYYY-MM-DD')} name="fecha_nac" onChange={handleChange} />
		// </div>
		<>
			<Formik
				initialValues={{
					nombres_paciente: '',
					dni_paciente: '',
					fecha_nac: '',
					edad: '0 a 0 m 0 d',
					// fecha_nac: moment(item.fecha_nac).format('YYYY-MM-DD'),
					//edad : (moment.duration(moment().diff(moment(item.fecha_nac)))).years() + ' años ' + (moment.duration(moment().diff(moment(item.fecha_nac)))).months() + ' meses ' + (moment.duration(moment().diff(moment(item.fecha_nac)))).days() + ' días',
					sexo : '1',
					lugar_nac: '',
					direccion: '',
					nombre_madre: '',
					ocupacion_madre: '',
					telefono_madre: '',
					nombre_padre: '',
					telefono_padre: '',
					ocupacion_padre: '',
					numero_hijo: 1,
					referencia: '',
					procedencia: '',
					//DATOS PARA APODERADO
					nombre: '',
					dni: '',
					tipoApoderado: '1'
				}}
				validate={() => {
					let errores = {};
					if (!Hc.nombres_paciente) {
						errores.nombres_paciente =
							'Por favor ingrese su nombre';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,80}$/.test(
							Hc.nombres_paciente
						)
					) {
						errores.nombres_paciente =
							'El nombre sólo puede contener letras y espacios';
					}
					if (!Hc.dni_paciente) {
						errores.dni_paciente = 'Por favor ingrese el DNI';
					} else if (
						!/^[0-9]{8,8}$/.test(Hc.dni_paciente)
					) {
						errores.dni_paciente =
							'El DNI sólo puede contener 8 números.';
					}
					if ('' === Hc.fecha_nac) {
						errores.fecha_nac =
							'Por favor, ingrese una fecha de nacimiento';
					}
					/*if ('' === valores.lugar_nac) {
						errores.lugar_nac =
							'Por favor, ingrese un lugar de nacimiento';
					}
					if ('' === valores.direccion) {
						errores.direccion =
							'Por favor, ingrese una dirección';
					}
					if (!valores.telefono_madre) {
						errores.telefono_madre =
							'Por favor ingrese el teléfono de la madre';
					} else if (
						!/^[0-9]{9,9}$/.test(valores.telefono_madre)
					) {
						errores.telefono_madre =
							'El teléfono sólo puede contener 9 números.';
					}
					if (!valores.telefono_padre) {
						errores.telefono_padre =
							'Por favor ingrese el teléfono del padre';
					} else if (
						!/^[0-9]{9,9}$/.test(valores.telefono_padre)
					) {
						errores.telefono_padre =
							'El teléfono sólo puede contener 9 números.';
					}
					if ('' === valores.ocupacion_madre) {
						errores.ocupacion_madre =
							'Por favor, ingrese una ocupación';
					}
					if ('' === valores.ocupacion_padre) {
						errores.ocupacion_padre =
							'Por favor, ingrese una ocupación';
					}
					if (!valores.nombre_padre) {
						errores.nombre_padre =
							'Por favor ingrese el nombre del padre';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre_padre)
					) {
						errores.nombre_padre =
							'El nombre sólo puede contener letras y espacios';
					}
					if (!valores.nombre_madre) {
						errores.nombre_madre =
							'Por favor ingrese el nombre de la madre';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre_madre)
					) {
						errores.nombre_madre =
							'El nombre sólo puede contener letras y espacios';
					}
					if (!valores.referencia) {
						errores.referencia =
							'Por favor ingrese el nombre de referencia';
					}*/
					return errores;
				}}
			// 	onSubmit={(valores, { resetForm }) => {
			// 		// resetForm();
			// 		fetch(`${url}/Historia/${item._id}`, {
			// 			headers: {
			// 				'Content-Type': 'application/json',
			// 			},
			// 			method: 'PUT',
			// 			body: JSON.stringify({
			// 				...valores,
			// 				fecha_nac : moment(valores.fecha_nac).format(),
			// 				id: item._id,
			// 			}),
			// 		})
			// 			.then((resp) => resp.json())
			// 			.then((data) => {
			// 				if (data.ok) {
			// 					alert('Actualizado correctamente');
			// 					(data);
			// 					/*const { evento } = data;
			// 					return data;
			// 				}
			// 			})
			// 			.then((e) => {		
			// 				/*valores.direccion = e.direccion;
			// 				valores.nombres_paciente = e.nombres_paciente;
			// 				valores.dni_paciente = e.dni_paciente;
			// 				valores.lugar_nac = e.lugar_nac;
			// 				//valores.fecha_nac = moment(e.fecha_nac).add(5, 'days').calendar();
			// 				valores.numero_hijo = e.numero_hijo;
			// 				valores.ocupacion_madre = e.ocupacion_madre;
			// 				valores.ocupacion_padre = e.ocupacion_padre;
			// 				valores.referencia = e.referencia;
			// 				valores.telefono_madre = e.telefono_madre;
			// 				valores.telefono_padre = e.telefono_padre;
			// 				valores.nombre_madre = e.nombre_madre;
			// 				valores.nombre_padre = e.nombre_padre;*/
			// 			});
			// 	}}
			>
				{({ errors }) => (
					<Form>
						<div className='fila'>
							<div className='primero'>
								<div>
									<label>Nombre</label>
									<Field className='mayus' type="text" name="nombres_paciente" value={Hc.nombres_paciente ? Hc.nombres_paciente : ''} onChange={handleChange}></Field>
								</div>
								<ErrorMessage
									name="nombres_paciente"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.nombres_paciente}</span>
										</div>
									)}
								/>
							</div>
							<div className='segundo'>
								<div>
									<label>DNI o CODIGO</label>
									<Field type="text" name="dni_paciente" value={Hc.dni_paciente ? Hc.dni_paciente : ''} onChange={handleChange}></Field>
								</div>
								<ErrorMessage
									name="dni_paciente"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.dni_paciente}</span>
										</div>
									)}
								/>
							</div>
						</div>
						<div className='fila2'>
						<div className='primero'>
								<div>
									<label>Fecha de nacimiento</label>
									<input style={{height:'6.3vh'}}
									type="date" 
									name="fecha_nac" 
									max={getFecha()}
									//value={(moment(Hc.fecha_nac).add(5, 'hours')).format('YYYY-MM-DD')}
									value={Hc.fecha_nac ? moment(Hc.fecha_nac).format('YYYY-MM-DD') : ''}
									onChange={handleChange}
									></input>
								</div>
								<ErrorMessage
									name="fecha_nac"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.fecha_nac}</span>
										</div>
									)}
								/>
							</div>
							<div className='segundo'>
								<label>Edad Actual</label>
								{/* <input readonly="" name="fecha_nac" onChange={handleChange}/> */}
								<Field 
									type="text"
									name = "edad"
									// value={(moment.duration((moment().add(1, 'day')).diff(moment(Hc.fecha_nac)))).years() + ' a ' + (moment.duration((moment().add(1, 'day')).diff(moment(Hc.fecha_nac)))).months() + ' m ' + (moment.duration((moment().add(1, 'day')).diff(moment(Hc.fecha_nac)))).days() + ' d'}
									value={Hc.fecha_nac ? calcularEdad(Hc.fecha_nac) : "0 a 0 m 0 d"}
									readOnly
								></Field>
							</div>
							<div className='tercero'>
								<label>Sexo</label>
								<Field style={{height:'6.1vh'}} className='mayus' name="sexo" as="select" value={Hc.sexo ? Hc.sexo : ''} onChange={handleChange}>
									<option>-- Seleccione --</option>
									<option value="1">Masculino</option>
									<option value="2">Femenino</option>
								</Field>
							</div>
						</div>
						<div className='fila'>
							<div className='primero'>
								<div>
									<label>Dirección</label>
									<Field className='mayus' type="text" name="direccion" value={Hc.direccion ? Hc.direccion : ''} onChange={handleChange}></Field>
								</div>
								<ErrorMessage
									name="direccion"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.direccion}</span>
										</div>
									)}
								/>
							</div>
							<div className='segundo'>
								<div>
									<label>Lugar de nacimiento</label>
									<Field className='mayus' type="text" name="lugar_nac" value={Hc.lugar_nac ? Hc.lugar_nac : ''} onChange={handleChange}></Field>
								</div>
								<ErrorMessage
									name="lugar_nac"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.lugar_nac}</span>
										</div>
									)}
							/>
							</div>
						</div>
						<div className='fila3'>
							<div className='primero'>
								<div>
									<label>Nombre madre</label>
									<Field className='mayus' type="text" name="nombre_madre" value={Hc.nombre_madre ? Hc.nombre_madre : ''} onChange={handleChange}></Field>
								</div>
								<ErrorMessage
									name="nombre_madre"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.nombre_madre}</span>
										</div>
									)}
								/>
							</div>
							<div className='segundo'>
								<div>
									<label>Teléfono madre</label>
									<Field
										type="text"
										name="telefono_madre"
										value={Hc.telefono_madre ? Hc.telefono_madre : ''} onChange={handleChange}
									></Field>
								</div>
								<ErrorMessage
									name="telefono_madre"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.telefono_madre}</span>
										</div>
									)}
								/>
							</div>
							<div className='tercero'>
								<div>
									<label>Ocupación madre</label>
									<Field
										className='mayus'
										type="text"
										name="ocupacion_madre"
										value={Hc.ocupacion_madre ? Hc.ocupacion_madre : ''} onChange={handleChange}
									></Field>
								</div>
								<ErrorMessage
									name="ocupacion_madre"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.ocupacion_madre}</span>
										</div>
									)}
								/>
							</div>
						</div>
						<div className='fila3'>
							<div className='primero'>
								<div>
									<label>Nombre padre</label>
									<Field className='mayus' type="text" name="nombre_padre" value={Hc.nombre_padre ? Hc.nombre_padre : ''} onChange={handleChange}></Field>
								</div>
								<ErrorMessage
									name="nombre_padre"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.nombre_padre}</span>
										</div>
									)}
								/>
							</div>
							<div className='segundo'>
								<div>
									<label>Teléfono padre</label>
									<Field
										type="text"
										name="telefono_padre"
										value={Hc.telefono_padre ? Hc.telefono_padre : ''} onChange={handleChange}
									></Field>
								</div>
								<ErrorMessage
									name="telefono_padre"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.telefono_padre}</span>
										</div>
									)}
								/>
							</div>
							<div className='tercero'>
								<div>
									<label>Ocupación padre</label>
									<Field
										className='mayus'
										type="text"
										name="ocupacion_padre"
										value={Hc.ocupacion_padre ? Hc.ocupacion_padre : ''} onChange={handleChange}
									></Field>
								</div>
								<ErrorMessage
									name="ocupacion_padre"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.ocupacion_padre}</span>
										</div>
									)}
								/>
							</div>
						</div>
						<div className='fila3'>
							<div className='primero'>
								<div>
									<label>Referencia</label>
									<Field className='mayus' type="text" name="referencia" value={Hc.referencia ? Hc.referencia : ''} onChange={handleChange}></Field>
								</div>
								<ErrorMessage
									name="referencia"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.referencia}</span>
										</div>
									)}
								/>
							</div>
							<div className='segundo'>
								<div>
									<label>Num. hijo</label>
									<Field
										type="number"
										name="numero_hijo"
										min="1"
										value={Hc.numero_hijo ? Hc.numero_hijo : ''} onChange={handleChange}
									></Field>
								</div>
								<ErrorMessage
									name="numero_hijo"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.numero_hijo}</span>
										</div>
									)}
								/>
							</div>
							<div className="tercero">
								<div>
									<label>Procedencia</label>
									<Field
										className='mayus'
										type="text"
										name="procedencia"
										value={Hc.procedencia ? Hc.procedencia : ''} onChange={handleChange}
									></Field>
								</div>
								<ErrorMessage
									name="procedencia"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.procedencia}</span>
										</div>
									)}
								/>
							</div>
							{/* <div className='tercero'>
								<label>Apoderado</label>
								<Field 
									style={{height:'6.1vh'}} 
									className='mayus' 
									name="tipoApoderado" 
									as="select" 
									value={user.nombre ? switchSelectorApoderado(user.nombre) : ''} 
									onChange={handleChangeUser}>
									<option>-- Seleccione --</option>
									<option value="1">Mamá</option>
									<option value="2">Papá</option>
									<option value="3">Otro</option>
								</Field>
							</div> */}
						</div>
						<h2 style={{fontSize: '23px'}}>Datos de Apoderado</h2>
						<div className='fila'>
							<div className='primero'>
								<div>
									<label>Nombre Apoderado</label>
									<Field 
										className='mayus' 
										type="text" 
										name="nombre" 
										value={user.nombre ? user.nombre : ''} 
										onChange={handleChangeUser}
										// readOnly = {user.nombre === '' ? false : true}
										readOnly
										>
									</Field>
								</div>
								<ErrorMessage
									name="nombres_paciente"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.nombres_paciente}</span>
										</div>
									)}
								/>
							</div>
							<div className='segundo'>
								<div>
									<label>DNI Apoderado</label>
									<Field 
										type="text" 
										name="dni" 
										value={user.dni ? user.dni : ''} 
										onChange={handleChangeUser}
										// readOnly = {switchTipoApoderado(user.tipoApoderado) === 'Sin dato' ? true : false}
										readOnly
									></Field>
								</div>
								<ErrorMessage
									name="dni_paciente"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.dni_paciente}</span>
										</div>
									)}
								/>
							</div>
						</div>
						<div style={{display:'flex', justifyContent:'space-between'}}>
							<button className='actualizar' 
							onClick={(e)=>{
								e.preventDefault()
								fetch(`${url}/Historia/${id}`, {
									headers: {
									'Content-Type': 'application/json',
								},
								method: 'PUT',
								body: JSON.stringify({
									...Hc,
									fecha_nac : Hc.fecha_nac ? moment(Hc.fecha_nac).format() : null,
									edad: calcularEdad(Hc.fecha_nac)
								}),
								})
								.then((resp) => resp.json())
								.then((datos) => {
									if(datos.ok){
										alert('datos actualizados')
									}
								})
								.catch((err) => {
									console.log(err);
									// rej(err);
								});

								//PARA REGISTRAR AL RESPONSABLE
								if(!Hc.id_Usuario){
									fetch(`${url}/api/auth/new`, {
										headers: {
											'Content-Type': 'application/json',
										},
										method: 'POST',
										body: JSON.stringify({
											nombre: user.nombre,
											dni: user.dni,
											password: user.dni,
											rol: 'Apoderado',
										}),
									})
										.then((resp) => resp.json())
										.then((data) => {
											// if (data.ok) {
											// 	fetch(`${url}/Historia/${Hc.dni_paciente}`)
											// 	.then((resp) => resp.json())
											// 	.then((datos) => {
											// 		fetch(`${url}/Historia/${datos._id}`, {
											// 			headers: {
											// 				'Content-Type': 'application/json',
											// 			},
											// 			method: 'PUT',
											// 			body: JSON.stringify({
											// 				...datos,
											// 				id_Usuario: data.uid,
											// 			}),
											// 		})
											// 			.then((resp) => resp.json())
											// 			.then((datos) => {
											// 				if(datos.ok){
											// 					alert('Agregado correctamente')
											// 				}else{
											// 					alert('Datos incorrectos')
											// 				}
											// 			});
											// 	});
											// }
										})
								}

							}}
							>
								Actualizar
							</button>
						</div>
						
					</Form>
				)}
			</Formik>
		</>
	);
};

export default FormFiliacion;
