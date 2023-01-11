import { useEffect, useState } from 'react';
import url from '../keys/backend_keys';
const useDatosReserva = () => {
	const [datos, set_datos] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch(`${url}/Reserva`)
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				set_datos(data);
				setLoading(false);
				// return data;
			})
			// .catch((err) => {
			// 	return err;
			// });
	}, []);
	return [datos, loading,set_datos];
};

export default useDatosReserva;
