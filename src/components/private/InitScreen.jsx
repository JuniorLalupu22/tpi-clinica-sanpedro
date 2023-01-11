import React from 'react';
import { connect } from 'react-redux';
// import { Check } from './extras/Check';
import '../../sass/Dashboard.sass'
import InicioSecretaria from './InicioSecretaria';
import InicioDoctor from './InicioDoctor';
import InicioApoderado from './InicioApoderado';
// import NuevaCita from './NuevaCita';

const InitScreen = ({usuario, logout}) => {
	return (
		<>
			
			{usuario.rol === 'Secretaria' ? (
				<InicioSecretaria/>
			):null}
			{usuario.rol === 'Doctor' ? (
				// <InicioDoctor/>
				<InicioDoctor/>
			):null}
			{usuario.rol === 'Apoderado' ? (
				<InicioApoderado/>
			):null}
								
		</>
	);
};
const mapStateToProps = (state) => ({
	usuario: state.usuario,
});
const mapDispatchToProps = (dispatch) => ({
	logout(usuario) {
		dispatch({
			type: 'LOGOUT_OK',
			usuario,
		});
	},
});
export default connect(mapStateToProps, mapDispatchToProps)(InitScreen);

// export default InitScreen;
