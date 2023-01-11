// import moment from 'moment'
import React, {useRef} from 'react'
import { Line } from 'react-chartjs-2'
import useHistClinica from '../../hooks/useHistClinica'
import RedireccionAGraficos from './RedireccionAGraficos'
import calcularEdad from './../../functions/calcularEdad'
import pluginGrafico from '../../functions/pluginGrafico'
import useFiliacionUnica from '../../hooks/useFiliacionUnica'
import OpcionesPDF from '../includes/OpcionesPDF'

const GraficoDeCrecimientoTallaEdadNiña0a36 = () => {
	//IMG
	/*var img = new Image()
	img.src = 'https://i.ibb.co/7v8sDB4/Beb-Ni-a.png'*/

	//DATOS
	var datos = []
	let {fechaHistoria, fechaNac, tallaPaciente} = useHistClinica()


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
		datos[meses[i]] = tallaPaciente[i]
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
					//labels: ['Nacimiento', '3 meses', '6 meses', '9 meses', '12 meses', '15 meses', '18 meses', '21 meses', '24 meses', '27 meses', '30 meses', '33 meses', '36 meses'],
					datasets: [
						//DEL PACIENTE
						{
							label: 'Talla',
							//data: [4.2, null, null, 7, null, null, 8, null, null, 10.5, null, null, 12, null, null, 12.4, null, null, null, null, null, null, null, null, null, null, 13, null, null, null, null, null, null, 14, null, null, 15],
							data : datos,
							borderColor : 'turquoise',
							borderWidth: 3,
							spanGaps : true,
							//pointStyle : img,
							pointRadius : 5
						},
						//IDEALES MÍNIMOS
						{
							label: 'Ideal mínimo',
							//data: [3.6, 6, 7.9, 9.3, 10.3, 11.1, 11.7, 12.2, 12.7, 13.1, 13.5, 13.9, 14.3],
							data : [45.09488,null,47.46916,null,50.95701,null,53.62925,null,55.8594,null,57.8047,null,59.54799,null,61.13893,null,62.60993,null,63.98348,null,65.2759,null,66.49948,null,67.66371,null,68.77613,null,69.8428,null,70.86874,null,71.85807,null,72.81433,null,73.74047,null,74.63908,null,75.51237,null,76.36229,null,77.19056,null,77.99868,null,78.78801,null,79.55974,null,80.33998,null,81.11332,null,81.87334,null,82.61506,null,83.33473,null,84.02972,null,84.69837,null,85.33987,null,85.95413,null,86.54167,null,87.10349],
							borderColor : 'rgba(237, 17, 96, 1)',
							borderWidth: 2,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal mínimo 2',
							data: [45.57561, null, 47.96324, null, 51.47996, null, 54.17907, null, 56.43335, null, 58.40032, null, 60.16323, null, 61.77208, null, 63.25958, null, 64.64845, null, 65.9552, null, 67.19226, null, 68.36925, null, 69.4938, null, 70.57207, null, 71.60911, null, 72.60914, null, 73.57571, null, 74.51184, null, 75.42012, null, 76.30282, null, 77.16191, null, 77.9991, null, 78.81595, null, 79.61381, null, 80.39391, null, 81.18804, null, 81.97223, null, 82.74084, null, 83.48951, null, 84.21496, null, 84.91494, null, 85.58809, null, 86.23379, null, 86.85208, null, 87.44359, null, 88.00937],
							borderColor : 'rgba(237, 17, 96, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal mínimo 3',
							data: [46.33934,null,48.74248,null,52.29627,null,55.03144,null,57.31892,null,59.31633,null,61.10726,null,62.7421,null,64.25389,null,65.66559,null,66.99394,null,68.25154,null,69.44814,null,70.59149,null,71.68784,null,72.74233,null,73.75924,null,74.74217,null,75.6942,null,76.61797,null,77.51576,null,78.38958,null,79.2412,null,80.07216,null,80.88385,null,81.67752,null,82.49318,null,83.29459,null,84.07717,null,84.83741,null,85.57273,null,86.28139,null,86.96242,null,87.6155,null,88.24089,null,88.83932,null,89.41196],
							borderColor : 'rgba(237, 17, 96, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal mínimo 4',
							data: [47.68345,null,50.09686,null,53.69078,null,56.47125,null,58.80346,null,60.84386,null,62.6759,null,64.35005,null,65.89952,null,67.34745,null,68.7107,null,70.00202,null,71.23128,null,72.40633,null,73.53349,null,74.61799,null,75.66416,null,76.67568,null,77.65565,null,78.60678,null,79.53138,null,80.4315,null,81.30893,null,82.16525,null,83.00187,null,83.82007,null,84.67209,null,85.5036,null,86.31151,null,87.09346,null,87.84783,null,88.57362,null,89.27042,null,89.93835,null,90.57795,null,91.1902,null,91.77639],
							borderColor : 'rgba(237, 17, 96, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						//IDEAL
						{
							label : 'Ideal',
							data: [49.2864,null,51.68358,null,55.28613,null,58.09382,null,60.45981,null,62.5367,null,64.40633,null,66.11842,null,67.70574,null,69.19124,null,70.59164,null,71.91962,null,73.18501,null,74.39564,null,75.55785,null,76.67686,null,77.75701,null,78.80198,null,79.81492,null,80.79852,null,81.75512,null,82.68679,null,83.59532,null,84.48233,null,85.34924,null,86.19732,null,87.09026,null,87.95714,null,88.79602,null,89.60551,null,90.38477,null,91.13342,null,91.85154,null,92.53964,null,93.19854,null,93.82945,null,94.43382],
							borderColor : 'rgba(119, 185, 0, 1)',
							borderWidth: 3,
							spanGaps : true,
							pointRadius : 0
						},
						//IDEALES MÁXIMOS
						{
							label : 'Ideal máximo',
							data: [51.0187,null,53.36362,null,56.93136,null,59.74045,null,62.1233,null,64.22507,null,66.12418,null,67.8685,null,69.48975,null,71.01019,null,72.44614,null,73.80997,null,75.11133,null,76.35791,null,77.55594,null,78.71058,null,79.82613,null,80.90623,null,81.95399,null,82.97211,null,83.96292,null,84.92846,null,85.87054,null,86.79077,null,87.69056,null,88.57121,null,89.50562,null,90.40982,null,91.28258,null,92.12313,null,92.93113,null,93.70662,null,94.45005,null,95.16218,null,95.84411,null,96.49721,null,97.12307],
							borderColor : 'rgba(237, 17, 96, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal máximo 2',
							data: [52.7025,null,54.96222,null,58.45612,null,61.24306,null,63.62648,null,65.74096,null,67.65995,null,69.42868,null,71.07731,null,72.62711,null,74.09378,null,75.48923,null,76.82282,null,78.10202,null,79.3329,null,80.5205,null,81.66903,null,82.78208,null,83.86269,null,84.91353,null,85.93689,null,86.93481,null,87.90908,null,88.86127,null,89.79282,null,90.70499,null,91.67718,null,92.61658,null,93.52227,null,94.39371,null,95.23082,null,96.03385,null,96.80343,null,97.54052,null,98.24636,null,98.92246,null,99.57056],
							borderColor : 'rgba(237, 17, 96, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal máximo 3',
							data: [53.77291, null, 55.96094, null, 59.38911, null, 62.15166, null, 64.52875, null, 66.64653, null, 68.57452, null, 70.35587, null, 72.01952, null, 73.58601, null, 75.0705, null, 76.4846, null, 77.83742, null, 79.13625, null, 80.38705, null, 81.59475, null, 82.7635, null, 83.89683, null, 84.99774, null, 86.06887, null, 87.11249, null, 88.13061, null, 89.125, null, 90.09723, null, 91.04873, null, 91.98074, null, 92.97574, null, 93.93693, null, 94.86339, null, 95.75464, null, 96.61061, null, 97.43164, null, 98.2184, null, 98.97193, null, 99.69353, null, 100.3848, null, 101.0475],
							borderColor : 'rgba(237, 17, 96, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal máximo 4',
							data: [54.49527,null,56.62728,null,60.00338,null,62.74547,null,65.11577,null,67.23398,null,69.16668,null,70.95545,null,72.62835,null,74.20532,null,75.70118,null,77.12729,null,78.49257,null,79.80419,null,81.06801,null,82.28891,null,83.47098,null,84.6177,null,85.73205,null,86.81663,null,87.8737,null,88.90526,null,89.91305,null,90.89866,null,91.86347,null,92.80876,null,93.81864,null,94.79426,null,95.73464,null,96.63928,null,97.50808,null,98.34139,null,99.13993,null,99.90473,null,100.6372,null,101.3388,null,102.0116],
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
						text : 'Gráfica de Crecimiento Talla - Edad  (0 a 36 meses)',
						color : '#ED1160',
						font : {
							size : 20
						}
					},
					legend : {
						display : false
					},
					tooltip : {
						enabled : true
					}
				},
				scales: {
					y: {
						title : {
							display : true,
							text : 'TALLA (CM)',
							color : '#ED1160'
						},
						suggestedMin: 40,
						ticks: {
							stepSize: 5,
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
		<div>
			<RedireccionAGraficos/>
		</div>
		</div>
	</>
  )
}

export default GraficoDeCrecimientoTallaEdadNiña0a36