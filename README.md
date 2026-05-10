# Simon Says
 
Juego de memoria por consola desarrollado en JavaScript con Node.js. El jugador debe repetir una secuencia de colores que va creciendo en cada ronda.
 
## Requisitos
 
- Node.js instalado
## Cómo ejecutar
 
```
node main.js
```
 
## Cómo se juega
 
1. El programa te pide tu nombre.
2. Se muestra una secuencia de colores que debes memorizar.
3. Pulsa Enter para ocultarla e introduce los colores uno a uno.
4. Si aciertas, la secuencia crece en un color más.
5. El juego termina si fallas o si completas la secuencia máxima.
## Colores disponibles
 
| Letra | Color  |
|-------|--------|
| R     | Rojo   |
| V     | Verde  |
| A     | Azul   |
| D     | Dorado |
 
## Funciones
 
- `charToColor(color)` — convierte una letra al valor del enumerado de colores.
- `intToColor(numero)` — convierte un número al valor del enumerado de colores.
- `tColorToString(color)` — convierte un valor del enumerado a su nombre en texto.
- `generarSecuencia(numColores)` — genera el array de colores aleatorios.
- `comprobarColor(secuenciaColores, indice, color)` — comprueba si el color introducido es correcto.
- `mostrarSecuencia(secuenciaColores, numero)` — muestra los primeros `numero` colores de la secuencia.
- `comenzarJuego(nombre, rl)` — función principal que controla el flujo del juego.
 
