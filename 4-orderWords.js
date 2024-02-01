function order(words){
    return words.split().sort(function (a, b) {
        return ('' + a).localeCompare(b);
    })
}

console.log(order('is2 Thi1s T4est 3a'))
