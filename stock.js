//best time to buy and sell a stock

let prices = [7,1,5,3,6,4]

//output exoected: 5
//explanation: buy on day 2($1), sell on day 5($6)
//o(n^2) solution 

// function maxProfit(prices){
//     //initialize max profit
//     let mxProf = 0

//     //for loop through i and j and compare
//     for(let i = 0; i<prices.length; i++){
//         for(let j= i+1; j<prices.length; j++){
//             //we can get max profit by getting the difference of j-i, math.max looks at all the values
//             mxProf = Math.max(mxProf, prices[j] - prices[i])
//         }
//     }
//     return mxProf
// }
// console.log(maxProfit(prices))


//o(n) solution
//keep a running minimum and set it to the min price
// function maxProfit(prices){
//     let mxProf = 0
//     //infinity is the lowest min
//     let minVal = Infinity;
//     for(let i = 0; i<prices.length; i++){
//         //we find the min and update min val
//         minVal = Math.min(minVal,prices[i])
//         //we subtract prices[i]- minval bc 
//         mxProf = Math.max(mxProf, prices[i]-minVal)
//     }
//     return mxProf
// }
// console.log(maxProfit(prices))

// function maxProfit(prices){
//     let maxprof = 0
//     let minVal = Infinity
//     //loop through prices
//     for(let i=0; i<prices.length; i++){
//         //we want to set a running min until the mininum is found
//         minVal = Math.min(minVal,prices[i])
//         //need a max so we do same thing
//         maxprof = Math.max(maxprof, prices[i]-minVal)
//     }
//     return maxprof
// }
// console.log(maxProfit(prices))

// function maxProfit(prices){
//     let maxprof = 0
//     let minVal = Infinity
//     //loop through prices
//     for(let i=0; i<prices.length; i++){
//         //we want to set a running min until the mininum is found
//         minVal = Math.min(minVal,prices[i])
//         //need a max so we do same thing
//         maxprof = Math.max(maxprof, prices[i]-minVal)
//     }
//     return maxprof
// }
// console.log(maxProfit(prices))

function maxProfit(prices){
    let maxprof = 0
    let minVal = Infinity
    //loop through prices
    for(let i=0; i<prices.length; i++){
        //we want to set a running min until the mininum is found
        minVal = Math.min(minVal,prices[i])
        //need a max so we do same thing
        maxprof = Math.max(maxprof, prices[i]-minVal)
    }
    return maxprof
}
console.log(maxProfit(prices))

