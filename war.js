document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startGame");
    const gameResultDiv = document.getElementById("gameResult");
  
    startButton.addEventListener("click", function () {
      
      const deck = new Deck();
      deck.initializeDeck();
      deck.shuffle();
      const player1 = new Player('Player 1');
      const player2 = new Player('Player 2');
  
      
  
      
      gameResultDiv.innerHTML = `Game Over! ${player1.name} scored ${player1.score}, ${player2.name} scored ${player2.score}. ${
        player1.score > player2.score ? player1.name : player2.name
      } wins!`;
    });
  });
  