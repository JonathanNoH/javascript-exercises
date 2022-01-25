const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b) ) {
        return "ERROR";
    }
    let sum = 0;
    let smaller = (a < b) ? a:b;
    let larger = (b > a) ? b:a;
    for (; smaller <= larger; smaller++){
        sum += smaller;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
