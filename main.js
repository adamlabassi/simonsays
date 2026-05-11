// Código necesario para poder leer de consola
const readline = require("readline");

// Función auxiliar para hacer preguntas al usuario y esperar su respuesta. La usaremos cada vez que queramos preguntar algo
function pregunta(rl, texto) {
  return new Promise((resolve) => {
    rl.question(texto, resolve);
  });
}

const tColores = {
    rojo: 0,
    verde: 1,
    azul: 2,
    dorado: 3,
    blanco: 4,
    marron: 5,
    naranja: 6
}

//color = "V"
//numero = 0

const MAX_COLORES_SEQ = new Array(12)
numColores = Object.keys(tColores).length
secuenciaColores = 0
indice = 0

// // Código necesario para poder leer de consola
// const readline = require("readline");

// // Función auxiliar para hacer preguntas al usuario y esperar su respuesta. La usaremos cada vez que queramos preguntar algo
// function pregunta(rl, texto) {
//   return new Promise((resolve) => {
//     rl.question(texto, resolve);
//   });
// }






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
        case "b":
            return tColores.blanco
        case "m":
            return tColores.marron
        case "n":
            return tColores.naranja            
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
    case 4: 
        return tColores.blanco
    case 5:
        return tColores.marron
    case 6:
        return tColores.naranja            
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
        
        case tColores.blanco:
            return "blanco"
        
        case tColores.marron:
            return "marron"

        case tColores.naranja:
            return "naranja"
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


function comprobarColor(secuenciaColores, indice, color){

    return color==secuenciaColores[indice];
    
}

function mostrarSecuencia(secuenciaColores, numero) {
    let resultado = "";
    for (let i = 0; i < numero; i++) {
        resultado += tColorToString(secuenciaColores[i]) + " ";
    }
    console.log(`Secuencia: ${resultado.trim()}`);
}




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


async function comenzarJuego(nombre, rl) {
    const numColores = Object.keys(tColores).length;
    const secuenciaColores = generarSecuencia(numColores);
    let longitudActual = 3;
    let juegoTerminado = false;

    while (!juegoTerminado && longitudActual <= MAX_COLORES_SEQ.length) {
        let fallo = false;

        mostrarSecuencia(secuenciaColores, longitudActual);
        await pregunta(rl, "Memoriza la secuencia y pulsa Enter para continuar...");
        console.clear();

        console.log(`${nombre}, introduce la secuencia de ${longitudActual} colores:`);
        console.log("(R = Rojo, V = Verde, A = Azul, D = Dorado)");

        for (let i = 0; i < longitudActual && !fallo; i++) {
            let color = null;
            while (color === null) {
                const entrada = await pregunta(rl, `Color ${i + 1}: `);
                color = charToColor(entrada);
                if (color === null) {
                    console.log("Color no válido, inténtalo de nuevo.");
                }
            }
            if (!comprobarColor(secuenciaColores, i, color)) {
                fallo = true;
            }
        }

        if (fallo) {
            console.log(`Has fallado. ¡Fin de la partida!`);
            juegoTerminado = true;
        } else if (longitudActual === MAX_COLORES_SEQ.length) {
            console.log(`¡Enhorabuena ${nombre}, has ganado!`);
            juegoTerminado = true;
        } else {
            console.log(`¡Enhorabuena, has acertado la secuencia número ${longitudActual - 2}!`);
            longitudActual++;
        }
    }
}



main().catch(console.error);