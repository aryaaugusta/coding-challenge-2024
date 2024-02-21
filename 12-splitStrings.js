function solution(str) {
    const splitStr = str.split('')
    let word = ''
    for (const x of splitStr) {
        word += x
        if (word.replace(/ /g, '').length % 2 === 0) {
            x !== splitStr[splitStr.length - 1] && (word += ' ');
        }
    }
    if (str.length % 2 !== 0) {
        word += '_'
    }
    // if (str.length === 4) {
    //     console.log(str)
    //     return str
    // } else {
        console.log(word)
        return (word === '' && []) || word.split(' ')
    // }
}

console.log(solution('UhGR'))
