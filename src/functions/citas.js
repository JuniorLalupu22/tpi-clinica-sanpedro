import url from '../keys/backend_keys';
const consumNuevaCita = (body) => {
	return new Promise((res, rej) => {
		fetch(`${url}/Cita/new`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify(body),
		})
			.then((resp) => resp.json())
			.then((datos) => {
				res(datos);
			})
			.catch((err) => {
                console.log(err);
				rej(err);
			});
	});
};
export default consumNuevaCita;