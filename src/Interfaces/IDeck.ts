enum Color {
    spades,
    diamonds,
    hearts,
    clubs
}

type CardFigure = "2" | "3" | "5" | "4" | "6" | "7" | "8" | "9" | "10" | "A" | "Q" | "K" | "J";

type CardValue = 1 | 2 | 3 | 4 | 5 | 6| 7 | 8 | 9 | 10 | 11;

type Card = {
    figure: CardFigure;
    value: CardValue;
    color: Color;
}

export interface IDeck {
    drawCard(): Card | undefined;
    shuffle(): void;
}

export interface IPlayer {
    hand: Card[];   
}

export interface IDealer {
    getCard(): Card;
}

class Deck implements IDeck {
    deck: Card[];
    constructor(cards: Card[]) {
        this.deck = cards;
    }
    public drawCard() {
        return this.deck.pop();
    }
    public shuffle(): void {
        this.deck.sort();
    }
}

class Dealer implements IDealer {
    deck: IDeck;
    constructor(currentDeck: IDeck) {
        this.deck = currentDeck;
        this.deck.shuffle();
    }
    getCard(): Card {
        throw new Error("Method not implemented.");
    }
    public drawCard() {
        return this.deck.drawCard();
    }
}

class Player implements IPlayer {
    hand: Card[];
    getCardFromDealer() {
        return Dealer.gimmeCard();
    }
}