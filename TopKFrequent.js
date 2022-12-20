
nums = [1,1,1,2,2,3]
k = 2
//expected [1,2]
//how many times did an element occur? think of a hashmap
//bucket sort method

var topKFrequent = function(nums, k) {
    //creating a lookup map where {1:3, 2:2, 3:1}
    const seen = {};

    //loop through nums array 
    for (let num of nums){
        //if we havent seen this value, log it as 1
        if (seen[num] === undefined){
            seen[num] = 1
        //if we have seen it, incriment num by 1
        } else{
            seen[num]++
        }
        
    }
    //bucket method- the amount of numbers in the array dictate the amount of buckets
    //the amount of repeated nums dictates the bucket those nums go into
    //nums = [1,1,2,3,0,0]
    //bucket = [[],[2,3],[0,0,1,1],[],[],[],]

    const bucket = [];
    for(let i = 0; i <= nums.length; i++){
        //this creates bucket
        bucket.push([])
    }
    

    //populating bucket, 
    // key is our num
    for (let key in seen){
        let count = seen[key]
        bucket[count].push(key)
    }

    //iterate through the buckets from right end bc that one occurs the most
    let res = [];
    for (let i = bucket.length-1; i>= 0; i--){
        //if the buckets are empty continue
        if (bucket[i].length === 0){
            continue
        }
        else{
            //spread result into [1,2] instead of a nested list
            res = [...res, ...bucket[i]]
        }
    }
    //slice turns [1,2,3] into [1,2]
    return res.slice(0,k)
}

console.log(topKFrequent(nums,k))
