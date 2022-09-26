//group anagrams in an array of strings

//Input: strs = ["eat","tea","tan","ate","nat","bat"]
//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]


strs = ["eat","tea","tan","ate","nat","bat"];

var groupAnagrams = function (strs){
    //map and sort through our strings 
    const sortedStrs = strs.map(word => word.split('').sort().join(''))
    const hash = {}

    //loop through the array of strings
    for (let i=0; i <strs.length; i++){
        //if the hash doesnt contain anagram, just return strs[i]
        if(!hash[sortedStrs[i]]){
            hash[sortedStrs[i]] = [strs[i]]
        }
        //if it is an anagram, replace the strs[i] with sorted strs[i]
        else{
            hash[sortedStrs[i]].push(strs[i])
        }
    }
    return Object.values(hash)
}

console.log(groupAnagrams(strs))