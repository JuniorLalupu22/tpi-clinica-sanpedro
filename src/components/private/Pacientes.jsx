import React, { useState } from 'react';
import { Check } from './extras/Check';
import '../../sass/ModalPaciente.sass';
const Pacientes = () => {
	let pacientes = [1, 1, 2, 3, 4, 5, 6, 7];

	let [mostrandoFormNuevo, cambiarMostrandoFormNuevo] = useState(false);
	const mostrarFormNuevo = () => {
		return (
			<div className="modalPaciente">
				<div className="contenedorForms">
					<form>
						<div>
							<label>Nombre</label>
							<br />
							<input
								type="text"
								placeholder="Ingresa nombres"
							/>
						</div>
						<div>
							<label>Apellido paterno</label>
							<br />
							<input
								type="text"
								placeholder="Ingresa apellido paterno"
							/>
						</div>
						<div>
							<label>Apellido materno</label>
							<br />
							<input
								type="text"
								placeholder="Ingresa apellido materno"
							/>
						</div>
						<div>
							<label>Fecha de nacimiento</label>
							<br />
							<input type="Date" placeholder="Ingresa DNI" />
						</div>
						<div>
							<label>DNI Padre</label>
							<br />
							<input
								type="text"
								placeholder="Ingresa DNI del padre"
							/>
						</div>
						<div>
							<label>DNI Madre</label>
							<br />
							<input
								type="text"
								placeholder="Ingresa DNI de la madre"
							/>
						</div>
						<div>
							<input
								type="submit"
								value="Actualizar datos del paciente"
							/>
						</div>
					</form>
					<form>
						<div>
							<label>Peso en kilogramos</label>
							<br />
							<input
								type="number"
								placeholder="Peso en kilogramos"
							/>
						</div>
						<div>
							<label>Talla en mts.</label>
							<br />
							<input
								type="number"
								placeholder="Talla en mts."
							/>
						</div>
						<div>
							<label>Tipo de parto</label>
							<br />
							<input
								type="text"
								placeholder="Tipo de parto"
							/>
						</div>
						<div>
							<label>Fecha de nacimiento</label>
							<br />
							<input
								type="text"
								placeholder="Fecha de nacimiento"
							/>
						</div>
						<div>
							<label>Lugar del parto</label>
							<br />
							<input
								type="text"
								placeholder="Lugar del parto"
							/>
						</div>
						<div>
							<label>Perimetro cefálico</label>
							<br />
							<input
								type="text"
								placeholder="Perimetro cefálico"
							/>
						</div>
						<div>
							<input
								type="submit"
								value="Actualizar Antecedentes Natales"
							/>
						</div>
					</form>
				</div>
				<div
					className="cerrarForm"
					onClick={() => {
						cambiarMostrandoFormNuevo(false);
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
					</svg>
				</div>
			</div>
		);
	};
	return (
		<>
			{mostrandoFormNuevo ? mostrarFormNuevo() : null}
			<div className="list">
				<h2>
					&nbsp;&nbsp;Listado de
					pacientes&nbsp;&nbsp;&nbsp;&nbsp;
					<span
						onClick={() => {
							cambiarMostrandoFormNuevo(true);
						}}
					>
						Agregar nuevo
					</span>
				</h2>
				<div className="tableList tableBig">
					<div className="listado">
						<div className="filaListado encabListado filaPacientes">
							<div className="datoListado">Paciente</div>
							<div className="datoListado">F. Nac.</div>
							<div
								className="datoListado"
								style={{ textAlign: 'center' }}
							>
								Estado
							</div>
							<div
								className="datoListado"
								style={{ textAlign: 'center' }}
							>
								Lugar Nac.
							</div>
						</div>
						{pacientes.map((paciente) => {
							return (
								<div className="filaListado filaPacientes">
									<div className="datoListado nombre">
										Daniel Ramírez Huayanay - 72269428
									</div>
									<div className="datoListado">
										20/07/2000
									</div>
									<div className="datoListado atendido">
										<div className="cuadro">
											<Check />
										</div>
									</div>
									<div
										className="datoListado"
										style={{ textAlign: 'center' }}
									>
										JLO
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Pacientes;
