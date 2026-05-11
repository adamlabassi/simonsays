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
2. Selecciona el modo de juego en el menú: sencillo o difícil.
3. Se muestra una secuencia de colores que debes memorizar.
4. Pulsa Enter para ocultarla e introduce los colores uno a uno.
5. Escribe `x` en cualquier momento para usar una ayuda (el juego te revela el siguiente color). Dispones de 3 ayudas por partida.
6. Si aciertas, la secuencia crece en un color más.
7. El juego termina si fallas o si completas la secuencia máxima.

## Modos de juego

| Modo     | Colores disponibles | Rondas máximas |
|----------|---------------------|----------------|
| Sencillo | 4                   | 12             |
| Difícil  | 7                   | 15             |

## Colores disponibles

| Letra | Color   |
|-------|---------|
| R     | Rojo    |
| V     | Verde   |
| A     | Azul    |
| D     | Dorado  |
| B     | Blanco  |
| M     | Marrón  |
| N     | Naranja |

> Los colores Blanco, Marrón y Naranja solo aparecen en el modo difícil.

## Funciones

- `charToColor(color)` — convierte una letra al valor del enumerado de colores.
- `intToColor(numero)` — convierte un número al valor del enumerado de colores.
- `tColorToString(color)` — convierte un valor del enumerado a su nombre en texto.
- `generarSecuencia(modo)` — genera el array de colores aleatorios según el modo de juego.
- `comprobarColor(secuenciaColores, indice, color)` — comprueba si el color introducido es correcto.
- `mostrarSecuencia(secuenciaColores, numero)` — muestra los primeros `numero` colores de la secuencia.
- `utilizarAyuda(secuenciaColores, indice, numAyudas)` — revela el siguiente color correcto consumiendo una ayuda.
- `comenzarJuego(nombre, rl, modo, numAyudas)` — función principal que controla el flujo del juego.