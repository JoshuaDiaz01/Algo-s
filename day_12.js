// Reversing arrays via for loop

// const str = 'guitar';
// console.log('The original string is: ' + str);
// let reversedStr = '';

// for (let i = str.length - 1; i >= 0; i--) {
// reversedStr += str[i];
// }

// console.log('The reversed string is: ' + reversedStr);


// reversing array via split method
// str = "hello"
// function reverse(str){
//     return str.split("").reverse().join("");
// }

// console.log(reverse(str))





/* 
Reverse Word Order
Given a string of words (with spaces)
return a new string with words in reverse sequence.
*/

const two_str1 = "This is a test";
const two_expected1 = "test a is This";

const two_str2 = "hello";
const two_expected2 = "hello";

const two_str3 = "   This  is a test  ";
const two_expected3 = "test a is This";



function reverseWordOrder(wordsStr) {
    var reverse_arr = wordsStr.trim().split('').reverse().join('') //trim eliminates white space
    return reverse_arr
}

console.log(reverseWordOrder(two_str3))

