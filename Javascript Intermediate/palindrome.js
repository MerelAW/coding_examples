function palindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "");
  str = str.replace(/\s+/g);
  str = str.toLowerCase();
  console.log(str);

  for (let i=0; i<str.length; i++){
    let a = str[str.length-i-1];
    let b = str[i];
    if(a != b){
      return false;
    }
  }
  return true;
}



console.log(palindrome("eye"));
console.log(palindrome("race Car"));
console.log(palindrome("not a palindrome"));
