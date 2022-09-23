// Create a function to find the highest scoring word
// Split method will be used for seperate the strings in the word
// Map method will be used for to create new arrays in the string
// Reduce method will be used to order the elements of the array
// the CharCodeAt method will be used to return an integer
// Return the highest score possible by using Math.max function

function high(x){
  
    let as = x.split(' ').map(x => [...x].reduce((a, b) => a+b.charCodeAt(0) - 96, 0));
    
    return x.split(' ')[as.indexOf(Math.max(...as))];
}