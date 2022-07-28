const cents1 = 25;
const expected1 = { quarter: 1};

const cents2 = 50;
const expected2 = { quarter: 2};

const cents3 = 9;
const expected3 = {nickel:1, penny:4};

const cents4 = 99;
const expected4 = { quarter: 3, dime:2, penny:4};

function fewestCoinChange(cents){
    let outcome = {}
    if (Math.floor(cents/25) != 0){
    temp = Math.floor(cents/25)
    outcome['quarter'] = temp
    cents = cents - (25*temp)
    }
    if (Math.floor(cents/10) != 0){
    temp = Math.floor(cents/10)
    outcome['dime'] = temp
    cents = cents - (10*temp)
    }
    if (Math.floor(cents/5) != 0){
    temp = Math.floor(cents/5)
    outcome['nickel'] = temp
    cents = cents - (5*temp)
    }
    if (Math.floor(cents/1) != 0){
    temp = Math.floor(cents/1)
    outcome['penny'] = temp
    cents = cents - (1*temp)
    }
    return outcome

}
console.log(fewestCoinChange(cents3))