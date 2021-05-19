var a1 = [2, 3, 4, 5];
//map
var temp = a1.map(function (v1, i) {
    return (v1 * v1);
});
console.log("Original Array " + a1);
console.log("Map operation Array.. " + temp);
