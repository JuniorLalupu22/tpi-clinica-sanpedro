import { useEffect, useState } from 'react';
import url from '../keys/backend_keys';
const useIndicaciones = (id) => {
	const [indicaciones, setIndicaciones] = useState([]);

	useEffect(() => {
		fetch(`${url}/HistClinica/medicamentos/${id}`)
			.then((resp) =>{
				return resp.json();
			})
			
			.then((data) =>{
				setIndicaciones(data)
			});
			
	}, [id]);

	return indicaciones
};

export default useIndicaciones;