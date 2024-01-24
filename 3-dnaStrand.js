function dnaStrand(dna) {
    return dna.split('').map(x => x === 'A' ? 'T' : x === 'T' ? 'A' : x === 'G' ? 'C' : x === 'C' ? 'G' : '').join('');
}

//'AAAA' --> 'TTTT'
//'ATTGC' --> 'TAACG'
//'GTAT --> 'CATA
console.log(dnaStrand('AAAA'))
console.log(dnaStrand('ATTGC'))
console.log(dnaStrand('GTAT'))
