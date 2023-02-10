module.exports = function toReadable(number) {
    const arrOneNineteen = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];

    const arrTens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const arrExeption = [
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
    ];

    let result = "";
    let numString = number + "";
    const arrNumStr = numString.split("").map((el) => +el);

    const exeptioin = arrNumStr[1] + "" + arrNumStr[2];

    if (number === 0) {
        result = "zero";
    }

    if (number >= 1 && number <= 19) {
        result = arrOneNineteen[number];
    }

    if (number >= 20 && number <= 99) {
        if (arrNumStr[1] === 0) {
            result = `${arrTens[arrNumStr[0]]}`;
        } else {
            result = `${arrTens[arrNumStr[0]]} ${arrOneNineteen[arrNumStr[1]]}`;
        }
    }

    if (arrNumStr.length == 3) {
        if (arrExeption.includes(exeptioin)) {
            result = `${arrOneNineteen[arrNumStr[0]]} hundred ${
                arrOneNineteen[+exeptioin]
            }`;
        } else if (arrNumStr[1] === 0 && arrNumStr[2] === 0) {
            result = `${arrOneNineteen[arrNumStr[0]]} hundred`;
        } else if (arrNumStr[1] === 0) {
            result = `${arrOneNineteen[arrNumStr[0]]} hundred ${
                arrOneNineteen[arrNumStr[2]]
            }`;
        } else if (arrNumStr[2] === 0) {
            result = `${arrOneNineteen[arrNumStr[0]]} hundred ${
                arrTens[arrNumStr[1]]
            }`;
        } else {
            result = `${arrOneNineteen[arrNumStr[0]]} hundred ${
                arrTens[arrNumStr[1]]
            } ${arrOneNineteen[arrNumStr[2]]}`;
        }
    }
    return result;
};
