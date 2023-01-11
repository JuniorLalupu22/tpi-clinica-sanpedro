import { jsPDF } from "jspdf"
import 'jspdf-autotable'
import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import url from '../../keys/backend_keys';

const DocReceta = () => {
    // let { id } = useParams();
    // let id = item
    // const [Re, setRe] = useState({})
	// useEffect(() => {
	// 	fetch(`${url}/Receta/datosRe/${id}`)
	// 		.then((resp) => resp.json())
	// 		.then((data)=>{
	// 			setRe(data)
	// 		})
	// }, []);
	// const handleChange = (e)=>{
	// 	setRe({
	// 		...Re,
	// 		[e.target.name]: e.target.value
	// 	})
	// }

    var doc = new jsPDF('p', 'mm', [232, 208]) //Largo - Ancho
    // var doc = new jsPDF('p', 'mm')

    // IMG FONDO
    // var img3 = new Image();
    // img3.src = 'https://i.ibb.co/rpjBJJQ/4c22ac04af4148a30ee861a392e17a1a.jpg'
    // doc.addImage(img3, 'JPG', 0, 0);

    // //ENCABEZADO
    // doc.setFont("times", 'normal').setFontSize(18).setTextColor(46, 52, 102).text(40, 40, 'Dr. Juan Carlos Benites Herrera');
    // doc.setFont(undefined, 'normal').setFontSize(12).text(98, 60, 'MEDICO PEDRIATRA');
    // doc.setFont(undefined, 'normal').setFontSize(12).text(85, 80, 'C.M.P. 30305 - R.N.E. 19230');
    // //LÍNEAS ATENCIÓN
    // // doc.setLineWidth(0.5).line(35, 90, 280, 90)
    // // doc.setLineWidth(0.5).line(35, 90, 35, 115)
    // // doc.setLineWidth(0.5).line(35, 115, 280, 115)
    // // doc.setLineWidth(0.5).line(280, 90, 280, 115)
    // var img4 = new Image()
    // img4.src = 'https://i.ibb.co/2W9cfHZ/1.png'
    // doc.addImage(img4, 'PNG', 35, 85)
    
    // //SIGUE ENCABEZADO
    // // doc.setFont(undefined, 'normal').setFontSize(10).setTextColor(0, 0, 0).text(40, 100, 'Atención Especializada del Recién Nacido y Enfermedades')
    // // doc.setFont(undefined, 'normal').setFontSize(10).text(80, 110, 'del Niño en general - Vacunaciones')
    // doc.setFont(undefined, 'bold').setFontSize(10).setTextColor(46, 52, 102).text(15, 130, 'CONSULTORIO: Centro de Estimulación Temprana "Mi Bebé"')
    // doc.setFont(undefined, 'normal').setFontSize(8.5).text(15, 150, 'Almirante Villar N° 398 Urb. Santa Victoria - Telf: 074-273851 Cel. 942405980')
    // doc.setFont(undefined, 'normal').setFontSize(10).text(15, 170, 'Citas:       949 559 380                e-mail:jcbenitesh_1@hotmail.com')
    // doc.setFont(undefined, 'normal').setFontSize(20).setTextColor(46, 52, 102).text(360, 150, 'INDICACIONES')
    // //LÍNEA INDICACIONES
    // // doc.setLineWidth(2).line(355, 132, 505, 132)
    // // doc.setLineWidth(2).line(355, 155, 505, 155)
    // doc.setLineWidth(2).setDrawColor(46, 52, 102).rect(355, 132, 152, 25)
    // //doc.setFontSize(10).textWithLink('e-mail:jcbenitesh_1@hotmail.com', 150, 170, {url: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new'})

    // //LÍNEA ENCABEZADO ABAJO
    // doc.setLineWidth(4).setDrawColor(200, 83, 100).line(0, 180, 297.6, 180)
    
    // //IMG ENCABEZADO
    // //**WHATSAPP
    // var img = new Image();
    // img.src = 'https://i.ibb.co/jDdg4kJ/Whats-App-logo.png'
    // doc.addImage(img, 'PNG', 35, 160);

    // //** DERECHA
    // var img2 = new Image()
    // img2.src = 'https://i.ibb.co/xD2PrfG/Depositphotos-41909645-stock-illustration-babies-with-bottles.jpg'
    // doc.addImage(img2, 'JPG', 360, 20)

    var fondo = new Image()
    fondo.src = 'https://i.ibb.co/BTTGmhL/Aea-3.jpg'
    doc.addImage(fondo, 'JPG', 0, 0)

    // var tablas = new Image()
    // tablas.src = 'https://i.ibb.co/FsJM4gx/TABLAS.png'
    // doc.addImage(tablas, 'JPG', 120, 50)

    // var img = new Image()
    // img.src = 'https://i.ibb.co/0jr9wKD/2.png'
    // doc.addImage(img, 'JPG', 0, 20) 

    // var img2 = new Image()
    // img2.src = 'https://i.ibb.co/7g7R9KG/4.png'
    // doc.addImage(img2, 'JPG', 9.757, 238)

    
    // let dataT = []
    // for(let item in Re){
    //     dataT.push([Re[item]])
    // }

    //MEDICAMENTOS
    let data = [
        ['1. Maxicef 100 mg suspensión (#01 fo)', '1. Maxicef (refrigerar) - 5 ml a las 3pm x 7 días'],
        ['2. Enterogermina amp. bebibles (#01 caja)', '2. Enterogermina - 1 ampolla bebible mañana - tarde - noche x 5 días'],
        ['3. Electroral pediátrico (#01 fo)', '3. Electroral pediátrico - Dar en forma fraccionada de acuerdo a las pérdidas por deposiciones']
    ]

    // let dataR = []
    // for(let i=0; i<dataT[1].length; i++){
    //     data.push([(i+1) + '. ' + dataR[1][i].nombreMedicina + ' (' + dataR[1][i].cantidad + ')', (i+1) + '. ' + dataR[1][i].indicaciones])
    // }

    let datos = [
        ['6a 2m 3d', '20Kg', '117cm', '50cm']
    ]

    let paciente = [
        ['Alessandro Casas Palacios']
    ]

    let fecha = [
        ['01', '20', '2022']
    ]

    //TABLA MEDICAMENTOS
    doc.autoTable({
        body: data,
        theme:'plain',
        styles:{fontSize: 12, lineColor:[200, 83, 100], textColor:[0,0,0], halign: 'left', font: 'courier'}, //, fillColor: [166, 193, 200]
        startY:90,
        padding:5,
        margin:{left:2},
        columnStyles: {
            0: {columnWidth:107.5},
            1: {columnWidth:100},
        }
    })

    //TABLA DATOS PACIENTE
    doc.autoTable({
        head: [['Edad', 'Peso', 'Talla', 'PC']],
        body: datos,
        theme: 'striped',
        styles:{fontSize: 10, halign:'center', lineColor:[6, 137, 229]},
        startY: 50,
        margin:{left: 119.5},
        columnStyles:{
            0: {columnWidth:20},
            1: {columnWidth:20},
            2: {columnWidth:20},
            3: {columnWidth:20}
        }
    })

    //TABLA NOMBRE PACIENTE
    doc.autoTable({
        body: paciente,
        theme: 'plain',
        styles:{fontSize: 12, lineColor:[6, 137, 229]},
        startY: 73,
        margin:{left: 10},
        columnStyles:{
            0: {columnWidth:100}
        }
    })
    
    //TABLA FECHA

    doc.autoTable({
        head: [['PRÓXIMA CITA']],
        body:[''],
        theme: 'striped',
        styles:{fontSize: 10, halign:'center', lineColor:[6, 137, 229]},
        startY: 202.5,
        margin:{left: 110},
        columnStyles:{
            0: {columnWidth:45},
        }
    })

    doc.autoTable({
        //head: [['PROX', 'IMA ', 'CITA']],
        body: fecha,
        theme: 'striped',
        styles:{fontSize: 10, halign:'center', lineColor:[6, 137, 229]},
        startY: 210,
        margin:{left: 110},
        columnStyles:{
            0: {columnWidth:15},
            1: {columnWidth:15},
            2: {columnWidth:15}
        }
    })


    //PIE
    doc.setFont(undefined, 'bold').setFontSize(10).setTextColor('black').text(46, 210, 'Dr. Juan C. Benites Herrera');
    doc.setFont(undefined, 'normal').setFontSize(8).text(57, 215, 'MEDICO PEDRIATRA');
    doc.setFont(undefined, 'normal').setFontSize(8).text(52, 220, 'C.M.P. 30305 - R.N.E. 19230');
    //LÍNEA PIE FIRMA
    doc.setLineWidth(0.3).setDrawColor('black').line(42, 205, 96, 205);

    //LÍNEAS MITAD
    //doc.setLineWidth(4).setDrawColor(200, 83, 100).line(347, 0, 347, 840);
    //doc.setLineWidth(2).setLineDash([10, 10], 0).setDrawColor(200, 83, 100).line(305, 0, 305, 840);

    //LÍNEA RP
    doc.setLineWidth(0.3).line(10, 80, 100, 80)
    doc.setFont('helvetica', 'bold').setFontSize(10).text(10, 85, 'Rp. ')

    //doc.autoPrint()
    doc.output('dataurlnewwindow', 'Receta.pdf')
    //doc.save('Receta.pdf')
}

export default DocReceta
