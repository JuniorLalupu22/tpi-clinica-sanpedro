// import moment from 'moment'
import React, {useRef} from 'react'
import { Line } from 'react-chartjs-2'
import useHistClinica from '../../hooks/useHistClinica'
import RedireccionAGraficos from './RedireccionAGraficos'
import calcularEdad from './../../functions/calcularEdad'
import pluginGrafico from '../../functions/pluginGrafico'
import useFiliacionUnica from '../../hooks/useFiliacionUnica'
import OpcionesPDF from '../includes/OpcionesPDF'

const GraficoDeCrecimientoPCNiño0a36 = () => {
	//IMG
	/*var img = new Image()
	img.src = 'https://i.ibb.co/PhTX54W/Beb-Ni-o.png'*/

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
							borderColor : 'red',
							borderWidth: 3,
							spanGaps : true,
							pointRadius : 5
						},
						//IDEALES MÍNIMOS
						{
							label: 'Ideal mínimo',
							data : [31.48762, null, 33.25006, null, 35.78126, null, 37.5588, null, 38.89944, null, 39.95673, null, 40.81642, null, 41.53109, null, 42.13521, null, 42.65253, null, 43.10009, null, 43.49049, null, 43.83332, null, 44.136, null, 44.40441, null, 44.64328, null, 44.85646, null, 45.04712, null, 45.2179, null, 45.37104, null, 45.50843, null, 45.63169, null, 45.74221, null, 45.84121, null, 45.92974, null, 46.00872, null, 46.07898, null, 46.14124, null, 46.19614, null, 46.24425, null, 46.2861, null, 46.32214, null, 46.3528, null, 46.37844, null, 46.39942, null, 46.41605, null, 46.4286, null, 46.43344],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 2,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label: 'Ideal mínimo 2',
							data : [32.14881, null, 33.83392, null, 36.26428, null, 37.97959, null, 39.27893, null, 40.30766, null, 41.14714, null, 41.84742, null, 42.44134, null, 42.95162, null, 43.39458, null, 43.7823, null, 44.12399, null, 44.42679, null, 44.69639, null, 44.93733, null, 45.15333, null, 45.34746, null, 45.52229, null, 45.67997, null, 45.82234, null, 45.95096, null, 46.06719, null, 46.17221, null, 46.26704, null, 46.35259, null, 46.42963, null, 46.49889, null,46.56098, null, 46.61646, null, 46.66583, null, 46.70954, null, 46.74801, null, 46.78159, null, 46.81061, null, 46.8354, null, 46.85621, null, 46.86521],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal mínimo 3',
							data: [33.08389, null, 34.67253, null, 36.97377, null, 38.60724, null, 39.85123, null, 40.84114, null, 41.65291, null, 42.3333, null, 42.91311, null, 43.41365, null, 43.85025, null, 44.23432, null, 44.57454, null, 44.87767, null, 45.14908, null, 45.3931, null, 45.61325, null, 45.81245, null, 45.99315, null, 46.15739, null, 46.30692, null, 46.44325, null, 46.56767, null, 46.68129, null, 46.78511, null, 46.87997, null, 46.96663, null, 47.04578, null, 47.11801, null, 47.18385, null, 47.24379, null, 47.29824, null, 47.34761, null, 47.39225, null, 47.43247, null, 47.46857, null, 47.50081, null, 47.51556],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal mínimo 4',
							data: [34.46952, null, 35.93987, null, 38.07878, null, 39.60637, null, 40.77713, null, 41.71483, null, 42.48889, null, 43.14204, null, 43.70245, null, 44.18964, null, 44.61764, null, 44.99694, null, 45.33549, null, 45.63952, null, 45.91398, null, 46.16284, null, 46.38937, null, 46.59626, null, 46.78578, null, 46.95981, null, 47.11999, null, 47.26769, null, 47.40413, null, 47.53035, null, 47.64724, null, 47.75563, null, 47.85621, null, 47.94962, null, 48.0364, null, 48.11707, null, 48.19206, null, 48.26178, null, 48.3266, null, 48.38684, null, 48.44281, null, 48.49479, null, 48.54301, null, 48.56578],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						//IDEAL
						{
							label : 'Ideal',
							data: [35.81367, null, 37.19361, null, 39.20743, null, 40.65233, null, 41.76517, null, 42.66116, null, 43.40489, null, 44.0361, null, 44.58097, null, 45.05761, null, 45.47908, null, 45.85506, null, 46.19295, null, 46.49853, null, 46.77638, null, 47.03018, null, 47.26295, null, 47.47721, null, 47.67504, null, 47.85821, null, 48.02822, null, 48.18637, null, 48.33377, null, 48.4714, null, 48.60011, null, 48.72065, null, 48.83367, null, 48.93976, null, 49.03945, null, 49.13321, null, 49.22146, null, 49.30458, null, 49.38292, null, 49.45678, null, 49.52645, null, 49.59218, null, 49.65423, null, 49.68394],
							borderColor : 'rgba(119, 185, 0, 1)',
							borderWidth: 3,
							spanGaps : true,
							pointRadius : 0
						},
						//IDEALES MÁXIMOS
						{
							label : 'Ideal máximo',
							data: [37.00426, null, 38.32125, null, 40.24987, null, 41.63968, null, 42.71455, null, 43.58358, null, 44.30801, null, 44.92555, null, 45.46104, null, 45.93166, null, 46.34979, null, 46.72463, null, 47.06318, null, 47.37091, null, 47.65214, null, 47.91038, null, 48.14848, null, 48.36881, null, 48.57336, null, 48.76379, null, 48.94153, null, 49.10781, null, 49.2637, null, 49.4101, null, 49.54784, null, 49.67762, null, 49.80008, null, 49.91578, null, 50.02521, null, 50.12883, null, 50.22705, null, 50.32023, null, 50.40869, null, 50.49275, null, 50.57267, null, 50.6487, null, 50.72108, null, 50.75597],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal máximo 2',
							data: [37.97379, null, 39.24989, null, 41.12605, null, 42.48436, null, 43.53902, null, 44.39472, null, 45.11034, null, 45.72225, null, 46.25443, null, 46.72349, null, 47.14142, null, 47.51714, null, 47.85744, null, 48.16763, null, 48.45191, null, 48.71371, null, 48.95578, null, 49.18045, null, 49.38963, null, 49.58497, null, 49.76786, null, 49.93948, null, 50.10089, null, 50.25298, null, 50.39655, null, 50.53229, null, 50.66082, null, 50.78269, null, 50.89839, null, 51.00836, null, 51.113, null, 51.21268, null, 51.3077, null, 51.39837, null, 51.48496, null, 51.56771, null, 51.64686, null, 51.68514],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal máximo 3',
							data: [38.51574, null, 39.77262, null, 41.62581, null, 42.97189, null, 44.01984, null, 44.87197, null, 45.58593, null, 46.19736, null, 46.72983, null, 47.1997, null, 47.6188, null, 47.99592, null, 48.33781, null, 48.64972, null, 48.93584, null, 49.19955, null, 49.44362, null, 49.67034, null, 49.88166, null, 50.07919, null, 50.26432, null, 50.43825, null, 50.60203, null, 50.75654, null, 50.90258, null, 51.04085, null, 51.17196, null, 51.29647, null, 51.41485, null, 51.52756, null, 51.63499, null, 51.73749, null, 51.83539, null, 51.92898, null, 52.01853, null, 52.10429, null, 52.18646, null, 52.22628],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal máximo 4',
							data: [38.85417, null, 40.10028, null, 41.94138, null, 43.28181, null, 44.32733, null, 45.17877, null, 45.893, null, 46.50524, null, 47.0388, null, 47.5099, null, 47.93027, null, 48.30867, null, 48.65181, null, 48.96494, null, 49.25225, null, 49.51712, null, 49.76233, null, 49.99018, null, 50.20261, null, 50.40125, null, 50.58751, null, 50.76259, null, 50.92752, null, 51.08322, null, 51.23047, null, 51.36998, null, 51.50236, null, 51.62817, null, 51.7479, null, 51.86198, null, 51.97081, null, 52.07475, null, 52.17413, null, 52.26923, null, 52.36032, null, 52.44764, null, 52.53143, null, 52.57205],
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
						text : 'Gráfica de Crecimiento PC - Edad  (0 a 36 meses)',
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
							text : 'PERÍMETRO CEFÁLICO (CM)',
							color : '#0161AA'
						},
						suggestedMin: 30,
						ticks: {
							stepSize: 2,
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

export default GraficoDeCrecimientoPCNiño0a36 

