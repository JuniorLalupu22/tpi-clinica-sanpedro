import React, { useState, useEffect } from 'react';
import '../../sass/Dashboard.sass';
import '../../sass/Vacunas.sass';
import url from '../../keys/backend_keys';
import moment from 'moment';

const Vacunas = ({id}) => {
	const [tiene, setTiene] = useState(false);
	const [vacunas, setVacunas] = useState({});
	const handleChange = (e) => {
		setVacunas({
			...vacunas,
			[e.target.name]: e.target.value,
		});
	};
	// let vacunabcg
	// if(vacunas.fechabcg!==null){
	// 	vacunabcg = moment(moment(vacunas.fechabcg).add(5, 'hours')).format('YYYY-MM-DD')
	// }

	let Dvacunas=[]
	// let { id } = useParams();
	/*for(let i=0; i<vacunas.length; i++){
		if(typeof(vacunas[i])=='date'){
			Dvacunas[i]=vacunas[i]
		}
	}*/
	
	useEffect(() => {
		fetch(`${url}/Vacuna/${id}`)
		.then((resp) => resp.json())
		.then((data) => {
			if (data.length > 0) {
				setVacunas(data[0]);
				setTiene(true);
			}
		});
	}, [id]);

	for(let item in vacunas){
		if(typeof vacunas[item] === 'string'){
			if(vacunas[item].includes('-')){
				Dvacunas[item]=moment(moment(vacunas[item]).add(5, 'hours')).format('YYYY-MM-DD')
			}
		}
	}

	const handleClick = (e) => {
		//alert('click');
		e.preventDefault();
		if (tiene) {
			fetch(`${url}/Vacuna/${vacunas._id}`, {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'PUT',
				body: JSON.stringify(vacunas),
			})
				.then((resp) => resp.json())
				.then((data) => {
					if (data.ok) {
						alert('datos registrados');
					}
				});
		} else {
			fetch(`${url}/Vacuna/new`, {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify({
					...vacunas,
					id_Historia: id,
				}),
			})
				.then((resp) => resp.json())
				.then((data) => {
					if (data.ok) {
						setTiene(true)
						alert('datos registrados');
					}
				});
		}
	};

	return (
		<>
			<div className="list">
				<h2>Listado de Vacunas</h2>
				<form className="contVacuna" style={{width:'95%'}}>
					<div className='vacunas'>
						<div className='title'>RECIÉN NACIDO</div>
						<br />
						<div className='vacunasM'>
							<label>BCG</label>
							<select
								name="bcg"
								id='seleccionar'
								onChange={handleChange}
								value={vacunas.bcg}
								onClick={function(){
									let seleccionar= document.getElementById('seleccionar')
									if(seleccionar.value==='1'){
										document.getElementById('fecha').removeAttribute('disabled')
									}
									else{
										document.getElementById('fecha').setAttribute('disabled', 'disabled')
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechabcg" id='fecha' disabled={true} onChange={handleChange} value={Dvacunas.fechabcg ? Dvacunas.fechabcg : ''} type="date"></input>
							<label>Hepatitis B</label>
							<select
								id='select2'
								name="hepatb"
								value={vacunas.hepatb ? vacunas.hepatb : ''}
								onChange={handleChange}
								onClick={function(){
									let hepatb= document.getElementById('select2')
									if(hepatb.value==='1'){
										document.getElementById('fecha2').disabled=false
									}
									else{
										document.getElementById('fecha2').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechahepatb" id='fecha2' disabled={true} onChange={handleChange} value={Dvacunas.fechahepatb ? Dvacunas.fechahepatb : ''} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>2 MESES</div>
						<br />
						<div className='vacunasM'>
							<label>Hexavalente</label>
							<select
								id='dpt'
								name="dpt"
								value={vacunas.dpt ? vacunas.dpt : ''}
								onChange={handleChange}
								onClick={function(){
									let dpt= document.getElementById('dpt')
									if(dpt.value==='1'){
										document.getElementById('fecha3').disabled=false
									}
									else{
										document.getElementById('fecha3').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechadpt" id='fecha3' disabled={true} onChange={handleChange} value={Dvacunas.fechadpt ? Dvacunas.fechadpt : ''} type="date"></input>
							<label>Neumococo</label>
							<select
								id='neumococo'
								name="neumococo"
								onChange={handleChange}
								value={vacunas.neumococo ? vacunas.neumococo : ''}
								onClick={function(){
									let neumococo= document.getElementById('neumococo')
									if(neumococo.value==='1'){
										document.getElementById('fecha4').disabled=false
									}
									else{
										document.getElementById('fecha4').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechaneumococo" id='fecha4' disabled={true} onChange={handleChange} value={Dvacunas.fechaneumococo ? Dvacunas.fechaneumococo : ''} type="date"></input>
						</div>
						<div className='vacunasM'>
							<label>Rotavirus</label>
							<select
								id='rotavirus'
								name="rotavirus"
								onChange={handleChange}
								value={vacunas.rotavirus ? vacunas.rotavirus : ''}
								onClick={function(){
									let rotavirus= document.getElementById('rotavirus')
									if(rotavirus.value==='1'){
										document.getElementById('fecha5').disabled=false
									}
									else{
										document.getElementById('fecha5').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fecharotavirus" id='fecha5' disabled={true} onChange={handleChange} value={Dvacunas.fecharotavirus ? Dvacunas.fecharotavirus : ''} type="date"></input>
							{/* <label>Hepatitis B</label>
							<select
								id='hepatb2'
								name="hepatb2"
								onChange={handleChange}
								value={vacunas.hepatb2}
								onClick={function(){
									let hepatb2= document.getElementById('hepatb2')
									if(hepatb2.value==='1'){
										document.getElementById('fecha6').disabled=false
									}
									else{
										document.getElementById('fecha6').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechahepatb2" id='fecha6' disabled={true} onChange={handleChange} value={Dvacunas.fechahepatb2} type="date"></input> */}
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>4 MESES</div>
						<br />
						<div className='vacunasM'>
							<label>Hexavalente</label>
							<select
								id='dpt2'	
								name="dpt2"
								onChange={handleChange}
								value={vacunas.dpt2 ? vacunas.dpt2 : ''}
								onClick={function(){
									let dpt2= document.getElementById('dpt2')
									if(dpt2.value==='1'){
										document.getElementById('fecha7').disabled=false
									}
									else{
										document.getElementById('fecha7').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechadpt2" id='fecha7' disabled={true} onChange={handleChange} value={Dvacunas.fechadpt2 ? Dvacunas.fechadpt2 : ''} type="date"></input>
							<label>Neumococo</label>
							<select
								id='neumococo2'
								name="neumococo2"
								onChange={handleChange}
								value={vacunas.neumococo2 ? vacunas.neumococo2 : ''}
								onClick={function(){
									let neumococo2= document.getElementById('neumococo2')
									if(neumococo2.value==='1'){
										document.getElementById('fecha8').disabled=false
									}
									else{
										document.getElementById('fecha8').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechaneumococo2" id='fecha8' disabled={true} onChange={handleChange} value={Dvacunas.fechaneumococo2 ? Dvacunas.fechaneumococo2 : ''} type="date"></input>
						</div>
						<div className='vacunasM'>
							<label>Rotavirus</label>
							<select
								id='rotavirus2'
								name="rotavirus2"
								onChange={handleChange}
								value={vacunas.rotavirus2 ? vacunas.rotavirus2 : ''}
								onClick={function(){
									let rotavirus2= document.getElementById('rotavirus2')
									if(rotavirus2.value==='1'){
										document.getElementById('fecha9').disabled=false
									}
									else{
										document.getElementById('fecha9').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fecharotavirus2" id='fecha9' disabled={true} onChange={handleChange} value={Dvacunas.fecharotavirus2 ? Dvacunas.fecharotavirus2 : ''} type="date"></input>
							{/* <label>Hepatitis B</label>
							<select
								id='hepatb3'
								name="hepatb3"
								onChange={handleChange}
								value={vacunas.hepatb3}
								onClick={function(){
									let hepatb3= document.getElementById('hepatb3')
									if(hepatb3.value==='1'){
										document.getElementById('fecha10').disabled=false
									}
									else{
										document.getElementById('fecha10').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechahepatb3" id='fecha10' disabled={true} onChange={handleChange} value={Dvacunas.fechahepatb3} type="date"></input> */}
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>6 MESES</div>
						<br />
						<div className='vacunasM'>
							<label>Hexavalente</label>
							<select
								id='dpt3'
								name="dpt3"
								value={vacunas.dpt3 ? vacunas.dpt3 : ''}
								onChange={handleChange}
								onClick={function(){
									let dpt3= document.getElementById('dpt3')
									if(dpt3.value==='1'){
										document.getElementById('fecha11').disabled=false
									}
									else{
										document.getElementById('fecha11').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechadpt3" id='fecha11' disabled={true} onChange={handleChange} value={Dvacunas.fechadpt3 ? Dvacunas.fechadpt3 : ''} type="date"></input>
							<label>Neumococo</label>
							<select
								id='neumococo3'
								name="neumococo3"
								onChange={handleChange}
								value={vacunas.neumococo3 ? vacunas.neumococo3 : ''}
								onClick={function(){
									let neumococo3= document.getElementById('neumococo3')
									if(neumococo3.value==='1'){
										document.getElementById('fecha12').disabled=false
									}
									else{
										document.getElementById('fecha12').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechaneumococo3" id='fecha12' disabled={true} onChange={handleChange} value={Dvacunas.fechaneumococo3 ? Dvacunas.fechaneumococo3 : ''} type="date"></input>
						</div>
						<div className='vacunasM'>
							<label>Rotavirus</label>
							<select
								id='rotavirus3'
								name="rotavirus3"
								onChange={handleChange}
								value={vacunas.rotavirus3 ? vacunas.rotavirus3 : ''}
								onClick={function(){
									let rotavirus3= document.getElementById('rotavirus3')
									if(rotavirus3.value==='1'){
										document.getElementById('fecha13').disabled=false
									}
									else{
										document.getElementById('fecha13').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fecharotavirus3" id='fecha13' disabled={true} onChange={handleChange} value={Dvacunas.fecharotavirus3 ? Dvacunas.fecharotavirus3 : ''} type="date"></input>
							{/* <label>Hepatitis B</label>
							<select
								id='hepatb4'
								name="hepatb4"
								onChange={handleChange}
								value={vacunas.hepatb4}
								onClick={function(){
									let hepatb4= document.getElementById('hepatb4')
									if(hepatb4.value==='1'){
										document.getElementById('fecha14').disabled=false
									}
									else{
										document.getElementById('fecha14').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechahepatb4" id='fecha14' disabled={true} onChange={handleChange} value={Dvacunas.fechahepatb4} type="date"></input> */}
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>7 MESES</div>
						<br />
						<div className='vacunasM'>
							<label>Influenza</label>
							<select
								id='influenza'
								name="influenza"
								onChange={handleChange}
								value={vacunas.influenza ? vacunas.influenza : ''}
								onClick={function(){
									let influenza= document.getElementById('influenza')
									if(influenza.value==='1'){
										document.getElementById('fecha15').disabled=false
									}
									else{
										document.getElementById('fecha15').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechainfluenza" id='fecha15' disabled={true} onChange={handleChange} value={Dvacunas.fechainfluenza ? Dvacunas.fechainfluenza : ''} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>8 MESES</div>
						<br />
						<div className='vacunasM'>
							<label>Influenza</label>
							<select
								id='influenza2'
								name="influenza2"
								onChange={handleChange}
								value={vacunas.influenza2 ? vacunas.influenza2 : ''}
								onClick={function(){
									let influenza2= document.getElementById('influenza2')
									if(influenza2.value==='1'){
										document.getElementById('fecha16').disabled=false
									}
									else{
										document.getElementById('fecha16').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechainfluenza2" id='fecha16' disabled={true} onChange={handleChange} value={Dvacunas.fechainfluenza2 ? Dvacunas.fechainfluenza2 : ''} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>9 MESES</div>
						<br />
						<div className='vacunasM'>
							<label>Meningococo</label>
							<select
								id='meningococo'
								name="meningococo"
								value={vacunas.meningococo ? vacunas.meningococo : ''}
								onChange={handleChange}
								onClick={function(){
									let meningococo= document.getElementById('meningococo')
									if(meningococo.value==='1'){
										document.getElementById('fecha17').disabled=false
									}
									else{
										document.getElementById('fecha17').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechameningococo" id='fecha17' disabled={true} onChange={handleChange} value={Dvacunas.fechameningococo ? Dvacunas.fechameningococo : ''} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>1 AÑO</div>
						<br />
						<div className='vacunasM'>
							<label>SPR</label>
							<select
								id='spr'
								name="spr"
								onChange={handleChange}
								value={vacunas.spr ? vacunas.spr : ''}
								onClick={function(){
									let spr= document.getElementById('spr')
									if(spr.value==='1'){
										document.getElementById('fecha18').disabled=false
									}
									else{
										document.getElementById('fecha18').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechaspr" id='fecha18' disabled={true} onChange={handleChange} value={Dvacunas.fechaspr ? Dvacunas.fechaspr : ''} type="date"></input>
							<label>Varicela</label>
							<select
								id='varicela'
								name="varicela"
								onChange={handleChange}
								value={vacunas.varicela ? vacunas.varicela : ''}
								onClick={function(){
									let varicela= document.getElementById('varicela')
									if(varicela.value==='1'){
										document.getElementById('fecha19').disabled=false
									}
									else{
										document.getElementById('fecha19').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechavaricela" id='fecha19' disabled={true} onChange={handleChange} value={Dvacunas.fechavaricela ? Dvacunas.fechavaricela : ''} type="date"></input>
							</div>
							<div className='vacunasM'>
							<label>Meningococo</label>
							<select
								id='meningococo2'
								value={vacunas.meningococo2 ? vacunas.meningococo2 : ''}
								name="meningococo2"
								onChange={handleChange}
								onClick={function(){
									let meningococo2= document.getElementById('meningococo2')
									if(meningococo2.value==='1'){
										document.getElementById('fecha20').disabled=false
									}
									else{
										document.getElementById('fecha20').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechameningococo2" id='fecha20' disabled={true} onChange={handleChange} value={Dvacunas.fechameningococo2 ? Dvacunas.fechameningococo2 : ''} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>1 AÑO y 1 MES</div>
						<br />
						<div className='vacunasM'>
							<label>Hepatitis A</label>
							<select
								id='hepata'
								name="hepata"
								onChange={handleChange}
								value={vacunas.hepata ? vacunas.hepata : ''}
								onClick={function(){
									let hepata= document.getElementById('hepata')
									if(hepata.value==='1'){
										document.getElementById('fecha21').disabled=false
									}
									else{
										document.getElementById('fecha21').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechahepata" id='fecha21' disabled={true} onChange={handleChange} value={Dvacunas.fechahepata ? Dvacunas.fechahepata : ''} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>1 AÑO y 3 MESES</div>
						<br />
						<div className='vacunasM'>
							<label>Fiebre Amarila</label>
							<select
								id='famarilla'
								name="famarilla"
								onChange={handleChange}
								value={vacunas.famarilla ? vacunas.famarilla : ''}
								onClick={function(){
									let famarilla= document.getElementById('famarilla')
									if(famarilla.value==='1'){
										document.getElementById('fecha22').disabled=false
									}
									else{
										document.getElementById('fecha22').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechafamarilla" id='fecha22' disabled={true} onChange={handleChange} value={Dvacunas.fechafamarilla ? Dvacunas.fechafamarilla : ''} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>1 AÑO y 6 MESES</div>
						<br />
						<div className='vacunasM'>
							<label>DPT</label>
							<select
								id='dpt4'
								name="dpt4"
								onChange={handleChange}
								value={vacunas.dpt4 ? vacunas.dpt4 : ''}
								onClick={function(){
									let dpt4= document.getElementById('dpt4')
									if(dpt4.value==='1'){
										document.getElementById('fecha23').disabled=false
									}
									else{
										document.getElementById('fecha23').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechadpt4" id='fecha23' disabled={true} onChange={handleChange} value={Dvacunas.fechadpt4 ? Dvacunas.fechadpt4 : ''} type="date"></input>
							<label>SPR</label>
							<select
								id='spr2'
								name="spr2"
								onChange={handleChange}
								value={vacunas.spr2 ? vacunas.spr2 : ''}
								onClick={function(){
									let spr2= document.getElementById('spr2')
									if(spr2.value==='1'){
										document.getElementById('fecha24').disabled=false
									}
									else{
										document.getElementById('fecha24').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechaspr2" id='fecha24' disabled={true} onChange={handleChange} value={Dvacunas.fechaspr2 ? Dvacunas.fechaspr2 : ''} type="date"></input>
							</div>
							<div className='vacunasM'>
							<label>Varicela</label>
							<select
								id='varicela2'
								value={vacunas.varicela2 ? vacunas.varicela2 : ''}
								name="varicela2"
								onChange={handleChange}
								onClick={function(){
									let varicela2= document.getElementById('varicela2')
									if(varicela2.value==='1'){
										document.getElementById('fecha25').disabled=false
									}
									else{
										document.getElementById('fecha25').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechavaricela2" id='fecha25' disabled={true} onChange={handleChange} value={Dvacunas.fechavaricela2 ? Dvacunas.fechavaricela2 : ''} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>1 AÑO y 7 MESES</div>
						<br />
						<div className='vacunasM'>
							<label>Hepatitis A</label>
							<select
								id='hepata2'
								name="hepata2"
								onChange={handleChange}
								value={vacunas.hepata2 ? vacunas.hepata2 : ''}
								onClick={function(){
									let hepata2= document.getElementById('hepata2')
									if(hepata2.value==='1'){
										document.getElementById('fecha26').disabled=false
									}
									else{
										document.getElementById('fecha26').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechahepata2" id='fecha26' disabled={true} onChange={handleChange} value={Dvacunas.fechahepata2 ? Dvacunas.fechahepata2 : ''} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>2 AÑOs</div>
						<br />
						<div className='vacunasM'>
							<label>Neumococo</label>
							<select
								id='neumococo4'
								value={vacunas.neumococo4 ? vacunas.neumococo4 : ''}
								name="neumococo4"
								onChange={handleChange}
								onClick={function(){
									let neumococo4= document.getElementById('neumococo4')
									if(neumococo4.value==='1'){
										document.getElementById('fecha27').disabled=false
									}
									else{
										document.getElementById('fecha27').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechaneumococo4" id='fecha27' disabled={true} onChange={handleChange} value={Dvacunas.fechaneumococo4 ? Dvacunas.fechaneumococo4 : ''} type="date"></input>
							<label>Influenza</label>
							<select
								id='influenza3'
								value={vacunas.influenza3 ? vacunas.influenza3 : ''}
								name="influenza3"
								onChange={handleChange}
								onClick={function(){
									let influenza3= document.getElementById('influenza3')
									if(influenza3.value==='1'){
										document.getElementById('fecha28').disabled=false
									}
									else{
										document.getElementById('fecha28').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechainfluenza3" id='fecha28' disabled={true} onChange={handleChange} value={Dvacunas.fechainfluenza3 ? Dvacunas.fechainfluenza3 : ''} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>4 AÑOS</div>
						<br />
						<div className='vacunasM'>
							<label>DPT</label>
							<select id='dpt5' name="dpt5" value={vacunas.dpt5 ? vacunas.dpt5 : ''} onChange={handleChange}
							onClick={function(){
									let dpt5= document.getElementById('dpt5')
									if(dpt5.value==='1'){
										document.getElementById('fecha29').disabled=false
									}
									else{
										document.getElementById('fecha29').disabled=true
									}
								}}>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechadpt5" id='fecha29' disabled={true} onChange={handleChange} value={Dvacunas.fechadpt5 ? Dvacunas.fechadpt5 : ''} type="date"></input>
							<label>SPR</label>
							<select
								id='spr3'
								name="spr3"
								onChange={handleChange}
								value={vacunas.spr3 ? vacunas.spr3 : ''}
								onClick={function(){
									let spr3= document.getElementById('spr3')
									if(spr3.value==='1'){
										document.getElementById('fecha30').disabled=false
									}
									else{
										document.getElementById('fecha30').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechaspr3" id='fecha30' disabled={true} onChange={handleChange} value={Dvacunas.fechaspr3 ? Dvacunas.fechaspr3 : ''} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>9 AÑOS</div>
						<br />
						<div className='vacunasM'>
							<label>Papilomavirus</label>
							<select
								id='papilomavirus'
								value={vacunas.papilomavirus ? vacunas.papilomavirus : ''}
								name="papilomavirus"
								onChange={handleChange}
								onClick={function(){
									let papilomavirus= document.getElementById('papilomavirus')
									if(papilomavirus.value==='1'){
										document.getElementById('fecha31').disabled=false
									}
									else{
										document.getElementById('fecha31').disabled=true
									}
								}}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechapapilomavirus" id='fecha31' disabled={true} onChange={handleChange} value={Dvacunas.fechapapilomavirus ? Dvacunas.fechapapilomavirus : ''} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>9 AÑOS y 6 MESES</div>
						<br />
						<div className='vacunasM'>
							<label>Papilomavirus</label>
							<select
								id='papilomavirus2'
								value={vacunas.papilomavirus2 ? vacunas.papilomavirus2 : ''}
								name="papilomavirus2"
								onChange={handleChange}
								onClick={function(){
									let papilomavirus2= document.getElementById('papilomavirus2')
									if(papilomavirus2.value==='1'){
										document.getElementById('fecha32').disabled=false
									}
									else{
										document.getElementById('fecha32').disabled=true
									}
								}}
							>
								<option value="2">No </option>
								<option value="1">Sí</option>
							</select>
							<input name="fechapapilomavirus2" id='fecha32' disabled={true} onChange={handleChange} value={Dvacunas.fechapapilomavirus2 ? Dvacunas.fechapapilomavirus2 : ''} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>OTROS</div>
						<div>
							<textarea
								style={{
									resize: 'none',
									width: '100%'
								}}
								value={vacunas.otros ? vacunas.otros : ''}
								onChange={handleChange}
								name="otros"
								id=""
								cols="20"
								rows="3"
							></textarea>
						</div>
					</div>
					<div>
						<button
							style={{ width: '100%' }}
							onClick={handleClick}
						>
							Actualizar
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Vacunas;
