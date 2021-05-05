//This function takes an array of two numbers
//Sums the two numbers and any number within their range

function sumAll(arr) {
  arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
 
  let numbers = [];
  for (let i = arr[0]; i <= arr[arr.length-1]; i++){
    numbers.push(i);
  }
 
  return numbers.reduce((sum, a) => sum + a, 0); 
 
}
 
console.log(sumAll([5, 3]));