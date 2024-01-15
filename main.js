// Main file runs this game
const Field = require('./fieldmodule/field.js');
const events = require('./events');
const moveChar = require('./movementmodule/moveChar.js');
const holes = require('./movementmodule/holes.js');
const tryAgain = require('./tryAgain');
  // I have a double spaced indentation here because it helps me differentiate between the modules and the main file
  // create a new field and capture the player and hat positions
  let field = new Field(10, 10);
  let playerPos = field.playerPos;
  let hatPos = field.hatPos;
  // clear the console to start the game
  console.clear();
  // listen for the reset event and call startGame when it's emitted
  events.on('reset', startGame);  

  // startGame function to run the game
  async function startGame() {
    // 
    do {
      //clear and print the field as it updates
      console.clear();
      field.print();
      // move the player 
      await moveChar(field);
      // update the player and hat positions
      playerPos = field.playerPos;
      hatPos = field.hatPos;
      // check if the player fell in a hole
      await holes(field);

      // Check if the player has found the hat
      if(playerPos.x === hatPos.x && playerPos.y === hatPos.y) {
        const playAgain = await tryAgain('You found your hat!', field); 
        // playAgain will return a boolean, if it's false we exit the game
        // if it is true playAgain will emit the reset event and start the game again 
        if (!playAgain) {
          process.exit();
        }
        return; // Exit the function
      }
  } while (true); // Keep looping until the function returns
  }
  startGame();