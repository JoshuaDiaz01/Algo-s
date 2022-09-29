// given an array of nums and a target nums
// return indexes of the array that add up to target

// const nums1 = [2,7,5,6,8]
// const target = 9

// var twoSum = function(nums, target) {
//     for (var i = 0; i< nums.length; i++){
//         //we want to compare indexes that are one apart to see if they sum, start j at i+1
//         for(var j = i + 1; j< nums.length; j++){
//             if (nums[i] + nums[j] === target){
//                 return [i,j];
//             }
//         }
//     }
// }; 

// console.log(twoSum(nums1, target))

// =============================================

const nums1 = [2,7,5,6,8]
const target = 9

// var twoSum = function (nums, target){
//     // we can iterate through array looking at i and j, if the target is equal to the sum of i and j, return [i,j]
//     for (var i = 0; i < nums.length; i++){
//         //let j = i+1 to be able to compare both indexes
//         for (var j = i + 1; j<nums.length; j++){
//             if (nums[i] + nums[j] === target){
//                 return [i,j];
//             }
//         }
//     }
// }

// console.log(twoSum(nums1, target))

var twoSum = function (nums, target){
    //itterate through nums array
    for (let i =0; i <nums.length; i++){
        //itterate through j array to compare the array
        for(let j = i+1; j<nums.length; j++){
            if (nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
}
