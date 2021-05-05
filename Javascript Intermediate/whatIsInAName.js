function whatIsInAName(collection, source) {
  let keys = Object.keys(source);
  return collection.filter(function(c) {
    for (let k  = 0; k < keys.length; k++){
      if (!c.hasOwnProperty(keys[k]) || c[keys[k]] != source[keys[k]]){
        return false;
      }
    }
    return true;
  });
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));