import React from "react";
import { connect } from 'react-redux';
// import useAfiliacion from '../../hooks/useAfiliacion';
import {useHistory} from 'react-router-dom'
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import '../../sass/Redirecciones.sass'

const RedireccionAGraficos = ({usuario}) =>{
    const {id} =useParams()
    const history = useHistory()
    // let [datos_af, loading] = useAfiliacion();
    return (
        <>
            {usuario.rol === 'Apoderado' ?
			(
				<>
					{/* <div className="btnRedirecciones"> */}
                    <div style={{marginTop:'-1%'}}></div>
                        <button className='cta' onClick={()=>{history.push(`/GraficoDeCrecimiento/${id}`)}}>
                            <span>Regresar</span>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        {/* <button onClick={()=>{history.push(`/GraficoDeCrecimiento/${id}`)}}>
						    <i className="fas fa-angle-left"></i>
					    </button> */}
					{/* </div> */}
				</>
			):null}
        </>
    )
}

const mapStateToProps = (state) => ({
	usuario: state.usuario,
});

export default connect(mapStateToProps)(RedireccionAGraficos);