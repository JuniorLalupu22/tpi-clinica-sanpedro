import React from 'react';
import useAfiliacion from '../../hooks/useAfiliacion';
import {Link} from 'react-router-dom'
import '../../sass/Dashboard.sass';
import '../../sass/Filiacion.sass';
import moment from 'moment';
const Filiacion = () => {
	let [datos_af, loading] = useAfiliacion();
	return (
		<div className="list">
			<h2>Datos de filiación</h2>
			{/* <div className="datos_filiacion"> */}
			{loading !== null ? (
				<div className="datos_filiacion">
					{datos_af.map((item) => (
						<div className="dato_filiacion" key={item._id}>
							<p>
								<strong>-DNI del paciente: </strong>
								{item.dni_paciente}
							</p>
							<p>
								<strong>-Nombres del paciente: </strong>
								{item.nombres_paciente}
							</p>
							{/* <p>
								<strong>-Fecha de nacimiento: </strong>
								{
									moment(item.fecha_nac).format('DD/MM/YYYY')
								}
	
							</p> */}
							<p>
								<strong>-Edad: </strong>
								{(moment.duration(moment().diff(moment(item.fecha_nac)))).years()} a {(moment.duration(moment().diff(moment(item.fecha_nac)))).months()} m {(moment.duration(moment().diff(moment(item.fecha_nac)))).days()} d
							</p>
							<p>
								<Link to={`datos-f/${item._id}`}>
									<strong>-</strong>
									<strong
										style={{
											textDecoration: 'underline',
											cursor: 'pointer',
										}}
									>
										Ver más
									</strong>
									{item.post}
								</Link>
							</p>
						</div>
					))}
				</div>
			) : null}
			{/* </div> */}
		</div>
	);
};

export default Filiacion;
