import { useEffect, useState } from 'react';
import url from '../keys/backend_keys';

const useReserva = () => {
	const [reserva, setReserva] = useState([]);

	useEffect(() => {
		fetch(`${url}/Reserva/datos`)
			.then((resp) =>{
				return resp.json();
			})
			
			.then((data) =>{
				setReserva(data)
			});
			
	}, []);
	return reserva
};

export default useReserva;