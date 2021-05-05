// Remove the value of all arguments from the array

function destroyer(arr, ...args) {
  let newArray = arr.filter(a => !args.includes(a));
  return newArray;
}
 
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
