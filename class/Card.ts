export enum CardTypes {
  SPADE = "spades",
  CLUBE = "clubs",
  DIMOND = "diamonds",
  HEART = "hearts",
}

export class Card {
  type: CardTypes;
  index: number;

  constructor(type: CardTypes, index: number) {
    this.type = type;
    this.index = index;
  }

  get sign() {
    switch (this.index) {
      case 1:
        return "A";
      case 11:
        return "J";
      case 12:
        return "Q";
      case 13:
        return "K";
      default:
        return this.index + "";
    }
  }

  get weightage() {
    switch (this.sign) {
      case "A":
        return 14;
      case "J":
        return 11;
      case "Q":
        return 12;
      case "K":
        return 13;
      default:
        return parseInt(this.sign);
    }
  }
}
