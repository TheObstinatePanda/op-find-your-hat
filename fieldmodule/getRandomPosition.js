// getRandomPosition.js for things that need to be randomly placed on the field
function getRandomPosition(width, height) {
    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * height);
    return {x, y};
}

module.exports = getRandomPosition;


