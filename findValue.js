function misPlaceWhich(input) {
    let length = input.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (input[i][j] !== 3 * i + j + 1) return 3 * i + j + 1;
        }
    }
}

function goToWhich(key, value, position) {
    let path = [
        [Number(key[0]), Number(key[1])],
        [Number(value[0]), Number(value[1])]
    ];
    let previousKey = "";
    while (key) {
        previousKey = key;
        for (let elem in position) {
            if (position[elem].has(key)) {
                key = elem;
                path.unshift([Number(key[0]), Number(key[1])]);
            }
        }
        if (previousKey === key) return path;
    }
}

function solvedPositionsWhich(input) {
    let solvedPos = new Set();
    let length = input.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (input[i][j] === 3 * i + j + 1) solvedPos.add(i + "" + j);
            else return solvedPos;
        }
    }
}


module.exports = {
    misPlaceWhich,
    solvedPositionsWhich,
    goToWhich
}