const validate = require("./validators");
const requireValue = require("./requireValue");

function emptySquareWhere(input) {
    let length = input.length;
    for (let i = 0; i < length; i++) {
        let pos = input[i].indexOf(-1);
        if (pos !== -1) return [i, pos];
    }
}



function misPlacewhere(input, value) {
    let length = input.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (input[i][j] === value) return [i, j];
        }
    }
}

function misPlaceRealWhere(input, value) {
    let length = input.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (i * 3 + j + 1 === value) return [i, j];
        }
    }
}



function shouldMoveWhere(input, current, realPos, solved) {
    let [x, y] = [current[0], current[1]];
    for (let [offsetX, offsetY] of requireValue.offset) {
        let newX = offsetX + x;
        let newY = offsetY + y;
        if (validate.isValid(input, [newX, newY], current, realPos, solved)) return [newX, newY];
    }
}


module.exports = {
    emptySquareWhere,

    misPlacewhere,
    misPlaceRealWhere,
    shouldMoveWhere,
};