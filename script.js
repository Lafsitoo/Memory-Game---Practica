// Inicialización de variables
let uncoveredCards = 0;
let cardOne = null;
let cardTwo = null;
let resultOne = null;

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
    // Mostrar pimer num
    cardOne = document.getElementById(id);
    resultOne = numbers[id];
    cardOne.innerHTML = resultOne;
  }
}
