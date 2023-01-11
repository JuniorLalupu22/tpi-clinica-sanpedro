import moment from 'moment'
import React from 'react'
import { useParams, useHistory } from 'react-router-dom';
import {PresentacionDesarrolloIntegral, SlideDesarrollo} from '../../components/private/PresentacionDesarrolloIntegral'
import useFiliacionUnica from '../../hooks/useFiliacionUnica';
import calcularEdad from '../../functions/calcularEdad'

// 1 MES
import imgA1 from '../../img/imgA1.JPG';
import imgB1 from '../../img/imgB1.JPG';
import imgC1 from '../../img/imgC1.JPG';
import imgD1 from '../../img/imgD1.JPG';
import imgE1 from '../../img/imgE1.JPG';
import imgF1 from '../../img/imgF1.JPG';
import imgG1 from '../../img/imgG1.JPG';
import imgH1 from '../../img/imgH1.JPG';
import imgI1 from '../../img/imgI1.JPG';
import imgJ1 from '../../img/imgJ1.JPG';
import imgL1 from '../../img/imgL1.JPG';
// 2 MESES
import imgC2 from '../../img/imgC2.JPG';
import imgE2 from '../../img/imgE2.JPG';
import imgH2 from '../../img/imgH2.JPG';
import imgI2 from '../../img/imgI2.JPG';
import imgL2 from '../../img/imgL2.JPG';
// 3 MESES
import imgA3 from '../../img/imgA3.JPG';
import imgB3 from '../../img/imgB3.JPG';
import imgD3 from '../../img/imgD3.JPG';
import imgE3 from '../../img/imgE3.JPG';
import imgF3 from '../../img/imgF3.JPG';
import imgI3 from '../../img/imgI3.JPG';
import imgK3 from '../../img/imgK3.JPG';
import imgL3 from '../../img/imgL3.JPG';
// 4 MESES
import imgD4 from '../../img/imgD4.JPG';
import imgJ4 from '../../img/imgJ4.JPG';
import imgK4 from '../../img/imgK4.JPG';
// 5 MESES
import imgA5 from '../../img/imgA5.JPG';
import imgC5 from '../../img/imgC5.JPG';
import imgG5 from '../../img/imgG5.JPG';
import imgH5 from '../../img/imgH5.JPG';
import imgJ5 from '../../img/imgJ5.JPG';
import imgK5 from '../../img/imgK5.JPG';
// 6 MESES
import imgB6 from '../../img/imgB6.JPG';
import imgD6 from '../../img/imgD6.JPG';
import imgF6 from '../../img/imgF6.JPG';
import imgG6 from '../../img/imgG6.JPG';
import imgI6 from '../../img/imgI6.JPG';
import imgJ6 from '../../img/imgJ6.JPG';
import imgK6 from '../../img/imgK6.JPG';
import imgL6 from '../../img/imgL6.JPG';
// 7 MESES
import imgA7 from '../../img/imgA7.JPG';
import imgH7 from '../../img/imgH7.JPG';
// 8 MESES
import imgD8 from '../../img/imgD8.JPG';
import imgI8 from '../../img/imgI8.JPG';
import imgK8 from '../../img/imgK8.JPG';
// 9 MESES
import imgG9 from '../../img/imgG9.JPG';
import imgL9 from '../../img/imgL9.JPG';
// 10 MESES
import imgC10 from '../../img/imgC10.JPG';
import imgH10 from '../../img/imgH10.JPG';
import imgL10 from '../../img/imgL10.JPG';
// 11 MESES
import imgD11 from '../../img/imgD11.JPG';
import imgG11 from '../../img/imgG11.JPG';
import imgI11 from '../../img/imgI11.JPG';
import imgJ11 from '../../img/imgJ11.JPG';
import imgK11 from '../../img/imgK11.JPG';
import imgL11 from '../../img/imgL11.JPG';
// 12 MESES
import imgC12 from '../../img/imgC12.JPG';
import imgH12 from '../../img/imgH12.JPG';
import imgI12 from '../../img/imgI12.JPG';
import imgJ12 from '../../img/imgJ12.JPG';
import imgL12 from '../../img/imgL12.JPG';

