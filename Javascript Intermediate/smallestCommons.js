function smallestCommons(arr) {
  let high = Math.max(...arr);
  let low = Math.min(...arr);
  let current = Math.max(...arr);
  let found = false;

  while(!found){
    let bad = false;
    for (let i = low; i<=high; i++){
      if(current%i != 0){
        bad = true;
        break;
      }
    }
    if(!bad){
      found = true; 
    } else {
      current += high;
    }
  }
  console.log(current);
  return current;
}


smallestCommons([1,5]);
smallestCommons([23,18]);
