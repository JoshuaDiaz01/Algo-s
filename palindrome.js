let s = "A man, a plan, a canal: Panama"
//consider only alphanumeric characters only
//palindrome is defined as a string that reads the same way backwards

//create left index to keep track of left pointer
//create right index to keep track of right pointer
//create while loop until left and right are equal
// var isPalindrome = function(s){
//     //creating regex to replacing all special characters with a empty string ""
//     s = s.replace(/[^a-z0-9]/gi,"")

//     let leftIndex = 0
//     let rightIndex = s.length -1 ;
//     while (leftIndex < rightIndex){
//         //checking to see if theyre not equal then it is not a palindrome
//         if (s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase()){
//             return false
//         }
//         //continuing the while loop until condition not met 
//         leftIndex ++
//         rightIndex --
//     }
//     return true;
// };

// console.log(isPalindrome(s))



