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


// var isPalindrome = function (s){
//     //first create regex
//     s = s.replace(/[^a-z0-9]/gi,"")

//     //initiate left and right index
//     leftIndex = 0
//     rightindex = s.length-1

//     //while considtion for the structure of the rest of thhe algo
//     while (leftIndex < rightindex){
//         //first condition will check if it is not a palindrome 
//         if(s[leftIndex].toLowerCase() !== s[rightindex].toLowerCase()){
//             return "not a palindrome"
//         }
//         //will run these next two lines until left index is greator 
//         leftIndex ++
//         rightindex --
//     }
//     return "is palindrome"
// }

// console.log(isPalindrome(s));


// var isPalindrome = function (s) {
//     //must create regex to replace all special characters
//     s = s.replace(/[^a-z0-9]/gi,"");
//     console.log(s);
//     //must initiate left and right index pointers
//     let leftIndex = 0
//     let rightIndex = s.length-1

//     //create while loop that runs until left is smaller than right
//     while(leftIndex < rightIndex ){
//         //if not a palindrome
//         if (s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase()){
//             return "is not a palindrome"
//         }

//         //will incriment left and decrement right
//         leftIndex ++
//         rightIndex --
//     }
//     return "is a palindrome"
// }

// console.log(isPalindrome(s));

// 
// function palindrome(s){
//     //non alphanumerical inputs
//     //use regex
//     s = s.replace(/[^a-z0-9]/gi,"")
//     //initiate our pointers
//     let leftIndex = 0 
//     let rightIndex = s.length-1

//     //while loop for crossing of right index
//     while(leftIndex<rightIndex){
//         if(s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase()){
//             return "is not a palindrome"
//         }
//         leftIndex++
//         rightIndex--
//     }
//     return "is a palindrome"
// }


// console.log(palindrome(s))

// function palindrome(s){
//     //non alphanumerical inputs
//     //use regex
//     s = s.replace(/[^a-z0-9]/gi,"")
//     //initiate our pointers
//     let leftIndex = 0 
//     let rightIndex = s.length-1

//     //while loop for crossing of right index
//     while(leftIndex<rightIndex){
//         if(s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase()){
//             return "is not a palindrome"
//         }
//         leftIndex++
//         rightIndex--
//     }
//         return "is a palindrome"
// }


// console.log(palindrome(s))

function palindrome(s){
    //non alphanumerical inputs
    //use regex
    s = s.replace(/[^a-z0-9]/gi,"")
    //initiate our pointers
    let leftIndex = 0 
    let rightIndex = s.length-1

    //while loop for crossing of right index
    while(leftIndex<rightIndex){
        if(s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase()){
            return "is not a palindrome"
        }
        leftIndex++
        rightIndex--
    }
        return "is a palindrome"
}



console.log(palindrome(s))