import React, { useEffect, useState } from 'react';
import url from '../../keys/backend_keys';
import ModalConfirmar from '../includes/ModalConfirmar';
import ModalAccepted from '../includes/ModalAccepted';
import { Formik, Form} from 'formik';
import '../../sass/Hijos.sass'

const Hijos = ({ match }) => {
	const [usuario, setUsuario] = useState({ nombre: 'cargando' });
	const idUser = match.params.id;
	const [state, setState] = useState(false);
	const [modalAccepted, setModalAccepted] = useState(false);
	const [message, setMessage] = useState('');
	const [edit, setEdit] = useState(false)
	const [responsable, setResponsable] = useState({})
	useEffect(() => {
		fetch(`${url}/api/auth/${idUser}`)
			.then((resp) => resp.json())
			.then((datosUsuario) =>{
				setUsuario(datosUsuario)
				setResponsable(datosUsuario)});
	}, [idUser]);
	const handleChange = (e) =>{
		setResponsable({
			...responsable,
			[e.target.name]: e.target.value,
		})
	}
	const agregarHijo = (dni) => {
		fetch(`${url}/Historia/${dni}`)
			.then((resp) => resp.json())
			.then((datos) => {
				fetch(`${url}/Historia/${datos._id}`, {
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'PUT',
					body: JSON.stringify({
						...datos,
						id_Usuario: match.params.id,
					}),
				})
					.then((resp) => resp.json())
					.then((datos) => {
						if(datos.ok){
							setModalAccepted(true)
							const hijoEncontrado = usuario.hijos.find((hijo) => hijo._id === datos.evento._id);
							if(!hijoEncontrado){
								setUsuario({
									...usuario,
									hijos: [...usuario.hijos, datos.evento],
								});
								setMessage('Agregado Correctamente')
							} else{
								setMessage('El hijo ya está agregado')
							}
							setState(false);
						}else{
							alert('Datos incorrectos')
						}
					});
			});
	};

	const [hijo, setHijo] = useState({})
	const [confirmDelete, setConfirmDelete] = useState(false);
	const [modalEliminar, setModalEliminar] = useState(false);

	const eliminarHijo = () => {
		fetch(`${url}/Historia/${hijo._id}`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'PUT',
			body: JSON.stringify({
				...hijo,
				id_Usuario: null
			}),
		})
			.then((resp) => resp.json())
			.then((dataPaciente) => {
				if(dataPaciente.ok){
					setUsuario({
						...usuario,
						hijos: usuario.hijos.filter((data) => data._id !== hijo._id),
					});
					setConfirmDelete(false)
					setModalEliminar(false)
				}
			})

	}

	const FormAgregarHijo = () => {
		return (
			<div
				style={{
					background: '#00000039',
					position: 'absolute',
					top: '0',
					left: '0',
					height: '100vh',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					zIndex: '1'
				}}
			>
				<form
					style={{
						background: '#ffffff',
						padding: '11px',
						borderRadius: '6px',
					}}
					onSubmit={(e) => {
						e.preventDefault();
						agregarHijo(
							document.querySelector('#inputdni').value
						);
					}}
				>
					<br />
					<p style={{textAlign:'center'}}>
						<b>Ingrese N° de DNI o CODIGO</b>
					</p>
					<br />
					<p>
						<input
							id="inputdni"
							placeholder="DNI del paciente"
							pattern="^[0-9]{8,8}$"
							style={{
								padding: '5px',
								border:'2px solid',
								borderRadius:'6px'
							}}
						/>
					</p>
					<br />
					<p style={{textAlign:'center'}}>
						<button style={{backgroundColor:'#0194E1', border:'2px solid', padding:'5px', borderRadius:'6px'}}>Aceptar</button>
					</p>
					<br />
				</form>
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
		);
	};

	return (
		<>
			<section>
				{state ? <FormAgregarHijo /> : null}
				{
					modalEliminar && 
					<ModalConfirmar 
						pregunta={'¿Desea Eliminar Este Hijo?'} 
						setEliminar={setModalEliminar}
						setConfirmDelete={setConfirmDelete}
						setModalAccepted={setModalAccepted}
						setMessage={setMessage}
					/>
				}
				{modalAccepted && <ModalAccepted message={message} setModalAccepted={setModalAccepted}/>}
				{confirmDelete && eliminarHijo()}
				<h3 style={{ marginTop: '33px' }}>
					Hijos del usuario: 
					{/* {usuario.nombre} */}
				</h3>
				<Formik
					>
					<Form>
							<div className='editApoderado'>
								<div>
									<input type="text" 
										name='nombre'
										value={responsable.nombre ? responsable.nombre : ''}
										onChange={handleChange}
										readOnly={edit ? false : true}
									/>
								</div>
								<div>
									<div className={edit ? 'btnEditActivos' : 'activarbtn'}>
										<button 
											className='btnCheck'
											disabled={edit ? false : true}
											onClick={(e)=>{
												e.preventDefault()
												
												fetch(`${url}/api/auth/Responsable/${usuario._id}`,{
													headers:{
														'Content-type': 'application/json'
													},
													method: 'PUT',
													body: JSON.stringify({
														...responsable
													}),
												}).then((resp)=>resp.json())
												.then((data)=>{
													if(data.ok){
														alert('Responsable Actualizado')
														setEdit(false)
													}
												})
											}}>
												<i className="fa-solid fa-check"></i>
										</button>
									
										<button
										className='btnTimes'
										disabled={edit ? false : true}
										onClick={(e)=>{
											e.preventDefault()
											setEdit(false)
											setResponsable({
												nombre: usuario.nombre
											})
										}}>
											<i className="fas fa-times"></i>
										</button>
									</div>
									<div className={edit ? 'activarbtn' : 'activadobtn'}>
										<button
											disabled={edit ? true : false}
											onClick={(e)=>{
												e.preventDefault()
												setEdit(true)
											}
											}>
												<i className="fas fa-pen"></i>
										</button>
									</div>
								</div>
							</div>
						</Form>
				</Formik>
				<br />
				<button
					onClick={() => {
						setState(true);
					}}
					style={{
						backgroundColor: '#222',
						padding: '9px',
						border: '2px solid #929292',
						marginBottom: '11px',
						borderRadius: '11px',
						cursor: 'pointer',
						color: '#fff',
					}}
				>
					Agregar
				</button>
				<br />
				<>
					{usuario.hijos && (
						<div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)'}}>
							{usuario.hijos.map((item) => (
								<div
									style={{
										position: 'relative',
										padding: '11px',
										background: '#f4f4f4',
										borderRadius: '11px',
										marginRight: '10px',
										marginBottom:'10%',
										width:'90%'
									}}
									key={item._id}
								>
									<br />
									<div>
										<b>Referencia:</b> {item.referencia}
									</div>
									<br />
									<div>
										<b>Nombre:</b> {item.nombres_paciente}
									</div>
									<br />
									<div><b>DNI:</b> {item.dni_paciente}</div>
									<button 
										onClick={(e) => {
											e.preventDefault()
											setModalEliminar(true)
											setHijo(item)
										}}

										style={{
											position: 'absolute',
											top: 10,
											right: 10,

											background: 'transparent',
											border: 'none',
											color: 'red',
											cursor: 'pointer'
										}}
									>
										<i className="fas fa-trash-alt"></i>
									</button>
								</div>
							))}
						</div>
					)}
				</>
			</section>
		</>
	);
};
export default Hijos;
