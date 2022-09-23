// Create a function to identify IP Validation are true
// Making Conditionals for the algorithm function
// Split method will be used to sperate the numbers for the IP using . in the middle
// Using length property to determine if it not more then 4 numbers
// Return the conditions as true otherwise return false

function isValidIP(str) {

    let octets = str.split(' . ');
    
    if(octets.length !== 4) return false;

    for(let i = 0; i < octets.length; i++){
        if(!validateOctet(octets[i])){
            return false
        }
    }

    return true;
}

// Added helper function for the algorithm function if isValidIP inputs is false
// Function will determine if the IP Validation are false
// Will use conditions to determine if any of the following conditions are false from the first function above
// Detecting any blanks, letters, 3 or below integers, 5 or above integers, mixing integers and strings, blanks in the beginning, blanks in the ending, symbols, mixing symbols, inputs, mixing inputs, using 0 to start an integers side of 0
// Return the conditions as false otherwise return true

function validateOctet (octet) {
    if(!octet) return false;

    if(/[^0-9]/.test(octet)) {
        return false;
    }

    if(octet.length > 1 && octet[0] == '0') return false;

    octet = Number(octet);

    if(octet < 0 || octet > 255) return false;

    return true;
}