import React from 'react';
import FormLogin from './includes/FormLogin';
import '../sass/Login.sass';
import Logo from '../img/Logo.png'

function Login() {
	return (
		<>
		<div className="Contenedor_logueo">
			{/* <div className="imagen_logueo">
				<img
					className="img_logueo"
					// src = "https://i.ibb.co/LnDz8sY/1.png"
					// src="https://i.ibb.co/Hht4WVR/LOGO-PDF-1-page-0001.png"
					src = {Logo}
					// src="https://i.ibb.co/k4V5DQ4/img-doctora.jpg"
					alt="Login"
					width=""
					height=""
				/>
			</div> */}
			<div className="formulario">
				<FormLogin/>
			</div>
		</div>
			
		</>
	);
}

export default Login;