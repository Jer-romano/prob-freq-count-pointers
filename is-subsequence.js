// add whatever parameters you deem necessary
// function isSubsequence(str1, str2) {

//     let secondSeq = new Set(str2.split(""));
//     let seen = new Set();

//     for(let i of str1) {
//         if(!secondSeq.has(i)) return false;
//     }
//     return true;

// }
function isSubsequence(str1, str2) {
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < str1.length && pointer2 < str2.length) {
        if (str1[pointer1] === str2[pointer2]) {
            pointer1++;
        }
        pointer2++;
    }

    return pointer1 === str1.length;
}
module.exports = isSubsequence;
