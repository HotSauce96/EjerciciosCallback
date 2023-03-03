function saludar(){
    setTimeout(function(){
    console.log("Hola, ¿qué tal, cómo estás?")
    despedir()
    }, 2000) 
    
}


function despedir(){
    console.log("Adiós.. fin del programa")

}

saludar();
