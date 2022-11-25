import { CardStack } from "./cardStack";
import { Player } from "./Player";
import { PlayerCards } from "./PlayerCards";

export enum GameStatus {
  WAITING = "waiting",
  STRTED = "started",
  FINISHED = "finished",
}

export class Game {
  players: Player[] = [];
  status: String = GameStatus.WAITING;
  playersCards: PlayerCards[] = [];
  cardStack = new CardStack();

  addPlayer(playerObj: Player) {
    this.players.push(playerObj);
  }

  startGame() {
    this.status = GameStatus.STRTED;
    for (let i = 1; i <= this.players.length; i++) {
      this.playersCards.push(this.cardStack.distributCards(3));
    }
  }

  getWinner() {
    let winnerPlayerIndex = 0;
    for (let i = 1; i < this.players.length; i++) {
      if (
        this.playersCards[winnerPlayerIndex].finalWeight <
        this.playersCards[i].finalWeight
      ) {
        winnerPlayerIndex = i;
      }
    }

    return this.players[winnerPlayerIndex];
  }
}
