/**
 * @param {number[]} nums
 * @return {boolean}
 */
 const nums1 = [1,2,3,1]
 const nums2 = [1,2,3,]

var containsDuplicate = (nums) => {
    for (let right = 0; right < nums.length; right ++){
        for (let left = 0; left < right; left ++){
            const isDuplicate = nums[left] === nums[right];
            if(isDuplicate) return true;
        }
    }
    return false
}

console.log(containsDuplicate(nums2))