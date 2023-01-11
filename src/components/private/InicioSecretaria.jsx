import React, { useEffect, useState }from 'react';
import '../../sass/Calendario.sass';
import url from '../../keys/backend_keys';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
// import dayGridPlugin from '@fullcalendar/daygrid';// a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
// import useReserva from '../../hooks/useReserva';
import timeGridPlugin from '@fullcalendar/timegrid';
import getFecha from '../../functions/fecha'
// import { set } from 'react-hook-form';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import 'react-calendar/dist/Calendar.css'
// import MostrarCita from './MostrarCita';


const InicioSecretaria =  () => {
    const [state, setState] = useState(false);
    const [value, onChange] = useState(new Date());
    const [eliminar, setEliminar]= useState(false)
    const handleDateClick = (arg) => { // bind with an arrow function
        if(arg.dateStr){
            setState(true)
        }
    }

    //PARA OBTENER TODOS LAS RESERVAS
    const [res, setRes] = useState({});

	useEffect(() => {
		fetch(`${url}/Reserva`)
			.then((resp) =>{
				return resp.json();
			})
			.then((data) =>{
				setRes(data)
			});
			
	}, []);

    // const handleChangeRes = (e)=>{
	// 	setRes({
	// 		...res,
	// 		[e.target.name]: e.target.value
	// 	})
	// }

    let NombreYFecha = []
    for (let item in res){
        NombreYFecha.push({title:res[item].nombre_paciente, start:res[item].fecha, end:moment(moment(res[item].fecha).add(30,'minutes')).format()})
    }

    
    const Datos = (str) => {
        let data = []
        for (let item in res){
            if(moment(res[item].fecha).format() === str){
                data = res[item]
            }
        }
        return data
    }

    const eliminarEvento = (info)=>{
        if(info.event.start){
            setEliminar(true)
        }
    }   

    const ModalEliminar = ()=>{
        return (
            <>
                <div
                    style={{
                        background: '#00000039',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        height: '100vh',
                        width: '100%',
                        zIndex:'2',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                <form
                    style={{
                        background: '#ffffff',
                        padding: '2px',
                        borderRadius: '6px',
                    }}
                    onSubmit={(e) => {
                        
                        e.preventDefault();
                        let dataRes = Datos(moment(value.event.start).format())
                        if(dataRes){
                            fetch(`${url}/Reserva/${dataRes._id}`, {
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                method: 'DELETE',
                            })
                                .then((resp) => {
                                    return resp.json();
                                })
                                .then((data) => {
                                    alert(data.msg);
                                })
                                .then(() => {
                                    setRes(res.filter((item) => item._id !== dataRes._id));
                                });
                                setEliminar(false)
                        };
                    
                    }}
                >
                    <div className='calendarioEliminar'>
                        <div className='formularioModalEliminar'>
                            <p className='textoEliminar'>
                                <b>¿DESEA ELIMINAR RESERVA?</b>
                            </p>
                            <div className='eliminar'>
                                <button type='submit'> 
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                                <button onClick={() => {
                                    setEliminar(false);
                                }}>
                                    <i className="fas fa-window-close"></i>
                                </button>
                            </div> 
                        </div>
                    </div>
                    <br />
                </form>
                </div>
            </>
        )
    }

    const Modal = () => {
        const [reservas, setReservas] = useState({});
        const handleChange = (e) => {
            setReservas({
                ...reservas,
                [e.target.name]: e.target.value,
            });
        };
        return (
            <div
                style={{
                    background: '#00000039',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    height: '100vh',
                    width: '100%',
                    zIndex:'2',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
               <form
                    style={{
                        background: '#ffffff',
                        padding: '2px',
                        borderRadius: '6px',
                    }}
                >
                    <div className='calendario'>
                        <h3>
                            REGISTRO DE RESERVA
                            {/* {moment(value.dateStr).format('DD/MM/YYYY')} */}
                        </h3>
                        <div className='formularioModal'>
                        <p>
                            <label>Paciente:  </label>
                            <input
                                type='text'
                                name='nombre_paciente'
                                placeholder="Paciente"
                                onChange={handleChange}
                                value={reservas.nombre_paciente}
                            />
                        </p>
                        <p>
							<label>Fecha</label>
							<input name="fecha" type="date" min={getFecha()} onChange={handleChange}
                                value={reservas.fecha}/>
                        </p>
                        <p>
                            <label>Hora:  </label>
                            <input
                                type='time'
                                name='hora'
                                onChange={handleChange}
                                value={reservas.hora}
                            />
                        </p>
                        <p>
                            <button 
                            onClick={(e) => {
                                e.preventDefault();
                                if(moment(moment(new Date(`${reservas.fecha} ${reservas.hora}`)).format()).isBefore(reservas.fecha+'T08:59:59-05:00') || moment(moment(new Date(`${reservas.fecha} ${reservas.hora}`)).format()).isAfter(reservas.fecha+'T21:00:00-05:00') || moment(moment(new Date(`${reservas.fecha} ${reservas.hora}`)).format()).isBetween((reservas.fecha+'T14:00:00-05:00'), (reservas.fecha+'T15:59:59-05:00'))){
                                    alert('Registre una reserva a otra hora ')
                                }

                                else{
                                    fetch(`${url}/Reserva/new`,{
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        method: 'POST',
                                        body: JSON.stringify({
                                            reservas,
                                            nombre_paciente:reservas.nombre_paciente,
                                            fecha: moment(
                                                new Date(
                                                    `${reservas.fecha} ${reservas.hora}`
                                                )
                                            ).format(),
                                        }),
                                    }).then((resp) =>resp.json()).then((data)=>{
                                            if(data.ok){
                                                    alert('Se Registró la Reserva correctamente')
                                                    setRes([
                                                        ...res,
                                                        {
                                                            _id:data.reserva._id ,
                                                            nombre_paciente:reservas.nombre_paciente,
                                                            fecha: moment(
                                                                new Date(
                                                                    `${reservas.fecha} ${reservas.hora}`
                                                                )
                                                            ).format(),
                                                        },
                                                    ]);
                                                    setState(false)
                                                }
                                                else{
                                                    alert('Ya existe una Reserva a esa hora')
                                                }
                                            
                                            
                                        })
                                }
                                // if (moment(reservas.hora)){
                                //     alert('Registre una reserva a otra hora ') 
                                // }
                                
                            }}
                            >Aceptar</button>
                        </p> 
                        </div>
                    </div>
                    <br />
                </form>
                <button
                    onClick={() => {
                        setState(false);
                    }}
                    style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        border: 'none',
                        padding: '18px',
                        cursor: 'pointer',
                    }}
                >
                    <i
                        className="fas fa-times"
                        style={{ fontSize: '19px' }}
                    ></i>
                </button>
            </div>
        );
    }


    return (
        <>
            {state && <Modal/>}
            {eliminar && <ModalEliminar/>}
            {/* {eliminar && <Eliminar/>} */}
            {/* <div style={{position:'absolute',marginLeft:'60%', top: '82px'}}>
                <button
                    onClick={() => {
                        setState(true);
                    }}
                    style={{
                        
                        padding: '9px',
                        color: 'white',
                        border: 'none',
                        background: '#0091E1',
                        marginBottom: '11px',
                        borderRadius: '11px',
                        cursor: 'pointer',
                    }}
                >
                    <i className="fas fa-plus"></i>
                    
                </button>
            </div> */}
            <div className='tablaCalendario' style={{ width:'90%', marginTop:'15px'}}>
                <FullCalendar
                    
                    plugins={[ timeGridPlugin, interactionPlugin]}
                    locale='es'
                    height='72.2vh'
                    initialView="timeGridWeek"
                    headerToolbar={{
                        right:'today,prevYear,nextYear',
                        center:'title',
                        left:'prev,next AgregarReserva',
                    }}
                    slotMinTime= '09:00:00'
                    slotMaxTime = '21:30:00'
                    slotDuration= '00:30:00'
                    slotLabelInterval= '00:30:00'
                    allDaySlot= {false}
                    buttonText={{
                        today: 'Hoy',
                        month: 'Mes',
                        week:'Semana'
                    }}
                    eventTimeFormat ={{
                        hour12: true,
                        hour: 'numeric',
                        minute: '2-digit'
                    }}
                    displayEventEnd={false}
                    displayEventTime={false}
                    events={NombreYFecha}
                    // eventContent={NombreYFecha}
                    // eventContent={NombreYFecha}
                    editable= {false}
                    select={handleDateClick}
                    dateClick={onChange}
                    dayMaxEventRows={ true} // for all non-TimeGrid views
                    // view={{
                    //     timeGrid: {
                    //     dayMaxEventRows: 10 // adjust to 6 only for timeGridWeek/timeGridDay
                    //     }
                    // }}
                    eventClick={[eliminarEvento,onChange]
                        // (info)=>{
                        // Datos(moment(moment(info.event.start).add(5, 'hours')).format())
                        // if(Datos(moment(info.event.start).format())){
                        //     eliminarRes()
                        // }
                        
                        }
                    
                    customButtons={{
                        AgregarReserva:{
                            text:'+ Reserva',
                            click: function() {
                                setState(true);
                            }
                            // icon:'left-single-arrow'
                        }
                    }}
                    eventRemove={true}
                    onChange={onChange}
                    value={value}
                />
            </div>
        </>
    )   
}

export default InicioSecretaria;