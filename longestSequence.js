//return longest consecutive sequense given an unsorted array
nums = [100,4,200,1,3,2]
//return [1,2,3,4]

//is there a number that is below the current number? if so go to next num
//is there a num above the curent num? is so, add on to max seq, and go to next num
//is there a num greater than last by 1? if not end loop

// var longestConsecutive = function (nums) {
//     if (nums == null || nums.length === 0) return 0

//     //create set that records the occurences of nums in array
//     const set = new Set(nums);
//     //this will be return value
//     let max = 0;
//     //itterate through the set 
//     for (let num of set){
//         //this means if the number has a value one less, it is not the start of the sequence
//         if(set.has(num-1)){
//             continue
//         }
//         //this is now the beginnign of the sequence
//         let currNum = num;
//         let currMax = 1;
//         //is there a num greator than itself by one?
//         //this will add one to the currmax if there is one greator num in the set
//         while(set.has(currNum + 1)){
//             currMax++
//             currNum++
//         }
//         max = Math.max(max, currMax)
//     }
//     return max 
// }

// console.log(longestConsecutive(nums))


// var longestConsecutive = function (nums) {
//     if (nums === null || nums.length === 0) return 0

//     //create set to remember the numbers 

//     const set = new Set(nums);
//     //initiate a return value
//     let max = 0

//     //loop through set
//     for (let num of set){
//         //if nums in set has a value one less, not start
//         if (set.has(num - 1)){
//             continue
//         }
//         //these are now the start of a set
//         let currMax = 1
//         let currNum = num

//         //while curr num has a value greator than itself by one continue looping and adding one
//         while(set.has(currNum + 1)){
//             currMax++
//             currNum++
//         }
//         max = Math.max(max, currMax)
//     }
//     return max
// }
// console.log(longestConsecutive(nums))

// var longestConsecutive = function (nums){
//     if (nums === null || nums.length === 0) return null

//     //must create set to remember the nums 

//     const set = new Set(nums) 
//     // initiate max 
//     let max = 0

//     //have a for loop that goes through the set

//     for (let num of set){
//         //if set has num that is less than one, continue this is not the beginning
//         if(set.has(num-1)){
//             continue
//         }
//         //this is the beginning of the sequence
//         let currNum = num
//         let currMax = 1
//         //create while loop to say while set.has num+1 incriment currmax and currnum
//         while(set.has(num+1)){
//             currMax++
//             currNum++
//         }
//         max = Math.max(max, currMax)
//     }
//     return max
// }

// console.log(longestConsecutive(nums));

var longestConsecutive = function (nums) {
    //initiate set
    let set = new Set(nums)

    if(nums === null || nums.length=== 0){
        return null
    }

    let max = 0

    //loop through set and see if the set has any numbers thats smaller than it by one
    for(let num of set){
        if(set.has(num-1)){
            //continue through the function bc this isnt the beginning
            continue
        }
        //initiate currmax and curr num
        let currMax = 1
        let currNum = num
        // create while loop to say as long as set has num greater than itself by one, increase both currmax and curr num
        while(set.has(num+1)){
            currMax++
            currNum++
        }
        max = Math.max(max,currMax)
    }
    return max
}