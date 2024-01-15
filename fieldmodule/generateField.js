//generateField.js to generate a 2d array to create a field for the game
const constants = require('./constants');
const randomPos = require('./getRandomPosition');

function generateField(width, height) {
    // generate a blank field (all fieldCharacters)
    let field = new Array(height).fill(null).map(() => new Array(width).fill(constants.fieldCharacter));
    
    // set the start position
    field[0][0] = constants.pathCharacter;
    console.log();
    // set some random hole positions
    let holes = Math.floor(width * height * 0.333); // 1/3rd of the field
    for (let i=0;i<holes;i++) {
        let holePosition;
        //if holePosition is anything but a field, try again
        do {
            holePosition = randomPos(width, height);
        } while (field[holePosition.y][holePosition.x] !== constants.fieldCharacter||field[holePosition.y][holePosition.x] === constants.pathCharacter||field[holePosition.y][holePosition.x] === constants.hat);
        field[holePosition.y][holePosition.x] = constants.hole;
    }
    return field;
}

module.exports = generateField;