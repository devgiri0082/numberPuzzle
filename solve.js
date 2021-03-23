let pos = require("./position");
let pathFind = require("./findPath");
let value = require("./findValue");
let movingTiles = require("./movingTiles");

function solve(input) {
    let emptySquarePos = pos.emptySquareWhere(input);
    let misPlaceNum = value.misPlaceWhich(input);
    let misPlacePos = pos.misPlacewhere(input, misPlaceNum);
    let misPlaceRealPos = pos.misPlaceRealWhere(input, misPlaceNum);
    let solvedPos = value.solvedPositionsWhich(input);
    let shouldMovePos = pos.shouldMoveWhere(input, misPlacePos, misPlaceRealPos, solvedPos);
    let shortestPath = pathFind.findShortestPath(input, emptySquarePos, shouldMovePos, solvedPos);
    movingTiles.moveEmpty(input, emptySquarePos, shortestPath);
    emptySquarePos = pos.emptySquareWhere(input);
    misPlacePos = pos.misPlacewhere(input, misPlaceNum);
    movingTiles.swapEmptyAndMis(input, emptySquarePos, misPlacePos);
    console.log(input);
}

module.exports = {
    solve
};