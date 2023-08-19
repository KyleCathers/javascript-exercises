const removeFromArray = function() {
    const args = Array.from(arguments);
    let inputArray = args[0];
    let searchVals = args.slice(1);
    let index;

    for (let searchValue of searchVals) {
        index = inputArray.indexOf(searchValue);
        if (index > -1) {
            inputArray.splice(index, 1);
        }
    }

    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
