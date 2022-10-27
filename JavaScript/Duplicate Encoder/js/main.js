// Create a function to duplicate encoders
// Will return first to save the word
// The toLowerCase method to prevent capitalize words
// The split method will be used for to find the element and output
// The map method will be used to create new array to populate the results by creating a function inside
// The indexOf and lastIndexOf method will be used to return the first and last element in the array
// The join method will be used to concatenate the strings into the array

function duplicateEncode(word) {
    return word
    .toLowerCase()
    .split('')
    .map(function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}