function highestOccurrencesCharacter(input) {
    // clean input
    const arr = String(input).trim().toLowerCase().split("")
    // get occurrences by character
    const ocurr = arr.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc
    }, {})
    // return the character with the highest number of ocurrences in the string
    return Object.entries(ocurr).reduce((acc, curr) => curr[1] > acc[1] ? curr : acc, [undefined,0])[0]
}

console.log(highestOccurrencesCharacter("Character"))
console.log(highestOccurrencesCharacter("Caneca"))
console.log(highestOccurrencesCharacter("JavaScript"))
console.log(highestOccurrencesCharacter(""))