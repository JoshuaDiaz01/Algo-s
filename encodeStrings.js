//design algo to encode a list of strings to a string. 
//encoded string is then sent over the network and is decoded back to the og list of strings

//the output must be same as input
var strs = ["hello", "world"]
//encode a list of strings into a signle string
var encode = function (strs) {
    //if empty strings return null
    if (!strs.length) return null

    return strs.join(";");
    
}
console.log(strs);


//decode a single string to a list of strings
var decode = function (s) {
    //if the strs are empty 
    if (s === null) return [];
    //this will split the two strs between the -encode
    return s.split("-")
}

console.log(decode(encode(strs)))
// console.log(decode(s))