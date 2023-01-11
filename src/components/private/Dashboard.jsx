import React,{useState} from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import InitScreen from '../private/InitScreen';
import '../../sass/Dashboard.sass';
import '../../sass/Scroll.sass';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Pacientes from './Pacientes';
import Consultas from './Consultas';
import HistoriaClinica from './HistoriaClinica';
import Error404 from '../Error404';
import Hijo from './Hijo';
// import Consultas from '../private/Consultas';
// import Vacunas from '../private/Vacunas';
// Citas
import Hijos from './Hijos';
import MisHijos from './MisHijos';
// import Filiacion from './Filiacion';
import Responsables from './Responsables';
import NuevaCita from './NuevaCita';
import MisCitasSecretaria from './MisCitasSecretaria';
import DatosF from './DatosF';

import HistoriasClinicas from './extras/HistoriasClinicas'
// import Antecedentes from './Antecedentes';
import GraficoDeCrecimiento from './GraficoDeCrecimiento';
//PARA NIÑOS
import GraficoDeCrecimientoPesoEdadNiño0a36 from './GraficoDeCrecimientoPesoEdadNiño0a36';
import GraficoDeCrecimientoTallaEdadNiño0a36 from './GraficoDeCrecimientoTallaEdadNiño0a36';
import GraficoDeCrecimientoPCNiño0a36 from './GraficoDeCrecimientoPCNiño0a36';
import GraficoDeCrecimientoPesoTallaNiño0a36 from './GraficoDeCrecimientoPesoTallaNiño0a36';
import GraficoDeCrecimientoPesoEdadNiño2a20 from './GraficoDeCrecimientoPesoEdadNiño2a20';
import GraficoDeCrecimientoTallaEdadNiño2a20 from './GraficoDeCrecimientoTallaEdadNiño2a20';
import GraficoDeCrecimientoPesoTallaNiño from './GraficoDeCrecimientoPesoTallaNiño';
import GraficoDeCrecimientoIMCNiños2a20 from './GraficoDeCrecimientoIMCNiños2a20';
//PARA ÑINAS
import GraficoDeCrecimientoPesoEdadNiña0a36 from './GraficoDeCrecimientoPesoEdadNiña0a36';
import GraficoDeCrecimientoTallaEdadNiña0a36 from './GraficoDeCrecimientoTallaEdadNiña0a36';
import GraficoDeCrecimientoPCNiña0a36 from './GraficoDeCrecimientoPCNiña0a36';
import GraficoDeCrecimientoPesoTallaNiña0a36 from './GraficoDeCrecimientoPesoTallaNiña0a36';
import GraficoDeCrecimientoPesoEdadNiña2a20 from './GraficoDeCrecimientoPesoEdadNiña2a20';
import GraficoDeCrecimientoTallaEdadNiña2a20 from './GraficoDeCrecimientoTallaEdadNiña2a20';
import GraficoDeCrecimientoPesoTallaNiña from './GraficoDeCrecimientoPesoTallaNiña';
import GraficoDeCrecimientoIMCNiñas2a20 from './GraficoDeCrecimientoIMCNiñas2a20';

import DatosAntecedentes from './DatosAntecedentes';
import DatosVacunas from './DatosVacunas';
import DesarrolloIntegral from './DesarrolloIntegral';
import CartillaVacunacion from './CartillaVacunacion';
//RECETA
import FormRecetas from './extras/FormRecetas';
import ListaReceta from './ListaReceta'

//ORDEN
import FormOrden from './extras/FormOrden'
import ListaOrden from './ListaOrden'

