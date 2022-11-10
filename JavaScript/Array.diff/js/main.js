// Create a function to remove the any of the a array from the presented in array b
// Assigning newSet to a constructor for array b
// Return a filter to to identify if newSet not have the same number

function arrayDiff(a, b) {
    let newSet = new Set(b)
    return a.filter(n => !newSet.has(n))
}