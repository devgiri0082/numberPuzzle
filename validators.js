function isValid(input, [x, y], current, real, solved) {
    let length = input.length;

    if (x >= 0 && x < length && y >= 0 && y < length && !solved.has(x + "" + y) && Math.abs(current[0] - real[0]) >= Math.abs(x - real[0]) && Math.abs(current[1] - real[1]) >= Math.abs(y - real[1])) return true;
    return false;
}

function isSolved(input) {
    let length = input.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (input[i][j] === -1) continue;
            if (input[i][j] !== 3 * i + j + 1) return false;
        }
    }
    return true;
}

function canMoveThere(input, x, y, solved, visited) {
    let length = input.length;
    if (x >= 0 && x < length && y >= 0 && y < length && !solved.has(x + "" + y) && !visited[x][y]) return true;
    return false;
}
module.exports = {
    isValid,
    isSolved,
    canMoveThere
}