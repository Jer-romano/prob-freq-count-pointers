// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    function fCounter(arr) {
        let counts = {};
        for(let i of arr) {
            counts[i] = counts[i] + 1 || 1;
        }
        return counts;
    }

    let counts1 = fCounter(num1.toString());
    let counts2 = fCounter(num2.toString());

    for(let i in counts1) {
        if(counts1[i] !== counts2[i]) return false;
    }
    return true;
}
module.exports = sameFrequency;
