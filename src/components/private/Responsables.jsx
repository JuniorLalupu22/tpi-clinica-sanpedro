import React, { useState } from 'react';
import '../../sass/Dashboard.sass';
import '../../sass/ModalPaciente.sass';
import '../../sass/Responsables.sass';
import useResponsables from '../../hooks/useResponsables';
import { Link } from 'react-router-dom'
// import url from '../../keys/backend_keys';

import FormResponsable from './extras/FormResponsable';
// FormResponsable
const Responsables = () => {
	const MostrarFormNuevo = ({datos,set_datos}) => {
		return (
			<>				
				<div className="modalPaciente">
					<div className="contenedorForms">
						<FormResponsable   datos={datos} set_datos={set_datos} />
					</div>
					<div
						className="cerrarForm"
						onClick={() => {
							setForm(false);
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
						</svg>
					</div>
				</div>
			</>
		);
	};
	const [form, setForm] = useState(false);
	const [datos, loading, set_datos] = useResponsables();
	const onForm = () => {
		setForm(!form);
	};
	datos.sort((a, b) => {
		return (a.nombre.toLowerCase() < b.nombre.toLowerCase()) ? -1 : 1
	})

	for(let item in datos){
		datos[item].numero = parseInt(item)+1
	}

	// const onDelete = (id) => {
	// 	fetch(`${url}/api/auth/${id}`, {
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		method: 'DELETE',
	// 	})
	// 		.then((resp) => {
	// 			return resp.json();
	// 		})
	// 		.then((data) => {
	// 			alert(data.msg);
	// 		})
	// 		.then(() => {
	// 			set_datos(datos.filter((item) => item._id !== id));
	// 		});
	// };
	//FUNCIÓN PARA BUSCAR
    const [buscar, setBuscar] = useState('')
    const [paginaActual, setPaginaActual] = useState(0)
    const datosFiltrados = () =>{
        if(buscar.length === 0)
            return datos.slice(paginaActual, paginaActual+5)

        const filtrado = datos.filter(item => (item.nombre.toLowerCase()).includes(buscar.toLowerCase()))

        return filtrado.slice(paginaActual, paginaActual+5)
    }

    const [pagina, setPagina] = useState(0)
    const paginaSiguiente = () =>{
        if(datos.filter(item => (item.nombre.toLowerCase()).includes(buscar.toLowerCase())).length > paginaActual + 5){
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

	return (
		!loading &&
		<>
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<h2 className='tituloRespAgregar'>
					Apoderado&nbsp;&nbsp;&nbsp;
					<span onClick={onForm}>Nuevo</span>
				</h2>
				{form && <MostrarFormNuevo datos={datos} set_datos={set_datos}/>}
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
					<strong>APODERADO</strong>
					<strong>DNI</strong>
					<i></i>
				</div>
				{
					datosFiltrados().map((item) => (
						<div key={item._id} className="contenedorDatosPaciente">
							<div className='contenidoDatosPaciente'>
								<div className='nombrePaciente'>
									<p><b>{item.numero}.      </b><i className="fa-regular fa-address-book"></i></p>
									<p>{item.nombre}</p>
								</div>
								{/* <p className='dniPac'>{item.dni_paciente}</p> */}
								<em className='referenciaPac'>{item.dni}</em>
							</div>
							<Link to={`/hijos/${item._id}`}>
								<strong
									style={{
										textDecoration: 'underline',
										cursor: 'pointer',
									}}
								>
									<i className="fas fa-external-link-alt"></i>
								</strong>
								{/* {item.post} */}
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
		</>
		// <div className="list">
		// 	{/* <h2>
		// 		Responsables&nbsp;&nbsp;&nbsp;&nbsp;
		// 		<span onClick={onForm}>Nuevo</span>
		// 	</h2>
		// 	{form && <MostrarFormNuevo datos={datos} set_datos={set_datos}/>} */}
		// 	{loading === false ? (
		// 		<div className="datos_responsables">
		// 			{datos.map((item) => (
		// 				<div className="dato_responsable" key={item._id}>
		// 					<p>
		// 						<strong>-DNI : </strong>
		// 						{item.dni}
		// 					</p>
		// 					<br/>
		// 					<p>
		// 						<strong>-Nombre: </strong>
		// 						{item.nombre}
		// 					</p>
		// 					<br/>
		// 					{/* <p>
		// 						<strong>-Email: </strong>
		// 						{item.email}
		// 					</p>
		// 					<br/> */}
		// 					{/* <p>
		// 						&nbsp;&nbsp;
		// 						<strong
		// 							onClick={() => {
		// 								onDelete(item._id);
		// 							}}
		// 							style={{
		// 								cursor: 'pointer',
		// 								color: 'crimson',
		// 							}}
		// 						>
		// 							Eliminar
		// 						</strong>
		// 					</p>
		// 					<br/> */}
		// 					<p>
		// 						<NavLink to={`/hijos/${item._id}`} style={{color:'#0194E1',cursor:'pointer'}}>Ver hijos</NavLink>
								
		// 					</p>
		// 				</div>
		// 			))}
		// 		</div>
		// 	) : (
		// 		<p>cargando...</p>
		// 	)}
		// </div>
	);
};

export default Responsables;
