// console.log('Fear is the mind killer.');


class Player {
  constructor(name){
    this.name = name;
    this.availableCards = [];
    this.usedCards = [];
  }
  playCard() {
    const cardChoice = prompt('Which Pokemon do you want to use?');
    for (let a = 0; a < player1.availableCards.length; a++) {
      let cardMatch;
      if (cardChoice.match(player1.availableCards[a].name)) {
        cardMatch = player1.availableCards[a];
        player1.usedCards.push(cardMatch);
        player1.availableCards.splice(a, 1);
        return cardMatch;
      }
    }
  }
};

class ComputerPlayer extends Player {
  playCard() {
    if (robot.availableCards.length > 1) {
      const random = Math.floor(Math.random() * (robot.availableCards.length - 1) + 1);
      const cardChoice = robot.availableCards[random];
      robot.usedCards.push(cardChoice);
      robot.availableCards.splice(random, 1);
      return cardChoice;
    } else {
      const cardChoice = robot.availableCards[0];
      robot.usedCards.push(cardChoice);
      robot.availableCards.splice(0, 1);
      return cardChoice;
    }
  } 
};

const game = {
  library: [
    {
      name: "Bulbasaur",
      damage: 60,
    },
    {
      name: "Caterpie",
      damage: 40,
    },
    {
      name: "Charmander",
      damage: 60,
    },
    {
      name: "Clefairy",
      damage: 50,
    },
    {
      name: "Jigglypuff",
      damage: 60,
    },
    {
      name: "Mankey",
      damage: 30,
    },
    {
      name: "Meowth",
      damage: 60,
    },
    {
      name: "Nidoran - female",
      damage: 60,
    },
    {
      name: "Nidoran - male",
      damage: 50,
    },
    {
      name: "Oddish",
      damage: 40,
    },
    {
      name: "Pidgey",
      damage: 50,
    },
    {
      name: "Pikachu",
      damage: 50,
    },
    {
      name: "Poliwag",
      damage: 50,
    },
    {
      name: "Psyduck",
      damage: 60,
    },
    {
      name: "Rattata",
      damage: 30,
    },
    {
      name: "Squirtle",
      damage: 60,
    },
    {
      name: "Vulpix",
      damage: 50,
    },
    {
      name: "Weedle",
      damage: 40,
    },
  ],
  usedCards: [],
  availableCards: [
    {
      name: "Bulbasaur",
      damage: 60,
    },
    {
      name: "Caterpie",
      damage: 40,
    },
    {
      name: "Charmander",
      damage: 60,
    },
    {
      name: "Clefairy",
      damage: 50,
    },
    {
      name: "Jigglypuff",
      damage: 60,
    },
    {
      name: "Mankey",
      damage: 30,
    },
    {
      name: "Meowth",
      damage: 60,
    },
    {
      name: "Nidoran - female",
      damage: 60,
    },
    {
      name: "Nidoran - male",
      damage: 50,
    },
    {
      name: "Oddish",
      damage: 40,
    },
    {
      name: "Pidgey",
      damage: 50,
    },
    {
      name: "Pikachu",
      damage: 50,
    },
    {
      name: "Poliwag",
      damage: 50,
    },
    {
      name: "Psyduck",
      damage: 60,
    },
    {
      name: "Rattata",
      damage: 30,
    },
    {
      name: "Squirtle",
      damage: 60,
    },
    {
      name: "Vulpix",
      damage: 50,
    },
    {
      name: "Weedle",
      damage: 40,
    },
  ],
  score: {
    player1: {
      points: 0,
      rounds: 0,
    },
    robot: {
      points: 0,
      rounds: 0,
    },
  },
  dealCards() {
    for (let a = 0; a < 3; a++) {
      const random = Math.floor(Math.random() * (game.availableCards.length - 1) + 1);
      console.log(game.availableCards[random]);
      player1.availableCards.push(game.availableCards[random]);
      game.usedCards.push(game.availableCards[random])
      game.availableCards.splice(random, 1);
    }
    for (let b = 0; b < 3; b++) {
      const random = Math.floor(Math.random() * (game.availableCards.length - 1) + 1);
      console.log(game.availableCards[random]);
      robot.availableCards.push(game.availableCards[random]);
      game.usedCards.push(game.availableCards[random]);
      game.availableCards.splice(random, 1);
    }
  },
  battle() {
    const playerCard = player1.playCard();
    const computerCard = robot.playCard();
    console.log(playerCard);
    console.log(computerCard);
    if (playerCard.damage > computerCard.damage) {
      game.score.player1.points += 1;
      console.log(`${player1.name} wins!\nScore: ${player1.name}: ${game.score.player1.points}, ${robot.name}: ${game.score.robot.points}`);
    } else if (playerCard.damage < computerCard.damage) {
      game.score.robot.points += 1;
      console.log(
        `${robot.name} wins!\nScore: ${player1.name}: ${game.score.player1.points}, ${robot.name}: ${game.score.robot.points}`
      );
    } else {
      console.log('It\'s a tie, no one gets any points.');
    }
  },
};

const player1 = new Player('Jonathan');
const robot = new ComputerPlayer('Computer');

// console.log((Math.floor(Math.random() * (game.availableCards.length - 1) + 1)));