//Create a function to camel case the words.

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
  