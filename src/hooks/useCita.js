import { useEffect, useState } from 'react';
import url from '../keys/backend_keys';
const useCita = () => {
	const [datos_af, set_datos_af] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
			fetch(`${url}/Cita`)
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				set_datos_af(data);
				setLoading(false);
				return data;
			})
			.catch((err) => {
				return err;
			});
	}, []);
	
	return [datos_af, loading, set_datos_af];
};

export default useCita;
