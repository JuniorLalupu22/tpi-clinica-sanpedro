import { useEffect, useState } from 'react';
import url from '../keys/backend_keys';
const useResponsables = () => {
	const [datos, set_datos] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch(`${url}/api/auth`)
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
	return [datos, loading, set_datos];
};

export default useResponsables;
