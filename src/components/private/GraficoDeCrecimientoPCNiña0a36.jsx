// import moment from 'moment'
import React, {useRef} from 'react'
import { Line } from 'react-chartjs-2'
import useHistClinica from '../../hooks/useHistClinica'
import RedireccionAGraficos from './RedireccionAGraficos'
import calcularEdad from './../../functions/calcularEdad'
import pluginGrafico from '../../functions/pluginGrafico'
import useFiliacionUnica from '../../hooks/useFiliacionUnica'
import OpcionesPDF from '../includes/OpcionesPDF'

const GraficoDeCrecimientoPCNiña0a36 = () => {
	//IMG
	/*var img = new Image()
	img.src = 'https://i.ibb.co/7v8sDB4/Beb-Ni-a.png'*/

	//DATOS
	var datos = []
	let {fechaHistoria, fechaNac, pcPaciente} = useHistClinica()


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
		datos[meses[i]] = pcPaciente[i]
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
							pointRadius : 5
						},		
						//IDEALES MÍNIMOS
						{
							label: 'Ideal mínimo',
							data : [31.9302, null, 33.38071, null, 35.48627, null, 36.9855, null, 38.13114, null, 39.04619, null, 39.7996, null, 40.43379, null, 40.97672, null, 41.44768, null, 41.86058, null, 42.22575, null, 42.55105, null, 42.8426, null, 43.10526, null, 43.34294, null, 43.55883, null, 43.75558, null, 43.93539, null, 44.10013, null, 44.25137, null, 44.39047, null, 44.51861, null, 44.6368, null, 44.74593, null, 44.84678, null, 44.94005, null, 45.02634, null, 45.1062, null, 45.18011, null, 45.24852, null, 45.31181, null, 45.37035, null, 45.42444, null, 45.4744, null, 45.52047, null, 45.56291, null, 45.58284],
							borderColor : 'rgba(237, 17, 96, 1)',
							borderWidth: 2,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal mínimo 2',
							data: [32.2509, null, 33.68744, null, 35.7756, null, 37.26522, null, 38.40561, null, 39.31814, null, 40.07086, null, 40.70567, null, 41.25016, null, 41.7234, null, 42.13913, null, 42.50755, null, 42.83643, null, 43.13182, null, 43.39853, null, 43.64042, null, 43.86066, null, 44.06186, null, 44.2462, null, 44.41553, null, 44.57142, null, 44.71521, null, 44.84806, null, 44.97099, null, 45.08487, null, 45.19047, null, 45.2885, null, 45.37954, null, 45.46415, null, 45.5428, null, 45.61594, null, 45.68394, null, 45.74718, null, 45.80596, null, 45.86058, null, 45.9113, null, 45.95837, null, 45.98061],
							borderColor : 'rgba(237, 17, 96, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal mínimo 3',
							data: [32.75949, null, 34.17346, null, 36.23326, null, 37.70685, null, 38.83814, null, 39.74588, null, 40.49672, null, 41.13171, null, 41.67787, null, 42.15391, null, 42.5733, null, 42.94604, null, 43.27977, null, 43.58043, null, 43.85274, null, 44.1005, null, 44.32682, null, 44.53428, null, 44.72501, null, 44.90085, null, 45.06333, null, 45.21378, null, 45.35334, null, 45.48301, null, 45.60367, null, 45.71608, null, 45.82092, null, 45.91878, null, 46.01021, null, 46.09568, null, 46.17562, null, 46.25043, null, 46.32044, null, 46.38599, null, 46.44736, null, 46.50481, null, 46.55859, null, 46.58417],
							borderColor : 'rgba(237, 17, 96, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal mínimo 4',
							data: [33.65187, null, 35.02508, null, 37.03282, null, 38.47603, null, 39.58905, null, 40.48611, null, 41.23136, null, 41.86435, null, 42.41113, null, 42.88978, null, 43.31329, null, 43.69135, null, 44.03133, null, 44.33899, null, 44.61891, null, 44.87476, null, 45.10959, null, 45.32587, null, 45.5257, null, 45.71086, null, 45.88284, null, 46.04295, null, 46.19229, null, 46.33184, null, 46.46246, null, 46.58489, null, 46.6998, null, 46.80778, null, 46.90935, null, 47.00499, null, 47.09511, null, 47.18009, null, 47.2603, null, 47.33603, null, 47.40757, null, 47.47518, null, 47.53911, null, 47.56976],
							borderColor : 'rgba(237, 17, 96, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						//IDEAL
						{
							label : 'Ideal',
							data: [34.71156, null, 36.03454, null, 37.97672, null, 39.38013, null, 40.46774, null, 41.34841, null, 42.08335, null, 42.71034, null, 43.25429, null, 43.7325, null, 44.15743, null, 44.53837, null, 44.88241, null, 45.19508, null, 45.48078, null, 45.74308, null, 45.98487, null, 46.20858, null, 46.41622, null, 46.6095, null, 46.78989, null, 46.95863, null, 47.11681, null, 47.26538, null, 47.40516, null, 47.53688, null, 47.66118, null, 47.77865, null, 47.88979, null, 47.99506, null, 48.09488, null, 48.18961, null, 48.2796, null, 48.36515, null, 48.44654, null, 48.52402, null, 48.59783, null, 48.63342],
							borderColor : 'rgba(119, 185, 0, 1)',
							borderWidth: 3,
							spanGaps : true,
							pointRadius : 0
						},
						//IDEALES MÁXIMOS
						{
							label : 'Ideal máximo',
							data: [35.85124, null, 37.11807, null, 38.98533, null, 40.34145, null, 41.39732, null, 42.25604, null, 42.97566, null, 43.59207, null, 44.12897, null, 44.60282, null, 45.0255, null, 45.40587, null, 45.75072, null, 46.06532, null, 46.3539, null, 46.61986, null, 46.86599, null, 47.0946, null, 47.30765, null, 47.50676, null, 47.69335, null, 47.86861, null, 48.0336, null, 48.18923, null, 48.33629, null, 48.47548, null, 48.60743, null, 48.7327, null, 48.85178, null, 48.9651, null, 49.07308, null, 49.17607, null, 49.2744, null, 49.36836, null, 49.45823, null, 49.54425, null, 49.62665, null, 49.66656],
							borderColor : 'rgba(237, 17, 96, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal máximo 2',
							data: [36.9535, null, 38.16405, null, 39.95459, null, 41.26063, null, 42.28153, null, 43.11489, null, 43.81575, null, 44.41815, null, 44.94461, null, 45.41078, null, 45.82799, null, 46.20466, null, 46.54726, null, 46.86084, null, 47.14942, null, 47.41624, null, 47.66399, null, 47.89487, null, 48.11074, null, 48.31317, null, 48.50351, null, 48.6829, null, 48.85236, null, 49.01276, null, 49.16486, null, 49.30933, null, 49.44677, null, 49.57773, null, 49.70266, null, 49.822, null, 49.93613, null, 50.0454, null, 50.15012, null, 50.25058, null, 50.34704, null, 50.43974, null, 50.52889, null, 50.5722],
							borderColor : 'rgba(237, 17, 96, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal máximo 3',
							data: [37.65138, null, 38.82535, null, 40.56517, null, 41.83732, null, 42.83396, null, 43.64924, null, 44.3363, null, 44.92803, null, 45.44619, null, 45.90591, null, 46.31815, null, 46.69106, null, 47.0309, null, 47.34255, null, 47.62991, null, 47.89613, null, 48.1438, null, 48.37505, null, 48.5917, null, 48.79526, null, 48.98703, null, 49.16814, null, 49.33955, null, 49.50211, null, 49.65657, null, 49.80358, null, 49.94373, null, 50.07751, null, 50.20541, null, 50.32783, null, 50.44514, null, 50.55769, null, 50.66578, null, 50.76968, null, 50.86965, null, 50.96593, null, 51.05872, null, 51.10387],
							borderColor : 'rgba(237, 17, 96, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal máximo 4',
							data: [38.1211, null, 39.27006, null, 40.97482, null, 42.22321, null, 43.2026, null, 44.00486, null, 44.68183, null, 45.26563, null, 45.77751, null, 46.23224, null, 46.64053, null, 47.01035, null, 47.3478, null, 47.65766, null, 47.94373, null, 48.20911, null, 48.4563, null, 48.68741, null, 48.90419, null, 49.10814, null, 49.30052, null, 49.48244, null, 49.65484, null, 49.81854, null, 49.97429, null, 50.12271, null, 50.26437, null, 50.39978, null, 50.5294, null, 50.65362, null, 50.77281, null, 50.88731, null, 50.99741, null, 51.10338, null, 51.20547, null, 51.30392, null, 51.39892, null, 51.44519],
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
						text : 'Gráfica de Crecimiento PC - Edad (0 a 36 meses)',
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
							text : 'PERÍMETRO CEFÁLICO (CM)',
							color : '#ED1160'
						},
						suggestedMin: 30,
						ticks: {
							stepSize: 2,
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

export default GraficoDeCrecimientoPCNiña0a36