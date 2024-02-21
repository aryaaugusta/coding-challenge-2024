function solution(roman) {
    // complete the solution by transforming the
    // string roman numeral into an integer
    const romanNum = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,};
    let x = 0;
    for (let i = 0; i < roman.length; i++) {
        console.log(roman[i])
        console.log(roman[i + 1])
        if (roman[i] === "I" && roman[i + 1] === "V") {
            x += 4;
            i++;
        } else if (roman[i] === "I" && roman[i + 1] === "X") {
            x += 9;
            i++;
        } else if (roman[i] === "X" && roman[i + 1] === "L") {
            x += 40;
            i++;
        } else if (roman[i] === "X" && roman[i + 1] === "C") {
            x += 90;
            i++;
        } else if (roman[i] === "C" && roman[i + 1] === "D") {
            x += 400;
            i++;
        } else if (roman[i] === "C" && roman[i + 1] === "M") {
            x += 900;
            i++;
        } else {
            x += romanNum[roman[i]];
            console.log(x)
        }
    }
    return x;
}

console.log(solution('XXI'))
