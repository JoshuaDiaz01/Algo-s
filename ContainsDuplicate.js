// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
//  const nums1 = [1,2,3,1]
//  const nums2 = [1,2,3,]

// var containsDuplicate = (nums) => {
//     for (let right = 0; right < nums.length; right ++){
//         for (let left = 0; left < right; left ++){
//             const isDuplicate = nums[left] === nums[right];
//             if(isDuplicate) return true;
//         }
//     }
//     return false
// }

// console.log(containsDuplicate(nums2))


//hash table allows us to store keys and values 
//hash tables can be good for not having two for loops
// let test1 = [1,2,3,4,2]
// let test2 = [1,2,3,4,5]

// var containsDuplicate = function (nums) {
//     //initialize hash table to store keys and values
//     let hTable = {}
//     for (let i = 0; i < nums.length; i++){
//         //have we seen this number at i before?
//         if(nums[i] in hTable){
//             return true
//         }
//         //if we havent seen the number it will get stored in hash table as 1:1
//         hTable[nums[i]] = 1;
//     }
//     return false
// }

// console.log(containsDuplicate(test1))
// console.log(containsDuplicate(test2))


let test1 = [1,2,3,4,2]
let test2 = [1,2,3,4,5]
var containsDuplicate = function (nums) {
    //intitialize hash map
    let hashMap = {}
    //iterate through array and see if the index at i is in the hashmap
    for (let i =0; i<nums.length; i++){
        if (nums[i] in hashMap){
            return true
        }
        hashMap[nums[i]] = nums[i]
    }
    return false
}
console.log(containsDuplicate(test1))
console.log(containsDuplicate(test2))