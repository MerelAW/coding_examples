function uniteUnique(arr) {
  let arrays = [...arguments];
  console.log(arrays);
  let uniques = []
  for (let array = 0; array<arrays.length; array++){
    for (let a = 0; a<arrays[array].length; a++){
      if((arrays[array][a] in uniques) == false){
        uniques.push(arrays[array][a]);
      }
    }
  }
  return uniques;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


// different solution, with reduce and filter

function uniteUnique2(arr) {
    let arrays = [...arguments];
    
    let uniques = arrays.reduce(function(a,b){
        return a.concat(b.filter(function(i){
            return !(i in a);
        }));
    });

    return uniques;
}
  
console.log(uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1]));
