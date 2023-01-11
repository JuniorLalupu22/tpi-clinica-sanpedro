import url from '../keys/backend_keys';
const consumCitaActualizada = (body) => {
	return new Promise((res, rej) => {
		fetch(`${url}/Cita/${body._id}`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'PUT',
			body: JSON.stringify(body)
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
export default consumCitaActualizada;