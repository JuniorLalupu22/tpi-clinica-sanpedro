import React, { useEffect, useState } from 'react';

import url from '../../keys/backend_keys';
import { useParams} from 'react-router-dom';
import FormExamenFisico from './extras/FormExamenFisico';

const ExamenFisico = () => {
    const { id } = useParams();
	const [examenFisico, setExamenFisico]= useState([]);
	const [state, setState] = useState(false);
	useEffect(() => {
		fetch(`${url}/ExamenFisico`)
			.then((resp) => resp.json())
			.then((data) => {
				setExamenFisico(data);
			});
	}, []);

	return (
		<div>
			<div className="list">
				<div className="citas">
					{examenFisico.map((item) => {
						return (
							<>
								{item.id_Historia===id?  (
									<div key={item._id} className="cita">
										<h3>Examen Físico</h3>
										<p>Peso: {item.peso}</p>
                                        <p>Talla: {item.talla}</p>
                                        <p>Temperatura: {item.temperatura}</p>
                                        <p>Apreciacion G : {item.apreciacionG}</p>
                                        <p>TCSC: {item.tcsc}</p>
                                        <p>Orofaringe: {item.orofaringe}</p>
                                        <p>Aparato Respiratorio': {item.aparatoResp}</p>
                                        <p>Aparato CV': {item.aparatoCV}</p>
                                        <p>Abdomen: {item.abdomen}</p>
                                        <p>Aparato GU : {item.aparatoGU}</p>
                                        <p>Neurologico: {item.neurologico}</p>
										<div >
                                            {state ? (
                                            <>
                                            <div>
                                                <FormExamenFisico  item={item}/>
                                            </div>
                                            <div>
                                                <button
                                                onClick={() => {
                                                    setState(false);
                                                }}
                                                style={{
                                                    position: 'absolute',
                                                    top: '0',
                                                    right: '0',
                                                    border: 'none',
                                                    padding: '18px',
                                                    cursor: 'pointer',
                                                }}
                                                >
                                                    <i
                                                        className="fas fa-times"
                                                        style={{ fontSize: '19px' }}
                                                    ></i>
                                                </button>
                                            </div>
                                            </>): null}   
                                        </div>
                                        <br />
                                        <div>
                                            <button
                                                onClick={() => {
                                                    setState(true);
                                                }}
                                                style={{
                                                    padding: '9px',
                                                    color: 'white',
                                                    border: 'none',
                                                    background: '#3ec4ab',
                                                    marginBottom: '11px',
                                                    borderRadius: '11px',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                Ver mas
                                                
                                            </button>
                                            
                                        </div>
									</div>

								) : null}
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ExamenFisico;
