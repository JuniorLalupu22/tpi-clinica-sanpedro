import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import url from '../../keys/backend_keys';
const MisHijos = ({ usuario }) => {
	const [hijos, setHijos] = useState([]);
	const uid = usuario.uid;
	useEffect(() => {
		fetch(`${url}/api/auth/${uid}`)
			.then((resp) => resp.json())
			.then((datos) => {
				setHijos(datos.hijos);
			});
	}, [uid]);
	return (
		<>
		<div className='contenidoDeHijos'>
			<h2 className='txtCardsHijos'>Tus hijos</h2>
			<div className='cardsHijos'>
				{hijos && hijos.map((item) => {
					return (
						// <div
						// 	style={{
						// 		marginBottom: '15px',
						// 		padding: '18px',
						// 		borderRadius: '12px',
						// 		maxWidth: '430px',
						// 		background: '#F4F4F4',
						// 	}}
						// >
						// 	<Link to={`/hijo/${item._id}`}>{item.nombres_paciente}</Link>
						// </div>
						
							<div className="card-hijo" key={item._id}>
								<div className="card-details">
									<p className="text-title">{item.nombres_paciente}</p>
									{/* <p className="text-body">Here are the details of the card</p> */}
								</div>
								<button className="card-button">
									<Link to={`/hijo/${item._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>Ver info	</Link>
								</button>
							</div>
						
						
					);
				})}
			</div>
		</div>
			
		</>
	);
};
const mapStateToProps = (state) => ({
	usuario: state.usuario,
});

export default connect(mapStateToProps)(MisHijos);
// export default MisHijos
