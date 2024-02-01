function getCount(str) {
    let vowelCount = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let x of str) {
        if (vowels.includes(x)) {
            vowelCount++
        }
    }
    return vowelCount
}

console.log(getCount('abracadabra'))
