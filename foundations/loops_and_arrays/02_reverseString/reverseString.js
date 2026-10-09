const reverseString = function(str) {
    if (str === "") {
        return str;
    } else {
        return reverseString(str.substr(1)) + str[0];
    }
};

// Do not edit below this line
module.exports = reverseString;
