function myReplace(str, before, after) {
  let pieces = str.split(" ");
  let newAfter = after;
  let newStr = pieces.map(function(p){
    if (p === before){
      if (before.substring(0,1) === before.substring(0,1).toUpperCase()){
        newAfter = after.substring(0,1).toUpperCase() + after.substring(1,);
      } else {
        newAfter = after.substring(0,1).toLowerCase() + after.substring(1,);
      }
      return newAfter;
    }
    return p;
  });
  return newStr.join(" ");
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"));
