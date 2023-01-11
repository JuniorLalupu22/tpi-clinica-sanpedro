import React, { useState } from 'react';
import useCita from '../../hooks/useCita';
import '../../sass/Cita.sass';
import '../../sass/Dashboard.sass';
import FormCita from './extras/FormCita';
import MisCitasSecretaria from './MisCitasSecretaria';

// import {BrowserRouter} from 'react-router-dom'
const NuevaCita = () => {
	const [state, setState] = useState(false)
	const [datos_af, loading, set_datos_af] = useCita();
	const ModalNuevaCita = () =>{
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
					<FormCita datos_af={datos_af} set_datos_af={set_datos_af} setState={setState}/>
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

	return (
		<>
			<div>
				<MisCitasSecretaria datos_af={datos_af} loading={loading} set_datos_af={set_datos_af}/>
				{state && <ModalNuevaCita/>}
				<div style={{position: 'relative', zIndex: '2', width: '20%', marginTop: '-70vh'}}>
					<section className='opcionesCita'>
						<div className="agregarCita" onClick={() => {setState(true)}}>
							<i className="fa-regular fa-circle-plus"></i>
							<p>NUEVA CITA</p>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default NuevaCita;