// 1 AÑO 3 MESES
import imgD15 from '../../img/imgD15.JPG';
import imgI15 from '../../img/imgI15.JPG';
import imgK15 from '../../img/imgK15.JPG';
import imgL15 from '../../img/imgL15.JPG';

// 1 AÑO Y 6 MESES
import imgA18 from '../../img/imgA18.JPG';
import imgC18 from '../../img/imgC18.JPG';
import imgD18 from '../../img/imgD18.JPG';
import imgG18 from '../../img/imgG18.JPG';
import imgH18 from '../../img/imgH18.JPG';
import imgI18 from '../../img/imgI18.JPG';
import imgJ18 from '../../img/imgJ18.JPG';
import imgK18 from '../../img/imgK18.JPG';
import imgL18 from '../../img/imgL18.JPG';

// 1 AÑO Y 9 MESES
import imgD21 from '../../img/imgD21.JPG';
import imgG21 from '../../img/imgG21.JPG';
import imgJ21 from '../../img/imgJ21.JPG';
import imgK21 from '../../img/imgK21.JPG';

// 2 Años
import imgD24 from '../../img/imgD24.JPG';
import imgG24 from '../../img/imgG24.JPG';
import imgH24 from '../../img/imgH24.JPG';
import imgI24 from '../../img/imgI24.JPG';

// 2 AÑOS Y 6 MESES
import imgD30 from '../../img/imgD30.JPG';
import imgG30 from '../../img/imgG30.JPG';
import imgI30 from '../../img/imgI30.JPG';
import imgJ30 from '../../img/imgJ30.JPG';
import imgK30 from '../../img/imgK30.JPG';
import imgL30 from '../../img/imgL30.JPG';

