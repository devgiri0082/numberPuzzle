const solving = require("./solve")
const validate = require("./validators");

function solvePuzzle(input) {
    let i = 0
    while (!validate.isSolved(input) && i < 2) {
        solving.solve(input);
        i++;
    }
}
// [1,0] => [0, 1] => 1 ->
// 0 - 1 => [-1,0] + [1, 0] => [0, 0] => isValid([0, 0]) => false
// 0 + 1  [2, 0]  => 2
// [1, 1] => 0 
let input = [
    [1, -1, 2],
    [7, 3, 6],
    [5, 8, 4]
]

let input1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -1]
]

solvePuzzle(input);
solvePuzzle(input1)