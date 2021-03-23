function moveEmpty(input, starting, positions) {
    for (let i = 0; i < positions.length; i++) {
        let temp = [...positions[i]];
        let tempValue = input[positions[i][0]][positions[i][1]];
        input[positions[i][0]][positions[i][1]] = input[starting[0]][starting[1]];
        input[starting[0]][starting[1]] = tempValue;
        [starting[0], starting[1]] = [temp[0], temp[1]];
    }
}

function swapEmptyAndMis(input, emptyPos, numPos) {
    [input[emptyPos[0]][emptyPos[1]], input[numPos[0]][numPos[1]]] = [input[numPos[0]][numPos[1]], input[emptyPos[0]][emptyPos[1]]];
}

module.exports = {
    moveEmpty,
    swapEmptyAndMis
}