//anagram is when you can spell a word with the same letters from a different jumbled word

//can sort both the words and compare for equality
//solved by sorting
// var isAnagram = function (s,t){
//     //first we need to sort the strings by turning them into array of characters
//     //then we use sort to sort the characters and join them together into a string
//     const sSorted = s.split('').sort().join("");
//     const tSorted = t.split('').sort().join("");

//     if (sSorted === tSorted){
//         return true
//     }
//     else return "not anagram"
// }

// let s = "caat"
// let t = "tacat"

// console.log(isAnagram(s,t))
//=========================================================
//solved by hashmap
//this will lower complexity and will only analyze number of specific letters are in the hashmap


// let s = "caat"
// let t = "tacat"


// var isAnagram = function (s,t){
//     //first check the length of both strings
//     if (s.length !== t.length) {
//         return false
//     }
//     //initialize our objects
//     const sCount = {}
//     const tCount = {}

//     const sLength = s.length

// }

let s = "win"
let t = "iwn"

// var isAnagram = function (s,t){
//     //first we are going to split the strings and sort them, then finally join them to compare if they are the same strings
//     const sSorted = s.split('').sort().join('')
//     const tSorted = t.split('').sort().join('')

//     if (sSorted === tSorted) return "is anagram"
//     else return "not anagram"
// }

// console.log(isAnagram(s,t))

function isAnagram(s,t){
    let sortedS = s.split('').sort().join('')
    let sortedT = t.split('').sort().join('')

    if(sortedS === sortedT){
        return "is anagram"
    }else return "not anagram"
}

console.log(isAnagram(s,t))