const DesarrolloIntegral = () => {
    let datosPaciente = useFiliacionUnica()
    const { id } = useParams();
    const history = useHistory()

    const {years, months, days} = calcularEdad(moment().format(), datosPaciente.fecha_nac)
    
    const DesarrolloNiñoMeses = ()=>{

        let edadEnMeses = years*12 + months
        if(edadEnMeses === 1)
            return(
                <>
                    <PresentacionDesarrolloIntegral>
                        <SlideDesarrollo>
                            <img src={imgA1} alt="" />
                            <p>Movimientos asimétricos de brazos y piernas</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgB1} alt="" />
                            <p>Levanta la cabeza por momentos</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgC1} alt="" />
                            <p>Puesto de pie extiende las piernas</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgD1} alt="" />
                            <p>Aprieta cualquier objeto colocado en su mano</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgE1} alt="" />
                            <p>Frunce el ceño y rechaza con parpadeo la luz intensa</p>
                        </SlideDesarrollo>  
                        <SlideDesarrollo>
                            <img src={imgF1} alt="" />
                            <p>Detiene sus movimientos al oír un sonido</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgG1} alt="" />
                            <p>Sonríe con la voz de su madre</p>
                        </SlideDesarrollo> 
                        <SlideDesarrollo>
                            <img src={imgH1} alt="" />
                            <p>Llora por una causa: hambre, frío, sueño</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgI1} alt="" />
                            <p>Cuando llora, se tranquiliza al ser alzado o acariciado</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgJ1} alt="" />
                            <p>Chupa</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgL1} alt="" />
                            <p>Demuestra estar atento</p>
                        </SlideDesarrollo>
                    </PresentacionDesarrolloIntegral>
                </>
            );
        if(edadEnMeses === 2)
            return (
                <>
                    <PresentacionDesarrolloIntegral>
                        <SlideDesarrollo>
                            <img src={imgC2} alt="" />
                            <p>Parado, no sostiene el peso de su cuerpo</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgE2} alt="" />
                            <p>Sigue con la mirada objetos sin sonido en ángulo de 90°</p>
                        </SlideDesarrollo> 
                        <SlideDesarrollo>
                            <img src={imgH2} alt="" />
                            <p>Emite sonidos o "agú" cuando se le habla</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgI2} alt="" />
                            <p>Sonríe ante cualquier rostro</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgL2} alt="" />
                            <p>Al contacto con un objeto, abre y cierra la mano</p>
                        </SlideDesarrollo>
                    </PresentacionDesarrolloIntegral>
                </>
            );
        if(edadEnMeses === 3)
            return (
                <>
                    <PresentacionDesarrolloIntegral>
                        <SlideDesarrollo>
                            <img src={imgA3} alt="" />
                            <p>La cabeza acompaña al movimiento del tronco, no cae</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgB3} alt="" />
                            <p>Apoyo inestable sobre antebrazos</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgD3} alt="" />
                            <p>Manos abiertas, abre brazo ante objeto</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgE3} alt="" />
                            <p>Sigue con la mirada objetos cercanos sin sonido en un águlo de 180°</p>
                        </SlideDesarrollo> 
                        <SlideDesarrollo>
                            <img src={imgF3} alt="" />
                            <p>Voltea al oír el sonido de la campana</p>
                        </SlideDesarrollo> 
                        <SlideDesarrollo>
                            <img src={imgI3} alt="" />
                            <p>Responde diferente a la voz molesta y a la voz alegre</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgK3} alt="" />
                            <p>Juega con sus manos</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgL3} alt="" />
                            <p>Se alegra cuando le van a dar el pecho</p>
                        </SlideDesarrollo>
                    </PresentacionDesarrolloIntegral>
                </>
            );
        if(edadEnMeses === 4)
            return (
                <>
                    <PresentacionDesarrolloIntegral>
                        <SlideDesarrollo>
                            <img src={imgD4} alt="" />
                            <p>Une sus brazos en línea media y toma un objeto con ambas manos</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgJ4} alt="" />
                            <p>Toma algo que se le ponga en la cuchara</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgK4} alt="" />
                            <p>Lleva los juguetes a la boca</p>
                        </SlideDesarrollo>
                    </PresentacionDesarrolloIntegral>
                </>
            )
        if(edadEnMeses === 5)
            return (
                <>
                    <PresentacionDesarrolloIntegral>   
                        <SlideDesarrollo>
                            <img src={imgA5} alt="" />
                            <p>Dorso recto, apoyo hacia adelante con descarga de peso</p>
                        </SlideDesarrollo>    
                        <SlideDesarrollo>
                            <img src={imgC5} alt="" />
                            <p>Comienza a pararse</p>
                        </SlideDesarrollo>   
                        <SlideDesarrollo>
                            <img src={imgG5} alt="" />
                            <p>Reconoce su nombre</p>
                        </SlideDesarrollo>     
                        <SlideDesarrollo>
                            <img src={imgH5} alt="" />
                            <p>Se repite a sí mismo y en respuesta a los demás</p>
                        </SlideDesarrollo> 
                        <SlideDesarrollo>
                            <img src={imgJ5} alt="" />
                            <p>Lleva a la boca algo que se le pone en la mano</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgK5} alt="" />
                            <p>Juega con sus manos y pies</p>
                        </SlideDesarrollo>      
                    </PresentacionDesarrolloIntegral>
                </>
            );
        if(edadEnMeses === 6)
            return(
                <>
                    <PresentacionDesarrolloIntegral>
                        <SlideDesarrollo>
                            <img src={imgB6} alt="" />
                            <p>Gira sobre su cuerpo fácilmente </p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgD6} alt="" />
                            <p>Coge un objeto en cada mano</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgF6} alt="" />
                            <p>Localiza, diferencia y reacciona ante diferentes sonidos con movimientos completos de cabeza</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgG6} alt="" />
                            <p>Comprende "upa", "ven" y "chau"</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgI6} alt="" />
                            <p>Toca su imagen en el espejo</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgJ6} alt="" />
                            <p>Bebe del vaso con ayuda</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgK6} alt="" />
                            <p>Coge y golpea objetos y repite seriadamente el golpe</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgL6} alt="" />
                            <p>Mira cuando cae un objeto</p>
                        </SlideDesarrollo>
                    </PresentacionDesarrolloIntegral>
                </>
            );
        if(edadEnMeses === 7)
            return (
                <>
                    <PresentacionDesarrolloIntegral>
                        <SlideDesarrollo>
                            <img src={imgA7} alt="" />
                            <p>Sentado sin apoyo</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgH7} alt="" />
                            <p>Dice "pa-pa", "ma-ma" a cualquier persona</p>
                        </SlideDesarrollo>
                    </PresentacionDesarrolloIntegral>
                </>
            );
        if(edadEnMeses === 8)
            return (
                <>
                    <PresentacionDesarrolloIntegral>
                        <SlideDesarrollo>
                            <img src={imgD8} alt="" />
                            <p>Pinza índice, pulgar torpe</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgI8} alt="" />
                            <p>Llama o grita para establecer contacto con otros</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgK8} alt="" />
                            <p>Lanza objetos a cierta distancia y disfruta con el sonido</p>
                        </SlideDesarrollo>
                    </PresentacionDesarrolloIntegral>
                </>
            );
        if(edadEnMeses === 9)
            return (
                <>
                    <PresentacionDesarrolloIntegral>
                        <SlideDesarrollo>
                            <img src={imgG9} alt="" />
                            <p>Comprende el "NO"</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgL9} alt="" />
                            <p>Encuentra objetos ocultos</p>
                        </SlideDesarrollo>
                    </PresentacionDesarrolloIntegral>
                </>
            );
        if(edadEnMeses === 10)
            return (
                <>
                    <PresentacionDesarrolloIntegral>
                        <SlideDesarrollo>
                            <img src={imgC10} alt="" />
                            <p>Camina apoyándose en las cosas</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgH10} alt="" />
                            <p>Dice "pa-pa", "ma-ma"</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgL10} alt="" />
                            <p>Busca el juguete en la caja</p>
                        </SlideDesarrollo>
                    </PresentacionDesarrolloIntegral>
                </>
            );

        if(edadEnMeses === 11)
            return (
                <>
                    <PresentacionDesarrolloIntegral>
                        <SlideDesarrollo>
                            <img src={imgD11} alt="" />
                            <p>Pinza fina</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgG11} alt="" />
                            <p>Responde a una orden simple e identifica objetos</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgI11} alt="" />
                            <p>Imita gestos</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgJ11} alt="" />
                            <p>Come del plato con sus manos</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgK11} alt="" />
                            <p>Sujeto de la mano, empuja la pelota con el pie</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgL11} alt="" />
                            <p>Explora su juguete</p>
                        </SlideDesarrollo>
                    </PresentacionDesarrolloIntegral>
                </>
            );
        if(edadEnMeses === 12)
            return (
                <>
                    <PresentacionDesarrolloIntegral>
                        <SlideDesarrollo>
                            <img src={imgC12} alt="" />
                            <p>Camina solo, con pobre equilibrio y piernas separadas</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgH12} alt="" />
                            <p>Dice dos palabras sueltas, además de papá y mamá</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgI12} alt="" />
                            <p>Ofrece un juguete</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgJ12} alt="" />
                            <p>Forcejea hasta quitarse los zapatos</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgL12} alt="" />
                            <p>Hace garabatos</p>
                        </SlideDesarrollo>
                    </PresentacionDesarrolloIntegral>                                               
                </>
            )
        //EDAD - 1 AÑO 3 MESES
        if (edadEnMeses > 12 && edadEnMeses <= 15 ) {
            return (
                <>
                    <PresentacionDesarrolloIntegral>
                        <SlideDesarrollo>
                            <img src={imgD15} alt="" />
                            <p>Mete un frijol en un frasco</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgI15} alt="" />
                            <p>Come en la mesa con los demás</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgK15} alt="" />
                            <p>Arrastra juguetes</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgL15} alt="" />
                            <p>Identifica figuras de objetos comunes</p>
                        </SlideDesarrollo>
                    </PresentacionDesarrolloIntegral>                                               
                </>
            )
            
        }

        //EDAD - 1 AÑO 6 MESES
        if (edadEnMeses > 15 && edadEnMeses <= 18) {
            return (
                <>
                    <PresentacionDesarrolloIntegral>
                        <SlideDesarrollo>
                            <img src={imgA18} alt="" />
                            <p>Sentado en el suelo, se para solo</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgC18} alt="" />
                            <p>Corre (NO es caminar rápido)</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgD18} alt="" />
                            <p>Hace torres de 3 cubos</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgG18} alt="" />
                            <p>Distingue entre tú y yo</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgH18} alt="" />
                            <p>Palabras frases "mamá teta"</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgI18} alt="" />
                            <p>Inita tareas simples de la casa</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgJ18} alt="" />
                            <p>Avisa sus necesidades</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgK18} alt="" />
                            <p>Defiende su juguete</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgL18} alt="" />
                            <p>Utiliza un objeto para alcanzar otro</p>
                        </SlideDesarrollo>
                    </PresentacionDesarrolloIntegral>                                               
                </>
            )
            
        }

        //EDAD - 1 AÑO 9 MESES
        if (edadEnMeses > 18 && edadEnMeses <= 21) {
            return (
                <>
                    <PresentacionDesarrolloIntegral>
                        <SlideDesarrollo>
                            <img src={imgD21} alt="" />
                            <p>Hace torres de 5 cubos</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgG21} alt="" />
                            <p>Comprende dos frases sencillas consecutivas: "Recoge el cubo y dámelo"</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgJ21} alt="" />
                            <p>Intenta quitarse prendas inferiores</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgK21} alt="" />
                            <p>Juega con otros niños</p>
                        </SlideDesarrollo>
                    </PresentacionDesarrolloIntegral>                                               
                </>
            )
            
        }

        //EDAD - 2 AÑOS
        if (edadEnMeses > 21 && edadEnMeses <= 24) {
            return (
                <>
                    <PresentacionDesarrolloIntegral>
                        <SlideDesarrollo>
                            <img src={imgD24} alt="" />
                            <p>Hace torres de 7 cubos</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgG24} alt="" />
                            <p>Comprende tres frases: "Sientate, quitate los zapatos, dámelos"</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgH24} alt="" />
                            <p>Dice oraciones simples: "Mama vamo calle", "Mama quiero pan"</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgI24} alt="" />
                            <p>Desenrosca un tapón para mirar dentro</p>
                        </SlideDesarrollo>
                    </PresentacionDesarrolloIntegral>                                               
                </>
            )
            
        }

        //EDAD - 2 AÑOs 6 MESES
        if (edadEnMeses > 24 && edadEnMeses <= 30) {
            return (
                <>
                    <PresentacionDesarrolloIntegral>
                        <SlideDesarrollo>
                            <img src={imgD30} alt="" />
                            <p>Hace puentes de 3 cubos</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgG30} alt="" />
                            <p>Pasa página, elige figura del libro y las nomina</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgI30} alt="" />
                            <p>Intenta enroscar</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgJ30} alt="" />
                            <p>Se pone alguna ropa</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgK30} alt="" />
                            <p>Juego social: sabe esperar su turno</p>
                        </SlideDesarrollo>
                        <SlideDesarrollo>
                            <img src={imgL30} alt="" />
                            <p>Coloca los aros en orden de tamaño</p>
                        </SlideDesarrollo>
                    </PresentacionDesarrolloIntegral>                                               
                </>
            )
        }

        return(
            <h2 style={{height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '-10%'}}>
                Lo sentimos, solo disponible para niños de hasta 2 años 6 meses
            </h2>
        )

    }

    // const [open, setOpen]= useState(false)
    return (
        <div style={{height: '60vh'}}>
            <div className='contenedorRedireccion'>
                <div className="datosDesarrolloIntegral">
                    <div className='datosDesarrollo' key={datosPaciente._id}>
                        <p className='pacienteDatosDesarrollo'>
                            <strong>{datosPaciente.nombres_paciente}</strong>
                            
                        </p>
                        <br />
                        <h3 className='tituloDatosDesarrollo'>
                            <strong>DESARROLLO INTEGRAL DEL NIÑO</strong>
                        </h3>
                        <p className='edadDatosDesarrollo'>
                            <strong>
                                Edad: {years + ' A ' + months + ' M ' + days + ' D '}
                            </strong>
                        </p>
                        <br />
                        {/* <p>
                        https://www.saludarequipa.gob.pe/archivos/cred/NORMATIVA%20CRED.pdf
                        <br />
                        https://aprendiendoconjulia.com/wp-content/uploads/2014/05/desarrollo_psicomotriz-1024x614.jpg
                        <br />
                        https://www.hospitalsjl.gob.pe/ArchivosDescarga/Campana/
                        SomosLecheros/MaterialesComunicacion/PDF/CredParedA1.pdf

                        </p> */}
                        {DesarrolloNiñoMeses()}
                    </div>
                </div>
                <div className='btnRegresarDesarrollo'>
                    <div style={{margin:'auto'}}>
                        <button className='cta' onClick={()=>{history.push(`/hijo/${id}`)}}>
                            <span>Regresar</span>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesarrolloIntegral


