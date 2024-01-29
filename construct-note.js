// add whatever parameters you deem necessary
function constructNote(msg, letters) {

    function fCounter(arr) {
        let counts = {};
        for(let i of arr) {
            counts[i] = counts[i] + 1 || 1;
        }
        return counts;
    }

    const msgCounts = fCounter(msg);
    const letterCounts = fCounter(letters);

    for(let key in msgCounts) {
        if(!letterCounts[key]) return false;
        if(msgCounts[key] > letterCounts[key]) return false;
    }
    return true;
}

module.exports = constructNote;