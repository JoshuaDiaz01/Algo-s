function ispresent2d(arr2d, value){
    for (let i=0; i<arr2d.length;i++)
        for(let j=0;j<arr2d[i].length; j++){
            if (arr2d[i][j]==value){
                // console.log(arr2d[i][j]);
            }
        }
}   

var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
ispresent2d (arr2d,"");
console.log(arr2d[0][2]);


// We can console.log the `8` in this array if we
// console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

// complete the following function


function flatten(arr2d) {
    var flat = [];
    for (let i=0; i<arr2d.length;i++){
        for(let j=0;j<arr2d[i].length; j++){
            flat.push(arr2d[i][j]);
        }
    }
    return flat;
}

var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

