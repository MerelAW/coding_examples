function pairElement(str) {
  let bases = str.split("");

  let pairs = bases.map(function(b){
    switch(b){
      case "A":
        return ["A", "T"];
        break;
      case "T":
        return ["T", "A"];
        break;
      case "C":
        return ["C", "G"];
        break;
      default:
        return ["G", "C"];
        break;        
    }
  });

  return pairs;
}

console.log(pairElement("GCG"));
