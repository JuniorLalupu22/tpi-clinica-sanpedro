import React, { useState, useEffect } from 'react';
import '../../sass/Galeria.sass';
// import FormFoto from './extras/FormFoto';
import url from '../../keys/backend_keys';
import {Link, useHistory } from 'react-router-dom';
import '../../sass/Redirecciones.sass'

const Hijo = (props) => {
	// const [form, setForm] = useState(false);
	// const [fotos, setFotos] = useState([]);
	// const [modal, setModal] = useState(false);
	// const [idFoto, setIdFoto] = useState(null);
	const history = useHistory()

	//OBTENER DATOS PACIENTE
	const [datosPac, setDatosPac] = useState([])
	const id = props.match.params.id;
	useEffect(() => {
		fetch(`${url}/Historia/id/${id}`)
			.then((resp) => resp.json())
			.then((datos) => {
				setDatosPac(datos);
			})
	}, [id])

	// useEffect(() => {
	// 	fetch(`${url}/Fotos/${id}`)
	// 		.then((resp) => resp.json())
	// 		.then((dat) => setFotos(dat));
	// }, [id]);
	// const Modal = ({ url }) => {
	// 	return (
	// 		<div
	// 			style={{
	// 				height: '100vh',
	// 				width: '100%',
	// 				background: '#0000009d',
	// 				position: 'absolute',
	// 				top: '0px',
	// 				left: '0px',
	// 				display: 'flex',
	// 				alignItems: 'center'
	// 			}}
	// 		>
	// 			<p style={{
	// 				position: 'absolute',
	// 				top: '0px',
	// 				textAlign:'center',
	// 				width: '100%',
	// 				padding: '11px'
	// 			}}>
	// 				<button 
	// 					onClick={()=>{
	// 						setModal(false)
	// 					}}
	// 				style={{
	// 					cursor: 'pointer',
	// 					color: "#ffffff",
	// 					background: 'transparent',
	// 					border: 'none'
	// 				}}>Cerrar</button>
	// 			</p>
	// 			<img
	// 				style={{
	// 					maxWidth: '600px',
	// 					with: '80%',
	// 					margin: 'auto',
	// 					position: 'relative'
	// 					,
	// 					zIndex: '22'
	// 				}}
	// 				alt={url}
	// 				src={url}
	// 			></img>
	// 		</div>
	// 	);
	// };
	return (
		<div className='contenedorRedireccion'>
			{/* {modal && <Modal url={`${url}/Fotos/album/${idFoto}`} />}
			{form && (
				<FormFoto
					id={props.match.params.id}
					setForm={setForm}
					setFotos={setFotos}
					foto={fotos}
				/>
			)} */}
			{/* <div style={{gridColumn: '1/5'}}> */}
			<div style={{margin: 'auto'}}>
				<h2 className='nombreHijo'>{datosPac.nombres_paciente}</h2>
				<br />
				<div className='btnRegresarHijo'>
					<div className='txtHijo'>
						<p>
							Observa mi crecimiento progresivo
						</p>
					</div>
					<div className='btnRegHijo'>
						<button className='cta' onClick={()=>{history.push(`/mis-hijos`)}}>
							<span>Regresar</span>
							<i className="fa-solid fa-arrow-left"></i>
						</button>
					</div>
				</div>
				
				<br />
				<div className='contenedor-card'>
					<div className="card-redireccion">
						<div className="card-img-redireccion">
							<i className="fa-solid fa-baby"></i>
						</div>
						<div className="card-info-redireccion">
							<p className="text-body-redireccion">En este apartado puedes ver las acciones que debe realizar tu niño.</p>
							<Link to={`/DesarrolloIntegral/${id}`} className="text-title-redireccion"><b>Desarrollo Integral</b></Link>
						</div>
					</div>
					<div className="card-redireccion">
						<div className="card-img-redireccion">
							<i className="fa-solid fa-chart-line"></i>
						</div>
						<div className="card-info-redireccion">
							<p className="text-body-redireccion">En este apartado puedes ver los gráficos de crecimiento de tu niño.</p>
							<Link to={`/GraficoDeCrecimiento/${id}`} className="text-title-redireccion"><b>Gráficos</b></Link>
						</div>
					</div>
					<div className="card-redireccion">
						<div className="card-img-redireccion">
							<i className="fa-solid fa-syringe"></i>
						</div>
						<div className="card-info-redireccion">
							<p className="text-body-redireccion">En este apartado puedes ver las vacunas que tiene tu niño.</p>
							<Link to={`/CartillaVacunacion/${id}`} className="text-title-redireccion"><b>Vacunas</b></Link>
						</div>
					</div>
				</div>
				{/* <section>
					{
						<div className="galeria">
							{fotos.map((item) => (
								<div
									key={item.nombre}
									clave={item.nombre}
									onClick={(e) => {
										setModal(true);
										setIdFoto(
											e.target.getAttribute('clave')
										);
									}}
								>
									<img
										className="foto"
										width="100%"
										height="200px"
										clave={item.nombre}
										alt=""
										src={`${url}/Fotos/album/${item.nombre}`}
									/>
								</div>
							))}
						</div>
					}
				</section> */}
			</div>
			{/* <div className='boton_Redireccion'>
				<button onClick={()=>{history.push(`/mis-hijos`)}}>
					<i className="fas fa-angle-left"></i>
				</button>	
			</div> */}
			{/* <div style={{marginTop: '2.5%'}}>
				<button className='cta' onClick={()=>{history.push(`/mis-hijos`)}}>
					<span>Regresar</span>
					<i className="fa-solid fa-arrow-left"></i>
				</button>
			</div> */}
		</div>
	);
};

export default Hijo;
