

function count(string) {
    let count = {}
    for(const c of string) {
        if(count[c] ) {
            count[c]++
        }else {
            count[c] = 1
        }
    }
    return count
}