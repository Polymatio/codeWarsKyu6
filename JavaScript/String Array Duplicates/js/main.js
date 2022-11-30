// Create a function that removes all consecutive duplicate letters in the strings
// Use map, split, filter, and join method to find the word and find the dupicate letters in the strings
// Return the strings without duplicates

function dup(s) {
    return s.map(word => word.split('').filter((l, i, a) => l != a[i - 1]).join(''))
}