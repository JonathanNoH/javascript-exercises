const removeFromArray = function(array) {
    const args = Array.from(arguments);
    console.log(args);
    const originalArray = args.shift();
    console.log(originalArray);
    function checkRemove(item){
        for (let arg of args) {
            if (item === arg) {
                return false;
            }
        }
        return true;
    }
    const newArray = originalArray.filter(checkRemove);
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
