import moment from "moment"

const calcularEdad = (fechaConsulta, fechaNac) =>{
    let a = moment(fechaConsulta)
    let b = moment(fechaNac)

    let years = a.diff(b, 'year')
    b.add(years, 'years')

    let months = a.diff(b, 'months')
    b.add(months, 'months')

    let days = a.diff(b, 'days')

    return {years, months, days}
}

export default calcularEdad