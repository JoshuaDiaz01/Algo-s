var x = 5;
    
function setX(newValue) {
    x = newValue; 
}
    
console.log(x);
setX(15);
console.log(x);
//x=newvalue
//console:5,15

var x = 5;

    
function addToX(amount) {
    return x + amount;
    console.log("hello there");//after return, nothing will be console logged//
}

    
console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);
//x=5
//console: 5, -5, 5

function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);
