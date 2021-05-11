function dropElements(arr, func) {
  let newarr = [];
  let found = false;
  for (let a = 0; a<arr.length; a++){
    if (func(arr[a])){
      newarr = arr.slice(a,);
      found = true;
    } 
    if(found){
      break;
    }
  }
  return newarr;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3; });