const Dashboard = ({ usuario, logout }) => {
	const [open, setOpen]= useState(false)
	return (
		<>
			<BrowserRouter>
				<div style={{display:'flex'}}>
					{/* <Header open={open} setOpen={setOpen}/> */}
					<Header/>
					<div className="btn_ops">
						<button className="ops" onClick={()=>{setOpen(!open)}}>
							<i className="fas fa-bars"></i>
						</button>
					</div>
				</div>
				
				<div className="contenedor_dashboard">
					<div className="menu_cont">
						<div className={open ? 'sidebarOpen' : 'sidebar'}>
							<div className="menu">
								{usuario.rol === 'Doctor' ? (
									<>
										<div className="itemLong">
											<NavLink
												className="item"
												to="/"
												exact
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
												>
													<path d="M6 12h10v1h-10v-1zm7.816-3h-7.816v1h9.047c-.45-.283-.863-.618-1.231-1zm5.184 1.975v2.569c0 4.106-6 2.456-6 2.456s1.518 6-2.638 6h-7.362v-20h9.5c.312-.749.763-1.424 1.316-2h-12.816v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-3.886c-.623.26-1.297.421-2 .475zm-13-3.975h6.5c-.134-.32-.237-.656-.319-1h-6.181v1zm17-2.5c0 2.485-2.017 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.017-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z" />
												</svg>
											</NavLink>
											Consultas
										</div>
										<div className="itemLong">
											<NavLink
												className="item"
												to="/citas"
											>
												<svg
													width="24"
													height="24"
													xmlns="http://www.w3.org/2000/svg"
													fillRule="evenodd"
													clipRule="evenodd"
												>
													<path d="M19 22h2v-11.931c-1.16-.753-2.515-1.509-3.815-2.052.329-.544.574-1.189.697-1.877 1.821.75 3.499 1.753 5.118 2.86v13h1v2h-24v-2h1v-13c1.615-1.084 3.298-2.08 5.122-2.83.137.664.387 1.293.728 1.863-1.36.563-2.614 1.267-3.839 2.04l-.011.007v11.92h2v-5h14v5zm-12 1h3v-4h-3v4zm4 0h2v-4h-2v4zm3 0h3v-4h-3v4zm-9-7h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-12-3h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-5-13c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m1 4v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2z" />
												</svg>
											</NavLink>
											Citas
										</div>
										<div className="itemLong">
											<NavLink
												className="item"
												to="/pacientes"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
												>
													<path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
												</svg>
											</NavLink>
											Pacientes
										</div>
									</>
								) : null}

								{usuario.rol === 'Secretaria' ? (
									<>
										<div className="itemLong">
											<NavLink
												className="item"
												to="/"
												exact
											>
												<svg
													width="24"
													height="24"
													xmlns="http://www.w3.org/2000/svg"
													fillRule="evenodd"
													clipRule="evenodd"
												>
													<path d="M19 22h2v-11.931c-1.16-.753-2.515-1.509-3.815-2.052.329-.544.574-1.189.697-1.877 1.821.75 3.499 1.753 5.118 2.86v13h1v2h-24v-2h1v-13c1.615-1.084 3.298-2.08 5.122-2.83.137.664.387 1.293.728 1.863-1.36.563-2.614 1.267-3.839 2.04l-.011.007v11.92h2v-5h14v5zm-12 1h3v-4h-3v4zm4 0h2v-4h-2v4zm3 0h3v-4h-3v4zm-9-7h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-12-3h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-5-13c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m1 4v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2z" />
												</svg>
											</NavLink>
											Reservas
										</div>
										<div className="itemLong">
											<NavLink
												className="item"
												to="/nueva-cita"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
												>
													<path d="M6 12h10v1h-10v-1zm7.816-3h-7.816v1h9.047c-.45-.283-.863-.618-1.231-1zm5.184 1.975v2.569c0 4.106-6 2.456-6 2.456s1.518 6-2.638 6h-7.362v-20h9.5c.312-.749.763-1.424 1.316-2h-12.816v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-3.886c-.623.26-1.297.421-2 .475zm-13-3.975h6.5c-.134-.32-.237-.656-.319-1h-6.181v1zm17-2.5c0 2.485-2.017 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.017-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z" />
												</svg>
											</NavLink>
											Citas
										</div>
										{/* <div className="itemLong">
											<NavLink
												className="item"
												to="/mis-citas"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
												>
													<path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z" />
												</svg>
											</NavLink>
											Mis Citas
										</div> */}
										<div className="itemLong">
											<NavLink
												className="item"
												to="/filiacion"
											>
												<svg
													width="24"
													height="24"
													xmlns="http://www.w3.org/2000/svg"
													fillRule="evenodd"
													clipRule="evenodd"
												>
													<path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z" />
												</svg>
											</NavLink>
											 Pacientes
										</div>
										<div className="itemLong">
											<NavLink
												className="item"
												to="/responsables"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
												>
													<path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
												</svg>
											</NavLink> 
											Apoderado
										</div>
									</>
								) : null}

								{usuario.rol === 'Apoderado' ? (
									<>
										<div className="itemLong">
											<NavLink
												className="item"
												to="/"
												exact
											>
												<svg
													width="24"
													height="24"
													xmlns="http://www.w3.org/2000/svg"
													fillRule="evenodd"
													clipRule="evenodd"
												>
													<path d="M19 22h2v-11.931c-1.16-.753-2.515-1.509-3.815-2.052.329-.544.574-1.189.697-1.877 1.821.75 3.499 1.753 5.118 2.86v13h1v2h-24v-2h1v-13c1.615-1.084 3.298-2.08 5.122-2.83.137.664.387 1.293.728 1.863-1.36.563-2.614 1.267-3.839 2.04l-.011.007v11.92h2v-5h14v5zm-12 1h3v-4h-3v4zm4 0h2v-4h-2v4zm3 0h3v-4h-3v4zm-9-7h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-12-3h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-5-13c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m1 4v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2z" />
												</svg>
											</NavLink>
											Inicio
										</div>
										<div className="itemLong">
											<NavLink
												className="item"
												to="/mis-hijos"
												// exact
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
												>
													<path d="M21.174 8.205c-.427-4.943-4.082-7.205-9.174-7.205-5.143 0-8.751 2.311-9.174 7.205-2.026.142-2.826 2.079-2.826 4.221 0 1.888.861 4.627 3.176 5.159 1.193 3.546 4.229 5.415 8.824 5.415s7.631-1.869 8.824-5.415c2.315-.532 3.176-3.271 3.176-5.159 0-2.128-.794-4.079-2.826-4.221zm-1.141 7.471c-.449.009-.836.315-.949.749-.787 3.036-3.17 4.575-7.084 4.575s-6.297-1.539-7.083-4.575c-.113-.434-.5-.74-.949-.749-2.135-.041-2.438-4.65-1.336-5.367.272-.177.614-.104.756-.041.671.3 1.427-.207 1.406-.941-.071-2.526.931-4.647 3.23-5.706-.663 2.823 2.205 5.638 6.672 4.598-4.012-1.098-1.056-6.221 2.352-3.954 1.608 1.217 2.214 3.072 2.16 5.063-.021.739.743 1.239 1.406.941.142-.064.483-.137.756.041 1.101.716.798 5.325-1.337 5.366zm-3.533-4.176c0 .828-.56 1.5-1.25 1.5s-1.25-.672-1.25-1.5.56-1.5 1.25-1.5 1.25.672 1.25 1.5zm-7.75 1.5c-.69 0-1.25-.672-1.25-1.5s.56-1.5 1.25-1.5 1.25.672 1.25 1.5-.56 1.5-1.25 1.5zm-.75 3h8s-.844 2.875-4 2.875c-3.25 0-4-2.875-4-2.875z" />
												</svg>
											</NavLink>
											Hijos
										</div>
									</>
								) : null}
								<div className="itemLong">
									<Link
										// exact
										to="/"
										className="item"
										onClick={() => {
											logout();
											window.localStorage.removeItem('TOKEN')
										}}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
										>
											<path d="M0 2v20h14v-2h-12v-16h12v-2h-14zm18 7.408l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7z" />
										</svg>
									</Link>
									Salir
								</div>
							</div>
						</div>
					</div>
					<>
						<div onClick={()=>{setOpen(false)}}>
							<Switch>
								<Route path="/" exact={true} component={InitScreen} />
								<Route
									path="/citas"
									component={NuevaCita}
								/>
								<Route
									path="/pacientess"
									component={Pacientes}
								/>

								<Route
									path="/pacientes"
									component={Consultas}
								/>
								<Route
									path="/historias-clinicas/:id"
									component={HistoriasClinicas}
								/>
								
								{/* <Route
									path="/vacunas/:id"
									component={Vacunas}
								/> */}
								<Route
									path="/GraficoDeCrecimiento/:id"
									component={GraficoDeCrecimiento}
								/>
								<Route
									path="/GraficoDeCrecimientoPesoEdadNiño0a36/:id"
									component={GraficoDeCrecimientoPesoEdadNiño0a36}
								/>
								<Route
									path="/GraficoDeCrecimientoPesoEdadNiña0a36/:id"
									component={GraficoDeCrecimientoPesoEdadNiña0a36}
								/>
								<Route
									path="/GraficoDeCrecimientoTallaEdadNiño0a36/:id"
									component={GraficoDeCrecimientoTallaEdadNiño0a36}
								/>
								<Route
									path="/GraficoDeCrecimientoTallaEdadNiña0a36/:id"
									component={GraficoDeCrecimientoTallaEdadNiña0a36}
								/>
								<Route
									path="/GraficoDeCrecimientoPesoTallaNiño0a36/:id"
									component={GraficoDeCrecimientoPesoTallaNiño0a36}
								/>
								<Route
									path="/GraficoDeCrecimientoPesoTallaNiña0a36/:id"
									component={GraficoDeCrecimientoPesoTallaNiña0a36}
								/>
								<Route
									path="/GraficoDeCrecimientoPCNiño0a36/:id"
									component={GraficoDeCrecimientoPCNiño0a36}
								/>
								<Route
									path="/GraficoDeCrecimientoPCNiña0a36/:id"
									component={GraficoDeCrecimientoPCNiña0a36}
								/>
								<Route
									path="/GraficoDeCrecimientoPesoEdadNiño2a20/:id"
									component={GraficoDeCrecimientoPesoEdadNiño2a20}
								/>
								<Route
									path="/GraficoDeCrecimientoTallaEdadNiño2a20/:id"
									component={GraficoDeCrecimientoTallaEdadNiño2a20}
								/>
								<Route
									path="/GraficoDeCrecimientoPesoEdadNiña2a20/:id"
									component={GraficoDeCrecimientoPesoEdadNiña2a20}
								/>
								<Route
									path="/GraficoDeCrecimientoTallaEdadNiña2a20/:id"
									component={GraficoDeCrecimientoTallaEdadNiña2a20}
								/>
								<Route
									path="/GraficoDeCrecimientoPesoTallaNiño/:id"
									component={GraficoDeCrecimientoPesoTallaNiño}
								/>
								<Route
									path="/GraficoDeCrecimientoPesoTallaNiña/:id"
									component={GraficoDeCrecimientoPesoTallaNiña}
								/>
								<Route
									path="/GraficoDeCrecimientoIMCNiños2a20/:id"
									component={GraficoDeCrecimientoIMCNiños2a20}
								/>
								<Route
									path="/GraficoDeCrecimientoIMCNiñas2a20/:id"
									component={GraficoDeCrecimientoIMCNiñas2a20}
								/>
								<Route
									path="/historia-clinica/:id"
									component={HistoriaClinica}
								/>
								<Route path="/vacunas/:id" component={DatosVacunas} />
								<Route
									path="/nueva-cita"
									component={NuevaCita}
								/>
								<Route
									path="/mis-citas"
									component={MisCitasSecretaria}
								/>
								<Route
									path="/responsables"
									component={Responsables}
								/>
								<Route
									path="/filiacion"
									component={Consultas}
								/>
								<Route
									path="/datos-f/:id"
									component={DatosF}
								/>
								<Route path="/hijos/:id" component={Hijos} />
							
								<Route path="/antecedentes/:id" component={DatosAntecedentes}/>
											
								<Route
									path="/mis-hijos"
									component={MisHijos}
								/>
								<Route
									path="/hijo/:id"
									component={Hijo}
								/>
								<Route
									path="/agregar-receta/:id"
									component={FormRecetas}
								/>
								<Route
									path="/lista-receta/:id"
									component={ListaReceta}
								/>
								<Route
									path="/agregar-orden/:id"
									component={FormOrden}
								/>
								<Route
									path="/lista-orden/:id"
									component={ListaOrden}
								/>
								<Route
									path="/DesarrolloIntegral/:id"
									component={DesarrolloIntegral}
								/>
								<Route
									path="/CartillaVacunacion/:id" 
									component={CartillaVacunacion}
								/>
								<Error404 component={Error404} />
							</Switch>
						</div>
						
					</>
				</div>
			</BrowserRouter>
		</>
	);
};

const mapStateToProps = (state) => ({
	usuario: state.usuario,
});
const mapDispatchToProps = (dispatch) => ({
	logout(usuario) {
		dispatch({
			type: 'LOGOUT_OK',
			usuario,
		});
	},
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
// export default Dashboard;
