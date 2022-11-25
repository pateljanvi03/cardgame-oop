import { Player } from './class/Player'
import { Game } from './class/Game'

const player1 = new Player("janu", 100);
const player2 = new Player("h", 200);

// console.log(player1, player2)

const game = new Game();

game.addPlayer(player1);
game.addPlayer(player2);
game.startGame();

console.log('Player : ' + player1.name, game.playersCards[0])
console.log('Player : ' + player2.name, game.playersCards[1])

console.log('Winner :', game.getWinner())