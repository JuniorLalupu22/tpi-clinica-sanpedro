const getFecha = ()=>{
    var f=new Date();
    var a = f.getFullYear()
    var m = f.getMonth()+1
    var d = f.getDate()
    var fecha = ''
    d   = (d>9) ? d:`0${d}`
    fecha = (m > 9) ? `${a}-${m}-${d}`:`${a}-0${m}-${d}` 
    return fecha
}
export default getFecha
