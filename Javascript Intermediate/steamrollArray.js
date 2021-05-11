function steamrollArray(arr) {
  if(arr.length == 0){
    return [];
  } else if (!Array.isArray(arr)) {
    return arr;
  } else if (arr.length == 1){
    return arr[0];
  } else {
    let newarr = [];
    for (let a = 0; a<arr.length; a++){
      if(!Array.isArray(arr)){
        newarr = newarr.concat(arr[a]);
      } else {
        newarr = newarr.concat(steamrollArray(arr[a]));
      }
    }
    return newarr;
  }
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
