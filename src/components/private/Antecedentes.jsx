import React, { useEffect, useState } from 'react';
import url from '../../keys/backend_keys';
import '../../sass/DatosF.sass';
import '../../sass/Antecedentes.sass';
const Antecedentes = ({id}) => {
	// const { id } = useParams();
	const [nuevo, setNuevo] = useState(null);
	const [antecedentes, setAntecedentes] = useState({});
	const handleChange = (e) => {
		setAntecedentes({
			...antecedentes,
			[e.target.name]: e.target.value,
		});
	};
	useEffect(() => {
		fetch(`${url}/Antecedentes/${id}`)
			.then((resp) => resp.json())
			.then((data) => {
				if (data.length > 0) {
					setNuevo(false);
					setAntecedentes(data[0])
				} else {
					setNuevo(true);

				}
			});
	}, [id]);
	return (
		<div style={{width:'95%'}}>
			<h2 className="titulo-ant">Antecedentes del paciente</h2>
			<form className="cont-ant">
				<h3>Familiares</h3>
				<div className='row1'>
					<div>
						<label>Asma Bronquial</label>
						<select
							name="asmaBronquialFam"
							onChange={handleChange}
							value={antecedentes.asmaBronquialFam}
						>
							<option>-- Seleccione --</option>
							<option value="true">Sí</option>
							<option value="false">No</option>
						</select>
					</div>
					<div>
						<label>Diabetes</label>
						<select
							name="diabetes"
							onChange={handleChange}
							value={antecedentes.diabetes}
						>
							<option>-- Seleccione --</option>
							<option value="true">Sí</option>
							<option value="false">No</option>
						</select>
					</div>
					<div>
						<label>Epilepsia</label>
						<select
							name="epilepsia"
							onChange={handleChange}
							value={antecedentes.epilepsia}
						>
							<option>-- Seleccione --</option>
							<option value="true">Sí</option>
							<option value="false">No</option>
						</select>
					</div>
				</div>
				<label>Otros</label>
				<textarea
					rows="3"
					cols="50"
					placeholder="Ingrese otros antecedentes"
					name="Otros"
					value={antecedentes.Otros ? antecedentes.Otros : ''}
					onChange={handleChange}
					style={{resize:'none'}}
				></textarea>
				<h3>Natales</h3>
				<div className='row1'>
					<div>
						<label>Peso al nacer</label>
						<input
							placeholder="Peso al nacer"
							type="number"
							min="0"
							name="peso_al_nacer"
							onChange={handleChange}
							value={antecedentes.peso_al_nacer ? antecedentes.peso_al_nacer : ''}
						/>
					</div>
					<div>
						<label>Talla al nacer</label>
						<input
							placeholder="Talla al nacer"
							type="number"
							min="0"
							name="talla_al_nacer"
							onChange={handleChange}
							value={antecedentes.talla_al_nacer ? antecedentes.talla_al_nacer : ''}
						/>
					</div>
					<div>
						<label>PC</label>
						<input
							placeholder="PC"
							type="number"
							min="0"
							name="pc"
							onChange={handleChange}
							value={antecedentes.pc ? antecedentes.pc : ''}
						/>
					</div>
				</div>
				<div className='row2'>
					<div className='row2_1'>
						<label>Tipo de Parto</label>
						<select
							name="tipoDeParto"
							onChange={handleChange}
							value={antecedentes.tipoDeParto ? antecedentes.tipoDeParto : ''}
						>
							<option>-- Seleccione --</option>
							<option value="1">Eutócico</option>
							<option value="2">Cesárea</option>
						</select>
					</div>
					<div className='row2_1'>
						<label>Edad Gestacional</label>
						<input
							name="edadGestacional"
							type="number"
							placeholder="Edad Gestacional"
							value={antecedentes.edadGestacional ? antecedentes.edadGestacional : ''}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className='row2'>
					<div className='row2_1'>
						<label>Apgar 1'</label>
						<input
							placeholder="Apgar1"
							type="number"
							name="apgar1"
							value={antecedentes.apgar1 ? antecedentes.apgar1 : ''}
							onChange={handleChange}
						/>
					</div>
					<div className='row2_2'>
						<label>Apgar 5'</label>
						<input
							placeholder="Apgar5"
							type="number"
							name="apgar5"
							onChange={handleChange}
							value={antecedentes.apgar5 ? antecedentes.apgar5 : ''}
						/>
					</div>
				</div>
				
				<label>Complicaciones</label>
				<textarea
					rows="3"
					cols="25"
					placeholder="Ingrese algunas complicaciones"
					name="complicaciones"
					value={antecedentes.complicaciones ? antecedentes.complicaciones : ''}
					onChange={handleChange}
					style={{resize:'none'}}
				></textarea>
				<h3>Patológicos</h3>
				<label>Alergias</label>
				<textarea
					rows="3"
					cols="25"
					placeholder="Ingrese algunas alergias"
					name="alergia"
					value={antecedentes.alergia ? antecedentes.alergia : ''}
					onChange={handleChange}
					style={{resize:'none'}}
				></textarea>
				<div className='row3'>
					<div>
						<label>Asma Bronquial</label>
						{/* <input placeholder="Asma Bronquial" /> */}
						<select
							name="asmaBronquialPat"
							onChange={handleChange}
							value={antecedentes.asmaBronquialPat}
						>
							<option>-- Seleccione --</option>
							<option value="true">Sí</option>
							<option value="false">No</option>
						</select>
					</div>
					<div>
						<label>Nebulización</label>
						<select
							name="nebulizacion"
							onChange={handleChange}
							value={antecedentes.nebulizacion}
						>
							<option>-- Seleccione --</option>
							<option value="true">Sí</option>
							<option value="false">No</option>
						</select>
					</div>
				</div>
				<div className='row4'>
					<div>
						<label>Intervención Quirúrgica</label>
						<select
							name="intervencionQuirurgica"
							onChange={handleChange}

							value={antecedentes.intervencionQuirurgica}
						>
							<option>-- Seleccione --</option>
							<option value="true">Sí</option>
							<option value="false">No</option>
						</select>
					</div>
					<div>	
						<label>Reacción Adversa medicamentos</label>
						<select
							name="reaccionAdversaMed"
							onChange={handleChange}
							value={antecedentes.reaccionAdversaMed}
						>
							<option>-- Seleccione --</option>
							<option value="true">Sí</option>
							<option value="false">No</option>
						</select>
					</div>
				</div>
				<div className='row3'>
					<div>
						<label>SOB</label>
						{/* <input placeholder="Asma Bronquial" /> */}
						<select
							name="sob"
							onChange={handleChange}
							value={antecedentes.sob}
						>
							<option>-- Seleccione --</option>
							<option value="true">Sí</option>
							<option value="false">No</option>
						</select>
					</div>
				</div>
				<label>Enfermedades Anteriores</label>
				<textarea
					rows="3"
					cols="25"
					placeholder="Ingrese algunas enfermedades"
					name="enfAnteriores"
					value={antecedentes.enfAnteriores ? antecedentes.enfAnteriores : ''}
					onChange={handleChange}
					style={{resize:'none'}}
				></textarea>
				<button
					onClick={(e) => {
						e.preventDefault();
						if(nuevo){
							fetch(`${url}/Antecedentes/new`,{
								headers: {
									'Content-Type': 'application/json',
								},
								method: 'POST',
								body: JSON.stringify({
									...antecedentes,
									id_Historia: id
								}),
							}).then((resp) =>resp.json()).then((data)=>{
								if(data.ok){
									alert('datos registrados')
								}
							})
						}
						else{
							fetch(`${url}/Antecedentes/${antecedentes._id}`,{
								headers: {
									'Content-Type': 'application/json',
								},
								method: 'PUT',
								body: JSON.stringify({
									...antecedentes
								}),
							}).then((resp) =>resp.json()).then((data)=>{
								if(data.ok){
									alert('datos actualizados')
								}
							})
						}
					}}
				>
					{nuevo ? 'Crear' : 'Actualizar'}
				</button>
			</form>
		</div>
	);
};

export default Antecedentes;
