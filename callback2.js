
function principal(numeros, callback){
    setTimeout(function(){
        let sumatoria = 0;
        numeros.forEach(function (numero){
            sumatoria = sumatoria + numero
        })
        callback(sumatoria)
    }, 4000)

}

principal([1,2,3,4,5], function(sumatoria){
    let multiplicacion = sumatoria * 100;
    console.log(`La suma es ${multiplicacion}`)
});