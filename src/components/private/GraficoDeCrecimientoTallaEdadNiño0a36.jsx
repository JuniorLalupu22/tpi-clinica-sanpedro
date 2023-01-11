// import moment from 'moment'
import React, {useRef} from 'react'
import { Line } from 'react-chartjs-2'
import useHistClinica from '../../hooks/useHistClinica'
import RedireccionAGraficos from './RedireccionAGraficos'
import calcularEdad from './../../functions/calcularEdad'
import pluginGrafico from '../../functions/pluginGrafico'
import useFiliacionUnica from '../../hooks/useFiliacionUnica'
import OpcionesPDF from '../includes/OpcionesPDF'

const GraficoDeCrecimientoTallaEdadNiño0a36 = () => {
	//IMG
	/*var img = new Image()
	img.src = 'https://i.ibb.co/PhTX54W/Beb-Ni-o.png'*/

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
							borderColor : 'red',
							borderWidth: 3,
							spanGaps : true,
							//pointStyle : img,
							pointRadius : 5
						},
						//IDEALES MÍNIMOS
						{
							label: 'Ideal mínimo',
							//data: [3.6, 6, 7.9, 9.3, 10.3, 11.1, 11.7, 12.2, 12.7, 13.1, 13.5, 13.9, 14.3],
							data : [44.9251, null, 47.97812, null, 52.19859, null, 55.26322, null, 57.73049, null, 59.82569, null, 61.66384, null, 63.31224, null, 64.81395, null, 66.19833, null, 67.48635, null, 68.6936, null, 69.832, null, 70.91088, null, 71.9377, null, 72.91853, null, 73.85839, null, 74.76147, null, 75.63132, null, 76.47096, null, 77.283, null, 78.06971, null, 78.83308, null, 79.57485, null, 80.29656, null, 80.99959, null, 81.74464, null, 82.47365, null, 83.18812, null, 83.88931, null, 84.57826, null, 85.25589, null, 85.92294, null, 86.58009, null, 87.22791, null, 87.86696, null, 88.49774],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 2,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal mínimo 2',
							//data: [45, null, null, null, null, null, 56.5, null, null, null, null, null, 62.5, null, null, null, null, null, 67, null, null, null, null, null, 70.5, null, null, null, null, null, 73.5, null, null, null, null, null, 76, null, null, null, null, null, 78.5, null, null, null, null, null, 80.9, null, null, null, null, null, 83, null, null, null, null, null, 85, null, null, null, null, null, 87, null, null, null, null, null, 89],
							data : [45.56841, null, 48.55809, null, 52.72611, null, 55.77345, null, 58.23744, null, 60.33647, null, 62.18261, null, 63.84166, null, 65.35584, null, 66.75398, null, 68.05675, null, 69.27949, null, 70.43397, null, 71.52941, null, 72.57318, null, 73.5713, null, 74.52871, null, 75.44958, null, 76.33742, null, 77.19523, null, 78.0256, null, 78.83077, null, 79.61271, null, 80.37315, null, 81.11363, null, 81.83552, null, 82.58135, null, 83.31105, null, 84.02609, null, 84.72769, null, 85.41688, null, 86.09452, null, 86.76134, null, 87.41799, null, 88.06503, null, 88.70301, null, 89.33242],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal mínimo 3',
							//data: [45, null, null, null, null, null, 56.5, null, null, null, null, null, 62.5, null, null, null, null, null, 67, null, null, null, null, null, 70.5, null, null, null, null, null, 73.5, null, null, null, null, null, 76, null, null, null, null, null, 78.5, null, null, null, null, null, 80.9, null, null, null, null, null, 83, null, null, null, null, null, 85, null, null, null, null, null, 87, null, null, null, null, null, 89],
							data : [46.55429, null, 49.4578, null, 53.55365, null, 56.57772, null, 59.0383, null, 61.1441, null, 63.00296, null, 64.67854, null, 66.21181, null, 67.63088, null, 68.95591, null, 70.20192, null, 71.38046, null, 72.50055, null, 73.56946, null, 74.59309, null, 75.57634, null, 76.5233, null, 77.43742, null, 78.32168, null, 79.17863, null, 80.01048, null, 80.81919, null, 81.60646, null, 82.37381, null, 83.12259, null, 83.87245, null, 84.60576, null, 85.32399, null, 86.02833, null, 86.71978, null, 87.39917, null, 88.06723, null, 88.72457, null, 89.37177, null, 90.00937, null, 90.63786],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal mínimo 4',
							data: [48.18937, null, 50.97919, null, 54.9791, null, 57.9744, null, 60.43433, null, 62.55409, null, 64.43546, null, 66.13896, null, 67.70375, null, 69.15682, null, 70.51761, null, 71.80065, null, 73.01712, null, 74.17581, null, 75.2838, null, 76.34685, null, 77.36973, null, 78.35646, null, 79.31042, null, 80.23453, null, 81.13131, null, 82.00292, null, 82.85129, null, 83.67811, null, 84.48487, null, 85.2729, null, 86.03703, null, 86.78329, null, 87.51317, null, 88.22788, null, 88.9284, null, 89.6156, null, 90.2902, null, 90.95287, null, 91.60421, null, 92.24482, null, 92.87525],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						//IDEAL
						{
							label : 'Ideal',
							data: [49.98888, null, 52.69598, null, 56.62843, null, 59.60895, null, 62.077, null, 64.21686, null, 66.12531, null, 67.86018, null, 69.45908, null, 70.94804, null, 72.34586, null, 73.66665, null, 74.9213, null, 76.11838, null, 77.2648, null, 78.36622, null, 79.42734, null, 80.45209, null, 81.44384, null, 82.40544, null, 83.33938, null, 84.24783, null, 85.1327, null, 85.99565, null, 86.83818, null, 87.66161, null, 88.45247, null, 89.22326, null, 89.97549, null, 90.71041, null, 91.42908, null, 92.13242, null, 92.82127, null, 93.49638, null, 94.15847, null, 94.80823, null, 95.44637],
							borderColor : 'rgba(119, 185, 0, 1)',
							borderWidth: 3,
							spanGaps : true,
							pointRadius : 0
						},
						//IDEALES MÁXIMOS
						{
							label : 'Ideal máximo',
							data: [51.77126, null, 54.44054, null, 58.35059, null, 61.33788, null, 63.82543, null, 65.99131, null, 67.92935, null, 69.69579, null, 71.32735, null, 72.84947, null, 74.2806, null, 75.63462, null, 76.92224, null, 78.15196, null, 79.33061, null, 80.4638, null, 81.5562, null, 82.61174, null, 83.63377, null, 84.62515, null, 85.58837, null, 86.52562, null, 87.43879, null, 88.32957, null, 89.19948, null, 90.04985, null, 90.8787, null, 91.68468, null, 92.46929, null, 93.23385, null, 93.97951, null, 94.70732, null, 95.41824, null, 96.11319, null, 96.79307, null, 97.45873, null, 98.11108],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal máximo 2',
							data: [53.36153, null, 56.03444, null, 59.9664, null, 62.98158, null, 65.49858, null, 67.69405, null, 69.66122, null, 71.45609, null, 73.11525, null, 74.6641, null, 76.1211, null, 77.50016, null, 78.81202, null, 80.0652, null, 81.2666, null, 82.42185, null, 83.53568, null, 84.61204, null, 85.65431, null, 86.66541, null, 87.64786, null, 88.60385, null, 89.53533, null, 90.44402, null, 91.33143, null, 92.19893, null, 93.07143, null, 93.91817, null, 94.74064, null, 95.54016, null, 96.318, null, 97.07531, null, 97.81324, null, 98.53287, null, 99.23531, null, 99.92162, null, 100.5929],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal máximo 3',
							data: [54.30721, null, 56.99908, null, 60.96465, null, 64.00789, null, 66.54889, null, 68.76538, null, 70.75128, null, 72.56307, null, 74.23767, null, 75.80074, null, 77.27095, null, 78.66234, null, 79.98578, null, 81.2499, null, 82.46167, null, 83.6268, null, 84.75006, null, 85.83547, null, 86.88645, null, 87.90595, null, 88.89652, null, 89.86038, null, 90.79951, null, 91.71563, null, 92.61031, null, 93.48491, null, 94.38775, null, 95.263, null, 96.1121, null, 96.93639, null, 97.73717, null, 98.51569, null, 99.27318, null, 100.0109, null, 100.73, null, 101.4318, null, 102.1174],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal máximo 4',
							data: [54.919, null, 57.62984, null, 61.62591, null, 64.69241, null, 67.2519, null, 69.48354, null, 71.48218, null, 73.30488, null, 74.98899, null, 76.56047, null, 78.03819, null, 79.43637, null, 80.76602, null, 82.03585, null, 83.25292, null, 84.42302, null, 85.55095, null, 86.64078, null, 87.69597, null, 88.7195, null, 89.71393, null, 90.68153, null, 91.62428, null, 92.54392, null, 93.44203, null, 94.31998, null, 95.24419, null, 96.13962, null, 97.00763, null, 97.84957, null, 98.66677, null, 99.46052, null, 100.2321, null, 100.9829, null, 101.7142, null, 102.4274, null, 103.1237],
							borderColor : 'rgba(1, 97, 170, 1)',
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
						text : 'Gráfica de Crecimiento Talla - Edad (0 a 36 meses)',
						color : '#0161AA',
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
							color : '#0161AA'
						},
						suggestedMin: 40,
						ticks: {
							stepSize: 5,
							color : '#0161AA'
						}
					},
					x: {
						title : {
							display : true,
							text : 'EDAD (MESES)',
							color : '#0161AA'
						},
						ticks: {
							color : '#0161AA',
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

export default GraficoDeCrecimientoTallaEdadNiño0a36