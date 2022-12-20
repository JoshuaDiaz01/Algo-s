//ex https://www.youtube.com/watch?v=XkKmR7RANLY
nums = [1,2,3,4]
//output : [24,12,8,6]
//the outcome should be the product of all other numbers nultiplied except its own index

function productExceptItself(nums) {
    //create a left array
    const left = new Array(nums.length).fill(0);
    //set left at 0 to 1
    left[0] = 1

    //create a right array
    const right = new Array(nums.length).fill(0);
    //right most value to be 1
    right[right.length-1] = 1


    //start at 1 because there is nothing at left side
    for (let i = 1; i< nums.length; i++){
        left[i] = nums[i-1]*left[i-1];
    }
    //the right.length-2 will position us one off the index
    for (let i =right.length -2; i >= 0; i--){
        right[i] = nums[i+1]*right[i+1]
    }

    //lastly have to combine
    for (let i = 0; i< nums.length; i++){
        nums[i] = left[i]*right[i];
    }

    return nums;
}

console.log(productExceptItself(nums))


nums = [1,2,3,4]
//output : [24,12,8,6]
//the outcome should be the product of all other numbers nultiplied except its own index

function productExceptItself(nums) {
    //create a left array
    const left = new Array(nums.length).fill(0);
    //set left at 0 to 1
    left[0] = 1

    //create a right array
    const right = new Array(nums.length).fill(0);
    //right most value to be 1
    right[right.length-1] = 1


    //start at 1 because there is nothing at left side
    for (let i = 1; i< nums.length; i++){
        left[i] = nums[i-1]*left[i-1];
    }
    //the right.length-2 will position us one off the index
    for (let i =right.length -2; i >= 0; i--){
        right[i] = nums[i+1]*right[i+1]
    }

    //lastly have to combine
    for (let i = 0; i< nums.length; i++){
        nums[i] = left[i]*right[i];
    }

    
    return nums;
}

console.log(productExceptItself(nums))