function convertToRoman(num) {
  let romans = {
    "1": "I",
    "4": "IV",
    "5": "V",
    "9": "IX",
    "10": "X",
    "40": "XL",
    "50": "L",
    "90": "XC",
    "100": "C",
    "400": "CD",
    "500": "D",
    "900": "CM",
    "1000": "M"
  };

  let str = "";
  for (let i = Object.entries(romans).length-1; i>=0; i--){
    while(num%parseInt(Object.entries(romans)[i]) < num){
      str += Object.values(romans)[i];
      num -= parseInt(Object.keys(romans)[i]);
    }
  }

  console.log(str);
  return str;
}

convertToRoman(3999);
