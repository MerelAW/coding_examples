function fearNotLetter(str) {

  for(let p = 0; p < str.length; p++){
    let pcode = str.charCodeAt(p);
    if(pcode != str.charCodeAt(0) + p){
      return String.fromCharCode(str.charCodeAt(0) + p);
    }
  }
}

console.log(fearNotLetter("abce"));
