// import moment from 'moment'
import React, {useRef} from 'react'
import { Line } from 'react-chartjs-2'
import useHistClinica from '../../hooks/useHistClinica'
import RedireccionAGraficos from './RedireccionAGraficos'
import calcularEdad from './../../functions/calcularEdad'
import pluginGrafico from '../../functions/pluginGrafico'
import useFiliacionUnica from '../../hooks/useFiliacionUnica'
import OpcionesPDF from '../includes/OpcionesPDF'

const GraficoDeCrecimientoPesoEdadNiña0a36 = () => {
	//IMG
	/*var img = new Image()
	img.src = 'https://i.ibb.co/7v8sDB4/Beb-Ni-a.png'*/

	//DATOS
	var datos = []
	let {fechaHistoria, fechaNac, pesoPaciente} = useHistClinica()

	let meses = [] 

	for (let item in fechaHistoria){
		let {years, months, days} = calcularEdad(fechaHistoria[item], fechaNac[0])
		if(years*12 + months <= 36){
			if(days > 15){
				meses[item] = (years*12 + months) * 2 + 1
			}
			else{
				meses[item] = (years*12 + months) * 2
			}
		}
	}

	for (var i = 0; i<meses.length; i++){
		datos[meses[i]] = pesoPaciente[i]
	}
	//PARA EXPORTAR
	const ref = useRef(null);
	const grafico = ref.current;

	//Extrayendo datos de paciente
	const datosPaciente = useFiliacionUnica()

  return (
	<>
		{(grafico && datosPaciente) && (
			<div style={{display: 'flex', justifyContent: 'right'}}>
				<OpcionesPDF grafico={grafico} datosPaciente={datosPaciente}/>
			</div>
		)}
		<div className='graficosDeCrecimiento'>
			<Line
				ref={ref}
				data={
					{
						labels: ['Nac', '', '1', '', '2', '', '3', '', '4', '', '5', '', '6', '', '7', '', '8', '', '9', '', '10', '', '11', '', '12', '', '13', '', '14', '', '15', '', '16', '', '17', '', '18', '', '19', '', '20', '', '21', '', '22', '', '23', '', '24', '', '25', '', '26', '', '27', '', '28', '', '29', '', '30', '', '31', '', '32', '', '33', '', '34', '', '35', '', '36'],
						datasets: [		
							//DEL PACIENTE
							{
								label: 'Peso',
								data : datos,
								borderColor : 'turquoise',
								borderWidth: 3,
								spanGaps : true,
								//pointStyle : img,
								pointRadius : 5,
							},		
							//IDEALES MÍNIMOS
							{
								label: 'Ideal mínimo',
								data : [2.756917,null,3.402293,null,3.997806,null,4.547383,null,5.054539,null,5.5225,null,5.954272,null,6.352668,null,6.720328,null,7.059732,null,7.373212,null,7.662959,null,7.93103,null,8.179356,null,8.409744,null,8.623887,null,8.82337,null,9.009668,null,9.18416,null,9.348127,null,9.50276,null,9.649162,null,9.788355,null,9.921281,null,10.04881,null,10.17173,null,10.29079,null,10.40664,null,10.5199,null,10.63112,null,10.74078,null,10.84935,null,10.95722,null,11.06475,null,11.17225,null,11.28,null,11.33404],
								borderColor : 'rgba(237, 17, 96, 1)',
								borderWidth: 2,
								spanGaps : true,
								pointRadius : 0,
							},
							{
								label : 'Ideal mínimo 2',
								data: [2.894442, null, 3.54761, null, 4.150639, null, 4.707123, null, 5.220488, null, 5.693974, null, 6.130641, null, 6.533373, null, 6.904886, null, 7.247736, null, 7.564327, null, 7.856916, null, 8.127621, null, 8.378425, null, 8.611186, null, 8.827638, null, 9.029399, null, 9.21798, null, 9.394782, null, 9.56111, null, 9.71817, null, 9.867081, null, 10.00887, null, 10.1445, null, 10.27483, null, 10.40066, null, 10.52274, null, 10.64171, null, 10.75819, null, 10.87273, null, 10.98581, null, 11.09789, null, 11.20934, null, 11.32054, null, 11.43177, null, 11.54332, null, 11.59929],
								borderColor : 'rgba(237, 17, 96, 1)',
								borderWidth: 1,
								spanGaps : true,
								pointRadius : 0
							},
							{
								label : 'Ideal mínimo 3',
								data: [3.101767,null,3.770157,null,4.387042,null,4.955926,null,5.480295,null,5.96351,null,6.408775,null,6.819122,null,7.197414,null,7.546342,null,7.868436,null,8.166069,null,8.44146,null,8.696684,null,8.93368,null,9.154251,null,9.360079,null,9.552723,null,9.73363,null,9.90414,null,10.06549,null,10.21882,null,10.36518,null,10.50553,null,10.64076,null,10.77167,null,10.89899,null,11.02338,null,11.14545,null,11.26575,null,11.38474,null,11.50288,null,11.62054,null,11.73806,null,11.85574,null,11.97384,null,12.03312],
								borderColor : 'rgba(237, 17, 96, 1)',
								borderWidth: 1,
								spanGaps : true,
								pointRadius : 0
							},
							{
								label : 'Ideal mínimo 4',
								data: [3.437628,null,4.138994,null,4.78482,null,5.379141,null,5.925888,null,6.428828,null,6.891533,null,7.317373,null,7.709516,null,8.070932,null,8.4044,null,8.712513,null,8.997692,null,9.262185,null,9.508085,null,9.737329,null,9.951715,null,10.1529,null,10.34241,null,10.52167,null,10.69196,null,10.85446,null,11.01027,null,11.16037,null,11.30567,null,11.44697,null,11.58501,null,11.72047,null,11.85392,null,11.98592,null,12.11692,null,12.24735,null,12.37757,null,12.50791,null,12.63865,null,12.77001,null,12.836],
								borderColor : 'rgba(237, 17, 96, 1)',
								borderWidth: 1,
								spanGaps : true,
								pointRadius : 0
							},
							//IDEAL
							{
								label : 'Ideal',
								data: [3.797528,null,4.544777,null,5.230584,null,5.859961,null,6.437588,null,6.96785,null,7.454854,null,7.902436,null,8.314178,null,8.693418,null,9.043262,null,9.366594,null,9.666089,null,9.944226,null,10.20329,null,10.44541,null,10.67251,null,10.88639,null,11.08868,null,11.2809,null,11.4644,null,11.64043,null,11.81014,null,11.97454,null,12.13456,null,12.29102,null,12.44469,null,12.59622,null,12.74621,null,12.89517,null,13.04357,null,13.19181,null,13.34023,null,13.48913,null,13.63877,null,13.78937,null,13.86507],
								borderColor : 'rgba(119, 185, 0, 1)',
								borderWidth: 3,
								spanGaps : true,
								pointRadius : 0
							},
							//IDEALES MÁXIMOS
							{
								label : 'Ideal máximo',
								data: [4.145594,null,4.946766,null,5.680083,null,6.351512,null,6.966524,null,7.53018,null,8.047178,null,8.521877,null,8.958324,null,9.360271,null,9.731193,null,10.07431,null,10.39258,null,10.68874,null,10.96532,null,11.22463,null,11.46878,null,11.69972,null,11.91921,null,12.12887,null,12.33016,null,12.52439,null,12.71277,null,12.89636,null,13.07613,null,13.25293,null,13.42753,null,13.60059,null,13.77271,null,13.9444,null,14.11611,null,14.28822,null,14.46106,null,14.63491,null,14.80998,null,14.98647,null,15.07529],
								borderColor : 'rgba(237, 17, 96, 1)',
								borderWidth: 1,
								spanGaps : true,
								pointRadius : 0
							},
							{
								label : 'Ideal máximo 2',
								data: [4.450126,null,5.305632,null,6.087641,null,6.80277,null,7.457119,null,8.056331,null,8.605636,null,9.109878,null,9.573546,null,10.00079,null,10.39545,null,10.76106,null,11.10089,null,11.41792,null,11.71491,null,11.99438,null,12.25862,null,12.50974,null,12.74964,null,12.98004,null,13.2025,null,13.41844,null,13.62911,null,13.83564,null,14.03902,null,14.24017,null,14.43984,null,14.63873,null,14.83743,null,15.03646,null,15.23626,null,15.43719,null,15.63957,null,15.84365,null,16.04963,null,16.25767,null,16.3625],
								borderColor : 'rgba(237, 17, 96, 1)',
								borderWidth: 1,
								spanGaps : true,
								pointRadius : 0
							},
							{
								label : 'Ideal máximo 3',
								data: [4.628836, null, 5.519169, null, 6.332837, null, 7.076723, null, 7.757234, null, 8.38033, null, 8.951544, null, 9.476009, null, 9.95848, null, 10.40335, null, 10.8147, null, 11.19625, null, 11.55145, null, 11.88348, null, 12.19522, null, 12.48934, null, 12.76825, null, 13.03415, null, 13.28904, null, 13.53473, null, 13.77284, null, 14.00484, null, 14.23205, null, 14.45561, null, 14.67659, null, 14.89587, null, 15.11428, null, 15.33249, null, 15.55113, null, 15.7707, null, 15.99164, null, 16.21432, null, 16.43904, null, 16.66605, null, 16.89553, null, 17.12762, null, 17.24469],
								borderColor : 'rgba(237, 17, 96, 1)',
								borderWidth: 1,
								spanGaps : true,
								pointRadius : 0
							},
							{
								label : 'Ideal máximo 4',
								data: [4.743582,null,5.657379,null,6.492574,null,7.256166,null,7.95473,null,8.594413,null,9.180938,null,9.719621,null,10.21539,null,10.6728,null,11.09607,null,11.48908,null,11.85539,null,12.19829,null,12.52078,null,12.82561,null,13.11527,null,13.39204,null,13.65799,null,13.91497,null,14.16467,null,14.40858,null,14.64807,null,14.88432,null,15.11839,null,15.35122,null,15.58363,null,15.81632,null,16.0499,null,16.28491,null,16.52176,null,16.76085,null,17.00245,null,17.24681,null,17.49412,null,17.7445,null,17.87089],
								borderColor : 'rgba(237, 17, 96, 1)',
								borderWidth: 2,
								spanGaps : true,
								pointRadius : 0
							}
						],
					}
				}
				plugins = {[pluginGrafico()]}
				options = {{
					responsive : true,
					maintainAspectRatio: false,
					plugins : {
						title : {
							display : true,
							text : 'Gráfica de Crecimiento Peso - Edad (0 a 36 meses)',
							color : '#ED1160',
							font : {
								size : 20
							}
						},
						legend : {
							display : false,
							title: {
								fillStyle: 'white'
							}
						},
						tooltip : {
							enabled : true
						}
					},
					scales: {
						y: {
							title : {
								display : true,
								text : 'PESO (KG)',
								color : '#ED1160'
							},
							suggestedMin: 0,
							ticks: {
								stepSize: 1,
								color : '#ED1160'
							}
						},
						x: {
							title : {
								display : true,
								text : 'EDAD (MESES)',
								color : '#ED1160'
							},
							ticks: {
								color : '#ED1160',
								autoSkip : false,
								maxRotation: 0,
								minRotation: 0
							}
						}
					}
				}}
				/>
		{/* {(grafico && datosPaciente) && <ImprimirGrafico grafico={grafico} datosPaciente={datosPaciente}/>}
		{(grafico && datosPaciente) && <DescargarGrafico grafico={grafico} datosPaciente={datosPaciente}/>} */}
		{/* <button onClick={imprimirIMG}>PRINT</button> */}
		<div>
			<RedireccionAGraficos/>
		</div>
		</div>
	</>
  )
}

export default GraficoDeCrecimientoPesoEdadNiña0a36