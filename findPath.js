const validate = require("./validators");
const requireValue = require("./requireValue");
const create = require("./create");
const findValue = require("./findValue");

function findShortestPath(input, current, destination, solvedPos) {
    let length = input.length;
    let positions = {};
    let hasVisited = create.createVisited(length);
    let toVisit = [current];
    hasVisited[current[0]][current[1]] = true;
    while (toVisit.length > 0) {
        let [x, y] = [toVisit[0][0], toVisit[0][1]];
        let key = x + "" + y;
        toVisit.shift();
        positions[key] = new Set();
        for (let [offsetX, offsetY] of requireValue.offset) {
            let [newX, newY] = [x + offsetX, y + offsetY];
            let value = newX + "" + newY;
            if (validate.canMoveThere(input, newX, newY, solvedPos, hasVisited)) {
                positions[key].add(value);
                toVisit.push([newX, newY]);
                hasVisited[newX][newY] = true;
                if (newX === destination[0] && newY === destination[1]) {
                    return findValue.goToWhich(key, value, positions);

                }
            }

        }
    }
    return false;
}

module.exports = {
    findShortestPath
}