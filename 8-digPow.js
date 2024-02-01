function digPow(n, p) {
    // convert the number into string
    let add = 0;
    // convert string into array using split()
    n.toString().split('').forEach(num => {
        add += Math.pow(Number(num), p);
        p++;
    });
    return (add % n) ? -1 : add / n;
}

console.log(digPow(89, 1))
console.log(digPow(92, 1))
console.log(digPow(46288, 3))
