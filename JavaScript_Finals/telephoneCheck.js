function telephoneCheck(str) {
  let regex = /^(1?\s?)(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/;
  
  if(regex.test(str)){
      console.log("whoee");
      return true;
  }
  console.log("boee")
  return false;
}

/*
Below is a set of possible (in)correct phone numbers.
If a land code is present, it should be 1.
The first three digits can be surrounded by parentheses.
It should have 10 digits, or 11 if a landcode is present.
Between the sets of digits (3x-3x-4x) can be spaces or dashes, or nothing at all. 
*/
telephoneCheck("555-555-5555");
telephoneCheck("(555)555-5555");
telephoneCheck("(555) 555-5555");
telephoneCheck("555 555 5555");
telephoneCheck("5555555555");
telephoneCheck("1 555 555 5555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("1 555-555-5555");
telephoneCheck("1(555)555-5555");
telephoneCheck("1 456 789 4444");
telephoneCheck("55 55-55-555-5");
telephoneCheck("2(757)622-7382");
telephoneCheck("10 (757) 622-7382");
telephoneCheck("(6054756961)");
telephoneCheck("1 555)555-5555");
