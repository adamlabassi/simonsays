const tColores = {
    // rojo: "R",
    // verde:"V",
    // azul:"A",
    // dorado:"D"

    rojo: 0,
    verde: 1,
    azul: 2,
    dorado: 3
}

//color = "V"
//numero = 0
numColores = 4
secuenciaColores = 0
indice = 0




function charToColor(color){
    switch(color.toLowerCase()){

        case "r":
            return tColores.rojo
        case "v":
            return tColores.verde
        case "a":
            return tColores.azul
        case "d":
            return tColores.dorado
        default:
            return null;        
    }   
}

function intToColor(numero){

    switch(numero){

    case 0:
        return tColores.rojo
    case 1:
        return tColores.verde
    case 2:
        return tColores.azul
    case 3:
        return tColores.dorado
    }


}


function generarSecuencia(numColores){

    const MAX_COLORES_SEQ = new Array(12)

    const array = new Array(MAX_COLORES_SEQ.length)


    for(i=0;i<array.length;i++){
        array[i]=(Math.floor(Math.random()*4))
    }

    return array
}

function tColorToString(color){
    switch(color){
        case color == tColores.rojo:
            return "rojo"
        
        case color == tColores.verde:
            return "verde"
        
        case color == tColores.azul:
            return "azul"
        
        case color == tColores.dorado:
            return "dorado"
    }
}

console.log(generarSecuencia())

