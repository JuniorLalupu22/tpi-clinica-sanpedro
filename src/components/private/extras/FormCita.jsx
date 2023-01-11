import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import consumNuevaCita from '../../../functions/citas';
import moment from 'moment';
import getFecha from '../../../functions/fecha'
import consumCitaActualizada from '../../../functions/citaActualizada';
import { useState, useEffect } from 'react';
import url from '../../../keys/backend_keys';
import { useRef } from 'react';
// consumNuevaCita
const FormCita = ({item, datos_af, set_datos_af, setState}) => {

	const [citas, setCitas] = useState([]);
	const [completarNombre,setCompletarNombre] = useState(false)
	const [terminoNombre, setTerminoNombre] = useState('')
	useEffect(() => {
		const res = async(urlHist) => {
			let resp= await fetch(urlHist)
			let data = await resp.json();
			setCitas(data)
		}
		let urlHist = `${url}/Historia`
		res(urlHist)
	}, []);

	citas.sort((a, b) => {
		return (a.nombres_paciente.toLowerCase() < b.nombres_paciente.toLowerCase()) ? -1 : 1
	})

	const PacienteCita = ()=>{
		if(terminoNombre.length===0){
			return citas.slice(0,5)
		}
		const NombrePac = citas.filter(item => (item.nombres_paciente.toUpperCase()).includes(terminoNombre.toUpperCase())).sort()

		return NombrePac.slice(0,5)
	}

	const handleChangePaciente = (item, setValues, values)=>{
		setValues(
			{
				...values,
				dni_paciente: item.dni_paciente,
				nombre_paciente: item.nombres_paciente,
				condicion: 2
			}
		)
		setCompletarNombre(false)
	}

	const consumirNuevaCita = async (body) => {
		let resultado = await consumNuevaCita(body);
		if (resultado.ok === false) {
			alert(resultado.msg);
			return false;
		} else {
			alert('Cita Registrada');
			return resultado;
		}
	};

	const consumirCitaActualizada = async (body) => {
		let resultado = await consumCitaActualizada(body);
		if (resultado.ok){
			alert("Cita actualizada")
			return resultado
		}
	}

	const insertarDatos = (valores) => {
		set_datos_af([
			...datos_af,
			{
				_id: valores._id,
				nombre_paciente: valores.nombre_paciente,
				fecha: moment(valores.fecha).format(),
				// responsable: valores.responsable,
				// telefono: valores.telefono,
				motivo: valores.motivo,
				condicion: valores.condicion,
				DNI: valores.DNI,
			},
		])
	}

	const actualizarDatos = (valores) => {
		set_datos_af([
			datos_af.map((dato) => (
				dato._id === item._id && (
					dato.nombre_paciente = valores.nombre_paciente,
					dato.fecha = moment(valores.fecha).format(),
					// dato.responsable = valores.responsable,
					// dato.telefono = valores.telefono,
					dato.motivo = valores.motivo,
					dato.condicion = valores.condicion,
					dato.DNI = valores.DNI
				)
			))
		])
		set_datos_af([
			...datos_af
		])
	}

	const pacienteRef = useRef()

	const ocultarPacienteCita = () =>{
		const handleOutPaciente = (event)=>{
			if(pacienteRef.current && !pacienteRef.current.contains(event.target)){
				setCompletarNombre(false)
			}
		}
		document.addEventListener('click', handleOutPaciente)
		return ()=>{
			document.removeEventListener('click', handleOutPaciente)
		}
	}

	return (
		<div>
			<div>
				{
					item !== undefined && Object.keys(item).length !== 0 ?
						<h2>Actualizar Cita</h2>
						: <h2>Registro de Citas</h2>
				}
				
			</div>
			<br />
			<Formik
				initialValues={
					(item !== undefined && Object.keys(item).length !== 0) ?
					{
						nombre_paciente: item.nombre_paciente,
						dni_paciente: item.dni_paciente,
						// responsable: item.responsable,
						// telefono: item.telefono,
						motivo: item.motivo,
						hora: item.hora,
						fecha: moment(item.fecha).format('YYYY-MM-DD'),
						condicion: item.condicion,
						
					} 
					: {
						nombre_paciente:'',
						dni_paciente: '',
						// responsable: '',
						// telefono: '',
						//fecha_nac: '',
						motivo: '3',
						//sexo: '1',
						hora: '',
						fecha: '',
						condicion: '1',
					}
				}
				validate={(valores) => {
					let errores = {};
					if (!valores.nombre_paciente) {
						errores.nombre_paciente =
							'Por favor ingrese su nombre';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,60}$/.test(
							valores.nombre_paciente
						)
					) {
						errores.nombre_paciente =
							'El nombre sólo puede contener letras y espacios';
					}
					if(valores.nombre_paciente){
						setTerminoNombre(valores.nombre_paciente)
					}
					if (!valores.dni_paciente) {
						errores.dni_paciente = 'Por favor ingrese el DNI';
					} else if (
						!/^[0-9]{8,8}$/.test(valores.dni_paciente)
					) {
						errores.dni_paciente =
							'El DNI sólo puede contener 8 números.';
					}
					// if (!valores.telefono) {
					// 	errores.telefono = 'Ingrese el teléfono';
					// } else if (!/^[0-9]{9,9}$/.test(valores.telefono)) {
					// 	errores.telefono =
					// 		'El teléfono sólo puede contener 9 números.';
					// }
					/*if ('' === valores.fecha_nac) {
						errores.fecha_nac =
							'Por favor, ingrese una fecha de nacimiento';
					}*/
					if ('' === valores.fecha) {
						errores.fecha =
							'Por favor, ingrese una fecha';
					}
					if ('' === valores.hora) {
						errores.hora =
							'Ingrese una hora';
					}
					return errores;
				}}
				onSubmit={(valores, { resetForm }) => {
					if(item !== undefined && Object.keys(item).length !== 0){
						consumirCitaActualizada({
							_id: item._id,
							nombre_paciente: valores.nombre_paciente,
							fecha: moment(
								new Date(
									`${valores.fecha} ${valores.hora}`
								)
							).format(),
							// responsable: valores.responsable,
							// telefono: valores.telefono,
							motivo: valores.motivo,
							condicion: valores.condicion,
							DNI: valores.dni_paciente,
						})
						.then((data) => (data.ok && (actualizarDatos(data.Cita), setState(false))))
					} else{
						consumirNuevaCita({
							nombre_paciente:valores.nombre_paciente,
							//fecha_nac: moment(valores.fecha_nac).format(),
							fecha: moment(
								new Date(
									`${valores.fecha} ${valores.hora}`
								)
							).format(),
							//sexo: valores.sexo,
							// responsable: valores.responsable,
							// telefono: valores.telefono,
							motivo: valores.motivo,
							condicion: valores.condicion,
							DNI: valores.dni_paciente,
						})
						.then((data) => (data.ok && (insertarDatos(data.cita), setState(false))))
					}
				}}
			>
				{({ errors, values, handleChange, setValues}) => (
					
					<Form 
						style={{height:'90%'}}
					>
						<div 
						onClick={
							()=>{
								ocultarPacienteCita()
							}
						}
						style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', justifyContent:'space-between' , width:'100%'}}>
							<div>
								<div>
									<label><b>Nombre del paciente</b></label>
									<input
										style={{width:'125%'}}
										type="text"
										name="nombre_paciente"
										autoComplete='off'
										ref={pacienteRef}
										value={values.nombre_paciente}
										onChange={handleChange}
										onFocus={()=>{setCompletarNombre(true)}}
									/>
								</div>
								<div className='listPacienteCita'>
									<div className='contenedorPacienteCita'>
										{completarNombre && PacienteCita().sort().map((item, index)=>(
											<ul className='listaPacientesCitas' key={index}>
												<li onClick={()=>{handleChangePaciente(item, setValues, values)}} key={item.nombres_paciente}>
													{item.nombres_paciente}
												</li>
											</ul>
										))}
									</div>
								</div>
								<ErrorMessage
									name="nombre_paciente"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.nombre_paciente}</span>
										</div>
									)}
								/>
							</div>
							<div>
								<div>
									<label style={{marginLeft:'150px'}}><b>DNI o CODIGO Paciente</b></label>
									<Field type="text" name="dni_paciente" autoComplete='off' style={{marginLeft:'150px', width:'61%'}}></Field>
								</div>
								<div style={{marginLeft:'150px'}}>
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
						</div>
						{/* <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', justifyContent:'space-between' , width:'100%'}}>
							<div>
								<div>
									<label><b>Responsable</b></label>
									<Field type="text" name="responsable" style={{width:'125%'}}></Field>
								</div>
								<ErrorMessage
									name="responsable"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.responsable}</span>
										</div>
									)}
								/>
							</div>
							<div>
								<div>
									<label style={{marginLeft:'150px'}}><b>Teléfono</b></label>
									<Field type="text" name="telefono" style={{marginLeft:'150px', width:'61%'}}></Field>
								</div>
								<div style={{marginLeft:'150px'}}>
									<ErrorMessage
										name="telefono"
										component={() => (
											<div className="msj_error_login">
												<span>
													<i className="fas fa-times-circle"></i>
												</span>
												<span>{errors.telefono}</span>
											</div>
										)}
									/>
								</div>
							</div>
						</div> */}
						<div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', width:'100%'}}>
							<div>
								<div>
									<label><b>Fecha</b></label>
									<Field name="fecha" type="date" min={item === undefined ? getFecha() : ''} style={{width:'125%'}}></Field>
								</div>
								<div>
									<ErrorMessage
										name="fecha"
										component={() => (
											<div className="msj_error_login">
												<span>
													<i className="fas fa-times-circle"></i>
												</span>
												<span>{errors.fecha}</span>
											</div>
										)}
									/>
								</div>
							</div>
							<div style={{marginLeft:'150px'}}>
								<div>
									<label><b>Hora</b></label>
									<Field name="hora" type="time" style={{width:'100%'}}></Field>
								</div>
								<div>
									<ErrorMessage
										name="hora"
										component={() => (
											<div className="msj_error_login">
												<span>
													<i className="fas fa-times-circle"></i>
												</span>
												<span>{errors.hora}</span>
											</div>
										)}
									/>
								</div>
							</div>
						</div>
						<div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', width:'100%'}}>
							<div>
								<label><b>Motivo</b></label>
								<Field name="motivo" as="select" style={{width:'125%'}}>
									<option value="1">Vacuna</option>
									<option value="2">
										Consulta pediátrica
									</option>
									<option value="3">
										Control de crecimiento y desarrollo
									</option>
									<option value="4">
										Reevaluación
									</option>
									<option value="5">
										Teleconsulta
									</option>
								</Field>
							</div>
							{
								(item !== undefined && Object.keys(item).length !== 0) ? null :
								<div style={{marginLeft:'150px'}}>
									<label><b>Condición</b></label>
									<Field name="condicion" as="select" style={{width:'100%'}}>
										<option value="1">Nuevo</option>
										<option value="2">Continuador</option>
									</Field>
								</div>
							}
						</div>
						<div style={{display:'flex', justifyContent:'center'}}>
							<button type="submit" className="agregar" style={{width:'20%'}}>
								{(item !== undefined && Object.keys(item).length !== 0) ? 'ACTUALIZAR' : 'AGREGAR'}
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FormCita;
