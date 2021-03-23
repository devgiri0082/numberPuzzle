function createVisited(m, n = m) {
    return new Array(m).fill(0).map(() => new Array(n).fill(false));
}

module.exports = {
    createVisited
}