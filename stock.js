//best time to buy and sell a stock

let prices = [7,1,5,3,6,4]

//output exoected: 5
//explanation: buy on day 2($1), sell on day 5($6)

function maxProfit(prices){
    //initialize max profit
    let mxProf = 0

    //for loop through i and j and compare
    for(let i = 0; i<prices.length; i++){
        for(let j= i+1; j<prices.length; j++){
            //we can get max profit by getting the difference of j-i, math.max looks at all the values
            mxProf = Math.max(mxProf, prices[j] - prices[i])
        }
    }
    return mxProf

}

console.log(maxProfit(prices))

//o(n^2) solution 

