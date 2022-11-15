// Create a function that sorts the odds without moving the even numbers
// By assign the oddNums, the filter and sort method will be use to define odd number
// Return the array using the map and pop method to arrange the array in order

function sortArray(array) {
    const oddNums = array.filter( n => n % 2).sort((a, b) => b - a)
    return array.map(n => n % 2 === 0 ? n : oddNums.pop())
}