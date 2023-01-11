import React, { useState, useEffect } from 'react';
import '../../sass/Dashboard.sass';
import '../../sass/LC.sass';
import url from '../../keys/backend_keys';
import {Link} from 'react-router-dom'
// import capitalize from '../../functions/capitalize';
// import mayusFirst from '../../functions/mayusFirst';
// import '../../sass/Recetas.sass'
// import 'bootstrap/dist/css/bootstrap.min.css'

const Consultas = () => {
	const [citas, setCitas] = useState([]);
	useEffect(() => {
		fetch(`${url}/Historia`)
			.then((resp) => {
				return resp.json();
			})
			.then((datos) => {
				setCitas(datos);
			});
	}, []);

	citas.sort((a, b) => {
		return (a.nombres_paciente.toLowerCase() < b.nombres_paciente.toLowerCase()) ? -1 : 1
	})
		
	for(let item in citas){
		citas[item].numero = parseInt(item)+1
	}

	//FUNCIÓN PARA BUSCAR
    const [buscar, setBuscar] = useState('')
    const [paginaActual, setPaginaActual] = useState(0)
    const datosFiltrados = () =>{
        if(buscar.length === 0)
            return citas.slice(paginaActual, paginaActual+5)

        const filtrado = citas.filter(item => (item.nombres_paciente.toLowerCase()).includes(buscar.toLowerCase()))

        return filtrado.slice(paginaActual, paginaActual+5)
    }

    const [pagina, setPagina] = useState(0)
    const paginaSiguiente = () =>{
        if(citas.filter(item => (item.nombres_paciente.toLowerCase()).includes(buscar.toLowerCase())).length > paginaActual + 5){
            setPaginaActual(paginaActual+5)
            setPagina(pagina+1)
        }
    }

    const paginaAnterior = () =>{
        if(paginaActual>0){
            setPaginaActual(paginaActual-5)
            setPagina(pagina-1)
        }
    }

    const buscarT = ({target}) =>{
        setPaginaActual(0)
        setPagina(0)
        setBuscar(target.value)
    }

	// BORRAR
	// const [historias, setHistorias] = useState([])
	// useEffect(() => {
	// 	fetch(`${url}/Historia/`)
	// 		.then((resp) => resp.json())
	// 		.then((historia) => {
	// 			setHistorias(historia)
	// 		})
	// }, [])

	// const actualizarHistorias = () => {
	// 	historias.map((item) =>
	// 		fetch(`${url}/Historia/${item._id}`, {
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 			method: 'PUT',
	// 			body: JSON.stringify({
	// 				...item,
	// 				nombres_paciente: item.nombres_paciente && capitalize(item.nombres_paciente),
	// 				nombre_madre: item.nombre_madre && capitalize(item.nombre_madre),
	// 				nombre_padre: item.nombre_padre && capitalize(item.nombre_padre),
	// 				referencia: item.referencia && capitalize(item.referencia),
	// 				procedencia: item.procedencia && capitalize(item.procedencia),
	// 				lugar_nac: item.lugar_nac && capitalize(item.lugar_nac),
	// 				ocupacion_madre: item.ocupacion_madre && capitalize(item.ocupacion_madre),
	// 				ocupacion_padre: item.ocupacion_padre && capitalize(item.ocupacion_padre),
	// 				direccion: item.direccion && capitalize(item.direccion),
	// 			})
	// 		})
	// 	)
	// }
	// 
	// const [antecedentes, setAntecedentes] = useState([])
	// useEffect(() => {
	// 	fetch(`${url}/Antecedentes/`)
	// 		.then((resp) => resp.json())
	// 		.then((antecedente) => {
	// 			setAntecedentes(antecedente)
	// 		})
	// }, [])

	// const isValid = (item) => {
	// 	if(item === 'true'){
	// 		return true
	// 	}
	// 	if(item === 'false'){
	// 		return false
	// 	}
	// }

	// const actualizarAntecedentes = () => {
	// 	antecedentes.map((item) => 
	// 		fetch(`${url}/Antecedentes/${item._id}`, {
	// 			headers: {
	// 				'Content-Type': 'application/json'
	// 			},
	// 			method: 'PUT',
	// 			body: JSON.stringify({
	// 				...item,
	// 				Otros: item.Otros && mayusFirst(item.Otros),
	// 				complicaciones: item.complicaciones && mayusFirst(item.complicaciones),
	// 				alergia: item.alergia && mayusFirst(item.alergia),
	// 				reaccionAdversaMed: item.reaccionAdversaMed !== undefined ? isValid(item.reaccionAdversaMed) : undefined,
	// 				sob: item.sob !== undefined ? isValid(item.sob) : undefined,
	// 				enfAnteriores: item.enfAnteriores && mayusFirst(item.enfAnteriores),
	// 			})
	// 		})
	// 	)
	// }
	
	// const [citas1, setCitas1] = useState([])
	// useEffect(() => {
	// 	fetch(`${url}/Cita/`)
	// 		.then((resp) => resp.json())
	// 		.then((cita) => {
	// 			setCitas1(cita)
	// 		})
	// }, [])

	// const actualizarCitas = () => {
	// 	citas1.map((item) =>
	// 		fetch(`${url}/Cita/${item._id}`, {
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 			method: 'PUT',
	// 			body: JSON.stringify({
	// 				...item,
	// 				nombre_paciente: item.nombre_paciente && capitalize(item.nombre_paciente),
	// 				responsable: item.responsable && capitalize(item.responsable),
	// 			})
	// 		})
	// 	)
	// }

	// const [histClinicas, setHistClinicas] = useState([])
	// useEffect(() => {
	// 	fetch(`${url}/HistClinica/`)
	// 		.then((resp) => resp.json())
	// 		.then((histClinica) => {
	// 			setHistClinicas(histClinica)
	// 		})
	// }, [])

	// const actualizarHistClinicas = () => {
	// 	histClinicas.map((item) =>
	// 		fetch(`${url}/HistClinica/${item._id}`, {
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 			method: 'PUT',
	// 			body: JSON.stringify({
	// 				...item,
	// 				anamnesis: item.anamnesis && mayusFirst(item.anamnesis),
	// 				diagnostico: item.diagnostico && mayusFirst(item.diagnostico),
	// 				tratamiento: item.tratamiento && mayusFirst(item.tratamiento),
	// 				examenesAuxiliares: item.examenesAuxiliares && mayusFirst(item.examenesAuxiliares),
	// 				planDiagnosticoTerapeutico: item.planDiagnosticoTerapeutico && mayusFirst(item.planDiagnosticoTerapeutico),
	// 				apreciacionG: item.apreciacionG && mayusFirst(item.apreciacionG),
	// 				tcsc: item.tcsc && mayusFirst(item.tcsc),
	// 				ojos: item.ojos && mayusFirst(item.ojos),
	// 				orofaringe: item.orofaringe && mayusFirst(item.orofaringe),
	// 				oidos: item.oidos && mayusFirst(item.oidos),
	// 				aparatoResp: item.aparatoResp && mayusFirst(item.aparatoResp),
	// 				aparatoCV: item.aparatoCV && mayusFirst(item.aparatoCV),
	// 				abdomen: item.abdomen && mayusFirst(item.abdomen),
	// 				aparatoGU: item.aparatoGU && mayusFirst(item.aparatoGU),
	// 				locomotor: item.locomotor && mayusFirst(item.locomotor),
	// 				genitales: item.genitales && mayusFirst(item.genitales),
	// 				neurologico: item.neurologico && mayusFirst(item.neurologico),
	// 			})
	// 		})
	// 	)
	// }

	// const [indicOrdens, setIndicOrdens] = useState([])
	// useEffect(() => {
	// 	fetch(`${url}/IndicacionOrden/`)
	// 		.then((resp) => resp.json())
	// 		.then((indicOrden) => {
	// 			setIndicOrdens(indicOrden)
	// 		})
	// }, [])

	// const actualizarIndicacionOrden = () => {
	// 	indicOrdens.map((item) =>
	// 		fetch(`${url}/IndicacionOrden/${item._id}`, {
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 			method: 'PUT',
	// 			body: JSON.stringify({
	// 				...item,
	// 				indicaciones: item.indicaciones && mayusFirst(item.indicaciones),
	// 			})
	// 		})
	// 	)
	// }

	// const [medicRecetas, setMedicRecetas] = useState([])
	// useEffect(() => {
	// 	fetch(`${url}/MedicamentoReceta/`)
	// 		.then((resp) => resp.json())
	// 		.then((medicReceta) => {
	// 			setMedicRecetas(medicReceta)
	// 		})
	// }, [])

	// const actualizarMedicamentosReceta = () => {
	// 	medicRecetas.map((item) =>
	// 		fetch(`${url}/MedicamentoReceta/${item._id}`, {
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 			method: 'PUT',
	// 			body: JSON.stringify({
	// 				...item,
	// 				cantidad: item.cantidad && mayusFirst(item.cantidad),
	// 				nombreMedicina: item.nombreMedicina && mayusFirst(item.nombreMedicina),
	// 				indicaciones: item.indicaciones && mayusFirst(item.indicaciones),
	// 			})
	// 		})
	// 	)
	// }

	// const [reservas, setReservas] = useState([])
	// useEffect(() => {
	// 	fetch(`${url}/Reserva/`)
	// 		.then((resp) => resp.json())
	// 		.then((reserva) => {
	// 			setReservas(reserva)
	// 		})
	// }, [])

	// const actualizarReservas = () => {
	// 	reservas.map((item) =>
	// 		fetch(`${url}/Reserva/${item._id}`, {
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 			method: 'PUT',
	// 			body: JSON.stringify({
	// 				...item,
	// 				nombre_paciente: item.nombre_paciente && capitalize(item.nombre_paciente),
	// 			})
	// 		})
	// 	)
	// }

	// const [usuarios, setUsuarios] = useState([])
	// useEffect(() => {
	// 	fetch(`${url}/api/auth/`)
	// 		.then((resp) => resp.json())
	// 		.then((usuario) => {
	// 			setUsuarios(usuario)
	// 		})
	// }, [])

	// const actualizarUsuarios = () => {
	// 	usuarios.map((item) =>
	// 		fetch(`${url}/api/auth/Responsable/${item._id}`, {
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 			method: 'PUT',
	// 			body: JSON.stringify({
	// 				// ...item,
	// 				nombre: item.nombre && capitalize(item.nombre),
	// 			})
	// 		})
	// 	)
	// }

	return (
		<>
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<h2>Listado de Pacientes</h2>
				<div 
					style={{border:'2px solid #aba7a7', borderRadius: '10px', padding:'5px 0', width:'40%', marginBottom:'20px', float:'right', marginRight:'10%'}}
				>
					<i 
						className="fas fa-search" 
						style={{padding:'0px 10px'}}>
					</i>
					<input 
						type="search" 
						placeholder='Buscar por nombre' 
						style={{borderStyle:'none', fontFamily:'Poppins', fontWeight:'700', outline:'0', width:'90%'}}
						name='buscar'
						value={buscar}
						onChange={buscarT}
						autoComplete='off'
					>
					</input>
				</div>
			</div>
			<div className="listadoPacientesPaginacion">
				<div className='encabezadoPaginacion'>
					<strong>PACIENTE</strong>
					<strong>REFERENCIA</strong>
					<i></i>
				</div>
				{
					datosFiltrados().map((item) => (
						<div key={item._id} className="contenedorDatosPaciente">
							<div className='contenidoDatosPaciente'>
								<div className='nombrePaciente'>
									<p><b>{item.numero}.      </b><i className="fa-regular fa-address-book"></i></p>
									<p>{item.nombres_paciente && item.nombres_paciente}</p>
								</div>
								{/* <p className='dniPac'>{item.dni_paciente}</p> */}
								<em className='referenciaPac'>{item.referencia && item.referencia}</em>
							</div>
							<Link to={`datos-f/${item._id}`}>
								<strong
									style={{
										textDecoration: 'underline',
										cursor: 'pointer',
									}}
								>
									<i className="fas fa-external-link-alt"></i>
								</strong>
								{item.post}
							</Link>
						</div>
					))
				}
			</div>
			{
				datosFiltrados().length>0 ?
					<div className="paginacionPacientes">
						<button onClick={paginaAnterior}>
							<i className="fa-solid fa-angle-left"></i>
						</button>
						<p>{pagina+1}</p>
						<button onClick={paginaSiguiente}>
							<i className="fa-solid fa-angle-right"></i>
						</button>
					</div>
				: null
			}
			{/* <button onClick={(e) => {
				// e.preventDefault()
				// actualizarHistorias()
				// actualizarAntecedentes()
				// actualizarCitas()
				// actualizarHistClinicas()
				// actualizarIndicacionOrden()
				// actualizarMedicamentosReceta()
				// actualizarReservas()
				// actualizarUsuarios()
				
			}}>HOLA</button> */}
		</>
	);
};

export default Consultas;
