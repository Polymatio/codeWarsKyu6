// Create a function that changes case of new string and order of the input
// upperCase will be constant and assigned as the letters of the alphabet
// Returning the string of the input
// It will go to various method to change the input of the string for the function
// Begin by using split method to divide the string but without any spaces within the method to get only the string
// The map method will create a new array,m and within the method we will use the the indexOf, toUpperCase, and toLowerCase method to convert the string inputted
// Using the ternary operator to test the condition if the string index is in the input
// After testing the conditions it will determine whether the value of the string is true or false accordingly to the methods in the map method
// The join method will be used after to combine the string of the input
// Will use the split, reverse, and join method to change the order of the word

function stringTransformer(str) {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return str
        .split('')
        .map(c => upperCase.indexOf(c) === -1 ? c.toUpperCase() : c.toLowerCase())
        .join('')
        .split(' ')
        .reverse()
        .join(' ');
}