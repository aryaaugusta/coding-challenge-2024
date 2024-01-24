// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/javascript
// even = angka genap
// odd = angka ganjil
function evenOrOdd(number) {
    if (number % 2 === 0 || number % 2 === -0) {
        return 'Even';
    } else {
        return 'Odd'
    }
}

console.log(evenOrOdd(2))
console.log(evenOrOdd(7))
console.log(evenOrOdd(-42))
console.log(evenOrOdd(-7))
console.log(evenOrOdd(0))
