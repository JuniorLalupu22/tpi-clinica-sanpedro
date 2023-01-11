import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import url from '../keys/backend_keys';
const useReceta = () => {
    let {id} = useParams()
	const [datosRe, setDatosRe] = useState([]);
    useEffect(() => {
        fetch(`${url}/Receta/idHistClinica/${id}`)
            .then((resp) => resp.json())
            .then((data)=>{
                setDatosRe(data)
            })
    }, [id]);
	// return [datosRe, setDatosRe];
	return datosRe
};

export default useReceta;