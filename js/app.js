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
      if (game.availableCards.length > 1) {
        const random = Math.floor(Math.random() * (game.availableCards.length - 1) + 1);
        console.log(game.availableCards[random]);
        robot.availableCards.push(game.availableCards[random]);
        game.usedCards.push(game.availableCards[random]);
        game.availableCards.splice(random, 1);
      } else {
        console.log(game.availableCards[0]);
        robot.availableCards.push(game.availableCards[0]);
        game.usedCards.push(game.availableCards[0]);
        game.availableCards.splice(0, 1);
      }
    }
  },
  battle() {
    const playerCard = player1.playCard();
    const computerCard = robot.playCard();
    console.log('-----------------')
    console.log(playerCard);
    console.log(computerCard);
    console.log("-----------------");
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
  roundup() {
    if (game.score.player1.points > game.score.robot.points) {
      game.score.player1.rounds += 1;
      game.score.player1.points = 0;
      game.score.robot.points = 0;
      return console.log(`End Of Round: ${player1.name} wins!`)
    } else {
      game.score.robot.rounds += 1;
      game.score.robot.points = 0;
      game.score.player1.points = 0;
      return console.log(`End Of Round: ${robot.name} wins!`);
    }
  },
  winner() {
    if (game.score.player1.rounds > game.score.robot.rounds) {
      console.log(`${player1.name} takes home the championship!`);
    } else {
      console.log(`${robot.name} takes home the championship!`);
    }
  }
};

const player1 = new Player('Jonathan');
const robot = new ComputerPlayer('Computer');

while (game.availableCards.length > 0) {
  game.dealCards();
  for (let a = 0; a < 3; a++) {
    game.battle();
  }
  game.roundup();
}
game.winner();
