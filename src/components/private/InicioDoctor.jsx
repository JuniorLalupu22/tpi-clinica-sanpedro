import React, {useEffect, useState} from 'react';
import useCita from '../../hooks/useCita';
import '../../sass/Dashboard.sass';
import moment from 'moment';
import { Link } from 'react-router-dom';
import url from '../../keys/backend_keys';
const InicioDoctor = () => {
	let [datos_af, loading] = useCita();
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
				return 'Teleconsulta';
			default:
				return 'Sin Datos'				
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
	//AGREGANDO SOLO CITAS DEL DÍA SELECCIONADO
	for (let item in datos_af) {
		if(moment(datos_af[item].fecha).format('DD/MM/YYYY')===moment(fecha.fechaCita).format('DD/MM/YYYY')){
			CitasHoy.push(datos_af[item])
		}
	}

	//PARA OBTENER DATO DE ANAMNESIS DE LA HISTORIA CLÍNICA A LA QUE PERTENECE LA CITA
	const [datosHistClinica, setDatosHistClinica] = useState([])
	useEffect(() => {
		fetch((`${url}/HistClinica`))
		.then((resp) => resp.json())
		.then((data) => {
			setDatosHistClinica(data)
		})
	}, [])
	
	for(let itemCita in CitasHoy){
		for(let itemHist in datosHistClinica){
			if(datosHistClinica[itemHist]._id === CitasHoy[itemCita].id_HistClinica){
				CitasHoy[itemCita].anamnesis = datosHistClinica[itemHist].anamnesis
			}
		}
	}

	CitasHoy.sort((a,b) => new Date(a.fecha) - new Date(b.fecha))
	
	for(let item in CitasHoy){
		CitasHoy[item].numero = parseInt(item)+1
	}

	return (
		<>
			<div className="list">
				{/* <h2>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z" />
					</svg>
					&nbsp;&nbsp;CITAS DE {moment(fecha.fechaCita).format('DD/MM/YYYY')}
				</h2> */}
				<section className='opcionesCita'>
					<div className='selectorFecha' style={{display: 'flex', justifyContent: 'left'}}>
						<div style={{display: 'flex', alignItems: 'center'}}><b>CONSULTAS DE: </b></div>
						<input 
							// style={{height:'6.3vh'}}
							type="date" 
							name="fechaCita" 
							// value={fecha.fechaCita != '' ? moment(fecha.fechaCita).format('YYYY-MM-DD') : moment().format('YYYY-MM-DD')}
							value={fecha.fechaCita}
							onChange={handleChange}
						></input>
					</div>
				</section>
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
										<th>ATENDIDO</th>
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
												{
													item.anamnesis !== undefined && item.anamnesis !== ''
													?
														<i className="fa-solid fa-shield-check" style={{color: 'green'}}></i>
														// <i className="fa-solid fa-heart-circle-check" style={{color: 'green'}}></i>
													:
														<i className="fa-solid fa-ban" style={{color: 'red'}}></i>
												}
											</td>
											<td>
												<Link to={`/historia-clinica/${item.id_HistClinica}`}>
												{/* <Link to={`/datos-f/${item.id_Historia}`}> */}
													<strong
														style={{
															textDecoration: 'underline',
															cursor: 'pointer',
														}}
													>
														<i className="fa-solid fa-arrow-up-right-from-square"></i>
													</strong>
													{item.post}
												</Link>
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
								<h2>LO SENTIMOS, NO HAY CONSULTAS REGISTRADAS DEL DÍA {moment(fecha.fechaCita).format('DD/MM/YYYY')}</h2>
								{/* <img 
									src='https://global-uploads.webflow.com/5e3ce2ec7f6e53c045fe7cfa/6041f96dd994118e5aa5b7e4_603dda4daa5db80f2a70a468_Discovery-01-1.png'
									style={{height: '60vh'}}
								>
								</img> */}
							</div>
						</div>
					)
				) : null}
			</div>
		</>
	);
};

export default InicioDoctor;
