const readline = require('readline');

/********************************* CONSTANTS *********************************/
const VALID_MOVES = {
  r: {
    name: 'Rock',
    winsAgainst: 's'
  },
  p: {
    name: 'Paper',
    winsAgainst: 'r'
  },
  s: {
    name: 'Scissors',
    winsAgainst: 'p'
  }
};

/********************************* GAME DATA *********************************/
let wins = 0;
let losses = 0;
let ties = 0;

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/
//prints help
function printHelp() {
  console.log("\nHelp:\n" +
      "Type 'r' for Rock\n" +
      "Type 'p' for Paper\n" +
      "Type 's' for Scissors\n" +
      "Type 'q' to quit\n" +
      "Type 'h' for a list of valid commands\n")
}

function getWinner(move1, move2) {
 // gets winner by comparing move one to move two
 if(VALID_MOVES[move1].winsAgainst === move2)
   wins++;
   return console.log("You win!")
}
function getCPUMove (){
// gets keys from the valid_moves object
  const validMoveKeys = Object.keys(VALID_MOVES);
// picks a random key and assigns it to cpu
  const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
  return cpu = validMoveKeys[randomIndex]; }

function processMove(cmd, cpu) {
//gets cpu value from the getCPUMove function
  cpu = getCPUMove()
//prints what the computer picks
  console.log(`computer picks ${cpu}`)
//checks if you have a tie with the computer
  if (cmd === cpu) {
    console.log("You tie.\n");
   return ties++;
  }
//checks if you win
  else if(VALID_MOVES[cmd].winsAgainst === cpu) {
      move1 = cmd;
      move2 = cpu;
    getWinner(move1,move2);}
//checks if you lose
    else  { 
      console.log("You lose...\n");
      losses++;
    };
  
  }





/******************************* MAIN FUNCTION *******************************/
  
function promptInput(rl) {
  //keeps score of game 
  console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
   rl.question('> ', (cmd) => {
  
    cmd = cmd.toLowerCase();
    //commands for quiting the the game or asking for help
    const commands = {
      'h': printHelp,
      'q': rl.close,
    };
    //checking if the quiting or helping command are being called
    const action = commands[cmd];
    if (action) {
      action();
      return promptInput(rl)
    }
    //checking if a valid move is being entered
     else if (VALID_MOVES[cmd]){
    //logging your input
        console.log(`You pick ${cmd}`);
    //prossesing yours and the commputers moves by calling prosses moves
        processMove(cmd, cpu = getCPUMove);
     } 
    // if your input was not a valid command prints a list of valid commands
     else {
        console.log("\nInvalid command.\n" +
        " Type 'r' for Rock\n" +
        " Type 'p' for Paper\n" +
        " Type 's' for Scissors\n" +
        " Type 'q' to quit\n" +
        " Type 'h' for a list of valid commands\n")
      
    }
    promptInput(rl);
  });
}
  
/****************************** INITIALIZE GAME ******************************/
function initializeGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log("Welcome to Rock/Paper/Scissors\n");
  console.log("  Type 'r' for Rock");
  console.log("  Type 'p' for Paper");
  console.log("  Type 's' for Scissors");
  console.log("  Type 'q' to quit");
  console.log("  Type 'h' for a list of valid commands\n");

  promptInput(rl);
}

// start the game if running this file directly, `node game.js`
// do not start the game if running test specs
if (typeof require !== 'undefined' && require.main === module) {
  initializeGame();
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  printHelp,
  getWinner,
  getCPUMove,
  processMove,
  promptInput
};