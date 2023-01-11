import { useState } from 'react';
import axios from 'axios';
import url from '../../../keys/backend_keys';
import { connect } from 'react-redux';

const FormApoderado = (usuario) => {
	const [state, setEstado] = useState({ file: null });
	const subirArchivo = (e) => {
		let file = e.target.files[0];
		setEstado({ file: file });
	};

	const consumirArchivo = (usuario) => {
		let file = state.file;
		let formdata = new FormData();
		formdata.append('avatar', file);

		axios({
			url: `${url}/api/auth/files`,
			method: 'POST',
			data: formdata,
			headers: {
				id: usuario.usuario.uid,
			},
		}).then((res) => {
			let [user] = usuario.datos.filter(
				(item) => item._id === usuario.usuario.uid
			);
			user.foto_perfil = res.data.usuario.foto_perfil;
			usuario.set_datos(
				usuario.datos.filter(
					(item) => item._id !== usuario.usuario.uid
				)
			);

			// user.foto_perfil= res.file.name
			usuario.set_datos([...usuario.datos, { user }]);
		});
	};
	return (
		<div
			className="contenedor_perfil"
			style={{
				background: '#0000006e',
				width: '100%',
				height: '100vh',
				position: 'absolute',
				top: '0px',
				left: '0px',
				zIndex: '33',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				// marginTop:'-80px'
			}}
		>
			<div
				className="cerrarForm"
				style={{
					background: '#ffffff',
					padding: '12px',
					position: 'absolute',
					top: '0px',
					right: '0px',
					cursor: 'pointer',
				}}
				onClick={() => {
					usuario.setForm(false);
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
				</svg>
			</div>
			<form
				method="post"
				encType="multipart/form-data"
				style={{
					background: '#ffffff',
					padding: '20px',
					borderRadius: '15px',
				}}
			>
				<div>
					<br />
					<label>
						Subir foto de perfil
						<br />
						<br />
					</label>
					<p style={{ textAlign: 'center' }}>
						<label
							for="inputfileuser"
							style={{
								textAlign: 'center',
								color: '#58C5E3',
							}}
						>
							<i
								className="fas fa-cloud-upload-alt"
								style={{
									fontSize: '28px',
									cursor: 'pointer',
								}}
							></i>
						</label>
					</p>
					<input
						style={{
							display: 'none',
						}}
						type="file"
						name="avatar"
						accept="image/*"
						id="inputfileuser"
						onChange={(e) => subirArchivo(e)}
					></input>
				</div>
				<br />
				<button
					type="button"
					onClick={() => consumirArchivo(usuario)}
					style={{
						width: '100%',
						padding: '7px',
						border: 'none',
						background: '#0194E1',
						color: 'white',
						cursor: 'pointer',
					}}
				>
					Enviar
				</button>
			</form>
		</div>
	);
};
const mapStateToProps = (state) => ({
	usuario: state.usuario,
});
export default connect(mapStateToProps)(FormApoderado);
// export default FormApoderado;
