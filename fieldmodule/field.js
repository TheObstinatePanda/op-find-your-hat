// field.js maintains the Field class which the game will be played on
const generateField = require('./generateField');
const randomPos = require('./getRandomPosition');
const { hat } = require('./constants');

//we use a Field class to maintain the state of the game map
class Field {
    //construct the map with a width and height
    //place the player at the top left and the hat at a random position
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.field = generateField(width, height);
        this.playerPos = {x: 0, y: 0};
        this.hatPos = this.placeHat();
    }
    //function to reset the map (for tryAgain.js)
    reset() {
        this.field = generateField(this.width, this.height);
        this.playerPos = {x: 0, y: 0};
        this.hatPos = this.placeHat();
    }
    //function to place the hat at a random position making sure the hat is not placed at the start position
    placeHat() {
        let hatPos;
        do {
            hatPos = randomPos(this.width, this.height);
        } while (hatPos.x === 0 && hatPos.y === 0);

        this.field[hatPos.x][hatPos.y] = hat;
        return hatPos
    }
    //function to print the map to the console, this will be called after every move
    print() {
        for (let row of this.field) {
            console.log(row.join(' '));
        }
    }
}

module.exports = Field;
