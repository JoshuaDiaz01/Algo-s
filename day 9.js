// const str1 = "aaaabbcdddaa";
// const expected1 = "a4b2c1d3a2";

// const str2 = "";
// const expected2 = "";

// const str3 = "a";

// const expected3 = "a";

// const str4 = "bbcc";
// const expected4 = "bbcc";

// function encodeStr(str){
//     if (str == ""){
//         return str;
//     }
//     var count = 1,
//     temp = [];
//     temp = str.split('');
//     // console.log(temp);
//     var letter = temp[0];
//         for (var i = 0; i < str.length; i++) {
//             if (str[i] == letter && str[i+1] == letter) {
//                 count++;
//             }else{
//                 console.log(letter, count);
//                 letter = temp[i+1];
//                 count = 1;
//             }
//     }
// }
// console.log(encodeStr(str4));


//second part
const two_str1 = "a3b2c1d3";
const two_expected1 = "aaabbcddd";
const two_str2 = "a3b2c12d10";
const two_expected2 = "aaabbccccccccccccdddddddddd";

function decodeStr(str) {
    let decoded = ""

    let i = 0
    while (i < str.length){
        let char = str[i++]
        let numStr = ""

        let isNumber = isNaN(parseInt(str[i])) === false

        while ( i < str.length && isNumber){
            numStr += str[i++]
            isNumber = isNaN(parseInt(str[i])) === false
        }
        decoded += myRepeat(char, numStr)
        // decoded += char.repeat(numStr)
    }
    return decoded
}

//isNaN built in stands for "is it not a number"
//parseInt bult in will convert string number into a number
//repeat will convert string into a number