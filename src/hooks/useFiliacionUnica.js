import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import url from '../keys/backend_keys';
const useFiliacionUnica = () => {
	const [grafica, setGrafica] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		fetch(`${url}/Historia/id/${id}`)
			.then((resp) =>{
				return resp.json();
			})
			
			.then((data) =>{
				setGrafica(data)
			});
			
	}, [id]);

	return grafica
};

export default useFiliacionUnica;