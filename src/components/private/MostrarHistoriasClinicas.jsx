import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import url from "../../keys/backend_keys";
import useIndicaciones from '../../hooks/useIndicaciones';

const MostrarHistoriasClinicas = ({id}) =>{
	const [Hc, setHc] = useState([])

    useEffect(() => {
		fetch(`${url}/HistClinica/id/${id}`)
			.then((resp) => resp.json())
			.then((data)=>{
				setHc(data)
			})
	}, [id]);

    const [datos, setGrafica] = useState([]);

	useEffect(() => {
		fetch(`${url}/HistClinica/idPaciente/id/${id}`)
			.then((resp) =>{
				return resp.json();
			})
			
			.then((data) =>{
				setGrafica(data)
			});
			
	}, [id]);

    const handleChange = (e)=>{
		setHc({
			...Hc,
			[e.target.name]: e.target.value
		})
	}
    
    const calcularEdad = (fechaConsulta, fechaNacimiento) =>{
		let a = moment(fechaConsulta)
		let b = moment(fechaNacimiento)

		let years = a.diff(b, 'year')
		b.add(years, 'years')

		let months = a.diff(b, 'months')
		b.add(months, 'months')

		let days = a.diff(b, 'days')

		return years + " a " + months + " m " + days + " d"
	}

    const datosRe = useIndicaciones(id)

	let tratamiento = ''
	for (let i = 0; i < datosRe.length; i++) {
		tratamiento += (i+1) + '. ' + datosRe[i].nombreMedicina + ':\n- ' + (datosRe[i].indicaciones.replace(/;/g, `\n\n- `)) + '\n\n'
	}

    return (
		<form>
			<div className='NombreEdad'>
				<label><b>Paciente: </b> {datos.nombres_paciente && datos.nombres_paciente}</label>
			</div>
			<div className='NombreEdad'>
				<label><b>Fecha de Consulta: </b>{moment(Hc.fecha).format('DD/MM/YYYY')}
				</label>
			</div>
			<div className='NombreEdad'>
				<label><b>Edad de Consulta: </b>{calcularEdad(Hc.fecha, datos.fecha_nac)}</label>
			</div>
			<div className='NombreEdad'>
				<label><b>Referencia: </b> {datos.referencia && datos.referencia}</label>
			</div>
			<br></br>
			<h3>Anamnesis *</h3>
			<textarea
				rows="3"
				cols="50"
				placeholder="Anámnesis"
				name="anamnesis"
				value={Hc.anamnesis ? Hc.anamnesis : ''}
				onChange={handleChange}
				style={{resize:'none'}}
				readOnly
				></textarea>
			<h3>Examen físico</h3>
			<div className='fila1_Mostrar_HistClinicas'>
				<label>Peso (kg)</label>
				<input id='fila2' placeholder="Peso" type="number" min="0" value={Hc.peso ? Hc.peso : ''} name="peso" onChange={handleChange} readOnly/>
				<label id='f2'>Talla (cm)</label>
				<input placeholder="Talla" type="number" min="0" value={Hc.talla ? Hc.talla : ''} name="talla" onChange={handleChange} readOnly/>	
			</div>
			<div className="fila1_Mostrar_HistClinicas">
				<label>IMC (kg/m2)</label>
				<input id='fila3' placeholder="IMC" type="text" min="0" readOnly = {true} value={Hc.imc ? Hc.imc : ''} name="imc" onChange={handleChange}/>
				<label id='f3'>PC (cm)</label>
				<input placeholder="PC" type="number" min="0" value={Hc.pc ? Hc.pc : ''} name="pc" onChange={handleChange} readOnly/>
			</div>
			<div className='fila1_Mostrar_HistClinicas'>
				<label>FR (Resp/min)</label>
				<input id='fila4' placeholder="FR" type="number" min="0" value={Hc.fr ? Hc.fr : ''} name="fr" onChange={handleChange} readOnly/>
				<label id='f4'>FC (latidos/min)</label>
				<input placeholder="FC" type="number" min="0" value={Hc.fc ? Hc.fc : ''} name="fc" onChange={handleChange} readOnly/>
			</div>
			<div className="fila1_Mostrar_HistClinicas">
				<label>Sat.O2 (%)</label>
				<input id='fila5' placeholder="Sat.O2" type="number" min="0" value={Hc.saturacion ? Hc.saturacion : ''} name="saturacion" onChange={handleChange} readOnly/>
				<label id='f5'>T° (°C)</label>
				<input placeholder="T°" type="number" min="0" value={Hc.temperatura ? Hc.temperatura : ''} name="temperatura" onChange={handleChange} readOnly/>
			</div>
			<div style={{marginTop:'25px'}}>
			<label>Apreciación General</label>
			<textarea rows="3" cols="50" placeholder="Apreciación General" value={Hc.apreciacionG ? Hc.apreciacionG : ''} name="apreciacionG" onChange={handleChange} style={{resize:'none'}} readOnly/>
			</div>
			<label>Piel y TCSC</label>
			<textarea rows="3" cols="50" placeholder="TCSC" value={Hc.tcsc ? Hc.tcsc : ''} name="tcsc" onChange={handleChange} style={{resize:'none'}} readOnly/>
			<label>Ojos</label>
			<textarea rows="3" cols="50" placeholder="Ojos" value={Hc.ojos ? Hc.ojos : ''} name="ojos" onChange={handleChange} style={{resize:'none'}}/>
			<label>Oidos</label>
			<textarea rows="3" cols="50" placeholder="Oídos" value={Hc.oidos ? Hc.oidos : ''} name="oidos" onChange={handleChange} style={{resize:'none'}} readOnly/>
			<label>Orofaringe</label>
			<textarea rows="3" cols="50" placeholder="Orofaringe" value={Hc.orofaringe ? Hc.orofaringe : ''} name="orofaringe" onChange={handleChange} style={{resize:'none'}} readOnly/>
			<label>Aparato CV</label>
			<textarea rows="3" cols="50" placeholder="Aparato CV" value={Hc.aparatoCV ? Hc.aparatoCV : ''} name="aparatoCV" onChange={handleChange} style={{resize:'none'}} readOnly/>
			<label>Aparato resp.</label>
			<textarea rows="3" cols="50" placeholder="Aparato Resp." value={Hc.aparatoResp ? Hc.aparatoResp : ''} name="aparatoResp" onChange={handleChange} style={{resize:'none'}} readOnly/>
			<label>Abdomen</label>
			<textarea rows="3" cols="50" placeholder="Abdomen" value={Hc.abdomen ? Hc.abdomen : ''} name="abdomen" onChange={handleChange} style={{resize:'none'}} readOnly/>
			<label>Aparato GU.</label>
			<textarea rows="3" cols="50" placeholder="Aparato GU" value={Hc.aparatoGU ? Hc.aparatoGU : ''} name="aparatoGU" onChange={handleChange} style={{resize:'none'}} readOnly/>
			<label>Locomotor</label>
			<textarea rows="3" cols="50" placeholder="Locomotor" value={Hc.locomotor ? Hc.locomotor : ''} name="locomotor" onChange={handleChange} style={{resize:'none'}} readOnly/>
			<label>Genitales</label>
                <textarea rows="3" cols="50" placeholder="Genitales" value={Hc.genitales ? Hc.genitales : ''} name="genitales" onChange={handleChange} style={{resize:'none'}} readOnly/>
			<label>Neurológico</label>
			<textarea rows="3" cols="50" placeholder="Neurológico" value={Hc.neurologico ? Hc.neurologico : ''} name="neurologico" onChange={handleChange} style={{resize:'none'}} readOnly/>
			<h3>Diagnóstico</h3>
			<textarea
				rows="3"
				cols="50"
				placeholder="Diagnóstico"
				name="diagnostico"
				value={Hc.diagnostico ? Hc.diagnostico : ''}
				onChange={handleChange}
				style={{resize:'none'}}
				readOnly
			></textarea>
			<h3>Exámenes auxiliares</h3>
			<textarea
				rows="3"
				cols="50"
				placeholder="Ex. auxiliares"
				name="examenesAuxiliares"
				value={Hc.examenesAuxiliares ? Hc.examenesAuxiliares : ''}
				onChange={handleChange}
				style={{resize:'none'}}
				readOnly
			></textarea>
			<h3>Plan Diagnóstico - Terapéutico</h3>
				<textarea
					rows="3"
					cols="50"
					placeholder="Plan Diagnóstico - Terapéutico"
					name="planDiagnosticoTerapeutico"
					value={Hc.planDiagnosticoTerapeutico ? Hc.planDiagnosticoTerapeutico : ''}
					onChange={handleChange}
					style={{resize:'none'}}
					readOnly
				></textarea>
			<h3>Tratamiento</h3>
			<textarea
				rows= {tratamiento ==='' ? '3' : '10'}
				cols="50"
				placeholder="Tratamiento"
				name="tratamiento"
				value={tratamiento}
				onChange={handleChange}
				style={{resize:'none'}}
				readOnly
			></textarea>
		</form>
    )
}

export default MostrarHistoriasClinicas