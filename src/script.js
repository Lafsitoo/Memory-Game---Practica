// Inicialización de variables
let uncoveredCards = 0;
let cardOne = null;
let cardTwo = null;
let resultOne = null;
let resultTwo = null;
let moves = 0;
let correct = 0;
let timer = false;
let time = 40;
let timerInitial = time;
let timeRemaining = null;

// Sonidos Variables
let clickAudio = new Audio("./sounds/click.wav")
let correctAudio = new Audio("./sounds/correct.wav")
let incorrectAudio = new Audio("./sounds/incorrect.wav")
let loseAudio = new Audio("./sounds/lose.wav")
let winAudio = new Audio("./sounds/win.wav")

// Archivos HTML
let uncoveredMoves = document.getElementById("moves");
let uncoveredCorrects = document.getElementById("correct");
let uncoveredTime = document.getElementById("time");

// Generación de numeros
let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
// Lo desordenamos
numbers = numbers.sort(() => {
  return Math.random() - 0.5;
});
console.log(numbers); // Comporbamos

// Funciones
function counter() {
  timeRemaining = setInterval(() => {
    time--;
    uncoveredTime.innerHTML = `Time: ${time} segs`;
    if (time == 0) {
      clearInterval(timeRemaining);
      blockCards();
      loseAudio.play()
    }
  }, 1000);
}

function blockCards() {
  for (let i = 0; i <= 15; i++) {
    let cardBlock = document.getElementById(i);
    cardBlock.innerHTML = `<img src="./images/${numbers[i]}.png" alt="imageCard">`;;
    cardBlock.disabled = true;
  }
}

// Función principal
function showLetter(id) {
  // Temporizador
  if (timer == false) {
    counter();
    timer = true;
  }

  uncoveredCards++;
  console.log(uncoveredCards);

  if (uncoveredCards == 1) {
    // Mostrar primer num
    cardOne = document.getElementById(id);
    resultOne = numbers[id];
    cardOne.innerHTML = `<img src="./images/${resultOne}.png" alt="imageCard">`;
    clickAudio.play()

    // Deshabilitamos el boton
    cardOne.disabled = true;
  } else if (uncoveredCards == 2) {
    // Mostrar segundo num
    cardTwo = document.getElementById(id);
    resultTwo = numbers[id];
    cardTwo.innerHTML = `<img src="./images/${resultTwo}.png" alt="imageCard">`;

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
      correctAudio.play()

      // End Game
      if (correct == 8) {
        winAudio.play()
        clearInterval(timeRemaining);
        uncoveredCorrects.innerHTML = `Corrects: ${correct} 🎉`;
        uncoveredTime.innerHTML = `Ending in ${timerInitial - time} segs ⏱`;
        uncoveredMoves.innerHTML = `Moves: ${moves} 🤘`;
      }
    } else {
      // Mostrar brevemente y ocultar
      incorrectAudio.play()
      setTimeout(() => {
        cardOne.innerHTML = " ";
        cardTwo.innerHTML = " ";
        cardOne.disabled = false;
        cardTwo.disabled = false;
        uncoveredCards = 0;
      }, 800);
    }
  }
}
