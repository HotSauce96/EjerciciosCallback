let equipos=[{nombre: "Atletico Nacional",
    numeroTitulos: 32,
    anoCreacion: 1950,
    inversion: 200}, 
    {
    nombre: "Medellin",
    numeroTitulos: 4,
    anoCreacion: 1950,
    inversion: 50
    },{
    nombre: "Aguilas Doradas",
    numeroTitulos: 10,
    anoCreacion: 1950,
    inversion: 400
}]


function filtrarEquipos(equipos, sumarInversiones){
    setTimeout(function(){
        let filtro = equipos.filter(equipo => equipo.numeroTitulos > 5 && equipo.inversion > 100)
        sumarInversiones(filtro)
    }, 3000)
}

function sumarInversiones(equipos){
    let sumatoria = 0;
    equipos.forEach(equipo => sumatoria = sumatoria + equipo.inversion)
    console.log(`La sumatoria de la inversion de los equipos es: ${sumatoria}`)
}

filtrarEquipos(equipos, sumarInversiones);
