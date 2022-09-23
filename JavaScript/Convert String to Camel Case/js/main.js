// Create a function to camel case the words
// The function will use string
// Conditionals when to camel case the string
// Split method to divide the strings
// For statement to create a condition when to camel case
// Condition will identify the index of the strings
// The charAt and toUpperCase method will be used to find the index and to uppercase the letters
// Slice method will modify the strings without changing the original string fot the uppercase letters for camel case
// Return whether to return the string into uppercase based on the index

function toCamelCase(str){
    let newCamelCase = "";

    //create a conditional statement to get camel casing properly
    if(str){
      let camelCase = str.split(/[-_]/g);
      for (let i in camelCase){
        if(i > 0){
          newCamelCase += camelCase[i].charAt(0).toUpperCase() + camelCase[i].slice(1);
        }else{
          newCamelCase += camelCase[i]
        }
      }
    }else{
      return newCamelCase
    }
    return newCamelCase;
  }
  