function translatePigLatin(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let pieces = str.split("");

  let cons = false;
  let loop = true;
  let consonants = [];
  while (loop){
    if (vowels.includes(pieces[0]) == false){
      consonants.push(pieces[0]);
      pieces.shift();
      cons = true;
    } else if (pieces.length == 0 || vowels.includes(pieces[0])){
      loop = false;
    }
  }
  let allPieces = pieces.concat(consonants);
  let newStr = allPieces.join("");
  if(cons){
    newStr = newStr.concat("ay");
  } else {
    newStr = newStr.concat("way");
  }
  console.log(newStr);
  return newStr;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("onsonant"));
console.log(translatePigLatin("nsonant"));
