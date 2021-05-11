function truthCheck(collection, pre) {
  for (let c=0; c<collection.length; c++){
    if (!collection[c].hasOwnProperty(pre) || !!collection[c][pre] == false){
      console.log(collection[c]);
      return false;
    } 
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
