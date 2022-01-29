const palindromes = function (s) {
    s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    s.toLowerCase();
    s.replace(" ", "");
    const myArray = s.split("");
    
    const newStr = myArray.toString();
    newStr.replace(",","");
    return (newStr == s);
};

// Do not edit below this line
module.exports = palindromes;
