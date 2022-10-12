// return all three numbers in array that sum up to 0

//outcome = [[-1,-1,2], [-1,0,1]]

//we need a triple for loop to compare all the three pairs and see if they equal to 0
//this is similar to the two sum solution but with a third for loop

let nums = [-1,0,1,2,-1,4]

//to not get duplicates, we need to sort the array and see if any nums are the same, skip that iteration 
// var threeSum = function (nums) {
//     nums.sort()
//     const results = []
//     for (let i = 0; i< nums.length; i++){
//         //do this to not get duplicates
//         if (i > 0 && nums[i] === nums[i-1]) continue;
//         for (let j = i+1; j<nums.length; j++){
//             if( j> i + 1 && nums[j] === nums[j-1]) continue;
//             for (let k = j+1; k<nums.length; k++){
//                 if( k> j + 1 && nums[k] === nums[k-1]) continue;
//                 //this is where we see if the triplet pairs add to zero
//                 if (nums[i] + nums[j] + nums[k] === 0){
//                     results.push([nums[i], nums[j], nums[k]])
//                 }
//             }
//         }
//     }
//     return results
// }

// console.log(threeSum(nums))

// let nums = [-1,0,1,2,-1,4]

// var threeSum = function (nums){
//     //sort the nums to not recreate duplicates
//     nums.sort();
//     const results = [];

//     for (let i =0; i< nums.length; i++){
//         //checking if the nums are duplicates
//         if(i> 0 && nums[i] === nums[i-1]) continue
//         for (let j= i+1; i< nums.length; j++){
//             if (j> i+1 && nums[j] === nums[j-1]) continue
//             for (let k = j+1; k<nums.length; k++){
//                 if(k> j+1 && nums[k] === nums[k-1]) continue
//                 //this where we say if sum of nums == 0 push nums 
//                 if (nums[i] + nums[j] + nums[k] === 0){
//                 results.push([nums[i], nums[j], nums[k]])
//             }
//         }
//         }
//     }
//     return results
// }

// console.log(threeSum(nums))


//refresher
// var threeSum = function (nums){
//     //first sort the nums to make sure we dont get duplicates
//     nums.sort();
//     //initiate the empty return array
//     const results = []

//     //must have three for loops to be able to compare
//     //in order to not get any duplicates we must have if condition 
//     for (let i = 0; i <nums.length; i++){
//         //this if condition will check if there are duplicates, since nums[i-1] will return the num before num[i]
//         if (i>0 && nums[i] === nums[i-1]) continue
//         for(let j= i+1; j<nums.length; j++){
//             if(j>i+1 && nums[j] === nums[j-1]) continue
//             for (let k = j+1; k<nums.length; k++){
//                 if(k>j+1 && nums[k] === nums[k-1])continue
//                 //can now see if the sum of the variables == 0
//                 if (nums[i]+ nums[j]+ nums[k] === 0){
//                     results.push([nums[i], nums[k], nums[j]])
//                 }
//             }
//         }
//     }
//     return results 
// }

// console.log(threeSum(nums))

function threeSum(nums) {
    //find combination of three nums without using duplicates

    //sort the numbers to use the if condition and continue
    nums.sort();

    const results = [];

    for(let i = 0; i<nums.length; i++){
        //this will check for duplicates and skip this iteration if it is a duplicate
        if(i>0 && nums[i] == nums[i-1]) continue
        for(let j = i+1; j<nums.length; j++){
            if(j>i+1 && nums[j] == nums[j-1])continue
            for(let k = j+1; k<nums.length; k++){
                if(k>j+1 && nums[k] == nums[k-1]) continue
                //final condition t chekc in nums at i,j,k ===0
                if(nums[i]+nums[k]+nums[j] === 0){
                    results.push([nums[i],nums[k], nums[j]])
                }
            }
        }
    }
    return results
}

 console.log(threeSum(nums))