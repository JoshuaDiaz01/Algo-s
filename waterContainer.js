//return the value with the largest area  in the container
let height = [1,8,6,2,5,4,8,3,7]

//return must be 7x8=49

// var maxArea = function(height){
//     //want to use the pointer method to compare the heights
//     let area = 0
//     let i = 0 //points to the left index
//     let j = height.length-1 //points at the right index

//     //have while loop until i<j
//     while(i<j){
//         //have temp varibale to see if the return is equal to the temp
//         //temp will return the temp area per iteration
//         const temp = (j-i)*Math.min(height[i],height[j])
//         //update area
//         area = Math.max(area,temp);
//         // console.log(temp)
//         // console.log(area)
//         //move the index for the smaller value because the value for the array is limited by the smaller value since we want max
//         if(height[i]>height[j]){
//             j--
//         } else {
//             i++
//         }
//     }
//     return area
// }

// console.log(maxArea(height))

var maxArea = function (height){
    //using pointer method need to define beginning and end
    let left = 0
    let right = height.length-1
    let area = 0

    //we are going to compare the pointers while i <j
    while (left<right){
        //need temp variable for area. j-i will get us the difference
        let temp = (j-i)*Math.min(height[i], height[j])
        //updat area 
        area = Math.max(area,temp)
        //if height i is greator this means we found one max area, now just find the other with the while loop
        if (height[i]>height[j]){
            j--
        }
        else{
            i++
        }
    }
    return area
}