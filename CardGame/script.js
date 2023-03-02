
var gameState = {
    playerOne: {
        name: 1,
        deck: [],
        lifePoints: 8000,
        hand: [],
        inPlay: {}
    },
    playerTwo: {
        name: 2,
        deck: [],
        lifePoints: 8000,
        hand: [],
        inPlay: {}
    },
    complete: false
}

var p1 = gameState.playerOne;
var p2 = gameState.playerTwo;

var p1Deck = gameState.playerOne.deck;
var p1Hand = gameState.playerOne.hand;
var p2Deck = gameState.playerTwo.deck;
var p2Hand = gameState.playerTwo.hand;

var cards = [
    {
        name: "Poison Dragon",
        image: "./images/rose.png",
        attack: 1900,
        defense: 2000
    },
    {
        name: "Rose Witch",
        image: "./images/rose.png",
        attack: 2100,
        defense: 2000
    },
    {
        name: "Necro Knight",
        image: "./images/rose.png",
        attack: 1900,
        defense: 2000
    }
];


function startGame() {
    // Construct the decks the players are using.
    gameState.playerOne.deck.push(cards[0])
    gameState.playerTwo.deck.push(cards[1])

    // Players draw or play a single card.

}

function drawCard(player, num) {
    while (num > 0) {
        var drawnCard = player.deck.pop()
        player.hand.push(drawnCard)
        console.log(`Player ${player.name} has drawn : ${drawnCard.name}`)
        num--
    }
}

function playCard(player, card) {
    var playedCard = player.hand[card];
    console.log(`Player ${player.name} plays ${playedCard.name}`)
    player.inPlay = playedCard;

}


startGame();
drawCard(p1, 1);
drawCard(p2, 1);
playCard(p1, 0);

/* 
TO DO LIST:

Create Function for Cards Battling/Deducting lifepoints
Create Function for graveyard/destroyed monsters
Create a way for tracking turns( Use Gamestate to decide active player!)


*/