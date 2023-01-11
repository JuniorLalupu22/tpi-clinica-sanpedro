import React from 'react'
// import useCita from '../../hooks/useCita';
import '../../sass/GraficoDeCrecimiento.sass';
import { useParams, useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAfiliacion from '../../hooks/useAfiliacion';
import { connect } from 'react-redux';

const GraficoDeCrecimiento = ({usuario}) => {
	let [datos_af] = useAfiliacion();
	const { id } = useParams();
	const history = useHistory()
	return (
		<>
		<div className='contenedorRedireccion'>
			<div className="datos_Graficos">
				{datos_af.map((item) => {
					return (
						<div key={item._id}>
							{item._id===id?  (
								<div>
									<div className="dato_Graficos">
									<div className='headerGraficos'>
										<div>
											<h2>Gráficos de Crecimiento</h2>
										</div>
										<div className='btnRegresarGraficos'>
											{usuario.rol === 'Apoderado' ?
											(
												<div style={{marginTop: '2.5%'}}>
													<button className='cta' onClick={()=>{history.push(`/hijo/${id}`)}}>
														<span>Regresar</span>
														<i className="fa-solid fa-arrow-left"></i>
													</button>
												</div>
											):null}
										</div>
									</div>
									{item.sexo === 1 ? (
										<div>
											<div className='cardsGraficas'>
												<div className="card-Graficas">
													<div className="img-section-Graficas">
														<p>GRÁFICA DE 0 A 36 MESES</p>
													</div>
													<div className="card-desc-Graficas">
														<div className='buttonGraficas'>
															<Link className="tooltip" to={`/GraficoDeCrecimientoPesoEdadNiño0a36/${id}`}>
																<p>PESO - EDAD</p>
																<span className="tooltiptext"><i className="fa-solid fa-arrow-right"></i></span>
															</Link>
														</div>
														<div className='buttonGraficas'>
															<Link className="tooltip" to={`/GraficoDeCrecimientoTallaEdadNiño0a36/${id}`}>
																<p>TALLA - EDAD</p>
																<span className="tooltiptext"><i className="fa-solid fa-arrow-right"></i></span>
															</Link>
														</div>
														<div className='buttonGraficas'>
															<Link className="tooltip" to={`/GraficoDeCrecimientoPesoTallaNiño0a36/${id}`}>
																<p>PESO - TALLA</p>
																<span className="tooltiptext"><i className="fa-solid fa-arrow-right"></i></span>
															</Link>
														</div>
														<div className='buttonGraficas'>
															<Link className="tooltip" to={`/GraficoDeCrecimientoPCNiño0a36/${id}`}>
																<p>PC - EDAD</p>
																<span className="tooltiptext"><i className="fa-solid fa-arrow-right"></i></span>
															</Link>
														</div>
													</div>
												</div>
												<div className="card-Graficas">
													<div className="img-section-Graficas">
														<p>GRÁFICA DE 2 A 20 AÑOS</p>
														
														{/* <i className="fa-solid fa-chart-line"></i> */}
													</div>
													<div className="card-desc-Graficas">
														<div className='buttonGraficas'>
															<Link className="tooltip" to={`/GraficoDeCrecimientoPesoEdadNiño2a20/${id}`}>
																<p>PESO - EDAD</p>
																<span className="tooltiptext"><i className="fa-solid fa-arrow-right"></i></span>
															</Link>
														</div>
														<div className='buttonGraficas'>
															<Link className="tooltip" to={`/GraficoDeCrecimientoTallaEdadNiño2a20/${id}`}>
																<p>TALLA - EDAD</p>
																<span className="tooltiptext"><i className="fa-solid fa-arrow-right"></i></span>
															</Link>
														</div>
														<div className='buttonGraficas'>
															<Link className="tooltip" to={`/GraficoDeCrecimientoIMCNiños2a20/${id}`}>
																<p>IMC</p>
																<span className="tooltiptext"><i className="fa-solid fa-arrow-right"></i></span>
															</Link>
														</div>
													</div>
												</div>
												<div className="card-Graficas">
													<div className="img-section-Graficas">
														<p>GRÁFICA MAYORES A 7kg Y 77cm</p>
														
														{/* <i className="fa-solid fa-chart-line"></i> */}
													</div>
													<div className="card-desc-Graficas">
														<div className='buttonGraficas'>
															<Link className="tooltip" to={`/GraficoDeCrecimientoPesoTallaNiño/${id}`}>
																<p>PESO - TALLA</p>
																<span className="tooltiptext"><i className="fa-solid fa-arrow-right"></i></span>
															</Link>
														</div>
													</div>
												</div>
											</div>
											
											{/* <h3>De 0 a 36 meses</h3>
											
											<Link
												to={`/GraficoDeCrecimientoPesoEdadNiño0a36/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Peso - Edad
											</Link>
                                            <br></br>
                                            <br></br>
                                            <Link
												to={`/GraficoDeCrecimientoTallaEdadNiño0a36/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Talla - Edad
											</Link>
											<br></br>
                                            <br></br>
											<Link
												to={`/GraficoDeCrecimientoPesoTallaNiño0a36/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Peso - Talla
											</Link>
											<br></br>
                                            <br></br>
											<Link
												to={`/GraficoDeCrecimientoPCNiño0a36/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica PC - Edad
											</Link>
											<br></br>
                                            <br></br>
											<h3>De 2 a 20 años</h3>
											<Link
												to={`/GraficoDeCrecimientoPesoEdadNiño2a20/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Peso - Edad
											</Link>
											<br></br>
                                            <br></br>
											<Link
												to={`/GraficoDeCrecimientoTallaEdadNiño2a20/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Talla - Edad
											</Link>
											<br></br>
                                            <br></br>
											<Link
												to={`/GraficoDeCrecimientoIMCNiños2a20/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica IMC
											</Link>
											<br></br>
                                            <br></br>
											<h3>Mayores a 7kg y 77cm</h3>
											<Link
												to={`/GraficoDeCrecimientoPesoTallaNiño/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Peso - Talla
											</Link> */}
										</div>
                                        
									) : null}
									{item.sexo === 2 ? (
										<div>
											<div className='cardsGraficas'>
												<div className="card-Graficas">
													<div className="img-section-Graficas">
														<p>GRÁFICA DE 0 A 36 MESES</p>
														
														{/* <i className="fa-solid fa-chart-line"></i> */}
													</div>
													<div className="card-desc-Graficas">
														<div className='buttonGraficas'>
															<Link className="tooltip" to={`/GraficoDeCrecimientoPesoEdadNiña0a36/${id}`}>
																<p>PESO - EDAD</p>
																<span className="tooltiptext"><i className="fa-solid fa-arrow-right"></i></span>
															</Link>
														</div>
														<div className='buttonGraficas'>
															<Link className="tooltip" to={`/GraficoDeCrecimientoTallaEdadNiña0a36/${id}`}>
																<p>TALLA - EDAD</p>
																<span className="tooltiptext"><i className="fa-solid fa-arrow-right"></i></span>
															</Link>
														</div>
														<div className='buttonGraficas'>
															<Link className="tooltip" to={`/GraficoDeCrecimientoPesoTallaNiña0a36/${id}`}>
																<p>PESO - TALLA</p>
																<span className="tooltiptext"><i className="fa-solid fa-arrow-right"></i></span>
															</Link>
														</div>
														<div className='buttonGraficas'>
															<Link className="tooltip" to={`/GraficoDeCrecimientoPCNiña0a36/${id}`}>
																<p>PC - EDAD</p>
																<span className="tooltiptext"><i className="fa-solid fa-arrow-right"></i></span>
															</Link>
														</div>
													</div>
												</div>
												<div className="card-Graficas">
													<div className="img-section-Graficas">
														<p>GRÁFICA DE 2 A 20 AÑOS</p>
														
														{/* <i className="fa-solid fa-chart-line"></i> */}
													</div>
													<div className="card-desc-Graficas">
														<div className='buttonGraficas'>
															<Link className="tooltip" to={`/GraficoDeCrecimientoPesoEdadNiña2a20/${id}`}>
																<p>PESO - EDAD</p>
																<span className="tooltiptext"><i className="fa-solid fa-arrow-right"></i></span>
															</Link>
														</div>
														<div className='buttonGraficas'>
															<Link className="tooltip" to={`/GraficoDeCrecimientoTallaEdadNiña2a20/${id}`}>
																<p>TALLA - EDAD</p>
																<span className="tooltiptext"><i className="fa-solid fa-arrow-right"></i></span>
															</Link>
														</div>
														<div className='buttonGraficas'>
															<Link className="tooltip" to={`/GraficoDeCrecimientoIMCNiñas2a20/${id}`}>
																<p>IMC</p>
																<span className="tooltiptext"><i className="fa-solid fa-arrow-right"></i></span>
															</Link>
														</div>
													</div>
												</div>
												<div className="card-Graficas">
													<div className="img-section-Graficas">
														<p>GRÁFICA MAYORES A 7kg Y 77cm</p>
														
														{/* <i className="fa-solid fa-chart-line"></i> */}
													</div>
													<div className="card-desc-Graficas">
														<div className='buttonGraficas'>
															<Link className="tooltip" to={`/GraficoDeCrecimientoPesoTallaNiña/${id}`}>
																<p>PESO - TALLA</p>
																<span className="tooltiptext"><i className="fa-solid fa-arrow-right"></i></span>
															</Link>
														</div>
													</div>
												</div>
											</div>
											{/* <h3>De 0 a 36 meses</h3>
											<Link
												to={`/GraficoDeCrecimientoPesoEdadNiña0a36/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Peso - Edad
                                                
											</Link>
                                            <br></br>
                                            <br></br>
                                            <Link
												to={`/GraficoDeCrecimientoTallaEdadNiña0a36/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Talla - Edad
											</Link>
											<br></br>
                                            <br></br>
											<Link
												to={`/GraficoDeCrecimientoPesoTallaNiña0a36/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Peso - Talla
											</Link>
											<br></br>
                                            <br></br>
											<Link
												to={`/GraficoDeCrecimientoPCNiña0a36/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica PC - Edad
											</Link>
											<br></br>
                                            <br></br>
											<h3>De 2 a 20 años</h3>
											<Link
												to={`/GraficoDeCrecimientoPesoEdadNiña2a20/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Peso - Edad
                                                
											</Link>
											<br></br>
                                            <br></br>
											<Link
												to={`/GraficoDeCrecimientoTallaEdadNiña2a20/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Talla - Edad
											</Link>	
											<br></br>
                                            <br></br>
											<Link
												to={`/GraficoDeCrecimientoIMCNiñas2a20/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica IMC
											</Link>	
											<br></br>
                                            <br></br>
											<h3>Mayores a 7kg y 77cm</h3>
											<Link
												to={`/GraficoDeCrecimientoPesoTallaNiña/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Peso - Talla
											</Link> */}
										</div>
									) : null}
									</div>
								</div>
							) : null}
						</div>
					);
				})}	
			</div>
		</div>
		</>
		
	)
}

const mapStateToProps = (state) => ({
	usuario: state.usuario,
});

export default connect(mapStateToProps)(GraficoDeCrecimiento);
// export default GraficoDeCrecimiento
