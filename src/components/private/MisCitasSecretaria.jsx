import React, {useState} from 'react'
// import useCita from '../../hooks/useCita';
import '../../sass/Dashboard.sass';
import moment from 'moment';
// import { Link } from 'react-router-dom';
import url from '../../keys/backend_keys';
import FormCita from './extras/FormCita';

const MisCitasSecretaria = ({datos_af, loading, set_datos_af}) => {
    // let [datos_af, loading, set_datos_af] = useCita();

	const [state, setState] = useState(false)
	const ModalNuevaCita = ({datos}) =>{
		return(
			<div
				style={{
					background: '#00000039',
					position: 'absolute',
					top: '0',
					left: '0',
					height: '100vh',
					width: '100%',
					zIndex:'3',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div className="nuevaCita">
					<FormCita item={datos} datos_af={datos_af} set_datos_af={set_datos_af} setState={setState}/>
				</div>
				<button
					onClick={() => {
						setState(false);
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
	const switchMotivo = (valor) => {
		switch (valor) {
			case 1:
				return 'Vacuna';
			case 2:
				return 'Consulta pediátrica';
			case 3:
				return 'Control de crecimiento y desarrollo';
			case 4:
				return 'Reevaluación';
			case 5:
				return 'Teleconsulta'
			default:
				return 'No estoy obteniendo dato';
		}
	};

	const [fecha, setFecha] = useState({fechaCita: moment().format('YYYY-MM-DD')})
	const handleChange = (e) =>{
		setFecha({
			...fecha,
			[e.target.name]: e.target.value
		})
	}
	let CitasHoy = []
	for (let item in datos_af) {
		if(moment(datos_af[item].fecha).format('DD/MM/YYYY')===moment(fecha.fechaCita).format('DD/MM/YYYY')){
			CitasHoy.push(datos_af[item])
		}
	}

	CitasHoy.sort((a,b) => new Date(a.fecha) - new Date(b.fecha))
	
	for(let item in CitasHoy){
		CitasHoy[item].numero = parseInt(item)+1
	}

	const [dataItem, setDataItem] = useState({})

	return (
		<>
			<div className="list">
				<section className='opcionesCita'>
					<div className='selectorFecha'>
						<div style={{display: 'flex', alignItems: 'center'}}><b>CITAS DE: </b></div>
						<input 
							type="date" 
							name="fechaCita" 
							value={fecha.fechaCita}
							onChange={handleChange}
						></input>
					</div>
				</section>
				{state && <ModalNuevaCita datos={dataItem}/>}
				{loading !== null ? (
					CitasHoy.length > 0 ? (
						<div className='ScrollTable'>
							<table>
								<thead>
									<tr>
										<th>N°</th>
										<th>Hora</th>
										<th>PACIENTE</th>
										{/* <th>RESPONSABLE</th> */}
										<th>MOTIVO</th>
										<th></th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{CitasHoy.map((item) => (
										<tr key={item.numero}>
											<td>{item.numero}</td>
											<td>{moment(item.fecha).format('LT')}</td>
											<td className='nombPac'>{item.nombre_paciente}</td>
											{/* <td className='respons'>{item.responsable}</td> */}
											<td>{switchMotivo(item.motivo)}</td>
											<td>
                                                <i 
                                                    className="fas fa-trash-alt" 
                                                    style={{color: 'red', cursor: 'pointer'}}
													onClick={(e) => {
														e.preventDefault()
														var rpta = window.confirm("¿Está seguro de eliminar la Cita?")
														if(rpta){
															fetch(`${url}/Cita/${item._id}`, {
																headers: {
																	'Content-Type': 'application/json'
																},
																method: 'DELETE'
															})
															.then((resp) => resp.json())
															.then((data) => {
																if(data.ok){
																	alert('Cita eliminada')
																	set_datos_af(datos_af.filter((datos) => datos._id !== item._id))
																}
															})
															.catch((err) => {
																console.log(err);
															});
														}
													}}
                                                >
                                                </i>
                                            </td>
											<td>
                                                <i 
                                                    className="fas fa-pen" 
                                                    style={{color: 'blue', cursor: 'pointer'}}
													onClick = {() => {
														setState(true)
														setDataItem({
															_id: item._id,
															nombre_paciente: item.nombre_paciente,
															dni_paciente: item.DNI,
															responsable: item.responsable,
															telefono: item.telefono,
															motivo: item.motivo,
															hora: moment(item.fecha).format('HH:mm'),
															fecha: moment(item.fecha).format('YYYY-MM-DD'),
															condicion: item.condicion,
														})
													}}
                                                >
                                                </i>
                                            </td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					) : 
					(
						<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '85%', height: '60vh'}}>
							<div>
								<h2>LO SENTIMOS, NO HAY CITAS REGISTRADAS DEL DÍA {moment(fecha.fechaCita).format('DD/MM/YYYY')}</h2>
							</div>
						</div>
					)
				) : null}
			</div>
		</>
	);
}

export default MisCitasSecretaria