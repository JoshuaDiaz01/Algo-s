//group anagrams in an array of strings
//anagram is a set of letters you can use to spell multiple words
//Input: strs = ["eat","tea","tan","ate","nat","bat"]
//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]


strs = ["eat","tea","tan","ate","nat","bat"];

// var groupAnagrams = function (strs){
//     //map and sort through our strings 
//     const sortedStrs = strs.map(word => word.split('').sort().join(''))
//     const hash = {}

//     //loop through the array of strings
//     for (let i=0; i <strs.length; i++){
//         //if the hash doesnt contain anagram, just return strs[i]
//         if(!hash[sortedStrs[i]]){
//             hash[sortedStrs[i]] = [strs[i]]
//         }
//         //if it is an anagram, replace the strs[i] with sorted strs[i]
//         else{
//             hash[sortedStrs[i]].push(strs[i])
//         }
//     }
//     return Object.values(hash)
// }

// console.log(groupAnagrams(strs))

//redoing for foundation
var groupAnagrams = function (strs){
    //sorting the strings
    const sortedStrs = strs.map(word => word.split('').sort().join(''))
    //initializing hash
    const hash = {}

    //looping through strs
    for(let i=0; i<strs.length; i++){
        //if it is not an anagram, leave it alone
        if(!hash[sortedStrs[i]]){
            hash[sortedStrs[i]] = [strs[i]];
        }
        //if it is an anagram we want to replace the strs at i with the sorted strings at i
        else{
            hash[sortedStrs[i]].push(strs[i])
        }
        
    }
    return Object.values(hash)
}


// var groupAnagrams = function (strs) {
//     let sortedStrs = strs.map(word => word.split('').sort().join(''));

//     console.log(sortedStrs)
//     //do hash so we can store the words that are anagrams into their groups
//     hash = {}

//     //loop through the strings
//     for (let i = 0; i<strs.length; i++){
//         //if hash[sorted strs] is not true
//         //if it isnt an anagram
//         if(!hash[sortedStrs]){
//             hash[sortedStrs] = strs[i]
//         }
//         //if it is an anagram, then replace original strs array 
//         else{
//             hash[sortedStrs[i]].push(strs[i])
//         }
//     }
//     return Object.values(hash)

// }

 console.log(groupAnagrams(strs))