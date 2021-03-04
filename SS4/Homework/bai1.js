var numArray1 = prompt("Enter array 1: ").split(",");
var numArray2 = prompt("Enter array 2: ").split(",");

var mergedArray = numArray1.concat(numArray2)

mergedArray.sort(function(a, b){
    return a - b;
});

console.log(mergedArray)