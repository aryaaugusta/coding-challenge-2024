const number = function (busStops) {
    return busStops.reduce((x, [peopleIn, peopleOut]) => x + peopleIn - peopleOut, 0)
}

console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]), 17)
