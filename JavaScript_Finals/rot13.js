function rot13(str) {
  str = str.split("");
  let regex = /[A-Z]/;
  let newstr = str.map(function(s){
    if (regex.test(s)){
      let code = s.charCodeAt(0);
      let newcode = code<=77? code+13 : code-13;
      return String.fromCharCode(newcode);
    }
    return s;
  });
  console.log(newstr.join(""));
  return newstr.join("");
}

rot13("SERR PBQR PNZC");
