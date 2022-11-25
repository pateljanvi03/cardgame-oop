import { Card } from "./Card";

export class PlayerCards {
  playerCards: Card[] = [];

  constructor(distributedCards: Card[]) {
    this.playerCards = distributedCards;
  }

  get finalWeight() {
    let ruleMultiplier = 1;
    if (this.hasSameCard()) {
      ruleMultiplier = 10000;
    } else if (this.hasSequence() && this.hasSameType()) {
      ruleMultiplier = 5000;
    } else if (this.hasSequence()) {
      ruleMultiplier = 400;
    } else if (this.hasSameType()) {
      ruleMultiplier = 30;
    }

    return (
      (this.playerCards[0].weightage * 100) + 
      (this.playerCards[1].weightage * 10) +
      (this.playerCards[2].weightage)
    ) * ruleMultiplier;
  }

  hasSameType() {
    return (
      this.playerCards[0].type == this.playerCards[1].type &&
      this.playerCards[1].type == this.playerCards[2].type
    );
  }

  hasSequence() {
    return (
      this.playerCards[0].weightage == this.playerCards[1].weightage + 1 &&
      this.playerCards[1].weightage == this.playerCards[2].weightage + 1
    );
  }

  hasSameCard() {
    return (
      this.playerCards[0].index == this.playerCards[1].index &&
      this.playerCards[1].index == this.playerCards[2].index
    );
  }
}
