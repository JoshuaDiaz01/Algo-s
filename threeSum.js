// return all three numbers in array that sum up to 0

nums = [-1,0,1,2,-1,4]

//outcome = [[-1,-1,2], [-1,0,1]]

//we need a triple for loop to compare all the three pairs and see if they equal to 0
//this is similar to the two sum solution but with a third for loop


//to not get duplicates, we need to sort the array and see if any nums are the same, skip that iteration 
var threeSum = function (nums) {
    nums.sort()
    const results = []
    for (let i = 0; i< nums.length; i++){
        //do this to not get duplicates
        if (i > 0 && nums[i] === nums[i-1]) continue;
        for (let j = i+1; j<nums.length; j++){
            if( j> i + 1 && nums[j] === nums[j-1]) continue;
            for (let k = j+1; k<nums.length; k++){
                if( k> j + 1 && nums[j] === nums[k-1]) continue;
                //this is where we see if the triplet pairs add to zero
                if (nums[i] + nums[j] + nums[k] === 0){
                    results.push([nums[i], nums[j], nums[k]])
                }
            }
        }
    }
    return results
}

console.log(threeSum(nums))
