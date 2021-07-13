var readlineSync = require("readline-sync");
const chalk = require("chalk");

var score = 0;

console.log(chalk.bgYellowBright.black("Welcome to Pokemon Quiz!\n"));

var userName = readlineSync.question("What's your name? ");

console.log(
  chalk.yellowBright(
    `Hello ${userName}, Enter a / b / c to answer the questions. For each right answer, you'll get 1 point.\n`
  )
);

console.log("LET'S START THE QUIZ...\n");

var questions = [
  {
    question:
      "Who is the first Pokemon in the Pokedex? \na.Bulbasaur \nb.Venusaur \nc.Mew ",
    answer: "a",
  },
  {
    question: "How old is Ash? \na.9 \nb.10 \nc.12 ",
    answer: "b",
  },
  {
    question: "What Pokemon type is Pikachu? \na.Mouse \nb.Fire \nc.Electric ",
    answer: "c",
  },
  {
    question: "What is Ash's last name? \na.Ketchup \nb.Ketchum \nc.Kanto ",
    answer: "b",
  },
  {
    question:
      "What is Pokemon short for? \na.It's not short for anything \nb.Pocket Monsters \nc.Monsters to catch in Pokeballs ",
    answer: "b",
  },
  {
    question:
      "Which Pokemon has the most evolutions? \na.Eevee \nb.Slowbro \nc.Tyrogue ",
    answer: "a",
  },
  {
    question:
      "Who is the Team Rocket Boss? \na.Giovanni \nb.Jessie \nc.Meowth ",
    answer: "a",
  },
  {
    question:
      "What is Silph Co? \na.Prison \nb.Cafe \nc.Manufacturer of tools & home appliances ",
    answer: "c",
  },
  {
    question:
      "Which Pokemon has the most heads? \na.Exeggcute \nb.Dugtrio \nc.Hydreigon ",
    answer: "a",
  },
  {
    question:
      "Who is the oldest Pokemon? \na.Tyrannosaurus Rex \nb.Rowlet \nc.Arceus ",
    answer: "c",
  },
];

for (let i = 0; i < questions.length; i++) {
  if (i === 3) {
    if (score >= 2) {
      console.log(
        chalk.bgYellow("Congratulations! You have entered Level 2\n")
      );
    } else {
      console.log(chalk.bgRedBright("Oh no! you failed level 1\n"));
      break;
    }
  }
  if (i === 7) {
    if (score >= 5) {
      console.log(
        chalk.bgYellow(
          "Congratulations! You have entered Level 3. This is grand finale.\n"
        )
      );
    } else {
      console.log(chalk.bgRedBright("Oh no! you failed level 2\n"));
      break;
    }
  }
  let currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question + "\n" + "Your Answer : ");
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("You're right! You earned 1 point."));
    score = score + 1;
  } else {
    console.log(chalk.redBright("Sorry, you're wrong"));
  }
  console.log("current score: " + score);
  console.log("-------------");
}

console.log(chalk.yellowBright("Your final score is " + score + "\n"));

var highScores = [
  {
    name: "Akash",
    score: 7,
  },
  {
    name: "Mrinal",
    score: 6,
  },
  {
    name: "Harsh",
    score: 6,
  },
];

console.log(chalk.bgCyan("----Leaderboard----\n"));

for (let i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + " : " + highScores[i].score + "\n");
}

console.log(chalk.cyanBright(userName + ", Thanks for taking this quiz"));
