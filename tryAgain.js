// tryAgain.js that gathers user input to restart the game after a win or loss
const readline = require('readline');
const events = require('./events');

//tryAgain function should take a message so different text is displayed depending on a win or loss and field so that it can read the state of the field
function tryAgain(message, field) {
    //treutn a promise so that the function can be used with async/await
    return new Promise((resolve) => {
        //creating a readline interface for user interaction
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        //asking the user if they want to play again
        rl.question(`${message} \n   Would you like to try again? (y/n) `, (answer) => {
            //clean up the console
            console.clear();
            rl.close();
            //if yes(y), call field.Reset() use the event emitter to reset the game
            //we resolve true here so main can handle the game state
            if (answer.toLowerCase() === 'y') {
                field.reset();
                events.emit('reset');
                resolve(true);            
            } else {
            //otherwise say goodby and resolve false so main can close the game 
                console.log('Goodbye!');
                resolve(false);
            }
        });
    });
}

module.exports = tryAgain;