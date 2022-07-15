// str = "hello"
// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// console.log(reverseString(str));


// /* 
//   Acronyms
//   Create a function that, given a string, returns the string’s acronym 
//   (first letter of each word capitalized). 
//   Do it with .split first if you need to, then try to do it without
// */
// const two_str1 = "object oriented programming";
// const two_expected1 = "OOP";

// // The 4 pillars of OOP
// const two_str2 = "abstraction polymorphism inheritance encapsulation";
// const two_expected2 = "APIE";

// str = "hi my";
// function acronym(str){
// var newString = " ";
//     for(var i=0; i<=3; i = i+3){
//     newString += str[i];
//     }
//     return newString.toUpperCase();
// }
// console.log(acronym(str));

// different way to solve 

function acronymize(str){
    var newString = "";
    newString = newString + str[0]
    for(var i=0; i<str.length; i++){
        if (str[i] == ' ' && str[i+1] != ' '){
            newString = newString + str[i + 1]
        }
    }
    return newString.toUpperCase();
}
console.log(acronymize('dog bird cat'));




// // Bonus: ignore extra spaces
// const two_str4 = "  global   information tracker    ";
// const two_expected4 = "GIT";

// /**
//  * Turns the given str into an acronym.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str A string to be turned into an acronym.
//  * @returns {string} The acronym.
//  */
// function acronymize(str) {}