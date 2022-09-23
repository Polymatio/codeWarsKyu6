// Create a function that will convert the time
// Assigning race to be an equation
// Return the time from seconds to minutes then seconds to hours

function race(v1, v2, g) {
    let race = g / (v2 - v1);

    return v2 > v1 ? [Math.floor(race), Math.floor((race * 60) % 60), Math.floor((race * 3600) % 60) ] : null; 
}