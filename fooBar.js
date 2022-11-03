//print nums 1-100
//print nums divisible by 15 and say foo
//print nums divisible by 25 and say bar

//create empty array
var oneToHundredArray = [];

function oneToHundred(oneToHundredArray){
    //push nums i into empty array
    for (let i = 1; i<=100; i++){
        oneToHundredArray.push(i)
        if (i===3) {
            console.log("reached 3")
        }
        else if(i % 5 == 0){
            console.log(i)
        }
    }
    
    return 
    
}

console.log(oneToHundred(oneToHundredArray))
