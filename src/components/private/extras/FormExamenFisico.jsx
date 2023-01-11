import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import url from '../../../keys/backend_keys';
const FormExamenFisico = ({item}) => {
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
					peso: item.peso,
					talla: item.talla,
					temperatura: item.temperatura,
					apreciacionG: item.apreciacionG,
					tcsc: item.tcsc,
					orofaringe: item.orofaringe,
					aparatoResp: item.aparatoResp,
					aparatoCV: item.aparatoCV,
					abdomen: item.abdomen,
					aparatoGU: item.aparatoGU,
					neurologico: item.neurologico,
				}}
				validate={(valores) => {
					let errores = {};
                    if (!valores.peso) {
						errores.peso = 'Por favor ingrese el peso';
					} else if (
						!/^[0-9]*$/.test(valores.peso)
					) {
						errores.peso =
							'El peso sólo puede contener números.';
					}
					if (!valores.talla) {
						errores.talla = 'Por favor ingrese la talla';
					} else if (
						!/^[0-9]*$/.test(valores.talla)
					) {
						errores.talla =
							'La talla sólo puede contener números.';
					}
					if (!valores.temperatura) {
						errores.temperatura = 'Por favor ingrese la temperatura';
					} else if (
						!/^[0-9]*$/.test(valores.temperatura)
					) {
						errores.temperatura =
							'La temperatura sólo puede contener números.';
					}
					if (!valores.apreciacionG) {
						errores.apreciacionG =
							'Por favor ingrese Apreciación G';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(
							valores.apreciacionG
						)
					) {
						errores.apreciacionG =
							'Apreciación G solo puede contener letras y espacios';
					}
                    if (!valores.tcsc) {
						errores.tcsc =
							'Por favor ingrese TCSC';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(
							valores.tcsc
						)
					) {
						errores.tcsc =
							'TCSC solo puede contener letras y espacios';
					}
                    if (!valores.orofaringe) {
						errores.orofaringe =
							'Por favor ingrese Orofaringe';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(
							valores.orofaringe
						)
					) {
						errores.orofaringe =
							'Orofaringe solo puede contener letras y espacios';
					}
                    if (!valores.aparatoResp) {
						errores.aparatoResp =
							'Por favor ingrese Aparato Respiratorio';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(
							valores.aparatoResp
						)
					) {
						errores.aparatoResp =
							'Aparato Respiratorio solo puede contener letras y espacios';
					}
                    if (!valores.aparatoCV) {
						errores.aparatoCV =
							'Por favor ingrese Aparato CV';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(
							valores.aparatoCV
						)
					) {
						errores.aparatoCV =
							'Aparato CV solo puede contener letras y espacios';
					}
					if (!valores.abdomen) {
						errores.abdomen =
							'Por favor ingrese Abdomen';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(
							valores.abdomen
						)
					) {
						errores.abdomen =
							'Abdomen solo puede contener letras y espacios';
					}
					if (!valores.aparatoGU) {
						errores.aparatoGU =
							'Por favor ingrese Aparato GU';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.aparatoGU)
					) {
						errores.aparatoGU =
							'Aparato GU sólo puede contener letras y espacios';
					}
					if (!valores.neurologico) {
						errores.neurologico =
							'Por favor ingrese Neurológico';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.neurologico)
					) {
						errores.neurologico =
							'Neurológico sólo puede contener letras y espacios';
					}
					return errores;
				}}
				onSubmit={(valores, { resetForm }) => {
					// resetForm();
					fetch(`${url}/ExamenFisico/${item._id}`, {
						headers: {
							'Content-Type': 'application/json',
						},
						method: 'PUT',
						body: JSON.stringify({
							...valores,
							id_Historia: item.id_Historia
							// fecha_nac: moment(new Date(`${valores.fecha}`)).add(1, 'days').format(),
							// id: item._id,
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
								<label>Peso</label>
								<Field type="Number" name="peso"></Field>
							</div>
							<ErrorMessage
								name="peso"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.peso}</span>
									</div>
								)}
							/>
							<div>
								<label>Talla</label>
								<Field type="Number" name="talla"></Field>
							</div>
							<ErrorMessage
								name="talla"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.talla}</span>
									</div>
								)}
							/>
							<div>
								<label>Temperatura</label>
								<Field type="Number" name="temperatura"></Field>
							</div>
							<ErrorMessage
								name="temperatura"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.temperatura}</span>
									</div>
								)}
							/>
							<div>
								<label>Apreciacion G</label>
								<Field type="text" name="apreciacionG"></Field>
							</div>
							<ErrorMessage
								name="apreciacionG"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.apreciacionG}</span>
									</div>
								)}
							/>
							<div>
								<label>TCSC</label>
								<Field type="text" name="tcsc"></Field>
							</div>
							<ErrorMessage
								name="tcsc"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.tcsc}</span>
									</div>
								)}
							/>
							<div>
								<label>Orofaringe</label>
								<Field type="text" name="orofaringe"></Field>
							</div>
							<ErrorMessage
								name="orofaringe"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.orofaringe}</span>
									</div>
								)}
							/>
							<div>
								<label>Aparato Respiratorio</label>
								<Field type="text" name="aparatoResp"></Field>
							</div>
							<ErrorMessage
								name="aparatoResp"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.aparatoResp}</span>
									</div>
								)}
							/>
							<div>
								<label>Aparato CV</label>
								<Field type="text" name="aparatoCV"></Field>
							</div>
							<ErrorMessage
								name="aparatoCV"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.aparatoCV}</span>
									</div>
								)}
							/>
							<div>
								<label>Abdomen</label>
								<Field type="text" name="abdomen"></Field>
							</div>
							<ErrorMessage
								name="abdomen"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.abdomen}</span>
									</div>
								)}
							/>
							<div>
								<label>Aparato GU</label>
								<Field type="text" name="aparatoGU"></Field>
							</div>
							<ErrorMessage
								name="aparatoGU"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.aparatoGU}</span>
									</div>
								)}
							/>
							<div>
								<label>Neurologico</label>
								<Field type="text" name="neurologico"></Field>
							</div>
							<ErrorMessage
								name="neurologico"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.neurologico}</span>
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

export default FormExamenFisico;
