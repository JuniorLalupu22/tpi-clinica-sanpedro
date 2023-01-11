// import moment from 'moment'
import React, {useRef} from 'react'
import { Line } from 'react-chartjs-2'
import useHistClinica from '../../hooks/useHistClinica'
import RedireccionAGraficos from './RedireccionAGraficos'
import calcularEdad from './../../functions/calcularEdad'
import pluginGrafico from '../../functions/pluginGrafico'
import useFiliacionUnica from '../../hooks/useFiliacionUnica'
import OpcionesPDF from '../includes/OpcionesPDF'

const GraficoDeCrecimientoPesoEdadNiño0a36 = () => {
	//IMG
	/*var img = new Image()
	img.src = 'https://i.ibb.co/PhTX54W/Beb-Ni-o.png'*/

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
					//labels: ['Nacimiento', '3 meses', '6 meses', '9 meses', '12 meses', '15 meses', '18 meses', '21 meses', '24 meses', '27 meses', '30 meses', '33 meses', '36 meses'],
					datasets: [
						//DEL PACIENTE
						{
							label: 'Peso',
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
							//labels : ['meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses','meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses', 'meses'],
							//data: [3.6, 6, 7.9, 9.3, 10.3, 11.1, 11.7, 12.2, 12.7, 13.1, 13.5, 13.9, 14.3],
							data : [2.799549, null, 3.614688, null, 4.342341, null, 4.992898, null, 5.575169, null, 6.096775, null, 6.56443, null, 6.984123, null, 7.361236, null, 7.700624, null, 8.006677, null, 8.283365, null, 8.534275, null, 8.762649, null, 8.971407, null, 9.16318, null, 9.340328, null, 9.504964, null, 9.658975, null, 9.804039, null, 9.941645, null, 10.07311, null, 10.19957, null, 10.32206, null, 10.44144, null, 10.55847, null, 10.6738, null, 10.78798, null, 10.90147, null, 11.01466, null, 11.12787, null, 11.24135, null, 11.3553, null, 11.46988, null, 11.58521, null, 11.70137, null, 11.75978],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 2,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal mínimo 2',
							data: [2.964656, null, 3.774849, null, 4.503255, null, 5.157412, null, 5.744752, null, 6.272175, null, 6.745993, null, 7.171952, null, 7.555287, null, 7.900755, null, 8.212684, null, 8.495, null, 8.751264, null, 8.984701, null, 9.198222, null, 9.394454, null, 9.575757, null, 9.744251, null, 9.90183, null, 10.05019, null, 10.19082, null, 10.32507, null, 10.4541, null, 10.57895, null, 10.70051, null, 10.81958, null, 10.93681, null, 11.0528, null, 11.16803, null, 11.28293, null, 11.39782, null, 11.513, null, 11.62869, null, 11.74508, null, 11.8623, null, 11.98046, null, 12.03991],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal mínimo 3',
							data: [3.20951, null, 4.020561, null, 4.754479, null, 5.416803, null, 6.013716, null, 6.551379, null, 7.035656, null, 7.472021, null, 7.865533, null, 8.220839, null, 8.542195, null, 8.833486, null, 9.098246, null, 9.339688, null, 9.560722, null, 9.763982, null, 9.95184, null, 10.12643, null, 10.28968, null, 10.4433, null, 10.58881, null, 10.72759, null, 10.86084, null, 10.98963, null, 11.1149, null, 11.23747, null, 11.35806, null, 11.47728, null, 11.59567, null, 11.71368, null, 11.8317, null, 11.95005, null, 12.069, null, 12.18875, null, 12.30948, null, 12.43132, null, 12.49268],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal mínimo 4',
							data: [3.597396, null, 4.428873, null, 5.183378, null, 5.866806, null, 6.484969, null, 7.043627, null, 7.548346, null, 8.004399, null, 8.416719, null, 8.789882, null, 9.12811, null, 9.435279, null, 9.714942, null, 9.970338, null, 10.20442, null, 10.41986, null, 10.6191, null, 10.80433, null, 10.97753, null, 11.14047, null, 11.29477, null, 11.44185, null, 11.58298, null, 11.7193, null, 11.85182, null, 11.98142, null, 12.10889, null, 12.23491, null, 12.36007, null, 12.4849, null, 12.60983, null, 12.73523, null, 12.86144, null, 12.9887, null, 13.11723, null, 13.24721, null, 13.31278],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						//IDEAL
						{
							label : 'Ideal',
							data: [4.003106, null, 4.879525, null, 5.672889, null, 6.391392, null, 7.041836, null, 7.630425, null, 8.162951, null, 8.644832, null, 9.08112, null, 9.4765, null, 9.835308, null, 10.16154, null, 10.45885, null, 10.73063, null, 10.97992, null, 11.20956, null, 11.42207, null, 11.61978, null, 11.80478, null, 11.97897, null, 12.14404, null, 12.30154, null, 12.45283, null, 12.59913, null, 12.74154, null, 12.88102, null, 13.01842, null, 13.1545, null, 13.2899, null, 13.42519, null, 13.56088, null, 13.69738, null, 13.83505, null, 13.97418, null, 14.11503, null, 14.2578, null, 14.32994],
							borderColor : 'rgba(119, 185, 0, 1)',
							borderWidth: 3,
							spanGaps : true,
							pointRadius : 0
						},
						//IDEALES MÁXIMOS
						{
							label : 'Ideal máximo',
							data: [4.387423, null, 5.327328, null, 6.175598, null, 6.942217, null, 7.635323, null, 8.262033, null, 8.828786, null, 9.34149, null, 9.805593, null, 10.22612, null, 10.60772, null, 10.95466, null, 11.27087, null, 11.55996, null, 11.82524, null, 12.06973, null, 12.29617, null, 12.50708, null, 12.70473, null, 12.89117, null, 13.06825, null, 13.23765, null, 13.40086, null, 13.5592, null, 13.71386, null, 13.8659, null, 14.01623, null, 14.16567, null, 14.31493, null, 14.46462, null, 14.61527, null, 14.76732, null, 14.92117, null, 15.07711, null, 15.23541, null, 15.39628, null, 15.47772],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal máximo 2',
							data: [4.718161, null, 5.728153, null, 6.638979, null, 7.460702, null, 8.202193, null, 8.871384, null, 9.475466, null, 10.02101, null, 10.51406, null, 10.96017, null, 11.36445, null, 11.7316, null, 12.06595, null, 12.37145, null, 12.65175, null, 12.91015, null, 13.14969, null, 13.37311, null, 13.5829, null, 13.78133, null, 13.97042, null, 14.15201, null, 14.32772, null, 14.499, null, 14.66716, null, 14.83332, null, 14.99848, null, 15.16351, null, 15.32917, null, 15.4961, null, 15.66485, null, 15.83588, null, 16.00958, null, 16.18624, null, 16.36612, null, 16.5494, null, 16.64237],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal máximo 3',
							data: [4.91013, null, 5.967102, null, 6.921119, null, 7.781401, null, 8.556813, null, 9.255615, null, 9.885436, null, 10.45331, null, 10.96574, null, 11.42868, null, 11.84763, null, 12.22766, null, 12.5734, null, 12.88911, null, 13.17867, null, 13.44564, null, 13.69325, null, 13.92444, null, 14.14187, null, 14.34795, null, 14.54484, null, 14.73448, null, 14.91861, null, 15.09876, null, 15.2763, null, 15.45242, null, 15.62819, null, 15.8045, null, 15.98214, null, 16.16177, null, 16.34395, null, 16.52915, null, 16.71773, null, 16.91, null, 17.10619, null, 17.30646, null, 17.40816],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal máximo 4',
							data: [5.032625, null, 6.121929, null, 7.10625, null, 7.993878, null, 8.793444, null, 9.513307, null, 10.16135, null, 10.74492, null, 11.27084, null, 11.74538, null, 12.17436, null, 12.56308, null, 12.91645, null, 13.23893, null, 13.53462, null, 13.80724, null, 14.06019, null, 14.29655, null, 14.51909, null, 14.73034, null, 14.93256, null, 15.12777, null, 15.31777, null, 15.50418, null, 15.68841, null, 15.8717, null, 16.05514, null, 16.23967, null, 16.42609, null, 16.61508, null, 16.8072, null, 17.00291, null, 17.2026, null, 17.40654, null, 17.61495, null, 17.82797, null, 17.93625],
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
						text : 'Gráfica de Crecimiento Peso - Edad (0 a 36 meses)',
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
							text : 'PESO (KG)',
							color : '#0161AA'
						},
						suggestedMin: 0,
						ticks: {
							stepSize: 1,
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

export default GraficoDeCrecimientoPesoEdadNiño0a36 

