// Inicialización de variables
let uncoveredCards = 0;
let cardOne = null;
let cardTwo = null;
let resultOne = null;
let resultTwo = null;
let moves = 0;
let correct = 0;

// Archivos HTML
let uncoveredMoves = document.getElementById("moves");
let uncoveredCorrects = document.getElementById("correct");

// Generación de numeros
let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
// Lo desordenamos
numbers = numbers.sort(() => {
  return Math.random() - 0.5;
});
console.log(numbers); // Comporbamos

// Funcion principal
function showLetter(id) {
  uncoveredCards++;
  console.log(uncoveredCards);

  if (uncoveredCards == 1) {
    // Mostrar primer num
    cardOne = document.getElementById(id);
    resultOne = numbers[id];
    cardOne.innerHTML = resultOne;

    // Deshabilitamos el boton
    cardOne.disabled = true;
  } else if (uncoveredCards == 2) {
    // Mostrar segundo num
    cardTwo = document.getElementById(id);
    resultTwo = numbers[id];
    cardTwo.innerHTML = resultTwo;

    // Tambien deshabilitamos el baton
    cardTwo.disabled = true;

    // Sumamos +1 a los movimientos
    moves++;
    uncoveredMoves.innerHTML = `Moves: ${moves}`;

    if (resultOne == resultTwo) {
      // Seteamos
      uncoveredCards = 0;

      // +1 Aciertos
      correct++;
      uncoveredCorrects.innerHTML = `Corrects: ${correct}`;
    }
  }
}
