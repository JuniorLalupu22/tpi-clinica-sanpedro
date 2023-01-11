import url from '../keys/backend_keys';
const consumLogin = (body) => {
	return new Promise((res, rej) => {
		fetch(`${url}/api/auth`, {
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
				rej(err);
			});
	});
};
export default consumLogin;