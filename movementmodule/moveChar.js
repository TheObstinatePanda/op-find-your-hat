//moveChar.js the logic for moving the player around the field
//use prompt-sync to get user input
//include sigint: true so that the game can be exited with ctrl+c
const prompt = require('prompt-sync')({sigint: true});
const constants = require('../fieldmodule/constants');

function moveChar (field) {
    // capture the player's position
    let playerPos = field.playerPos;
    // prompt user for direction, create newPos object to store the new position
    let move = prompt('\n Which way? (enter u, d, l, or r) : ').toLowerCase();    
    let newPos = {...playerPos}
    // switch statement to update newPos based on user input
    switch (move) {
        case 'u':
            newPos.x -= 1;
            break;
        case 'd':
            newPos.x += 1;
            break;
        case 'l':
            newPos.y -= 1;
            break;
        case 'r':
            newPos.y += 1;
            break;
        default:
            console.log('Invalid move');
            break;
    }
    // if the new position is outside the field, log an error and return
    if (newPos.x < 0 || newPos.x >= field.height || newPos.y < 0 || newPos.y >= field.width) {
        console.log('Invalid move');
        return;
    } else {
    // otherwise, update the players position and the field
        field.field[playerPos.x][playerPos.y] = constants.fieldCharacter;
        field.playerPos.x = newPos.x;
        field.playerPos.y = newPos.y;
    }  
    // if the position isn't a hole, update the field with the player's new position  
    if (field.field[playerPos.x][playerPos.y] !== constants.hole) {
        field.field[playerPos.x][playerPos.y] = constants.pathCharacter;
    }
    //clear the old field and print the updated field
    console.clear();
    field.print() 
}

module.exports = moveChar;