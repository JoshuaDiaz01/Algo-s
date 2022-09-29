//group anagrams in an array of strings

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
// var groupAnagrams = function (strs){
//     //sorting the strings
//     const sortedStrs = strs.map(word => word.split('').sort().join(''))
//     //initializing hash
//     const hash = {}

//     //looping through strs
//     for(let i=0; i<strs.length; i++){
//         //if it is not an anagram, leave it alone
//         if(!hash[sortedStrs[i]]){
//             hash[sortedStrs[i]] = [strs[i]];
//         }
//         //if it is an anagram we want to replace the strs at i with the sorted strings at i
//         else{
//             hash[sortedStrs[i]].push(strs[i])
//         }
        
//     }
//     return Object.values(hash)
// }

var groupAnagrams = function (strs) {
    //sort the strings 
    const sortedStrs = strs.map(word => word.split('').sort().join(''))
    // initialize the hash
    hash = {}

    //loop through hash
    for (let i = 0; i<strs.length; i++){
        //if there is no anagram, set the strings to i
        if(!hash[strs[i]]){
            hash[sortedStrs[i]] = [strs[i]]
        }
        //if it is anagram set strs at i to sorted strs i
        else{
            hash[sortedStrs[i]].push(strs[i])
        }
    }
    return Object.values(hash)
}

