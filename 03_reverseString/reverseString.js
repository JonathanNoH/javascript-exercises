const reverseString = function(str) {
    const splitString = str.split('');
    let newString = "";
    for(i=1; i <= str.length; i++) {
        newString += splitString[str.length-i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
