// holes.js the logic for if the player falls in a hole
const constants = require('../fieldmodule/constants');
const tryAgain = require('../tryAgain');

//define holes function with field as a parameter to check if a player has fallen in a hole without having to import field from main js (which would create circular logic)
function holes (field) {
    //return a promise so that we can use async/await in main.js
    return new Promise(async (resolve) => {
        //capture the player's position
        let playerPos = field.playerPos;
        //if players position matches a hole, call tryAgain.js with losing message
        if (field.field[playerPos.x][playerPos.y] === constants.hole) {
            const playAgain = await tryAgain('You fell in a hole!', field)
            if (!playAgain) {
                process.exit();
            }        
            
        } else {
            resolve();
        }
    })
}

module.exports = holes;