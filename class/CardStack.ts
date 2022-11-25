import { Card, CardTypes } from "./Card";
import { PlayerCards } from "./PlayerCards";

export class CardStack {
  cards: Card[] = [];
  shuffledCards: Card[] = [];

  constructor() {
    this.initializationOfCards(CardTypes.CLUBE);
    this.initializationOfCards(CardTypes.DIMOND);
    this.initializationOfCards(CardTypes.HEART);
    this.initializationOfCards(CardTypes.SPADE);
    this.shuffleCards();
  }

  initializationOfCards(cardtype: CardTypes) {
    for (let i = 1; i < 14; i++) {
      this.cards.push(new Card(cardtype, i));
    }
  }

  shuffleCards() {
    this.shuffledCards = this.cards.sort(() => (Math.random() > 0.5 ? 1 : -1));
  }

  distributCards(numberOfCards: number) {
    let distributedCards = this.shuffledCards
      .slice(0, numberOfCards)
      .sort((a, b) => b.weightage - a.weightage);
    this.shuffledCards.splice(0, 3);

    return new PlayerCards(distributedCards);
  }
}
