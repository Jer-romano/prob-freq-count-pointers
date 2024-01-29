// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    let result = {};
    for(let i = 0; i < keys.length; i++) {
        if(values[i]) {
            result[keys[i]] = values[i];
        }
        else result[keys[i]] = null;
    }
    return result;

}
module.exports = twoArrayObject;
