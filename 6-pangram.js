function isPangram(string) {
    string = string.toLowerCase()
    const ns = new Set()
    for (let alpha of string) {
        if (alpha >= 'a' && alpha <= 'z') {
            console.log(alpha)
            console.log(string)
            ns.add(alpha)
            console.log(ns)
        }
    }
    console.log(ns.size)
    return ns.size === 26
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
console.log(isPangram('This is not a pangram.'))
console.log(isPangram('Cwm fjord bank glyphs vext quiz'))


