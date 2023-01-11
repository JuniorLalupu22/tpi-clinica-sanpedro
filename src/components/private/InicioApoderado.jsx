import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../../sass/Dashboard.sass';
import useResponsables from '../../hooks/useResponsables';
import FormApoderado from './extras/FormApoderado';
// import url from '../../keys/backend_keys';
const InicioApoderado = ({ usuario }) => {
	const [datos, loading,set_datos] = useResponsables();
	const [form, setForm] = useState(false);
	return (
		<>
			<div className="list">
				<h2>
					{/* <svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z" />
					</svg> */}
					<i className="fa-regular fa-address-book"></i>
					&nbsp;&nbsp;Mi Perfil
				</h2>
				{form === true ? (
					<FormApoderado
						form={form}
						setForm={setForm}
						datos={datos}
						set_datos={set_datos}
					/>
				) : null}
				{loading === false ? (
					// <div className="datos_responsables">
					// 	{datos.map((item) => (
					// 		<>
					// 			{item._id === usuario.uid ? (
					// 				<div
					// 					div
					// 					className="dato_responsable"
					// 					key={item._id}
					// 				>
					// 					<p
					// 						style={{
					// 							textAlign: 'center',
					// 							position: 'relative',
					// 						}}
					// 					>
					// 						<img
					// 							alt="Perfil"
					// 							src={
					// 								url +
					// 								'/api/auth/uploads/' +
					// 								item.foto_perfil
					// 							}
					// 							width="110px"
					// 							style={{
					// 								border: '2px solid #3d53b65a',
					// 								borderRadius: '104px',
					// 								marginBottom: '21px',
					// 								maxHeight:'110px'
					// 							}}
					// 						/>
					// 						<div
					// 							style={{
					// 								position: 'absolute',
					// 								bottom: '20px',
					// 								right: '120px',
					// 							}}
					// 						>
					// 							<div
					// 								onClick={() => {
					// 									setForm(!form);
					// 								}}
					// 								style={{
					// 									cursor: 'pointer',
					// 									background:
					// 										'#39a78f',
					// 									padding: '5px',
					// 									borderRadius:
					// 										'100px',
					// 								}}
					// 							>
					// 								<i
					// 									style={{
					// 										color: '#fff',
					// 									}}
					// 									className="fas fa-pen"
					// 								></i>
					// 							</div>
					// 						</div>
					// 					</p>
					// 					<p className="text">
					// 						<strong>-DNI : </strong>
					// 						{item.dni}
					// 					</p>
					// 					<p className="text">
					// 						<strong>-Nombre: </strong>
					// 						{item.nombre}
					// 					</p>
					// 					<p className="text">
					// 						<strong>-Email: </strong>
					// 						{item.email}
					// 					</p>
					// 				</div>
					// 			) : null}
					// 		</>
					// 	))}
					// </div>
					datos.map((item) => (
						item._id === usuario.uid ? (
							<div className="card" key={item._id}>
								<div className="card-border-top"></div>
								<div className="img">
									<i className="fa-solid fa-user"></i>
									{/* <img alt='Perfil' src={url + '/api/auth/uploads/' + item.foto_perfil}></img> */}
								</div>
								{/* <button onClick={() => {setForm(!form)}}>
									<i className="fas fa-pen"></i>
								</button> */}
								<span className="text">
									 {item.nombre}
								 </span>
								{/* <p className="job"> {item.dni}</p> */}
							</div>
						) : null
					))
				) : (
					<p>cargando...</p>
				)}
			</div>
		</>
	);
};
const mapStateToProps = (state) => ({
	usuario: state.usuario,
});

export default connect(mapStateToProps)(InicioApoderado);
