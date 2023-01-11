import { createStore } from 'redux';
const initialState = {
	usuario: {
		ok: false,
		token: null,
		uid: null,
		rol: null,
	},
};
const reducerUsuario = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_RESP':
			return {
				...state,
				responsables: action.responsables
			};
		case 'LOGIN_OK':
			console.log("ACTION: ", action);
			return {
				...state,
				usuario: {
					ok: action.usuario.ok,
					rol: action.usuario.rol,
					uid: action.usuario.uid,
				},
			};

		case 'LOGOUT_OK':
			return {
				...state,
				usuario: {
					ok: false,
					token: null,
					uid: null,
					rol: null,
				},
			};
		default:
			return state;
	}
};

export default createStore(reducerUsuario);
