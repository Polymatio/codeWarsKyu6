//Create a function that will convert the time.

function race(v1, v2, g) {
    let race = g / (v2 - v1);

//Convert from seconds to minutes and then from seconds to hours.
    return v2 > v1 ? [Math.floor(race), Math.floor((race * 60) % 60), Math.floor((race * 3600) % 60) ] : null; 
}