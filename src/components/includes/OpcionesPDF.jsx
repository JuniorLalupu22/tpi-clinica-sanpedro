import React from "react";
import '../../sass/OpcionesPDF.sass'
import DescargarGrafico from "./DescargarGrafico";
import ImprimirGrafico from "./ImprimirGrafico";

const OpcionesPDF = ({grafico, datosPaciente}) => {
    return(
        <button className="download-button">
            <div className={`docs ${datosPaciente.sexo === 1 ? 'colorM' : 'colorF'}`}>
                <i className="fa-solid fa-list-ul"></i>
                Opciones
            </div>
            <div className="download">
                <ImprimirGrafico grafico={grafico} datosPaciente={datosPaciente}/>
                <DescargarGrafico grafico={grafico} datosPaciente={datosPaciente}/>
            </div>
        </button>
    )
}

export default OpcionesPDF