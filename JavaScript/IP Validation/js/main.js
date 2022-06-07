//Making Conditionals for the algorithm function.
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

//Added helper function for the algorithm function.
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