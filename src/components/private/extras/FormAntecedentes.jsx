import React from 'react';
import '../../../sass/DatosF.sass';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import url from '../../../keys/backend_keys';
const FormAntecedentes = ({ item }) => {
	return (
		<>	
		<div 
		style={{
						background: '#00000039',
						position: 'absolute',
						top: '0',
						left: '0',
						height: '100vh',
						width: '100%',
	
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
		}}>
			<div
			style={{
				background: '#ffffff',
				padding: '8px',
				width:'50%',
				borderRadius: '6px',
			}}>
				<div className='datos_h_af'>
				<Formik
				initialValues={{
					asmaBronquialFam: item.asmaBronquialFam,
					diabetes: item.diabetes,
					epilepsia: item.epilepsia,
					otros: item.otros,
					peso_al_nacer: item.peso_al_nacer,
					tipoDeParto: item.tipoDeParto,
					apgar1: item.apgar1,
					apgar5: item.apgar5,
					edadGestacional: item.edadGestacional,
					complicaciones: item.complicaciones,
					asmaBronquialPat: item.asmaBronquialPat,
					nebulizacion: item.nebulizacion,
					intervencionQuirurgica: item.intervencionQuirurgica,
					reaccionAdversaMed:item.reaccionAdversaMed,
					enfAnteriores:item.enfAnteriores
				}}
				validate={(valores) => {
					let errores = {};
					if (!valores.otros) {
						errores.otros =
							'Por favor ingrese otros';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(
							valores.otros
						)
					) {
						errores.otros =
							'Otros solo puede contener letras y espacios';
					}
					if (!valores.peso_al_nacer) {
						errores.peso_al_nacer = 'Por favor ingrese Peso al nacer';
					} else if (
						!/^[0-9]*$/.test(valores.peso_al_nacer)
					) {
						errores.peso_al_nacer =
							'El peso al nacer sólo puede contener números.';
					}
					if (!valores.apgar1) {
						errores.apgar1 = 'Por favor ingrese el Apgar1';
					} else if (
						!/^[0-9]*$/.test(valores.apgar1)
					) {
						errores.apgar1 =
							'El apgar1 sólo puede contener números.';
					}
					if (!valores.apgar5) {
						errores.apgar5 = 'Por favor ingrese el Apgar5';
					} else if (
						!/^[0-9]*$/.test(valores.apgar5)
					) {
						errores.apgar5 =
							'El apgar5 sólo puede contener números.';
					}
					if (!valores.edadGestacional) {
						errores.edadGestacional = 'Por favor ingrese el Edad Gestacional';
					} else if (
						!/^[0-9]*$/.test(valores.edadGestacional)
					) {
						errores.edadGestacional =
							'El Edad Gestacional sólo puede contener números.';
					}
					if (!valores.complicaciones) {
						errores.complicaciones =
							'Por favor ingrese Complicaciones';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(
							valores.complicaciones
						)
					) {
						errores.complicaciones =
							'Complicaciones solo puede contener letras y espacios';
					}
					if (!valores.reaccionAdversaMed) {
						errores.reaccionAdversaMed =
							'Por favor ingrese Reaccion Adversa a Medicamentos';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.reaccionAdversaMed)
					) {
						errores.reaccionAdversaMed =
							'Reaccion Adversa a Medicamentos sólo puede contener letras y espacios';
					}
					if (!valores.enfAnteriores) {
						errores.enfAnteriores =
							'Por favor ingrese Enfermedades Anteriores';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.enfAnteriores)
					) {
						errores.enfAnteriores =
							'Enfermedades Anteriores sólo puede contener letras y espacios';
					}
					return errores;
				}}
				onSubmit={(valores, { resetForm }) => {
					// resetForm();
					fetch(`${url}/Antecedentes/${item._id}`, {
						headers: {
							'Content-Type': 'application/json',
						},
						method: 'PUT',
						body: JSON.stringify({
							...valores,
							id_Historia: item.id_Historia
						}),
					})
						.then((resp) => resp.json())
						.then((data) => {
							if (data.ok) {
								alert('Actualizado correctamente');
							}
						})
				}}
			>
				{({ errors }) => (
					<Form >
							<div>
								<label>Asma Bronquial Familiar: </label>
								<Field name="asmaBronquialFam" as="select">
									<option value="true">Si</option>
									<option value="false">No</option>
								</Field>
							</div>
							<br />
							<div>
								<label>Diabetes: </label>
								<Field name="diabetes" as="select">
									<option value="true">Si</option>
									<option value="false">No</option>
								</Field>
							</div>
							<br />
							<div>
								<label>Epilepsia: </label>
								<Field name="epilepsia" as="select">
									<option value="true">Si</option>
									<option value="false">No</option>
								</Field>
							</div>
							<br />
							<div>
								<label>Otros</label>
								<Field type="text" name="otros"></Field>
							</div>
							<ErrorMessage
								name="otros"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.otros}</span>
									</div>
								)}
							/>
							<div>
								<label>Peso al Nacer</label>
								<Field type="Number" name="peso_al_nacer"></Field>
							</div>
							<ErrorMessage
								name="peso_al_nacer"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.peso_al_nacer}</span>
									</div>
								)}
							/>
							<br />
							<div>
								<label>Tipo de Parto: </label>
								<Field name="tipoDeParto" as="select">
									<option value="0">Parto Normal</option>
									<option value="1">Parto por Cesaria</option>
								</Field>
							</div>
							<br />
							<div>
								<label>Apgar al Minuto</label>
								<Field
									type="Number"
									name="apgar1"
								></Field>
							</div>
							<ErrorMessage
								name="apgar1"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.apgar1}</span>
									</div>
								)}
							/>
							<div>
								<label>Apgar a los 5 minutos</label>
								<Field
									type="Number"
									name="apgar5"
								></Field>
							</div>
							<ErrorMessage
								name="apgar5"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.apgar5}</span>
									</div>
								)}
							/>
							<div>
								<label>Edad Gestacional</label>
								<Field
									type="Number"
									name="edadGestacional"
								></Field>
							</div>
							<ErrorMessage
								name="edadGestacional"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.edadGestacional}</span>
									</div>
								)}
							/>
							<div>
								<label>Complicaciones</label>
								<Field
									type="text"
									name="complicaciones"
								></Field>
							</div>
							<ErrorMessage
								name="complicaciones"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.complicaciones}</span>
									</div>
								)}
							/>
							<br />
							<div>
								<label>Asma Bronquial Patológico: </label>
								<Field name="asmaBronquialPat" as="select">
									<option value="true">Si</option>
									<option value="false">No</option>
								</Field>
							</div>
							<br />
							<div>
								<label>Nebulización: </label>
								<Field name="nebulizacion" as="select">
									<option value="true">Si</option>
									<option value="false">No</option>
								</Field>
							</div>
							<br />
							<div>
								<label>Intervención Quirúrgica: </label>
								<Field name="intervencionQuirurgica" as="select">
									<option value="true">Si</option>
									<option value="false">No</option>
								</Field>
							</div>
							<br />
							<div>
								<label>Reaccion Adversa Medica</label>
								<Field
									type="text"
									name="reaccionAdversaMed"
								></Field>
							</div>
							<ErrorMessage
								name="reaccionAdversaMed"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.reaccionAdversaMed}</span>
									</div>
								)}
							/>
							<div>
								<label>Enfermedades Anteriores</label>
								<Field
									type="text"
									name="enfAnteriores"
								></Field>
							</div>
							<ErrorMessage
								name="enfAnteriores"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.enfAnteriores}</span>
									</div>
								)}
							/>
							<button type="submit" className="actualizar"
							>
								Actualizar
							</button>
						
					</Form>
				)}
			</Formik>
				</div>
			</div>
		</div>
			
			
		</>
	);
};

export default FormAntecedentes;
