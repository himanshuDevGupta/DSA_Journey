var isPalindrome  = function (x) {
    let newX = x.toString();
    let newArray = [];

    for (let i = newX.length - 1; i >= 0; i--) {
        newArray.push(newX[i]);
    }

    let newRev = newArray.join("")

    if (newRev == x) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome (-1121)); // "1211"
