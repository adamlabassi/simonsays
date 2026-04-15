const tColores = {
    rojo: 0,
    verde: 1,
    azul: 2,
    dorado: 3
}

//color = "V"
//numero = 0

const MAX_COLORES_SEQ = new Array(12)
numColores = Object.keys(tColores).length
secuenciaColores = 0
indice = 0

// Código necesario para poder leer de consola
const readline = require("readline");

// Función auxiliar para hacer preguntas al usuario y esperar su respuesta. La usaremos cada vez que queramos preguntar algo
function pregunta(rl, texto) {
  return new Promise((resolve) => {
    rl.question(texto, resolve);
  });
}

// Llamada a la función principal: inicializa el juego y gestiona la interacción con el usuario
async function main() {
  process.stdin.resume();
  const rl = readline.createInterface({
    input:  process.stdin,
    output: process.stdout,
  });

  console.log("¡Bienvenido a Simon dice!");
  const nombre = await pregunta(rl, "¿Cuál es tu nombre? ");
  console.log(`Hola ${nombre}, pulsa una tecla para empezar a jugar.`);

  await pregunta(rl, "");
  await comenzarJuego(nombre, rl);

  rl.close();
}






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
    default:
        return null;
    }


}

function tColorToString(color){
    switch(color){
        case tColores.rojo:
            return "rojo"
        
        case tColores.verde:
            return "verde"
        
        case tColores.azul:
            return "azul"
        
        case tColores.dorado:
            return "dorado"
    }
}




function generarSecuencia(numColores){

    //const MAX_COLORES_SEQ = new Array(12)

    const array = new Array(MAX_COLORES_SEQ.length)


    for(i=0; i<MAX_COLORES_SEQ.length; i++){
        array[i]=(Math.floor(Math.random()*numColores))
    }

    return array
}


function comprobarColor(secuenciaColores, indice, colores){

    return charToColor(color)==secuenciaColores[indice];
    
}

//console.log(generarSecuencia())


/*

Apunte para la función main
devuelve strings
imprime en columna

for (let i = 0; i < secuencia.length; i++) {
    const colorInt = secuencia[i];
    const color = intToColor(colorInt);
    const texto = tColorToString(color);
    console.log(texto);
}

*/


/*Apunte para la función main
devuelve strings
imprime en fila

const secuencia = generarSecuencia(12);

let resultado = "";

for (let i = 0; i < secuencia.length; i++) {
    const colorInt = secuencia[i];
    const color = intToColor(colorInt);
    const texto = tColorToString(color);
    resultado += texto + " ";
}

console.log(resultado.trim());
*/



// Necesario para la captura de errores
//main().catch(console.error);