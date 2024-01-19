// 1. Function to determine the separator type in a given string
function checkSeparatorType(str) {
    if (str.includes(',')) {
        return 'comma';
    } else if (str.includes(';')) {
        return 'semicolon';
    } else {
        return 'space';
    }
}

// 2. Function to reverse the words in a string separated by commas
function reverseCommas(str) {
    if (checkSeparatorType(str) === 'comma') {
        let wordsArray = str.split(',');
        let reversedArray = wordsArray.reverse();
        return reversedArray.join(',');
    }
    return str;
}

// 3. Function to alphabetically sort the words in a string separated by semicolons and join with hyphens
function semiDash(str) {
    if (checkSeparatorType(str) === 'semicolon') {
        let wordsArray = str.split(';');
        let sortedArray = wordsArray.sort();
        return sortedArray.join('-');
    }
    return str;
}

// 4. Function to reverse sort the words of a string alphabetically separated by spaces
function reverseSpace(str) {
    if (checkSeparatorType(str) === 'space') {
        let wordsArray = str.split(' ');
        let reversedArray = wordsArray.sort().reverse();
        return reversedArray.join(' ');
    }
    return str;
}

// 5. Function to reverse the words in a string separated by ', '
function commaSpace(str) {
    if (str.includes(', ')) {
        let wordsArray = str.split(', ');
        let reversedArray = wordsArray.reverse();
        return reversedArray.join(',');
    }
    return str;
}


let str = "up,to,code,fun";
console.log("Original:", str);
console.log("Reverse Comma:", reverseCommas(str), "\n");

str = "up;to;code;fun";
console.log("Original:", str);
console.log("Semi-Dash:", semiDash(str), "\n");

str = "to code up fun";
console.log("Original:", str);
console.log("Reverse Space:", reverseSpace(str), "\n");

str = "up, to, code, fun";
console.log("Original:", str);
console.log("Comma Space:", commaSpace(str), "\n");
