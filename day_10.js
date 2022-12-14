/* 
Zip Arrays into Map


Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
Associative arrays are sometimes called maps because a key (string) maps to a value 
 */


// const expected1 = {
//     yo: true,   
//     abc: 42,
//     3: "wassup",
// };

// const keys1 = [];
// const vals1 = [];
// const expected2 = {};


const keys1 = ["abc", 3, "yo"];
// const vals1 = [42, "wassup", true];
const vals1 = [42, "wassup", true, "something"];

// const expected3 = False

const buildMap = (keys1, vals1)=>{
    const map = new Map();
    if(keys1.length < vals1.length){
        return false
    }
    else{
    for(let i = 0; i < keys1.length; i++){
        map.set(keys1[i], vals1[i]);
    };
    return map;
    }
};
console.log(buildMap(keys1, vals1));






const two_expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

// const two_obj2 = { name: "Zaphod", charm: "high", morals: "dicey", something:1 };
// const two_expected2 = { Zaphod: "name", high: "charm", dicey: "morals", 1:"something" };

// const two_obj3 = { name: "Zaphod", charm: "high", morals: "dicey", something:"dicey" };
// const two_expected3 = { Zaphod: "name", high: "charm", dicey: ["morals", "something"] };





