// return the difference between two lists

function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = newArr.concat(arr1.filter(a => arr2.includes(a) == false));
  newArr = newArr.concat(arr2.filter(a => arr1.includes(a) == false));
  return newArr;
}
 
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));